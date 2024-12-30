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

class Request {
    static get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((error) => reject(error));
        });
    }
    static post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((error) => reject(error));
        });
    }
    static put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((error) => reject(error));
        });
    }
    static delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "DELETE"
            })
            .then((response) => resolve("Deleted"))
            .catch((error) => reject(error));
        });
    }
}

Request.get("https://jsonplaceholder.typicode.com/posts")
.then((data) => console.log(data))
.catch((error) => console.log(error));

Request.post("https://jsonplaceholder.typicode.com/posts",{
    userId: 1,
    title: "Post Title",
    body: "Post Body"
})
.then((data) => console.log(data))
.catch((error) => console.log(error));

Request.put("https://jsonplaceholder.typicode.com/posts/1",{
    userId: 1,
    title: "Post Title fdherty",
    body: "Post Body dyjdtjty"
})
.then((data) => console.log(data))
.catch((error) => console.log(error));

Request.delete("https://jsonplaceholder.typicode.com/posts/1")
.then((data) => console.log(data))
.catch((error) => console.log(error));