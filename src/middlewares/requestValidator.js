import Ajv from 'ajv'

const ajv = new Ajv()

const schema = {
    type: "object",
    properties: {
        //Would have love this to be boolean
        raw: {
            type: "string",
            enum: ['false', 'true']
        }
    },
    required: [],
    additionalProperties: false
}

const validate = ajv.compile(schema)

export default (req, res, next) => {
    if(validate(req.query)){
        if(!req.query.raw){
            req.query.raw = false
        } else if(req.query.raw === 'true'){
            req.query.raw = true
        } else req.query.raw = false

        return next()
    } else {
        validate.errors.forEach(err => {
            let error = new Error()
            error.status = 401    
            switch (err.keyword) {
                case 'required':
                    error,message = err.message
                    throw error
                case 'type':
                    error.message = err.instancePath.split('/')[1] + " " + err.message
                    throw error
                case 'additionalProperties':
                    error.message = err.message
                    throw error
                default:
                    throw error
            }
        })
    }
}