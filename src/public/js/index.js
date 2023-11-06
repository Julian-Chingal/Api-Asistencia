function getDataFromAPI() {
    fetch('http://localhost:3030/api/usuario') 
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Manipular los datos obtenidos de la API
            const dataContainer = document.getElementById('data');
            // Ejemplo: Mostrar los datos en el div con id 'data'
            dataContainer.innerHTML = JSON.stringify(data, null, 2);
            // Puedes personalizar esta parte para mostrar los datos como desees en tu HTML
        })
        .catch(error => {
            // Manejo de errores
            console.error('Hubo un problema con la solicitud:', error);
            const dataContainer = document.getElementById('data');
            dataContainer.innerHTML = 'Hubo un problema al obtener los datos de la API.';
        });
}

// Llamar a la función para obtener datos cuando se cargue la página
window.onload = getDataFromAPI;
