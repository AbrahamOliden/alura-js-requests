import { APIConnection } from './APIConnection.js';
import createCard from './displayVideos.js';

async function filterVideo(event) {
    event.preventDefault();

    const lookUpData = document.querySelector('[data-search]').value;
    const lookUp = await APIConnection.lookUpVideos(lookUpData);

    const list = document.querySelector('[data-list]');

    while(list.firstChild) {
        list.removeChild(list.firstChild);
    };

    lookUp.forEach( video => list.appendChild( createCard(video.titulo, video.descripcion, video.url, video.imagen) ) );

    // console.log(lookUp);
};

const button = document.querySelector('[data-search-button]');

button.addEventListener('click', (event) => filterVideo(event) );