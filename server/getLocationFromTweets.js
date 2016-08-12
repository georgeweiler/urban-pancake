// let removePunctuation = (strTweet) => {
//   // Removes the punctuation from the current tweet so that it's easier to parse
//   let removePunc = currentTweet.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
//   let noPuncTweet = removePunc.replace(/\s{2,}/g," ");
//   return noPuncTweet;
// }

// list of street types according to https://data.sfgov.org/Geographic-Locations-and-Boundaries/Street-Names/6d9h-4u5v/data#column-menu

const streetTypes = ['aly', 'ave', 'blvd', 'blvd north', 'blvd south', 'cir',
  'ct', 'dr', 'expy', 'hl', 'hwy', 'ln', 'loop', 'park', 'path', 'pl', 'plz', 'ramp',
 'rd', 'row', 'st', 'stps', 'stwy', 'ter', 'tunl', 'walk', 'way'];


// sample output: "1st st and Howard st"
const atFromSubroutine = (strTweet) => {
  const arrTweet = strTweet.split(' ');
  const at = arrTweet.indexOf('at');
  const frm = arrTweet.indexOf('from');
  if ((at === -1) || (frm === -1)) {
    return 'notFound';
  }
  const location = arrTweet.slice((at + 1), frm).join(' ');
  return location;
};

const intersection = (strTweet) => {
  const words = strTweet.split(' and ');
  if (words[0] === strTweet) {
    return 'notFound';
  }
  const beforeStr = words[0].trim().split(' ');
  const afterStr = words[1].trim().split(' ');
  let firstStreet = beforeStr[beforeStr.length - 1];
  let secondStreet = afterStr[0];
  for (let i = 0; i < streetTypes.length; i++) {
    if (streetTypes[i] === firstStreet) {
      firstStreet = `${beforeStr[beforeStr.length - 2]} ${beforeStr[beforeStr.length - 1]}`;
      break;
    }
  }
  for (let i = 0; i < streetTypes.length; i++) {
    if (streetTypes[i] === secondStreet) {
      secondStreet = `${afterStr[0]} ${afterStr[1]}`;
      break;
    }
  }
  return firstStreet && secondStreet ? (`${firstStreet} and ${secondStreet}`) : 'notFound';
};

// this function looks for an exact address. input: "Our trucks will be at 225 Bush" output: "225 Bush"
const exactAddress = (strTweet) => {
  let street;
  let num;
  const words = strTweet.split(' ');
  for (let i = 0; i < words.length; i++) {
    // if we find a word that can be converted into a number
    if (Number(words[i]) > 0) {
      num = words[i];
      // grab the word after the found number
      street = words[i + 1];
      break;
    }
  }
  const location = `${num} ${street}`;
  return num && street ? location : 'notFound';
};

module.exports.getLocation = (newTruckObj) => {
  const allTweets = newTruckObj.allTweetMessages;
  return new Promise((resolve, reject) => {
    let location;
    let currentTweet;

    for (let i = 0; i < allTweets.length; i++) {
      currentTweet = (allTweets[i]);
      while (location === undefined) {
        // location = intersection(currentTweet);
        location = atFromSubroutine(currentTweet);
      }
      if (location === 'notFound') {
        location = exactAddress(currentTweet);
      }
      if (location === 'notFound') {
        location = intersection(currentTweet);
      }
      // if location is notFound and we've gone through the entire array, reject the promise
      if (location === 'notFound' && i === allTweets.length - 1) {
        reject(newTruckObj);
      }
      // if location is notFound but there are still tweets left in the array, reassign location to undefined then continue on to the next iteration
      if (location === 'notFound') {
        location = undefined;
        continue;
      }
      // if location is found, save the chosenIndex and location in the newTruckObj and then resolve the promise
      if (location !== 'notFound') {
        newTruckObj.chosenIndex = i;
        newTruckObj.getLocationResults.address = `${location}, San Francisco, CA`;
        resolve(newTruckObj);
        break;
      }
    }
  });
};
