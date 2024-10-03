fetch('https://api.nasa.gov/planetary/apod?api_key=W2mz1EsGHKLbv9LuUGFiBjgOmeWHdHoxecbGsXD8')
.then(response => response.json())
    .then(data => {
        const expla = data.explanation;
        document.getElementById('expl').innerHTML = expla;
        const title = data.title;
        document.getElementById('title_of').innerHTML = title;
    })
    .catch(error => console.log(error));
