const search = document.querySelector('#search-input')
const main = document.querySelector('#main')
const movieType = document.querySelector("li")

function fetchAllMovies( info,search, type = '') {
    fetch(`https://www.omdbapi.com/?s=${search}&type=${type}&apikey=d53b7b8a`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            renderMovies(data.Search,)
            if(info !== true) {
                
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Sizge data keldi!",
                    timer: 5000
                })
            }
        })

        .catch(err => {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Siz qate maglimat kirittiniz!",
                timer: 5000
            })
        })
}

function renderMovies(array) {
    main.innerHTML = ""
    array.map(item => {
        main.innerHTML += `
        <div class="shadow-md p-3 rounded-md hover:shadow-none transition-all ease-out mb-5">
        <img height="350" width="350" class="rounded-lg h-[350px] object-contain" 
        src="${item.Poster}" 
        alt="${item.Title}"/>
        <h3 class="text-indigo-400 p-3 text-2xl text-center">${item.Title}</h3>
        <div class="px-3 flex justify-between items-center">
        <b class="text-gray-500">${item.Type}</b>
        <b class="text-gray-500">${item.Year}</b>
        </div>
        </div>
        `
    })
}

fetchAllMovies(true, "iron")


search.addEventListener('change', (e) => {
    fetchAllMovies(false, e.target.value)
    search.value = ""
})
