const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pool = mysql.createPool({
  //   connectionLimit: 5,
  host: 'localhost',
  user: 'root',
  database: 'shop',
  password: 'root2020',
});

app.get('/list', function (req, res) {
  let message =
    'select product.id, product.name, product_type.name as Type, category.name as Category, category.discount, price, link from product inner join category on product.category_id = category.id inner join product_type on product.product_type_id = product_type.id';
  pool.query(message, function (err, data) {
    if (err) return console.log(err);
    res.json(data);
  });
});

app.get('/womanlist', function (req, res) {
  let message =
    'select product.id, product.name, product_type.name as Type, category.name as Category, category.discount, price, link from product inner join category on product.category_id = category.id inner join product_type on product.product_type_id = product_type.id where category.id in (2,4) order by price desc';
  pool.query(message, function (err, data) {
    if (err) return console.log(err);
    res.json(data);
  });
});

app.get('/manlist', function (req, res) {
  let message =
    'select product.id, product.name, product_type.name as Type, category.name as Category, category.discount, price, link from product inner join category on product.category_id = category.id inner join product_type on product.product_type_id = product_type.id where category.id in (1,3) order by price';
  pool.query(message, function (err, data) {
    if (err) return console.log(err);
    res.json(data);
  });
});

app.post('/dynamic', function (req, res) {
  console.log(req.body.req);
  pool.query(req.body.req, function (err, data) {
    if (err) return res.json([{ error: '!!! СЕРВЕР НЕ МОЖЕТ ОБРАБОТАТЬ ВАШ ЗАПРОС !!!'}, { attenshion: 'СКОРЕКТИРУЙТЕ ЗАПРОС И ПОПРОБУЙТЕ СНОВА!' }]);
    res.json(data);
  });
});

app.listen(3000, function () {
  console.log('Сервер завелся...');
});
