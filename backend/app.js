require('dotenv').config();

const express = require('express');
const path = require('path');
const expressConfig = require('./config/express');

// импортируем роутеры
const loginApiRouter = require('./routes/api/login.routes');

const app = express();
const PORT = process.env.PORT ?? 3000;

// функция настройки экспресса
expressConfig(app);

// подключаем роутеры
app.use('/api/auth', loginApiRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

app.use((error, req, res) => {
  console.error('Произошла ошибка', error);
  res.status(500).json({
    success: false,
    message: 'Непредвиденная ошибка сервера, попробуйте зайти позже',
  });
});

app.listen(PORT, () => console.log(`server started at ${PORT}`));
