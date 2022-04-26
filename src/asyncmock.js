
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
        stock: '10',
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
        stock: '10',
        img: 'https://http2.mlstatic.com/D_NQ_NP_913000-MLA31611719047_072019-V.webp'
    },
    { 
        id: '3', 
        name: 'Alyda',
        price: 2500,
        category: 'espumantes',
        variety: 'Rosado',
        productor: 'Salentein',
        corte: '90% Pinot Noir, 10% Pinot Meunier',
        enologist: 'Gustavo Bauzá',
        place: 'Valle de Uco, Provincia de Mendoza, Argentina',
        barricado: 'Método Charmat lungo (12 meses)',
        stock: '10',
        img: 'https://http2.mlstatic.com/D_NQ_NP_763012-MLA43927328121_102020-O.webp'
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
        stock: '10',
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
        stock: '10',
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
        stock: '10',
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
        stock: '10',
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
        stock: '10',
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
        stock: '10',
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
        stock: '10',
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
        stock: '10',
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
        stock: '10',
        img: 'https://http2.mlstatic.com/D_NQ_NP_910699-MLA48483482523_122021-O.webp'
    },
    { 
        id: '13', 
        name: 'Encarnación',
        price: 5200,
        category: 'espumantes',
        variety: 'Brut Nature',
        productor: 'Rosell Boher',
        corte: '80% Chardonnay y 20% Pinot Noir ',
        enologist: '',
        place: 'Valle de Uco, Provincia de Mendoza, Argentina',
        barricado: 'Tradicional / Champenoise',
        stock: '10',
        img: '	https://http2.mlstatic.com/D_NQ_NP_656109-MLA45638435600_042021-V.webp'
    },
    { 
        id: '14', 
        name: 'La Oveja',
        price: 1600,
        category: 'blancos',
        variety: 'Torrontés',
        productor: 'Santa Julia',
        corte: '100% Torrontés',
        enologist: 'Rubén Ruffo',
        place: 'Maipú, Provincia de Mendoza, Argentina',
        barricado: 'En tanque de acero inoxidable',
        stock: '10',
        img: 'https://http2.mlstatic.com/D_NQ_NP_862706-MLA46915818817_072021-O.webp'
    },

    { 
        id: '15', 
        name: 'Alma 4',
        price: 2550,
        category: 'espumantes',
        variety: 'Chardonnay',
        productor: 'Zuccardi Valle de Uco',
        corte: '100% Chardonnay',
        enologist: 'Sebastian Zuccardi',
        place: 'Tupungato (San José, La Carrera) y Tunuyán (San Pablo), Valle de Uco, Mendoza.',
        barricado: '50 meses sobre levaduras - Segunda fermentacion en botella',
        stock: '10',
        img: '	https://http2.mlstatic.com/D_NQ_NP_714195-MLA44282782637_122020-O.webp'
    },
    { 
        id: '16', 
        name: 'Sylvestra Brut Nature Rosé',
        price: 3800,
        category: 'espumantes',
        variety: 'Pinot Noir',
        productor: 'Bressia',
        corte: '100% Pinot Noir',
        enologist: 'Walter Bressia',
        place: 'Agrelo, Luján de Cuyo, Provincia de Mendoza, Argentina.',
        barricado: 'Tradicional',
        stock: '10',
        img: 'https://http2.mlstatic.com/D_NQ_NP_860833-MLA43622419251_092020-O.webp'
    },
    { 
        id: '17', 
        name: 'Flora',
        price: 2300,
        category: 'rosados',
        variety: 'Pinot Noir',
        productor: 'Teho',
        corte: '100% Pinot Noir',
        enologist: 'Alejandro Sejanovich',
        place: 'Los Árboles, Tunuyán, Valle de Uco, Mendoza',
        barricado: '',
        stock: '10',
        img: 'https://http2.mlstatic.com/D_NQ_NP_981672-MLA44104930352_112020-V.webp'
    },
    { 
        id: '18', 
        name: 'Riccitelli Old Vines',
        price: 6700,
        category: 'tintos',
        variety: 'Malbec',
        productor: 'Matias Riccitelli Wines',
        corte: '100% Malbec',
        enologist: 'Matias Riccitelli',
        place: 'Guerrico, Patagonia, Rio Negro',
        barricado: 'La crianza se realiza en barricas de roble francés de diferentes usos por 16 meses.',
        stock: '10',
        img: 'https://http2.mlstatic.com/D_NQ_NP_643076-MLA49398480848_032022-O.webp'
    },
    { 
        id: '19', 
        name: 'Riccitelli Old Vines',
        price: 6700,
        category: 'tintos',
        variety: 'Merlot',
        productor: 'Matias Riccitelli Wines',
        corte: '100% Merlot',
        enologist: 'Matias Riccitelli',
        place: 'Allen, Rio Negro, Patagonia',
        barricado: 'La crianza se realiza en barricas de roble francés de diferentes usos por 16 meses.',
        stock: '10',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_838079-MLA31622350292_072019-T.webp'
    },
    { 
        id: '20', 
        name: 'Riccitelli Old Vines',
        price: 6700,
        category: 'blancos',
        variety: 'Chenin Blanc',
        productor: 'Matias Riccitelli Wines',
        corte: '100% Chenin Blanc',
        enologist: 'Matias Riccitelli',
        place: 'Allen, Rio Negro, Patagonia',
        barricado: '8 meses. 50% en barricas de roble francés y 50% en huevos de concreto',
        stock: '10',
        img: '	https://http2.mlstatic.com/D_NQ_NP_937872-MLA48280547515_112021-O.webp'
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
        }, 100)
    })
}


