import chai from 'chai';
import 'chai/register-should';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);



const { should, expect } = chai;
should();

describe('Test for home page', () => {
  it('should welcome user to propertypro-lite', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.equal('Welcome to PropertyProLite Endpoint page');
        done();
      });
  });
});
