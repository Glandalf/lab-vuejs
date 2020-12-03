// On *instancie* un *objet* de la *classe* Vue
const appLogin = new Vue({
    el: '#app-login', // même format que les sélecteurs CSS
    data: {
        identifiant: 'test',
        motDePasse: 'super secret',
        estConnecte: false
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

    }
    
});
// TODO : gérer un événement click sur le submit ?!