import { describe } from "mocha"
import routerV1Test from "./routes/routerV1.test.js"
import imagesV1Test from "./resources/imagesV1.test.js"
import utilTest from "./util/util.test.js"

describe('#TESTS', () => {
    imagesV1Test()

    utilTest()

    routerV1Test()
})