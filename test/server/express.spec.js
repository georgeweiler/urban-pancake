const chai = require('chai');
const request = require('supertest');
const app = require('../../server/server');

const should = chai.should();

describe('Server requests', () => {
  it('should send 200 for a successful request', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  });
  it('should throw an error when a requested URL does not exist', (done) => {
    request(app)
      .get('/foo/bar')
      .expect(404, done);
  });
});


xdescribe('Retrieving a Truck from DB', () => {
  const url = '/API/fetch';
  const params = {
    params: {
      handle: '@curryupnow',
    },
  };
    it('should respond with 200 if given a truck handle', (done) => {
      request(app)
        .get(url)
        .send(params)
        .expect(200, done);
    });

    it('should have a name', (done) => {
      request(app)
        .get(url)
        .send(params)
        .expect((res) => {
          const name = JSON.parse(res.text).name;
          should.exist(name);
        })
        .expect(200, done);
    });

    it('Should have the correct handle', (done) => {
      request(app)
        .get(url)
        .send(params)
        .expect((res) => {
          const handle = JSON.parse(res.text).handle;
          handle.should.equal(params.params.handle);
        })
        .expect(200, done);
    });

    it('should have a message', (done) => {
      request(app)
        .get(url)
        .send(params)
        .expect((res) => {
          const message = JSON.parse(res.text).message;
          const messageType = typeof message;
          should.exist(message);
          messageType.should.equal('string');
        })
        .expect(200, done);
    });

    it('should have a timestamp', (done) => {
      request(app)
        .get(url)
        .send(params)
        .expect((res) => {
          const timestamp = JSON.parse(res.text).timestamp;
          should.exist(timestamp);
        })
        .expect(200, done);
    });

    it('should have an image', (done) => {
      request(app)
        .get(url)
        .send(params)
        .expect((res) => {
          const imageUrl = JSON.parse(res.text).imageUrl;
          should.exist(imageUrl);
        })
        .expect(200, done);
    });
});

describe('Retrieving all trucks from DB', () => {
  it('should send back 200 when requesting all trucks', (done) => {
    request(app)
    .get('/API/fetchAll')
    .expect(200, done);
  });
  it('should send back an array', (done) => {
    request(app)
    .get('/API/fetchAll')
    .expect((res) => {
      res.body.should.be.a('array');
    })
    .expect(200, done);
  });
});
