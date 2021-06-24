let cont = document.getElementById("data_cont");
async function getMovieData() {
  let movie_title = document.getElementById("movie_title").value;
  try {
    let res = await fetch(
      `http://www.omdbapi.com/?t=${movie_title}&apikey=4bfcc3ab`
    );
    let data = await res.json();
    if (data.Response != "False") {
      showData(data);
    } else {
      errorData();
    }
  } catch (e) {
    console.log(e);
  }
}

function getMovie(event) {
  if (event.key === "Enter") {
    getMovieData();
  }
}

function showData(data) {
  let div = document.createElement("div");
  let img = document.createElement("img");
  img.src = data.Poster;

  let title = document.createElement("p");
  title.innerHTML = "Title: " + data.Title;

  let release = document.createElement("p");
  release.innerHTML = "Release Date: " + data.Released;

  let rating = document.createElement("p");
  rating.innerHTML = "Rating: " + data.imdbRating;

  let actors = document.createElement("p");
  actors.innerHTML = "Actors: " + data.Actors;
  div.append(img, title, release, actors, rating);
  cont.innerHTML = "";
  cont.appendChild(div);
}
function errorData() {
  let div = document.createElement("div");
  let img = document.createElement("img");
  img.src = "https://archanaprojects.com/Frontend/images/not-found.png";
  cont.innerHTML = "";
  div.append(img);
  cont.appendChild(div);
}
/*

Actors: "Shah Rukh Khan, Kajol, Sheetal Menon"
Awards: "23 wins & 26 nominations"
BoxOffice: "$4,018,771"
Country: "India, United States, United Arab Emirates, Hong Kong"
DVD: "25 Nov 2015"
Director: "Karan Johar"
Genre: "Drama"
Language: "Hindi, English"
Metascore: "50"
Plot: "An Indian Muslim man with Asperger's syndrome takes a challenge to speak to the President of the United States seriously and embarks on a cross-country journey."
Poster: "https://m.media-amazon.com/images/M/MV5BMTUyMTA4NDYzMV5BMl5BanBnXkFtZTcwMjk5MzcxMw@@._V1_SX300.jpg"
Production: "Dharma Productions, Red Chillies Entertainment, Fox Searchlight"
Rated: "PG-13"
Ratings: (3) [{…}, {…}, {…}]
Released: "12 Feb 2010"
Response: "True"
Runtime: "165 min"
Title: "My Name Is Khan"
Type: "movie"
Website: "N/A"
Writer: "Shibani Bathija, Niranjan Iyengar"
Year: "2010"
imdbID: "tt1188996"
imdbRating: "8.0"
imdbVotes: "101,013"
*/
