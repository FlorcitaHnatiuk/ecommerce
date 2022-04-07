const products = [
    { 
        id: 1, 
        name: 'Nicasia Red Blend',
        price: 949.99,
        category: 'Malbec',
        type: 'Tinto',
        img: 'https://http2.mlstatic.com/D_NQ_NP_906646-MLA42790464402_072020-O.webp'
    },
    { 
        id: 2, 
        name: 'La Linterna',
        price: 14947,
        category: 'Chardonnay',
        type: 'Blanco',
        img: '	https://http2.mlstatic.com/D_NQ_NP_664451-MLA46083745258_052021-O.webp'
    },
    { 
        id: 3, 
        name: 'Alyda Van Salentein',
        price: 1650,
        category: 'Espumoso',
        type: 'rose',
        img: 'https://www.espaciovino.com.ar/media/default/0001/64/thumb_63123_default_big.jpeg'
    },
    { 
        id: 4, 
        name: 'Postales Del Fin del Mundo',
        price: 620,
        category: 'Tinto',
        type: 'Mabel',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_803198-MLA48132282577_112021-F.webp'
    },
    { 
        id: 5, 
        name: 'Trumpeter',
        price: 1313,
        category: 'Chardonnay',
        type: 'Blanco',
        img: 'https://http2.mlstatic.com/D_NQ_NP_705850-MLA31907063954_082019-O.webp'
    }
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