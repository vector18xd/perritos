const URL = "https://dog.ceo/api/breeds/image/random";

const  main_card = document.querySelector("#main-card");
const template_card = document.querySelector("#template-card").content;
const btn_1 = document.getElementById("btn1");
const btn_3 = document.getElementById("btn3");
const btn_9 = document.getElementById("btn9");
const btn_12 = document.getElementById("btn12");
const input = document.querySelector("input");

const fragment = document.createDocumentFragment();

btn_1.addEventListener('click',  perritos1);
btn_3.addEventListener('click',  perritos3);
btn_9.addEventListener('click',  perritos9);
btn_12.addEventListener('click', perritos12);
input.addEventListener('change', inputPerrrito);

function perritos1(){
    main_card.innerHTML='';
    for(let i =0; i<1;i++){
        FetchApi();
    }
}
function perritos3(){
    main_card.innerHTML='';
    for(let i =0; i<3;i++){
        FetchApi();
    }
}
function perritos9(){
    main_card.innerHTML='';
    for(let i =0; i<9;i++){
        FetchApi();
    }
}
function perritos12(){
    main_card.innerHTML='';
    for(let i =0; i<12;i++){
        FetchApi();
    }
}
function inputPerrrito(){
    let inputs = input.value;
    main_card.innerHTML='';
    for(let i =0; i<inputs;i++){
        FetchApi();
    }
}
function FetchApi (){
    fetch(URL)
    .then(reponse => reponse.json())
    .then(card=>{
        CreateCard(card);
    })
}
function CreateCard(perritos){
    let clone_template = document.importNode(template_card,true);
        clone_template.querySelector("#img-card").setAttribute('src',perritos.message);
        clone_template.querySelector("#img-card").setAttribute('alt',perritos.status);
        fragment.appendChild(clone_template);
        main_card.appendChild(fragment);
}
