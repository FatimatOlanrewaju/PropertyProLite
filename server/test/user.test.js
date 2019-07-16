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

describe('Test for SignIn Route', () => {
  it('check if user data exists', (done) => {
    const existingUser = {
      email: 'adebayo@gmail.com',
      password: 'texascity',
    };
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(existingUser)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('You have signed in successfully');
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('check for wrong details', (done) => {
    const unexistingUser = {
      email: 'lb@gmail.com',
      password: 'infant',
    };
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(unexistingUser)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(401);
        expect(res.body).to.be.an('object');
        expect(res.body.message).to.equal('Wrong email or password');
        done();
      });
  });
});
