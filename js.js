const producto = (productoA,productoB) => productoA + productoB;
const descuento = (productoA,resta) => productoA - resta;
const mostrar = (total) => alert(total)

descuento (producto (100,50), 10);

mostrar (descuento (producto (100,50), 10));