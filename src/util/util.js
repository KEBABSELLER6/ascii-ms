import {getImage, getRandomImage} from '../resources/imagesV1.js'

const parseImage = (imageStr) => {
    return imageStr.split("\n")
}

export const getImageRes = (raw, image) => {
    if(raw === null || raw === undefined || image === undefined)
        throw new Error('Bad function call')

    if(image === null){
        const random = getRandomImage()
        if(raw === true){
            return [random]
        } else {
            return parseImage(random) 
        }
    } else {
        const img = getImage(image)
        if(raw === true){
            return [img]
        } else {
            return parseImage(img) 
        }
    }
}