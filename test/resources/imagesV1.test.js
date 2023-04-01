import { describe } from "mocha";
import {getImage, getRandomImage} from '../../src/resources/imagesV1.js'
import { expect } from "chai";


export default () => describe('#IMAGES V1', () => {
    describe('#GET IMAGE', () => {
        it('get shrek', () => {
            const img = getImage('shrek')

            expect(img).to.have.lengthOf(466)
        })

        it('get billy-herrington', () => {
            const img = getImage('billy-herrington')

            expect(img).to.have.lengthOf(497)

        })

        it('get random', () => {
            expect(() => getImage('random')).to.throw('Requested key does not exist')
        })

        it('get hungary', () => {
            expect(() => getImage('hungary')).to.throw('Requested key does not exist')
        })
    })

    describe('#GET RANDOM IMAGE', () => {
        it('get random image', () => {
            const img = getRandomImage()

            expect(img).to.not.be.null
            expect(img).to.be.a('string')
        })
    })
})