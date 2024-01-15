const mainUrl = "http://exam-2023-1-api.std-900.ist.mospolytech.ru/api/"

function getOrders(){
    const url = new URL ("orders", mainUrl);
    url.searchParams.set("api_key", '942eb11c-0388-4a80-b009-70c62b6d471f');

    let xhr = new XMLHttpRequest();
    xhr.open('get', url);
    xhr.onload = function() {
        console.log(this.response)
    }
    xhr.send();
}

const map = new mapgl.Map('container', {
    key: 'key',
    center: [55.31878, 25.23584],
    zoom: 13,
});

window.addEventListener('DOMContentLoaded', getOrders)