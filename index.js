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
  let recommend = document.createElement("p");
  if (Number(data.imdbRating) > 8.5) {
    recommend.innerHTML = "RECOMMENDED";
    recommend.style.margin = "10px";
    recommend.style.color = "#bcbdc1";
    recommend.style.background = "green";
  }
  div.append(recommend, img, title, release, actors, rating);
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
