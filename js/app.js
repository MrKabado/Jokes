fetch('https://official-joke-api.appspot.com/random_joke', {method: 'GET'})
.then(x => x.json())
.then(y => myFunction(y));

function myFunction(y) {

    let jokeDis = document.getElementById('joke-dis'); //joke discription
    let jokeAns = document.getElementById('joke-ans'); //joke punchline

    let btnAns = document.getElementById('btn-answer'); //button for submit
    let btnRef = document.getElementById('btn-refresh'); //button for refresh

    jokeDis.innerHTML = y.setup;

    btnAns.onclick = function() {
        jokeAns.innerHTML = y.punchline;

        this.classList.add('###');
        this.disabled = true;
    }

    btnRef.onclick = function() 
    {
        location.reload();
    }
    
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
     navigator.serviceWorker.register('../sw.js').then( () => {
      console.log('Service Worker Registered')
     })
   })
  }
