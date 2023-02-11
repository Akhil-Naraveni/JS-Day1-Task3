// https://www.omdbapi.com/?apikey=39b08c5c&t=

let TitleEle = document.getElementById("title")
let SearchEle = document.getElementById("searchTitle")
let searchResults = document.getElementById("searchResults")
SearchEle.onclick = async function () {
    searchResults.innerHTML = ""
    await fetch(`https://www.omdbapi.com/?apikey=39b08c5c&t=${TitleEle.value}`)
        .then((res) => res.json())
        .then((data) => {
            if(data["Response"] === "False"){
                searchResults.innerHTML = `<p>No Results Found</p>`
            }else{
            let posterImg = document.createElement("img")
            posterImg.src = data["Poster"]
            posterImg.alt = "PosterImage"
            posterImg.style.boxShadow = "8px 8px 4px yellow"
            searchResults.appendChild(posterImg)
            let movieTitle = document.createElement("h2")
            movieTitle.innerText = "Title : " +data["Title"]
            searchResults.appendChild(movieTitle)
            let yearOfRel = document.createElement("p")
            yearOfRel.innerText = "Year of release : "+ data["Year"]
            searchResults.appendChild(yearOfRel)
            let imdbRating = document.createElement("p")
            imdbRating.innerText = "IMDB Rating : "+data["imdbRating"]
            searchResults.appendChild(imdbRating)
            let actors = document.createElement("p")
            actors.innerText = "Cast & Crew : "+data["Actors"]
            searchResults.appendChild(actors)
            searchResults.style.border = "2px solid orange"
            searchResults.style.padding = "4px"
            }
        })

}

