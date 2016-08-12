const mongoose = require('mongoose');
const chai = require('chai');

const expect = chai.expect;
const TestSchema = new mongoose.Schema({
  name: String,
  handle: String,
  description: String,
});
const TestCollection = mongoose.model('Test Collection', TestSchema);


describe('Database', () => {
  it('a new truck can be saved without error', (done) => {
    new TestCollection({ name: 'test1', description: 'First test' }).save();
    done();
  });
  it('the collection can be queried', (done) => {
    new TestCollection({ name: 'test1', number: 1 }).save(() => {
      TestCollection.findOne({ name: 'test1' }, (err, doc) => {
        expect(doc.name).to.not.equal(null);
        expect(doc.name).to.equal('test1');
        done();
      });
    });
  });
  it('should be able to store multiple trucks', (done) => {
    new TestCollection({
      name: 'tester2',
      handle: '@tester2',
      description: 'Second test',
    }).save(() => {
      new TestCollection({
        name: 'tester3',
        handle: '@tester3',
        description: 'Third test',
      }).save(() => {
        TestCollection.find({}, (err, truckDocs) => {
          expect(truckDocs.length).to.be.above(1);
          done();
        });
      });
    });
  });
  it('trucks can be deleted without error', (done) => {
    TestCollection.remove({}, () => {});
    TestCollection.findOne({ name: 'tester2' }, (err, truckDocs) => {
      expect(truckDocs).to.equal(null);
    });
    done();
  });
});
