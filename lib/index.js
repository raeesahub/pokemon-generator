// TODO: Write your JS code in here

const heading = document.getElementById("heading");
const desc = document.getElementById("desc");
const image = document.getElementById("image");

const submit = document.querySelector("#form");
const pokemon = document.querySelector(".pokemon");

// const sprite = ;
// const shinySprite = "http://pokeapi.co/media/sprites/pokemon/shiny/1.png"

const getPokemon = (id) => {
  fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    .then (response => response.json())
    .then ((data) => {
      console.log(data)
      heading.innerText = data.names[8].name;
      desc.innerText = data.flavor_text_entries[0].flavor_text;
      image.insertAdjacentHTML("afterbegin", `<img id='img' src='https://pokeres.bastionbot.org/images/pokemon/${id}.png'/>`);
  });
}

submit.addEventListener('submit', (event) => {
  event.preventDefault();
  image.innerHTML = "";
  const input = event.currentTarget.querySelector("#pokemon");
  getPokemon(input.value);
});
