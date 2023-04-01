import supertest from "supertest";
import { describe } from "mocha";
import app from '../../src/app.js'
import { expect } from "chai";

const server = supertest(app)

export default () => describe('#ROUTER V1', () => {
    describe('/v1/api', () => {
        describe('GET /billy-herrington', () => {
            it('GET /billy-herrington?raw=true', (done) => {
                server
                    .get('/v1/api/billy-herrington')
                    .query({raw: true})
                    .expect(200)
                    .end((err, res) => {
                        if (err) done(err)

                        expect(res.body).to.haveOwnProperty('result')
                        expect(res.body.result).to.be.an('array')
                        expect(res.body.result).to.have.lengthOf(1)

                        done()
                    }) 
            })

            it('GET /billy-herrington?raw=false', (done) => {
                server
                    .get('/v1/api/billy-herrington')
                    .query({raw: false})
                    .expect(200)
                    .end((err, res) => {
                        if (err) done(err)

                        expect(res.body).to.haveOwnProperty('result')
                        expect(res.body.result).to.be.an('array')
                        expect(res.body.result).to.have.lengthOf(21)

                        done()
                    }) 
            })

            it('GET /billy-herrington', (done) => {
                server
                    .get('/v1/api/billy-herrington')
                    .expect(200)
                    .end((err, res) => {
                        if (err) done(err)

                        expect(res.body).to.haveOwnProperty('result')
                        expect(res.body.result).to.be.an('array')
                        expect(res.body.result).to.have.lengthOf(21)

                        done()
                    }) 
            })
        })

        describe('GET /shrek', () => {
            it('GET /shrek?raw=true', (done) => {
                server
                    .get('/v1/api/shrek')
                    .query({raw: true})
                    .expect(200)
                    .end((err, res) => {
                        if (err) done(err)

                        expect(res.body).to.haveOwnProperty('result')
                        expect(res.body.result).to.be.an('array')
                        expect(res.body.result).to.have.lengthOf(1)

                        done()
                    })
            })

            it('GET /shrek?raw=false', (done) => {
                server
                    .get('/v1/api/shrek')
                    .query({raw: false})
                    .expect(200)
                    .end((err, res) => {
                        if (err) done(err)

                        expect(res.body).to.haveOwnProperty('result')
                        expect(res.body.result).to.be.an('array')
                        expect(res.body.result).to.have.lengthOf(15)

                        done()
                    }) 
            })

            it('GET /shrek', (done) => {
                server
                    .get('/v1/api/shrek')
                    .expect(200)
                    .end((err, res) => {
                        if (err) done(err)

                        expect(res.body).to.haveOwnProperty('result')
                        expect(res.body.result).to.be.an('array')
                        expect(res.body.result).to.have.lengthOf(15)

                        done()
                    }) 
            })
        })

        describe('GET /random', () => {
            it('GET /random?raw=true', (done) => {
                server
                    .get('/v1/api/random')
                    .query({raw: true})
                    .expect(200)
                    .end((err, res) => {
                        if (err) done(err)

                        expect(res.body).to.haveOwnProperty('result')
                        expect(res.body.result).to.be.an('array')
                        expect(res.body.result).to.have.lengthOf(1)

                        done()
                    }) 
            })

            it('GET /random?raw=false', (done) => {
                server
                    .get('/v1/api/random')
                    .query({raw: false})
                    .expect(200)
                    .end((err, res) => {
                        if (err) done(err)

                        expect(res.body).to.haveOwnProperty('result')
                        expect(res.body.result).to.be.an('array')

                        done()
                    }) 
            })

            it('GET /random', (done) => {
                server
                    .get('/v1/api/random')
                    .query({raw: false})
                    .expect(200)
                    .end((err, res) => {
                        if (err) done(err)

                        expect(res.body).to.haveOwnProperty('result')
                        expect(res.body.result).to.be.an('array')

                        done()
                    }) 
            })
        })
    })   
})