document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los elementos de la lista
    const filtros = document.querySelectorAll('.selectorImagenes ol li');
    
    // Añade un evento click a cada filtro
    filtros.forEach(function(filtro) {
        filtro.addEventListener('click', function() {
            const nombreFiltro = filtro.textContent.trim(); // Captura el nombre del filtro
            const productos = document.querySelectorAll('.gallery__gral');

            // Itera sobre todos los productos
            productos.forEach(function(producto) {
                // Si el producto tiene el nombre que coincide con el filtro, lo muestra, de lo contrario lo oculta
                if (producto.getAttribute('data-nombre') === nombreFiltro || nombreFiltro === 'Filtros') {
                    producto.style.display = 'block'; // Mostrar el producto
                } else {
                    producto.style.display = 'none'; // Ocultar el producto
                }
            });
        });
    });

    // Manejador de evento para el botón "Mostrar todos"
    document.getElementById('mostrar-todos').addEventListener('click', function() {
        const productos = document.querySelectorAll('.gallery__gral');
        
        console.log('Botón "Mostrar todos" presionado'); // Verifica si el clic funciona
        
        productos.forEach(function(producto) {
            console.log('Mostrando producto:', producto); // Verifica qué productos se están mostrando
            producto.style.display = 'block'; // Mostrar todos los productos
        });
    });
});
