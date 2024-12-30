document.getElementById("data").addEventListener("click", function () {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.onload = function () {
        const output = document.getElementById("output");
        if (this.status === 200) {
            let data = JSON.parse(xhr.responseText);
            data.forEach(function (item) {
                // console.log(`
                // Ciwaan: ${item.title}
                // Xogta: ${item.body}
                // `);
                output.innerHTML += `
                <div>
                Ciwaan: ${item.title}
                <br>
                Xogta: ${item.body}
                </div>
                <hr>
                `;
            });
        }
    };
    xhr.send();
});