import rateLimit from 'express-rate-limit'

export const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
	max: 10, 
	standardHeaders: true,
    message: (req, res) => {
		return {error: "Don't spam the service"}
	},
	legacyHeaders: false,
})