
const products = [
    { 
        id: 1, 
        name: 'Nicasia Red Blend',
        price: 1700,
        category: 'Malbec',
        variety: 'Tinto',
        productor: 'Catena Zapata',
        corte: '90% Malbec | 6% Cabernet Sauvignon | 4% Petit Verdot',
        enologist: 'Alejandro Vigil',
        place: 'Altamira, San Carlos. Provincia de Mendoza, Argentina',
        barricado: '12 meses en roble francés, 30% nuevo.',
        img: 'https://http2.mlstatic.com/D_NQ_NP_906646-MLA42790464402_072020-O.webp'
    },
    { 
        id: 2, 
        name: 'La Linterna',
        price: 12499,
        category: 'Chardonnay',
        variety: 'Blanco',
        productor: 'Bemberg Estate Wines',
        corte: '100% Chardonnay',
        enologist: 'Daniel Pi',
        place: 'Gualtallary, Valle de Uco Provincia de Mendoza, Argentina',
        barricado: '12 meses en roble francés, 30% nuevo.',
        img: 'https://http2.mlstatic.com/D_NQ_NP_913000-MLA31611719047_072019-V.webp'
    },
    { 
        id: 3, 
        name: 'Alyda Van Salentein',
        price: 2300,
        category: 'Espumoso',
        variety: 'Brut Nature',
        productor: 'Salentein',
        corte: '50% Pinot Noir | 45% Chardonnay | 5% Pinot Meunier',
        enologist: 'José Galante - Gustavo Bauzá',
        place: 'Valle de Uco. Provincia de Mendoza, Argentina',
        barricado: 'Cuvée Prestige',
        img: 'https://www.espaciovino.com.ar/media/default/0001/64/thumb_63123_default_big.jpeg'
    },
    { 
        id: 4, 
        name: 'Postales Del Fin del Mundo',
        price: 620,
        category: 'Tinto',
        variety: 'Mabel',
        productor: 'Del Fin del Mundo',
        corte: '100% Malbec',
        enologist: 'Marcelo Miras',
        place: 'San Patricio del Chañar. Provincia de Neuquén, Argentina.',
        barricado: '6 meses en roble francés y americano.',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_803198-MLA48132282577_112021-F.webp'
    },
    { 
        id: 5, 
        name: 'Trumpeter',
        price: 1318,
        category: 'Chardonnay',
        variety: 'Blanco',
        productor: 'Rutini Wines',
        corte: '100% Chardonnay',
        enologist: 'Mariano Di Paola',
        place: 'Tupungato. Provincia de Mendoza, Argentina',
        barricado: 'Crianza: 7 meses. Roble: Francés, 50% nuevo, 50% 2do. y 3er. uso.',
        img: 'https://http2.mlstatic.com/D_NQ_NP_705850-MLA31907063954_082019-O.webp'
    },
    { 
        id: 6, 
        name: 'El Enemigo',
        price: 3205,
        category: 'Tinto',
        variety: 'Mabel',
        productor: 'Aleanna',
        corte: '89% Malbec | 11% Petit Verdot',
        enologist: 'Alejandro Vigil',
        place: 'Gualtallary. Provincia de Mendoza, Argentina',
        barricado: '14 meses de crianza en barricas de roble francés',
        img: 'https://http2.mlstatic.com/D_NQ_NP_608241-MLA43162458201_082020-O.webp'
    },
    { 
        id: 7, 
        name: 'Cadus',
        price: 3105,
        category: 'Tinto',
        variety: 'Mabel',
        productor: 'Cadus Wines',
        corte: '100% Malbec',
        enologist: 'Santiago Mayorga',
        place: 'Gualtallary, Provincia de Mendoza, Argentina',
        barricado: '12 meses en barricas francesas (60% del vino)',
        img: 'https://http2.mlstatic.com/D_NQ_NP_643942-MLA46089723072_052021-V.webp'
    },
    { 
        id: 8, 
        name: 'Pyros',
        price: 4500,
        category: 'Tinto',
        variety: 'Blend',
        productor: 'Pyros Wines',
        corte: '77% Malbec, 22% Syrah y 8% Cabernet Sauvignon',
        enologist: 'José Morales',
        place: 'Valle de Pedernal, San Juan, Argentina',
        barricado: '22 meses en barricas (70% americanas y 30% francesas) más estiba de 1 año en botella',
        img: 'https://http2.mlstatic.com/D_NQ_NP_878659-MLA47397903796_092021-O.webp'
    },
    { 
        id: 9, 
        name: 'Achaval Ferrer',
        price: 2300,
        category: 'Tinto',
        variety: 'Malbec',
        productor: 'Achaval Ferrer',
        corte: '100% Malbec',
        enologist: 'Gustavo Rearte',
        place: 'Medrano, Lujan de Cuyo & Tupungato, Mendoza, Argentina',
        barricado: '9 meses en barricas de roble francés de 2do y 3er uso',
        img: 'https://http2.mlstatic.com/D_NQ_NP_708139-MLA44600169684_012021-O.webp'
    },
    { 
        id: 10, 
        name: 'Kung Fu',
        price: 3400,
        category: 'Tinto',
        variety: 'Malbec',
        productor: 'Riccitelli',
        corte: '100% Malbec',
        enologist: 'Matias Riccitelli',
        place: 'Gualtallary, Mendoza, Argentina',
        barricado: 'Añejado en huevos de concreto',
        img: 'https://http2.mlstatic.com/D_NQ_NP_711773-MLA44959921508_022021-V.webp'
    },
]

export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products)
        }, 100)
    })
}

export const getProductsbyId = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === 4))
        }, 2000)
    })
}

/* export const getProductsbyCat = (category) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === Blend))
        }, 2000)
    })
} */