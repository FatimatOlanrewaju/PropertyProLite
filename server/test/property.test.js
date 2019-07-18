import chai from 'chai';
import 'chai/register-should';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);

const { should, expect } = chai;
should();

describe('Test for Post Property Route', () => {
  it('should post new property advert', (done) => {
    chai.request(app)
      .post('/api/v1/property')
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body.message).to.equal('Property Posted Successfully');
        expect(res.body).to.be.an('object');
        done();
      });
  });
});

describe('Test for Update Property Route', () => {
  it('should update property data', (done) => {
    const id = 1;
    chai.request(app)
      .post('/api/v1/auth/signin')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('Property updated successfully');
        expect(res.body).to.be.an('object');
        done();
      });
  });
});