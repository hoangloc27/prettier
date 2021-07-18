const app = require('express');
const { signUp, login } = require('../controllers/auth');
const { verifyToken } = require('../middlewares/authentication');
const router = app.Router();

router.post('/sign-up', signUp);
router.post('/login', login);

module.exports = router;
