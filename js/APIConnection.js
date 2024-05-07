async function listVideos() {
    const connection = await fetch("http://localhost:3001/videos");

    console.log(connection);
};

listVideos();