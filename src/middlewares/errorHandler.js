export const handleErrors = (err, req, res, next) => {
    err.status = err.status || 404
    err.message = err.message || 'Something went wrong'

    return res.status(err.status).json({error: err.message})
}