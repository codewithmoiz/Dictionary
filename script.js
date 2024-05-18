var btn = document.querySelector('form button');
let inp = document.querySelector('input');


    btn.addEventListener('click', async function(e){
        e.preventDefault()
        let data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inp.value}`)
        let convert = await data.json()
        // console.log(convert[0].phonetics[0].audio);
        document.querySelector('.output').innerHTML = `
        <div>
        <h3 class="word">Word:</h3>
        <p class="word-text">"${convert[0].word.toUpperCase()}"</p>
        </div>

    
        <div>
        <h3 class="definition">Definition:</h3>
        <p class="definition-text">${convert[0].meanings[0].definitions[0].definition}</p>
        </div>

        <div>
        <h3 class="pof">Part of speech:</h3>
        <p class="pof-text">${convert[0].meanings[0].partOfSpeech}</p>
        </div>

        <button>Listen</button>
        `;
        let sound = new Audio(convert[0].phonetics[0].audio);
        document.querySelector('.output button').addEventListener('click',()=>{
            sound.play()
        })
    })


// var btn = document.querySelector('form button');
// btn.addEventListener('click',function(e){
//     e.preventDefault()
//     let inp = document.querySelector('input').value;
//     console.log(inp);
// })




// console.log(convert[0].meanings[0].partOfSpeech); Part of speech
// console.log(convert[0].word); Word
// console.log(convert[0].meanings[0].definitions[0].definition); Definition of a word
// console.log(convert[0].meanings[0].antonyms[0]); Antonyms
// console.log(convert[0].meanings[0].antonyms[1]); Antonyms




// <h3>Antonyms:</h3>
// <p>${convert[0].meanings[0].antonyms[0], convert[0].meanings[0].antonyms[1]}</p>


