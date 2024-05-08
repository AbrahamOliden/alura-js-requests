const form = document.querySelector('[data-form]');

function uploadVideo(event) {

    event.preventDefault();

    const url = document.querySelector('[data-url]').value;
    const title = document.querySelector('[data-title]').value;
    const image = document.querySelector('[data-image]').value;

    const description = Math.floor(Math.random() * 10).toString();
};

form.addEventListener('submit', (event) => uploadVideo(event));