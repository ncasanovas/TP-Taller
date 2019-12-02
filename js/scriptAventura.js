var sectionAventura = document.getElementById('aventura');
var subtituloAventura = document.getElementById('subtitulo');

var requestURL = 'peliculas.json';

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
  var peliculas = request.response;
  showSubtituloAventura(peliculas);
  showPeliculasAventura(peliculas);

}


function showSubtituloAventura(){
  
  var subtitulo = document.createElement("h1");
  subtitulo.className = "subtitulo-aventura";
  subtitulo.textContent = "Aventura";
  subtituloAventura.appendChild(subtitulo);

}


function showPeliculasAventura(jsonObj) {
    var peliculas = jsonObj['peliculas'];
       
     
      for (var i = 0; i < peliculas.length; i++) {

        if(peliculas[i].genero === "Aventura"){
            
            var card = document.createElement('div');
            card.className = 'card mb-3';
            card.style.maxWidth = '800px';
            var row = document.createElement('div');
            row.className = 'row no-gutters flex-row';
            var col = document.createElement('div');
            col.className = 'col';
            var img = document.createElement('img');    
            img.src = peliculas[i].poster;
            img.className = 'card-img';
            var cardBody = document.createElement('div');
            cardBody.className = 'card-body';
            var row2 = document.createElement('div');
            row2.className = 'row no-gutters flex-row';
            var col2 = document.createElement('div');
            col2.className = 'col-md-8';
            var col3 = document.createElement('div');
            col3.className = 'col-md-4';
            var titulo = document.createElement('h1');
            titulo.className = 'card-title';
            var anio = document.createElement('p');
            anio.className = 'card-text';
            var duracion = document.createElement('p');
            duracion.className = 'card-text';
            var director  = document.createElement('p');
            director.className = 'card-text';
            var actores = document.createElement('p');
            actores.className = 'card-text';
            var trama = document.createElement('p');
            trama.className = 'card-text';
            var rating = document.createElement('ul');
            rating.className = 'card-text';
            
            titulo.textContent = peliculas[i].titulo;
            anio.textContent = "Año: " + peliculas[i].anio;
            duracion.textContent = "Duración: " + peliculas[i].duracion;
            director.textContent = "Director: " + peliculas[i].director;
            actores.textContent = "Actores: " + peliculas[i].actores;
            trama.textContent = "Trama: " + peliculas[i].trama;
            rating.textContent = peliculas[i].imdbRating;
                    
            col.appendChild(img);
            col.appendChild(cardBody);
            cardBody.appendChild(row2);
            row2.appendChild(col2);
            row2.appendChild(col3);
            col2.appendChild(titulo);
            col3.appendChild(rating);
            cardBody.appendChild(anio);
            cardBody.appendChild(duracion);
            cardBody.appendChild(director);
            cardBody.appendChild(actores);
            cardBody.appendChild(trama);
            card.appendChild(col);
            sectionAventura.appendChild(card);
        }
             
      }
  }
  