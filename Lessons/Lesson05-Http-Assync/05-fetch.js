function getTexFile() {
    fetch("text.txt")
    .then((response) => response.text())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}
getTexFile();

function getJsonFile() {
    fetch("users.json")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}
getJsonFile();

function getApi() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
}
getApi();