async function getApi(url) {
    var response =await fetch(url);
    var posts =await response.json();
    return posts;
}

export default getApi;


export function sayHello(){
    console.log('Hello from export function');
}

