let bulbasaurData;
let charmanderData;

window.onload = function() {
  getBulbasaur()
  getCharmander()
  // get5Posts()
  // getComments()
  // getUsers()
  // createPost()
  // editPost()
}

const checkFetch = (response) => {
  if (!response.ok) {
    throw Error(`${response.statusText} - ${response.url}`);
  }
  return response;
}

const getBulbasaur = () => {
  fetch('https://pokeapi.co/api/v2/pokemon/1')
    .then(checkFetch)
    .then(res => res.json())
    // .then(posts => console.log(posts))
    .then(data => bulbasaurData = data)
    .catch(error => console.log(error))
}
const getCharmander = () => {
  fetch('https://pokeapi.co/api/v2/pokemon/4')
    .then(checkFetch)
    .then(res => res.json())
    // .then(posts => console.log(posts))
    .then(data => charmanderData = data)
    .catch(error => console.log(error))
}
const consolePosts = () => {
  console.log(bulbasaurData, charmanderData)
}

const bulbasaur = () => {
  let bulbasaurPicture =document.createElement('img')
  bulbasaurPicture.src = src = bulbasaurData.sprites.front_default;
  let bulbInfo = document.createElement("span");
  bulbInfo.style.color = "white";
  bulbInfo.style.fontSize = "24px"
  bulbInfo.textContent = `Attack ${bulbasaurData.stats[4].base_stat}`;
  const btn = document.getElementById('btn1')
  
  btn.onclick = function() {
      bulb.appendChild(bulbasaurPicture);
      bulb.appendChild(bulbInfo)
      
      console.log(bulbInfo, bulbasaurPicture, "hello!")
    //       const newLi = document.createElement('li');
    //       const newText =document.createTextNode(`${post.email} ${post.location.city}`);
    //       spaceHolder.appendChild(newText);
    //       allPosts.append(li)
    //       console.log(newText, "hello")
    //     }
}
}
const charmander = () => {
  let charmanderPicture =document.createElement('img')
  charmanderPicture.src = src = charmanderData.sprites.front_shiny;
  let charmInfo = document.createElement("span")
  charmInfo.textContent = `Attack ${charmanderData.stats[4].base_stat}`;
  charmInfo.style.color = "white";
  charmInfo.style.fontSize = "24px"
  const btn = document.getElementById('btn2')
  
  btn.onclick = function() {
      charm.appendChild(charmanderPicture);
      charm.appendChild(charmInfo)
      // console.log(bulbInfo, bulbasaurPicture, "hello!")
    //       const newLi = document.createElement('li');
    //       const newText =document.createTextNode(`${post.email} ${post.location.city}`);
    //       spaceHolder.appendChild(newText);
    //       allPosts.append(li)
    //       console.log(newText, "hello")
    //     }
}
}
const pokemonFight = () => {
  let fightPrint =document.getElementById('match');
  fightPrint.innerHTML='';
  let bulbasaurAttack = bulbasaurData.stats[4].base_stat
  let charmanderAttack = charmanderData.stats[4].base_stat
  let charmWins = document.createElement("span")
  charmWins.textContent = `Charmander Wins!`
  charmWins.style.color = "white";
  charmWins.style.fontSize = "24px"
  let bulbWins =document.createElement("span")
  bulbWins.textContent = `Bulbasaur Wins!`
  bulbWins.style.color = "white";
  bulbWins.style.fontSize = "24px"
  if(bulbasaurAttack > charmanderAttack) {
    fightPrint.append(bulbWins)
  } else {
    fightPrint.append(charmWins)
  }
  // console.log(bulbasaurAttack);
  // console.log(bulbasaurData.stats)
}
// const displayPost = () => {
//   const allPosts = document.getElementById('all-posts')
//   userData.results.map((post) => {
//     const pic = document.createElement('img')
//     pic.src = src = `${post.picture.thumbnail}`
//     const li = document.createElement('li')
//     const btn = document.createElement("button");
//     btn.innerHTML = "See more info"
//     const spaceHolder = document.createElement('div')
//     const text = document.createTextNode(`${post.name.title} ${post.name.first} ${post.name.last}`)
//     // li.appendChild(pic)
//     li.appendChild(pic)
//     li.appendChild(text)
//     li.appendChild(btn)
//     li.appendChild(spaceHolder)
//     allPosts.append(li)
//     btn.onclick = function() {
//       const newLi = document.createElement('li');
//       const newText =document.createTextNode(`${post.email} ${post.location.city}`);
//       spaceHolder.appendChild(newText);
//       allPosts.append(li)
//       console.log(newText, "hello")
//     }
//   })
// }