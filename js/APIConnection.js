async function listVideos() {
    const connection = await fetch("http://localhost:3001/videos");

    const parsedConnection = connection.json();

    // console.log(parsedConnection);
    return parsedConnection;
};

export const APIConection = {
    listVideos
};

// listVideos();