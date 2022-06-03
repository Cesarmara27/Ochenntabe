const express = require('express');
const router = express.Router();

const categoriesRoutes = require('./categorias');
const usuariosRoutes=require('./usuarios')
const bitacoraRoutes=require('./bitacoras')

router.use('/categories', categoriesRoutes);
router.use('/user', usuariosRoutes);
router.use('/bitacora', bitacoraRoutes);

module.exports = router;
