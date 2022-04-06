const products = [
    { 
        id: 1, 
        name: 'Tablet Samsung Galaxy Tab A7',
        price: 31999,
        category: 'tablet',
        img: 'https://http2.mlstatic.com/D_NQ_NP_909806-MLA47146793018_082021-V.webp'
    },
    { 
        id: 2, 
        name: 'iPhone 11 pro max',
        price: 255000,
        category: 'celular',
        img: 'https://http2.mlstatic.com/D_NQ_NP_724631-MLA46114990506_052021-O.webp'
    },
    { 
        id: 3, 
        name: 'Asus Tuf Dash',
        price: 219999,
        category: 'notebook',
        img: 'https://http2.mlstatic.com/D_NQ_NP_889449-MLA47446389763_092021-O.webp'
    },
    { 
        id: 4, 
        name: 'iphone 13 pro max',
        price: 475297,
        category: 'celular',
        img: 'https://http2.mlstatic.com/D_NQ_NP_803693-MLA47776072534_102021-V.webp'
    },
]

export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductsbyId = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === 4))
        }, 2000)
    })
}