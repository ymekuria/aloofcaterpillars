var routes = require('../server/sever-config');
var expect = require('../node_modules/chai/chai').expect;
var stubs = require('./stubs');
//require backend models and controllers



// Will wait for test to be truthy before executing callback
function waitForThen(test, cb) {
  setTimeout(function() {
    test() ? cb.apply(this) : waitForThen(test, cb);
  }, 5);
}

describe('Node Server Request Listener Function', function() {
  it('Should answer GET requests for /api/browse with a 200 status code', function() {
    // This is a fake server request. Normally, the server would provide this,
    // but we want to test our function's behavior totally independent of the server code
    var req = new stubs.request('/api/browse', 'GET');
    var res = new stubs.response();

    // routes.requestHandler(req, res);

    expect(res._responseCode).to.equal(200);
    expect(res._ended).to.equal(true);
  });

  it('Should send back parsable stringified JSON', function() {
    var req = new stubs.request('/classes/room1', 'GET');
    var res = new stubs.response();

    // handler.requestHandler(req, res);

    expect(JSON.parse.bind(this, res._data)).to.not.throw();
    expect(res._ended).to.equal(true);
  });

  it('Should post a new meal at endpoint api/create', function() {
    var stubMsg = {
      username: 'Jono',
      message: 'Do my bidding!'
    };
    var req = new stubs.request('/api/create', 'POST', stubMsg);
    var res = new stubs.response();

    // handler.requestHandler(req, res);

    expect(res._responseCode).to.equal(201);


  

});