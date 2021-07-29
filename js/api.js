//const { resourceLimits } = require("node:worker_threads");

let input = document.getElementById('lists');
let form = document.getElementById('wordsearch');
let displayword = document.querySelector('.disword');
let define = document.querySelector('.definition');
let audio = document.querySelector('audio');




form.addEventListener('submit',(e)=>{
    e.preventDefault();
	document.querySelector('content').style.visibility='visible';
    var words = input.value;
    wordlist(words);

})

 window.addEventListener("DOMContentLoaded", (evnet)=>{
 	wordlist();
})
async function  wordlist(words){
	let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${words}`;
	try{
		let res = await fetch(url);
		let data = await res.json();
		console.log(data);
		displayword.innerText = data[0].word;
		audio.src=data[0].phonetics[0].audio;
	    define.innerText=data[0].meanings[0].definitions[0].definition; 
		
		let dispaly = (wordsdata)=>{
			let htmlString = wordsdata.map((words)=>{
				return `
				<li class="words">
				<h2>${words.meanings}</h2>
				</li>`
				;
			})
			.json('');
			unorder.innerHTML = htmlString;
		}
	}
	catch(err){
		console.log(err);
	}
}












