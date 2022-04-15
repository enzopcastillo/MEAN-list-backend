//rutas para producto
const express = require('express');
const router=express.Router();
const productoController = require('../controllers/productoController');

/*api productos
router.post('/', () =>{
    console.log('Creando producto...');
})
*/

router.post('/', productoController.crearProducto);
router.get('/', productoController.obtenerProducto);
router.put('/:id', productoController.actualizarProducto);
router.get('/:id', productoController.obtenerProducto1);
router.delete('/:id', productoController.eliminarProducto);


module.exports=router;