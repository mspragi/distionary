 let id ='2fedf65c';
 let key ='	a15630eec1ce067aba85df1b4d4803b7';
// let url ='	https://od-api.oxforddictionaries.com/api/v2';


let input = document.getElementById('lists');
let form = document.getElementById('wordsearch');


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    var word = input.value;
    wordlist(word);
})


async function wordlist(word){
    let url =`	https://od-api.oxforddictionaries.com/api/v2/entries/en/?api_id=${id}&api_key=${key}`;
    try{
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
} 
catch(err){
    console.log(erro);
}
}
wordlist(word)