
const products = [
    { 
        id: '1', 
        name: 'Nicasia Red Blend',
        price: 1700,
        category: 'tintos',
        variety: 'Malbec',
        productor: 'Catena Zapata',
        corte: '90% Malbec | 6% Cabernet Sauvignon | 4% Petit Verdot',
        enologist: 'Alejandro Vigil',
        place: 'Altamira, San Carlos. Provincia de Mendoza, Argentina',
        barricado: '12 meses en roble francés, 30% nuevo.',
        img: 'https://http2.mlstatic.com/D_NQ_NP_906646-MLA42790464402_072020-O.webp'
    },
    { 
        id: '2', 
        name: 'La Linterna',
        price: 12499,
        category: 'blancos',
        variety: 'Chardonnay',
        productor: 'Bemberg Estate Wines',
        corte: '100% Chardonnay',
        enologist: 'Daniel Pi',
        place: 'Gualtallary, Valle de Uco Provincia de Mendoza, Argentina',
        barricado: '12 meses en roble francés, 30% nuevo.',
        img: 'https://http2.mlstatic.com/D_NQ_NP_913000-MLA31611719047_072019-V.webp'
    },
    { 
        id: '3', 
        name: 'Alyda Van Salentein',
        price: 2300,
        category: 'Espumantes',
        variety: 'Brut-nature',
        productor: 'Salentein',
        corte: '50% Pinot Noir | 45% Chardonnay | 5% Pinot Meunier',
        enologist: 'José Galante - Gustavo Bauzá',
        place: 'Valle de Uco. Provincia de Mendoza, Argentina',
        barricado: 'Cuvée Prestige',
        img: 'https://www.espaciovino.com.ar/media/default/0001/64/thumb_63123_default_big.jpeg'
    },
    { 
        id: '4', 
        name: 'Postales Del Fin del Mundo',
        price: 620,
        category: 'tintos',
        variety: 'Malbec',
        productor: 'Del Fin del Mundo',
        corte: '100% Malbec',
        enologist: 'Marcelo Miras',
        place: 'San Patricio del Chañar. Provincia de Neuquén, Argentina.',
        barricado: '6 meses en roble francés y americano.',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_803198-MLA48132282577_112021-F.webp'
    },
    { 
        id: '5', 
        name: 'Trumpeter',
        price: 1318,
        category: 'blancos',
        variety: 'Chardonnay',
        productor: 'Rutini Wines',
        corte: '100% Chardonnay',
        enologist: 'Mariano Di Paola',
        place: 'Tupungato. Provincia de Mendoza, Argentina',
        barricado: 'Crianza: 7 meses. Roble: Francés, 50% nuevo, 50% 2do. y 3er. uso.',
        img: 'https://http2.mlstatic.com/D_NQ_NP_705850-MLA31907063954_082019-O.webp'
    },
    { 
        id: '6', 
        name: 'El Enemigo',
        price: 3205,
        category: 'tintos',
        variety: 'Malbec',
        productor: 'Aleanna',
        corte: '89% Malbec | 11% Petit Verdot',
        enologist: 'Alejandro Vigil',
        place: 'Gualtallary. Provincia de Mendoza, Argentina',
        barricado: '14 meses de crianza en barricas de roble francés',
        img: 'https://http2.mlstatic.com/D_NQ_NP_608241-MLA43162458201_082020-O.webp'
    },
    { 
        id: '7', 
        name: 'Cadus',
        price: 3105,
        category: 'tintos',
        variety: 'Malbec',
        productor: 'Cadus Wines',
        corte: '100% Malbec',
        enologist: 'Santiago Mayorga',
        place: 'Gualtallary, Provincia de Mendoza, Argentina',
        barricado: '12 meses en barricas francesas (60% del vino)',
        img: 'https://http2.mlstatic.com/D_NQ_NP_643942-MLA46089723072_052021-V.webp'
    },
    { 
        id: '8', 
        name: 'Pyros',
        price: 4500,
        category: 'tintos',
        variety: 'Blend',
        productor: 'Pyros Wines',
        corte: '77% Malbec, 22% Syrah y 8% Cabernet Sauvignon',
        enologist: 'José Morales',
        place: 'Valle de Pedernal, San Juan, Argentina',
        barricado: '22 meses en barricas (70% americanas y 30% francesas) más estiba de 1 año en botella',
        img: 'https://http2.mlstatic.com/D_NQ_NP_878659-MLA47397903796_092021-O.webp'
    },
    { 
        id: '9', 
        name: 'Achaval Ferrer',
        price: 2300,
        category: 'tintos',
        variety: 'Malbec',
        productor: 'Achaval Ferrer',
        corte: '100% Malbec',
        enologist: 'Gustavo Rearte',
        place: 'Medrano, Lujan de Cuyo & Tupungato, Mendoza, Argentina',
        barricado: '9 meses en barricas de roble francés de 2do y 3er uso',
        img: 'https://http2.mlstatic.com/D_NQ_NP_708139-MLA44600169684_012021-O.webp'
    },
    { 
        id: '10', 
        name: 'Kung Fu',
        price: 3400,
        category: 'tintos',
        variety: 'Malbec',
        productor: 'Riccitelli',
        corte: '100% Malbec',
        enologist: 'Matias Riccitelli',
        place: 'Gualtallary, Mendoza, Argentina',
        barricado: 'Añejado en huevos de concreto',
        img: 'https://http2.mlstatic.com/D_NQ_NP_711773-MLA44959921508_022021-V.webp'
    },
    { 
        id: '11', 
        name: 'Altocedro',
        price: 2500,
        category: 'rosados',
        variety: 'Merlot',
        productor: 'Altocedro',
        corte: '100% Merlot',
        enologist: 'Karim Mussi Saffie',
        place: 'La Consulta, Valle de Uco, Mendoza',
        barricado: 'Crianza de 12 meses en barricas francesas',
        img: 'https://http2.mlstatic.com/D_NQ_NP_837916-MLA48440589371_122021-V.webp'
    },
    { 
        id: '12', 
        name: 'El Zorrito Naranjo',
        price: 1600,
        category: 'blancos',
        variety: 'Chardonnay',
        productor: 'Santa Julia',
        corte: '100% Chardonnay',
        enologist: 'Rubén Ruffo',
        place: 'Maipú, Provincia de Mendoza, Argentina',
        barricado: 'En tanque de acero inoxidable',
        img: 'https://http2.mlstatic.com/D_NQ_NP_910699-MLA48483482523_122021-O.webp'
    },
]

const categories = [
    {id: 'tintos', description: 'Tintos'},
    {id: 'blancos', description: 'Blancos'},
    {id: 'espumantes', description: 'Espumantes'},
    {id: 'rosados', description: 'Rosados'}
]


export const getCategories = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categories)
        }, 100)
    })
}

export const getProducts = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        }, 100)
    })
}

export const getProductsbyId = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}


