document.getElementById("getButton").addEventListener("click", getAllData);

function getAllData() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "users.json", true);
    xhr.onload = function () {
        let list = document.getElementById("shaqaalayaasha");
        if (this.status === 200) {
            const data =JSON.parse(this.responseText);
            data.forEach((User) => {
                list.innerHTML += `
                <tr>
                    <td>${User.Magaca}</td>
                    <td>${User.Kuliyada}</td>
                    <td>${User.Mushaarka}</td>
                </tr>
                `;
            });
        } else {
            console.log("Qalad baa jira");
        }
    };
    xhr.send();
}