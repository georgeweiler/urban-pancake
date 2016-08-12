import React, {Component} from 'react';
import Tweet from './Tweet.jsx'
export default class TwitterBox extends Component {
  render() {
    return (
      <div className = "twitter-box well">
        <blockquote className="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Super excited about our new truck location at the Bon Air Center. Looking forward to new friends in the Marin area! <a href="https://t.co/OXDI1u99Bk">pic.twitter.com/OXDI1u99Bk</a></p>&mdash; Curry Up Now (@CurryUpNow) <a href="https://twitter.com/CurryUpNow/status/763449828395323393">August 10, 2016</a></blockquote>
        <script async src="//platform.twitter.com/widgets.js" charSet="utf-8"></script>
        
        <blockquote className="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Perfect way to spend your Tuesday = at one of our trucks. We&#39;ll be at 225 Bush (FiDi) and Brisbane! <a href="https://twitter.com/hashtag/curryupnow?src=hash">#curryupnow</a></p>&mdash; Curry Up Now (@CurryUpNow) <a href="https://twitter.com/CurryUpNow/status/763062540494602241">August 9, 2016</a></blockquote>
        <script async src="//platform.twitter.com/widgets.js" charSet="utf-8"></script>
        
        <blockquote className="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Step out of the office and enjoy this sunny weather. Trucks at 225 Bush St until 2pm &amp; <a href="https://twitter.com/SPARKsocialSF">@SPARKsocialSF</a> (Mission Bay) until 3pm.</p>&mdash; Curry Up Now (@CurryUpNow) <a href="https://twitter.com/CurryUpNow/status/762728265937133568">August 8, 2016</a></blockquote>
        <script async src="//platform.twitter.com/widgets.js" charSet="utf-8"></script>
      </div>
    )
  }
}