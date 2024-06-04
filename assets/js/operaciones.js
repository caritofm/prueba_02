
export const enviarDatos = (name, groups, price, img) => {
    // Almacenar los datos en el almacenamiento local
    localStorage.setItem('comicData', JSON.stringify({ name, groups, price, img }));
    
    // Redirigir a la página 'personaje.html'
    window.location.href = '../personaje.html';
};

// Código en 'personaje.html' para recuperar y mostrar los datos
document.addEventListener("DOMContentLoaded", () => {
    const comicData = JSON.parse(localStorage.getItem('comicData'));

    if (comicData) {
        const { name, groups, price, img } = comicData;

        const imagePage = document.getElementById('imagePage');
        if (imagePage) imagePage.src = img;

        const titlePage = document.getElementById('titlePage');
        if (titlePage) titlePage.textContent = `Nombre: ${name}`;

        const groupPage = document.getElementById('groupPage');
        if (groupPage) groupPage.textContent = `Grupo: ${groups}`;

        const pricePage = document.getElementById('pricePage');
        if (pricePage) pricePage.textContent = `Precio: ${price}`;
    }
});
