var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors');
const mongoose=require('mongoose');
const bodyParser=require('body-parser')

//Rutas
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const router_producto = require('./routes/route_producto');
const router_usuario = require('./routes/route_usuario');
const router_venta = require('./routes/route_venta');
const router_patrocinio = require('./routes/route_patrocinio');

//Conexion Mongo
const conexion_mongoose='mongodb+srv://usuario:12345@cluster0.iysppsa.mongodb.net/SD?retryWrites=true'
mongoose.connect(conexion_mongoose);

var app = express();

app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/productos', router_producto);
app.use('/usuario', router_usuario);
app.use('/venta', router_venta);
app.use('/patrocinio', router_patrocinio);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
