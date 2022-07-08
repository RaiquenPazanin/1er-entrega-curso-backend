import {Product, Cart} from "../class/calsses.js"
import  fs from 'fs'

let productos = []
let carts = []
let timeStamp = Date.now()

const getProductController = (req, res) => {

    res.status(200).json(productos)
}

const getProductByIdController = (req, res) => {
    const id = Number(req.params.id)
    console.log(typeof (id))
    if (isNaN(id)) {
        res.status(400).json({ error: "El parámetro no es un número" })
        return
    }
    const product = productos.filter(producto => {
        return producto.id === id
    })
    if (!product.length) {
        res.status(404).send({ error: "El contenido que solicito no existe" })
        return
    }
    res.status(200).json(product)
}

const postProductController = (req, res) => {
    const { nameProduct, description, price, thumbnail, productCode, stock } = req.body;
    const id = productos.length + 1;
    const productNew = new Product(nameProduct, description, price, thumbnail, productCode, stock, id, timeStamp);
    productos.push(productNew)
    fs.writeFileSync("misProductos.txt", JSON.stringify(productos));
    res.sendStatus(201)
}

const putProducByIdtController = (req, res) => {
    const { nameProduct, description, price, thumbnail, productCode, stock } = req.body
    const id = Number(req.params.id)
    if (isNaN(id)) {
        res.status(400).json({ error: "El parámetro no es un número" })
        return
    } else {
        productos.map(item => {
            if (item.getMyId() === id) {

                item.changeMyParams(nameProduct, productCode, stock, description, price, thumbnail, timeStamp)
                return item; 
            }
        })
        res.sendStatus(201)
    }
}

const deletProductById = (req, res) => {
    const id = Number(req.params.id)
    if (isNaN(id)) {
        res.status(400).json({ error: "El parámetro no es un número" })
        return
    } else {
        productos = productos.filter((item) => item.id !== id);
        for (let index = 0; index < productos.length; index++) {
            productos[index].id = index + 1;
        }
        res.sendStatus(201)
    }

}


const postCartController = (req, res) =>{
    const idCart = carts.length + 1;
    const cartNew = new Cart(idCart);
    carts.push(cartNew)
    res.sendStatus(201)
}

const deletCartById = (req, res) =>{
    const id = Number(req.params.id)
    if (isNaN(id)) {
        res.status(400).json({ error: "El parámetro no es un número" })
        return
    } else {
        carts = carts.filter((item) => item.id !== id);
        for (let index = 0; index < carts.length; index++) {
            carts[index].id = index + 1;
        }
        res.sendStatus(201)

        console.log(carts.length)
}}


const getAllProductByIdCart = (req, res) =>{
    const idGet = Number(req.params.id)
    const getCart = carts.filter((item) => item.id === idGet)
    const showProduct = getCart.getAllProductByIdCart.filter((item) =>item===productos.id)
    return(showProduct) 
}
const postProductInCart = (req, res) =>{

}


export {getProductController, getProductByIdController, postProductController, putProducByIdtController, deletProductById, postCartController, deletCartById, getAllProductByIdCart, postProductInCart}