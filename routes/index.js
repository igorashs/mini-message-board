const express = require('express');
const router = express.Router();

const formatDate = (date) => `
${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}
`;

const formatTime = (date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const isPM = hours > 12;

  return `${isPM ? hours - 12 : hours}:${
    minutes > 9 ? minutes : `0${minutes}`
  }:${seconds > 9 ? seconds : `0${seconds}`} ${isPM ? 'PM' : 'AM'}`;
};

const title = 'Mini Messageboard';

const messages = [
  {
    text: 'Hello There',
    user: 'Obi-Wan Kenobi',
    added: { date: formatDate(new Date()), time: formatTime(new Date()) }
  },
  {
    text: 'General Kenobi',
    user: 'General Grievous',
    added: { date: formatDate(new Date()), time: formatTime(new Date()) }
  }
];

router.use(express.urlencoded({ extended: true }));

router.get('/', (req, res, next) => {
  res.render('index', { title, messages });
});

router.get('/new', (req, res, next) => {
  res.render('form', { title });
});

router.post('/new', (req, res, next) => {
  const date = new Date();

  messages.push({
    text: req.body.message,
    user: req.body.user,
    added: {
      date: formatDate(date),
      time: formatTime(date)
    }
  });

  res.redirect('/');
});

module.exports = router;
