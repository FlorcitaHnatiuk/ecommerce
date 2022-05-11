# La vinería

*Flor Hnatiuk*👋

> Este es un proyecto realizado para el curso de React JS. Se trata de un ecommerce en el que podrás navegar por distintas categorías y adquirir tu orden de compra de los productos que has seleccionado.


## Installation git clone

Para acceder al proyecto clonándolo, deberás ejecutar en consola: 
```sh
git clone  https://github.com/FlorcitaHnatiuk/ecommerce.git
npm install 
npm start
```

## Installation download ZIP
```sh
Ir a “code” > download ZIP
Descomprimir el archivo
En la carpeta donde se encuentra “package.json” ejecutar en terminal: 
npm install
npm start
```


## Dependecies

Para que el proyecto se logre realizar de una manera esperada utilicé las siguientes herramientas:

⚡ React-icons

⚡ React-social-icons

⚡ React-router-dom: routing de la web

⚡ Styled-component: estilos generales

⚡ Sweetalert2: aviso email ingresado incorrecto

⚡ React-Firebase: base de datos


## Firebase / Firestore

- Colección: categories. Cada categoría será según lo siguiente:

| Campo | Tipo | Valor |
| Descripcion | String | Categoría del producto |

- Colección: Products. Cada product tiene las siguientes características:

|    Campo      |   Tipo        |   Valor       |
| ------------- | ------------- | ------------- |
|   barricado   |   String      |   Descripción |
|   category    |   String      |   Categoría   |
|      corte    |   String      |    Corte      |
|   enologist   |   String      |   Enólogo     |
|       img     |   String      |       img     |
|       name    |   String      |      Nombre   |
|      place    |   String      |      Lugar    |
|       price   |   number      |     Precio    |
|     productor |   String      |     Productor |
|       stock   |   number      |       stock   |
|       variety |   String      |    Varietal   |

