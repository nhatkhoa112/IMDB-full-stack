const express = require('express');
const router = express.Router();
const { loginRequired } = require('../middlewares/loginRequired');
const userController = require('../controllers/users.controller');

router.get('/', userController.list);
router.post('/', userController.create);
router.post('/login', userController.login);
router.patch('/:id', loginRequired, userController.update);
router.delete('/:id', loginRequired, userController.delete);

module.exports = router;
