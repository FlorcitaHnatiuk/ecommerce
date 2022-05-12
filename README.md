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
## Techs

🛠️ React JS

🛠️ JavaScript

🛠️ HTML

🛠️ CSS

## Dependencies

Para que el proyecto se logre realizar de una manera esperada utilicé las siguientes herramientas:

⚡ React-icons

⚡ React-social-icons

⚡ React-router-dom: routing de la web

⚡ Styled-component: estilos generales

⚡ Sweetalert2: aviso email ingresado incorrecto

⚡ React-Firebase: base de datos

⚡ React-toastify: notificación de producto


## Firebase / Firestore

- Colección: categories. Cada categoría será según lo siguiente:

|   Campo      | Tipo |            Valor       |
| -------------| ------------- | ------------- |
| Descripcion | String | Categoría del producto|

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

## Análisis de los componentes

El inicio de la web app es la ruta '/' donde encontrarás todos los productos sin filtro, cartas para que vayas desde ahí mismo a ver el detalle de cada uno. Las cartas contienen imagen, nombre, precio y un botón que te redireccionará hacia *ItemDetailContainer*. Gracias al componente *ItemDetail* podrás llegar al componente *Item* seleccionado, podrás ver algunos detalles mas del vino, conocer dónde fue elaborado, su enólogo, cuánto tenemos de stock, barricado, corte, etc. Desde aquí mismo podrás añadir la cantidad de vinos que quieras a tu carrito gracias al componente *ItemCount*. Este componente que acabo de nombrar te permitirá agregar productos a tu carrito.

Otra manera de buscar es por los links alojados en el *Navbar*. En este, además de mapear las categorías con las que contamos, encontrarás el *CartWidget* quien será visible únicamente cuando hayas añadido algún vino a tu carrito. 
Desde Navbar podrás acceder entonces a las categorías con las que contamos. Al clickear sobre ellas encontrarás *ItemListContainer* quien contiene a *ItemList*, el encargado de mapear los vinos según la categoría que estos tengan. A su vez también desde aquí a *ItemDetailContainer*, *ItemDetail* e *Item*.

Para acceder a tu carrito solo debés darle click al carrito *CartWidget* que aparecerá cuando hayas agregado algún producto a tu cesta. Haciendo click sobre él podrás ir a la vista que resume tu compra. Aquí cada producto será traído gracias al componente *ItemCart*. Si querés eliminar productos, podés hacerlo desde el botón a la derecha. También podrás vaciar el carrito, lo cual te redireccionará directamente a la Home.

En el caso de querer continuar con la compra, dándole click a finalizar compra, la web te redireccionará a *Form* donde deberás completar tus datos, y en el caso de que los mails estén iguales el botón será habilitado para generar la orden y automáticamente se cargará tu id de compra. 

# Funciones *CartContext*

*addItem* =>

*getQuantity* => esta función permite que cuando agregas productos al carrito se muestre la cantidad en el CartWidget

*isInCart* => 

*clearCart* => esta función está asociada al botón de vaciar carrito y limpiará todo lo que se encuentre en el.

*removeItem* => esta función removerá el producto con ese id y seteará el nuevo valor del CartWidget.

*getQuantityProd* =>

*totalCost* => esta función calcula el valor total de la compra.

# Que disfrutes tu vinito!