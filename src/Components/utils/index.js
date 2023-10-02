//Esta funcion calcula el precio total de nuestra nueva orden. Products es un parametro de tipo array
//@param{Array} products cartProduct: Array of Objects
//@returns {number} Total price

export const totalPrice = (products)=>{
    // Crearemos una variable que sea un tipo de acumulador, que sera una variable q empiece en cero
    let sum = 0
    //aqui lo que hace es sumar el valor del que pusimos mas el nuevo producto
    products.forEach(product => sum += product.price )
        

}