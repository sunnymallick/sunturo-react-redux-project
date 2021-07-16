const express = require('express');

const router = express.Router();

const apiRouter = require('./api');

router.use('/api', apiRouter);

router.get('/hello/world', function(req, res) {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  res.send('Hello World!');
});

router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
});

module.exports = router;

//0XtG10E2-wB7Y1wOnqtUJBhfX63LfBanc4kA


// fetch('/api/test', {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "XSRF-TOKEN": `IhufX64o-gFgRh_atPI4nufFXZUbB3OiNO7E`
//     },
//     body: JSON.stringify({ hello: 'world' })
//   }).then(res => res.json()).then(data => console.log(data));
