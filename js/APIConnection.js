async function listVideos() {
    const connection = await fetch("http://localhost:3001/videos");
    const parsedConnection = connection.json();
    // console.log(parsedConnection);
    return parsedConnection;
};

async function uploadVideo(title, description, url, image) {
    const connection = await fetch("http://localhost:3001/videos", {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            title: title,
            description: description,
            url: url,
            image: image
        })
    });

    const parsedConnection = connection.json();

    return parsedConnection;
};

export const APIConection = {
    listVideos, uploadVideo
};

// listVideos();