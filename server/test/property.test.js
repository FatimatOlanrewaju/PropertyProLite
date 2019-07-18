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
      .patch(`/api/v1/property/${id}`)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('Property updated successfully');
        expect(res.body).to.be.an('object');
        done();
      });
  });
});

describe('Test for Mark Posted Advert Route', () => {
  it('should mark posted advert as sold', (done) => {
    const id = 1;
    chai.request(app)
      .patch(`/api/v1/property/${id}/sold`)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('Property marked as sold successfully');
        expect(res.body).to.be.an('object');
        done();
      });
  });
});

describe('Test for Delete Posted Advert Route', () => {
 it('should delete posted advert by id', (done) => {
    const id = 1;
    chai.request(app)
      .delete(`/api/v1/property/${id}`)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('Property advert deleted successfully');
        expect(res.body).to.be.an('object');
        done();
      });
  });
});

describe('Get all properties Route', () => {
    it('should get all property adverts', (done) => {
       const id = 1;
       chai.request(app)
         .get('/api/v1/property')
         .end((err, res) => {
           expect(res.status).to.equal(200);
           expect(res.body.message).to.equal('All property adverts gotten successfully');
           expect(res.body).to.be.an('object');
           done();
         });
     });
   });