import { describe } from "mocha";
import { getImageRes } from "../../src/util/util.js";
import { expect } from "chai";

export default () => describe('#UTIL', () => {
    describe('#GET IMAGE RESULT', () => {
        it("get 'shrek' 'true'", () => {
            const res = getImageRes(true, 'shrek')

            expect(res).to.be.an('array')
            expect(res).to.have.lengthOf(1)
        })

        it("get 'shrek' 'false'", () => {
            const res = getImageRes(false, 'shrek')

            expect(res).to.be.an('array')
            expect(res).to.have.lengthOf(15)
        })

        it("get 'shrek' 'undefined'", () => {
            expect(() => getImageRes(undefined, 'shrek')).to.throw('Bad function call')
        })

        it("get 'shrek' 'null'", () => {
            expect(() => getImageRes(null, 'shrek')).to.throw('Bad function call')
        })

        it("get 'billy-herrington' 'true'", () => {
            const res = getImageRes(true, 'billy-herrington')
        
            expect(res).to.be.an('array')
            expect(res).to.have.lengthOf(1)
        })
        
        it("get 'billy-herrington' 'false'", () => {
            const res = getImageRes(false, 'billy-herrington')
        
            expect(res).to.be.an('array')
            expect(res).to.have.lengthOf(21)
        })
        
        it("get 'billy-herrington' 'undefined'", () => {
            expect(() => getImageRes(undefined, 'billy-herrington')).to.throw('Bad function call')
        })
        
        it("get 'billy-herrington' 'null'", () => {
            expect(() => getImageRes(null, 'billy-herrington')).to.throw('Bad function call')
        })

        it("get 'undefined' 'false'", () => {
            expect(() => getImageRes(false, undefined)).to.throw('Bad function call')
        })

        it("get 'undefined' 'true'", () => {
            expect(() => getImageRes(true, undefined)).to.throw('Bad function call')
        })

        it("get 'null' 'false'", () => {
            const res = getImageRes(false, null)

            expect(res).to.be.an('array')
        })

        it("get 'null' 'true'", () => {
            const res = getImageRes(true, null)

            expect(res).to.be.an('array')
            expect(res).to.have.lengthOf(1) 
        })

        it("get 'null' 'null'", () => {
            expect(() => getImageRes(null, null)).to.throw('Bad function call')
        })

        it("get 'undefined' 'undefined'", () => {
            expect(() => getImageRes(undefined, undefined)).to.throw('Bad function call')
        })
    })
})