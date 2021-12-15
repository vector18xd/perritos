const URL = "https://rickandmortyapi.com/api/character/?page=8";
const main = document.querySelector(".main-card");
const template_card = document.querySelector(".template-card").content;
const select = document.querySelector("#select")
const fragment = document.createDocumentFragment();
selcts();
select.addEventListener('blur', cards);
function cards(){
  let cod = document.getElementById("select").value;
  if(cod == 21){
    main.innerHTML='';
    for(let e = 0; e<20;e++){
      FetchApiCard(e);
    }
  }else{
    main.innerHTML='';
    FetchApiCard(cod);
  }
}
function selcts(){
  for(let i = 0;i<20;i++){
    FetchApi(i);
  }
}
function FetchApi (i){
  fetch(URL)
  .then(reponse => reponse.json())
  .then(card=>{
    
    agregar(card, i);
  })
}
function FetchApiCard (e){
  fetch(URL)
  .then(reponse => reponse.json())
  .then(card=>{
    CreateCard(card, e);
  })
}
function agregar(morty, i){
    const option = document.createElement('option');
      option.value =i;
      option.text = morty.results[i].name;
      select.add(option);  
};
function CreateCard(morty, e){
  let clone_template = document.importNode(template_card,true);
      clone_template.querySelector(".name-card").textContent = morty.results[e].name;
      clone_template.querySelector("img").setAttribute('src',morty.results[e].image);
      clone_template.querySelector("img").setAttribute('alt',e);
      clone_template.querySelector(".gender").textContent = morty.results[e].gender;
      fragment.appendChild(clone_template);
      main.appendChild(fragment);
}