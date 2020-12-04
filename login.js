const questions = [
    {
        label: 'Quel est le meilleur framework front ?',
        time: 5,
        response1: 'Vue',
        response2: 'Angular',
        response3: 'React',
        response4: 'JeanJean',
        rightAnswer: 4,
    },
    {
        label: 'Quel est le meilleur framework back ?',
        time: 9,
        response1: 'React',
        response2: 'Angular',
        response3: 'Vue',
        response4: 'JeanJean',
        rightAnswer: 4,
    },
]

// On *instancie* un *objet* de la *classe* Vue
const app = new Vue({
    el: '#app', // même format que les sélecteurs CSS
    data: {
        identifiant: 'test',
        motDePasse: 'super secret',
        estConnecte: true,
        game: {
            _intervalID: null,
            title: '',
            questions: [],  // Souci de watcher ?
            pin: null,
            status: 'idle', // lobby | pending | ended
            currentQuestion: -1,
            players: ['Bibbo', 'Bobbi'],
            timer: null,
        }
    },
    computed: {
        questionsDuration() {
            let total = 0;
            this.game.questions.forEach(question => {
                total += question.time;
            })
            return total;
        },
        question() {
            return this.game.questions[this.game.currentQuestion];
        }
    },
    methods: {
        onSubmit(ev) {
            ev.preventDefault();
            // Pour accéder à une variable dans data ou une méthode dans methods, on utilise `this` devant
            if (this.identifiant.length <= 5 || this.motDePasse.length <= 5) {
                // Faire quelque chose si le formulaire n'est pas bon ?
            }
            else {
                // fetch('./login.php', {
                //     method: 'POST',
                //     // mode: 'cors' pour éviter les soucis de CORS
                //     body: `{ 
                //         login: ${this.identifiant},
                //         password: ${this.motDePasse}
                //     }`
                //     })
                //     .then(response => response.json())
                //     .then(data => {
                //         // TODO: vérifier que la connexion a marché
                //         // Prévenir l'utilisateur
                //          this.estConnecte = true;
                //     })
                this.estConnecte = true;
                console.log()

            }
        },


        createGame() {
            // Afficher un écran d'acceuil (lobby screen) avec création du code pin
            this.game.pin = Math.floor(Math.random() * 1000000);
            this.game.questions = questions;
            this.game.players.push(this.identifiant);
            this.game.status = 'lobby';
        },
        startGame() {
            // Initialise des compteurs, affiche la première question
            this.game.status = 'pending';
            this.nextQuestion();
        },
        nextQuestion() {
            // this.game.currentQuestion = this.game.currentQuestion + 1
            if (this.game.currentQuestion < this.game.questions.length) {
                this.game.currentQuestion++;
                this.game.timer = this.question.time;
                this.game._intervalID = setInterval(() => {
                    if (this.game.timer > 0) {
                        this.game.timer--;
                    } 
                    else {
                        clearInterval(this.game._intervalID);
                        this.nextQuestion();
                    }
                }, 1000);   
            }
            else {
                this.endGame();
            }
        },
        endGame() {
            this.game.status = 'ended'
        }


    }
    
});
// TODO : gérer un événement click sur le submit ?!