function GetData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof data === 'number') {
                let result = `Natiijo: ${data * 2}`;
                resolve(result);
            } else {
                reject("Fadlan tiro geli.");
            }
        }, 2000);
    });
}
GetData(5)
.then((response) => console.log(response))
.catch((error) => console.log(error));