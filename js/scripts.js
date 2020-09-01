// import {fruits, animals} from './data/object.js';

import {fruits} from './data/fruits.js';


//untuk buah
fruits.forEach(function (getData) {

  const div = document.createElement('div');
  div.className = "col s3 data";

  div.innerHTML = '<img class="data"  src="' + getData.fruitImage + '" alt="Fruits">\n' +
      '<div class="col-info">\n' + '<br>' +
      '<h2>' + getData.fruitName + '</h2>\n' +
      '<p>'+ '<em>' + getData.latinName + '</em>' + '</p>' +
      '<p>' + getData.fruitColor + '</p>' +
      '<p>' + getData.fruitBiji + '</p>' +
      '</div>';
  document.getElementById("list").appendChild(div);
});



//untuk animasi js
new Typed('#typed',{
    strings : ['Web Developer','Teacher'],
    typeSpeed : 100,
    delaySpeed : 100,
    loop : true
  });