const loginRouter = require('express').Router();
const { User } = require('../../db/models');

loginRouter.post('/login', async (req, res) => {
  try {
    // res.send('ok');
    const { login, password } = req.body;
    // console.log(login, password);
    // console.log(User);

    let existingUser = await User.findOne({ where: { login } });
    existingUser = existingUser.dataValues;
    // console.log(existingUser);

    // console.log(existingUser);

    if (!existingUser) {
      res.status(401).json({ status: 401, message: 'Неверный логин.' });
      return;
      // return res.status(401).send('Неверный логин.');
    }

    if (existingUser.password !== password) {
      // return res.status(401).send('Неверный пароль.');
      res.status(401).json({ status: 401, message: 'Неверный пароль.' });
      return;
    }

    req.session.userId = existingUser.id;
    res.status(200).json(existingUser);
    return;

    // return res.status;
  } catch (error) {
    res.status(500).send(error);
  }
});

loginRouter.get('/logout', async (req, res) => {
  try {
    req.session.destroy();
    res.clearCookie('user_sid');
    res.send('ok');
  } catch (error) {
    res.send(error);
  }
});

module.exports = loginRouter;
