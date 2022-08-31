//selectors 
let cover = document.getElementsByTagName('div')[0];
let title = document.getElementsByTagName('h1')[1];
let image = document.getElementsByTagName('img')[0];
let desc = document.getElementsByTagName('p')[0];

const today = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() ).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy+ '-' + mm + '-' + dd  ;
    return (today)
}


let getData = async (date = today()) =>{

    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=0R8C8qAd1z5Rw35DAFq9gFkgsXNZedclm7Bc5gf3&date=${date}`,{
    method: 'GET'});

        let data = await response.json();
        console.log(data)
        title.innerText = data.title;
        image.src = data.url;
        desc.innerText = data.explanation;
    
}

let getDate = (event)=> {
    console.log(event.target.value)
    getData(event.target.value)
}


getData()