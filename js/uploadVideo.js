import { APIConnection } from './APIConnection.js';

const form = document.querySelector('[data-form]');

async function uploadVideo(event) {

    event.preventDefault();

    const url = document.querySelector('[data-url]').value;
    const titulo = document.querySelector('[data-title]').value;
    const imagen = document.querySelector('[data-image]').value;

    const descripcion = Math.floor(Math.random() * 10).toString();

    await APIConnection.uploadVideo(titulo, descripcion, url, imagen);
    window.location.href='../pages/envio-concluido.html';
};

form.addEventListener('submit', (event) => uploadVideo(event));