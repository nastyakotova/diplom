/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
const loginRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

// loginRouter.post('/', async (req, res) => {
//   try {
//     const { name, password } = req.body;
//     const existingUser = await User.findOne({ where: { name } });
//     if (existingUser) {
//       res.status(401).send({ message: 'Такой пользователь уже существует' });
//       return;
//     }

//     const user = await User.create({
//       name,
//       password: await bcrypt.hash(password, 10),
//     });

//     req.session.userId = user.id;
//     res.send({ name, isAdmin: user.isAdmin });
//   } catch (error) {
//     res.send(error);
//   }
// });

// loginRouter.put('/', async (req, res) => {
//   try {
//     const { id } = req.body;
//     const user = await User.findOne({
//       where: { id: req.session.userId },
//       include: [User.Team],
//     });
//     await user.update({ team_id: id });
//     await user.save();

//     const updateUser = await User.findOne({
//       where: { id: req.session.userId },
//       include: [User.Team],
//     });

//     res.send({ team: updateUser.Team.dataValues.title, team_id: updateUser.Team.dataValues.id });
//   } catch (error) {
//     res.send(error);
//   }
// });

loginRouter.post('/login', async (req, res) => {
  try {
    const { name, password } = req.body;
    const existingUser = await User.findOne({
      where: { name },
      include: [User.Team],
    });

    if (existingUser && (await bcrypt.compare(password, existingUser.password)) && existingUser.team_id) {
      req.session.userId = existingUser.id;
      res.send({
        id: existingUser.id,
        name,
        team: existingUser.Team.dataValues.title,
        team_id: existingUser.Team.dataValues.id,
        isAdmin: existingUser.isAdmin,
      });
    } else if (existingUser && (await bcrypt.compare(password, existingUser.password))) {
      req.session.userId = existingUser.id;
      res.send({
        name,
        isAdmin: existingUser.isAdmin,
      });
    } else {
      res.status(401).send({ message: 'Введены неверные данные' });
    }
  } catch (error) {
    console.log(error);
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
