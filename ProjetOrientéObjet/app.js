const formGame = document.querySelector('.form-game')
const tabBodyGame = document.querySelector('.tab-body-game')
const btnSubmit = document.querySelector('.form-submit')

class jeuVideo{
    constructor(titre,dev,annee){
        this.titre = titre;
        this.dev = dev;
        this.annee = annee;
    }

    addJeuToList(){
        const row = document.createElement('tr');
        row.innerHTML = `<td>${this.titre}</td><td>${this.dev}</td><td>${this.annee}</td><td><button class="delete">❌</button></td>`;
        tabBodyGame.appendChild(row);
    }
}

btnSubmit.addEventListener('click', (e) =>{
    e.preventDefault();
    const titre = document.getElementById('name').value; 
    const dev = document.getElementById('dev').value; 
    const annee = document.getElementById('annee').value; 
    new jeuVideo(titre,dev,annee).addJeuToList()
});