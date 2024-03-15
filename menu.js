fetch('menu.json')
//¿que hace Esta linea inicia la carga del archivo menu.json. fetch es cuna funcion d javascript que facilita la realizacion ded solicitdes de red, como obener datos de un archivo o un endpoint de API.
//¿como funciona? fetch develve una promesa que, cuando se resulve, tendra acceso a la respuesta de la solicitud. Esta respesta no es directamnte los datos en formato JSON, sino un objeto de respuewsta que incluye vaios detalles sobre la repuesta misma.
.then(response=>response.json())
//que hace? Eta linea toma el objeto de respuesta obtenido del fetch y utiliza el metodo.json() para convrtir el curpo de la respuesta en un objeto JavaScipt (esto asume que el cuerpo de la respuesta esta en formato JSON).
//como funciona? El metodo .json() tambien devuelve una promesa, la cual se resuelve con el conenido del cuerpo en formato JSON.
then(data=>{
    const menuContainer = document.getElementById ('menu-container');
    //que hace? Aqi se procesan los datos JSON ya convertidos. Se obtiene unarferencia al contenedos  del menu en el HTML mediante getElementalById('menu-container') y luego se itera sobre los elementos (categorias) del mennu.
    data.items.forEach(category =>{
        const categoryTitle= document.createElement('h2');
        //que hace? Aquiv se crea un elemento 'h2', se asigna el nombre de la categoria como su contenido de texto y luego se añade este titulo alcontenedordel menu/.
        categoryTitle.textContent= category.category;
        menuContainer.appendChild{categoryTitle};

        const table =document.createElement('table');
        //que hace? Se crea un elemento tale para cada categoria, ademas, se pepara el encabezado (tableHead) con las columnas petinentes. Tablebody se inicializa vacio y se llenara con los elementos de la categoria.
        const tableHead= ´<tr><th>foto</th><th>dscripcion</th><th><th>precio</th></tr>´;
        let Tablebody='';
        //como funciona? Para cada categoria en los datos, se realizan varios pasos: crear un titulo para la categoria (se crea un elemento <h2>para el ttulo de la categoria, se establece su contenido del texto al nombre de lacategoria (category.category), luego se agg al contenedor del menu).
        //Crear una tabla para los elemntos de esas caegorias: se genera una tabla por cada categoria(primero se define el encabezado de la tabla <th>foto</th><th>Descripcion</th><th>precio</th>).
        category.items.fotEach(item =>{
            Tablebody += ´<tr>
            <td>img scr="${item.image} alt="${item.name}"</td>
            <td> ${item.name} -"${item.description}"</td>
            <td>${item.price}</td>
            </tr>´;
    });

  });
});
