import {
    animals
} from './data/animals.js';

//untuk hewan
animals.forEach(function (getAnimal) {

    const div = document.createElement('div');
    div.className = "col s3 data";

    div.innerHTML = '<img class="data"  src="' + getAnimal.animalImage + '" alt="Hewan">\n' +
        '<div class="col-info">\n' + '<br>' +
        '<h2>' + getAnimal.animalName + '</h2>\n' +
        '<p>' + '<em>' + getAnimal.animalName + '</em>' + '</p>' +
        '<p>' + getAnimal.animalTaksonomi + '</p>' +
        // '<p>' + getAnimal.animalLatin + '</p>' +
        '</div>';
    document.getElementById("list-hewan").appendChild(div);
});