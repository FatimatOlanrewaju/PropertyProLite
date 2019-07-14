import chai from 'chai';
import 'chai/register-should';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);

const { should, expect } = chai;
should();

describe('Test for SignUp Route', () => {
  it('should post new user data to database', (done) => {
    const userSample = {
      firstName: 'Adesewa',
      lastName: 'Olanrewaju',
      email: 'adesewao@yahoo.com',
      phoneNo: '07014516424',
      password: 'ade123',
    };
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(userSample)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body.message).to.equal('Account Created Successfully');
        expect(res.body).to.be.an('object');
        done();
      });
  });
});
