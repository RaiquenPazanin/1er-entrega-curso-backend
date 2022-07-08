import Router from "express";
const router = Router()
import {getProductController, getProductByIdController, postProductController, putProducByIdtController, deletProductById, postCartController, deletCartById, getAllProductByIdCart, postProductInCart} from '../routerController/routesControllers.js'






router.get('/productos', getProductController)

router.get('/productos/:id', getProductByIdController)

router.post('/productos', postProductController) //ok

router.put('/productos/:id', putProducByIdtController)

router.delete('/productos/:id', deletProductById)

router.post('/carrito', postCartController)

router.delete('/carrito/:id', deletCartById)

router.get('/carrito/:id', getAllProductByIdCart)

router.post('/carrito/:id/productos', postProductInCart)

export default router