
const mainUrl = "http://exam-2023-1-api.std-900.ist.mospolytech.ru/api/routes"
apiKey = "942eb11c-0388-4a80-b009-70c62b6d471f"

function getRoutes(){
    const url = new URL ("routes", mainUrl);
    url.searchParams.set("api_key", '942eb11c-0388-4a80-b009-70c62b6d471f');

    fetch(url).then(response => { 
        return response.json();
    }).then(response => { 
        console.log(response) 
    })

}


function hello(){
    const url = mainUrl;

    fetch(url).then(response => { 
        return response.json();
    }).then(response => { 
        console.log(response) 
    })
}

window.addEventListener('DOMContentLoaded', getRoutes)