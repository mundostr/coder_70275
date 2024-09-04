const orders = [
    { manzanas: 3, peras: 2, carne: 1, jugos: 5, dulces: 2 }, // primer pedido
    { manzanas: 1, sandias: 1, huevos: 6, jugos: 1, carne: 4 }, // segundo pedido
];

const types = [];

orders.forEach(order => {
    const keys = Object.keys(order);
    
    keys.forEach(key => {
        if (!types.includes(key)) {
            types.push(key);
        }
    });
});

console.log(types);

/* const types2 = products.reduce((acc, product) => {
    for (const key in product) {
        acc[key] = (acc[key] || 0) + product[key];
    }
    return acc;
}, {});

console.log(types2); */
