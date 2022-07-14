class Product{
    constructor(nameProduct, description, price, thumbnail, productCode, stock, id, timeStamp){
        this.nameProduct = nameProduct,
        this. productCode = productCode,
        this.stock = stock,
        this.description = description,
        this.price = price,
        this.thumbnail = thumbnail,
        this.timeStamp = timeStamp,
        this.id = id
    }

    getMyId(){
        return(this.id)
    }

    changeMyParams(newNameProduct, newProductCode, newStock,newDescription, newPrice, newThumbnail, newTimeStamp){
        this.nameProduct = newNameProduct,
        this.productCode = newProductCode,
        this.stock = newStock,
        this.description = newDescription,
        this.price = newPrice,
        this.thumbnail = newThumbnail,
        this.timeStamp = newTimeStamp
    }
}


class Cart{
    constructor(idCart){
        this.id = idCart,
        this.arrayMyProducts=[]
    }

    getMyId(){
        return(this.id)
    }

    cartAddProduct(newProduct){
        this.arrayMyProducts.push(newProduct)
    }

    cartGetAllProduts(){
        return (this.arrayMyProducts)
    }

    deletProducById(idProduct){
        this.arrayMyProducts = this.arrayMyProducts.filter((item) => item !== idProduct)
    }

    postProductById(idProduct){
        this.arrayMyProducts.push(idProduct)
    }
}

export {Product, Cart}
