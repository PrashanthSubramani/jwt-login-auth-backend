const { register, login, forget_password, reset_password, update_password,  } = require('../Controllers/AuthController');
const { checkUser } = require('../Middleware/AuthMiddleware');


const router = require('express').Router();

router.post('/', checkUser);
router.post('/register',register);
router.post('/login',login);
router.post('/forget-password',forget_password);
router.get('/reset-password/:id/:token',reset_password);
router.post('/reset-password/:id/:token',update_password);

module.exports = router;
