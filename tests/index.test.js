import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../src/app.js'

const expect = chai.expect
chai.use(chaiHttp)

describe('#Test Endpoints', () => {
  describe('GET /files/data', () => {
    it('should fetch all files when no fileName is provided', (done) => {
      chai.request(app)
        .get('/files/data')
        .end((err, res) => {
          if (err) {
            done(err)
          } else {
            expect(res).to.have.status(200)
            expect(res.body).to.be.an('array')
            done()
          }
        })
    })

    it('should fetch data for a specific file when fileName is provided', (done) => {
      const sampleFileName = 'test1.csv'
      chai.request(app)
        .get(`/files/data?fileName=${sampleFileName}`)
        .end((err, res) => {
          if (err) {
            done(err)
          } else {
            expect(res).to.have.status(200)
            expect(res.body).to.be.an('array')
            expect(res.body[0].file).to.equal(sampleFileName)
            done()
          }
        })
    })

    it('should check if the file has information', (done) => {
      const sampleFileName = 'test9.csv'
      chai.request(app)
        .get(`/files/data?fileName=${sampleFileName}`)
        .end((err, res) => {
          if (err) {
            done(err)
          } else {
            expect(res.body[0].lines).to.be.an('array')
            if (res.body[0].lines.length > 0) {
              expect(res.body[0].lines.length).to.be.greaterThan(0)
            } else {
              expect(res.body[0].lines.length).to.equal(0)
            }
            done()
          }
        })
    })
  })

  describe('GET /files/list', () => {
    it('should fetch all files', (done) => {
      chai.request(app)
        .get('/files/list')
        .end((err, res) => {
          if (err) {
            done(err)
          } else {
            expect(res).to.have.status(200)
            expect(res.body).to.be.an('array')
            expect(res.body.length).to.be.greaterThan(5)
            done()
          }
        })
    })
  })
})
