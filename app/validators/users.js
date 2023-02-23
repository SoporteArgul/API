const { body,check } = require('express-validator') //TODO <---
const { validateResult } = require('../helpers/validateHelper')

const validateCreate = [ //TODO:name, age, email
    // check('name')
    //     .exists()
    //     .isLength({ min: 5 })
    //     .isEmpty(),
    
    check('email')
        .exists()
        .isEmail()
        .withMessage('Invalid e-mail.'),

    body('password').custom(value => {
            const uppercase = /[A-Z]+/;
            const lowercase = /[a-z]+/;
            const digit = /[0-9]+/;
            const special = /[\W]+/;

            if(!uppercase.test(value) && !lowercase.test(value) && !digit.test(value) && !special.test(value) && value.length < 8) {
                throw new Error('The password must be at least 8 characters long and contain uppercase and lowercase letters, digits and special characters.');
            }

            return true;
    }),
    async (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreate }