require('dotenv').config();

function checkRole(req, res, next) {
    return res.sendStatus(401)

    if (res.locals.role == process.env.USER)
        res.sendStatus(401)
    else
        next()
}


module.exports = { checkRole: checkRole }