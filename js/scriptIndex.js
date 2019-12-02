var headerIndex = document.getElementById('header-index');

var requestURL = 'peliculas.json';

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
  var peliculas = request.response;
  populateHeaderIndex(peliculas);
 
  
}

/* Index HTML*/
function populateHeaderIndex(jsonObj) {
  var myH1 = document.createElement('h1');
  myH1.textContent = jsonObj['tituloPagina'];
  headerIndex.appendChild(myH1);

  var myPara = document.createElement('p');
  myPara.textContent =  jsonObj['subtitulo'] + ' / Creado: ' + jsonObj['creado'];
  myPara.className = 'subtitulo-index';
  headerIndex.appendChild(myPara);
/*
  var myImg = <img src=" + jsonObj['imagen'] + '" />;
  
  headerIndex.appendChild(myImg);*/

  var myImg = document.createElement('img');
  myImg.src = jsonObj['imagen'];
  myImg.id = "img-responsive";
  headerIndex.appendChild(myImg);
}




