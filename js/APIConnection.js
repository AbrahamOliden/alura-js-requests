async function listVideos() {
    const connection = await fetch("http://localhost:3001/videos");
    const parsedConnection = connection.json();
    // console.log(parsedConnection);
    return parsedConnection;
};

async function uploadVideo(titulo, descripcion, url, imagen) {
    const connection = await fetch("http://localhost:3001/videos", {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            titulo: titulo,
            descripcion: `${descripcion} mil visualizaciones`,
            url: url,
            imagen: imagen
        })
    });

    const parsedConnection = connection.json();

    return parsedConnection;
};

async function lookUpVideos(keyword) {
    const connection = await fetch(`http://localhost:3001/videos?q=${keyword}`);
    const parsedConnection = connection.json();

    return parsedConnection;
}

export const APIConnection = {
    listVideos, uploadVideo, lookUpVideos
};

// listVideos();