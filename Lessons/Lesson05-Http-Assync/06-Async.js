
class Request {
    static async get(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("An error occurred: " + response.status);
    }
    const res = await response.json();
    return res;
}

static async post(url, data) {
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json;",
        },
    });
    if (!response.ok) {
        throw new Error("An error occurred: " + response.status);
    }
    const res = await response.json();
    return res;
}

static async put(url, data) {
    const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json;",
        },
    });
    if (!response.ok) {
        throw new Error("An error occurred: " + response.status);
    }
    const res = await response.json();
    return res;
}

static async delete(url) {
    const response = await fetch(url, {
        method: "DELETE",
    });
    if (!response.ok) {
        throw new Error("An error occurred: ");
    }
    const res = "Deleting data is successful";
    return res;
}
}



// Request.get("http://localhost:3000/users")
// .then((data) => console.log(data))
// .catch((err) => console.log(err));


Request.post("http://localhost:3000/users",{
    name: "Nazal Salah",
    department: "Politic Science",
    salary: 10000,
})
.then((data) => console.log(data))
.catch((err) => console.error(err));

// Request.put("https://jsonplaceholder.typicode.com/posts/2",{
//     userID: 2,
//     title: "New Post",
//     body: "This is a new post"
// })
// .then((data) => console.log(data))
// .catch((err) => console.error(err));

// Request.delete("https://jsonplaceholder.typicode.com/posts/2")
// .then((data) => console.log(data))
// .catch((err) => console.error(err));
