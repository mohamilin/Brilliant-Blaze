fetch("https://restcountries.eu/rest/v2/all")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        getData(data);
    })
    .catch((err) => {
        console.log("eror : " + err);
    });

function getData(data) {
    for (let i = 169; i < 185; i++) {
        const div = document.createElement('div');
        div.className = "col s3 data";
        div.innerHTML =
            `
            <img class=" center img-count" src="${data[i].flag}" alt="" srcset="">
            <div class="info center">
                <h5 class="center">${data[i].name}</h5>
              <p class="light">${data[i].capital}</p>
              <p class="blue">${data[i].region}</p>
            </div>
            `;
        document.getElementById("list").appendChild(div);
    }
}

