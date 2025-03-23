// Modules (import, export)

// Inscriptions ?

// Attention : serveur local ou en ligne nécessaire pour le fonctionnement de l'application

// index.js
import { direBonjour } from './modules/direBonjour.js';


direBonjour('Romain');
// affiche Bonjour Romain !

// modules/direBonjour.js
   export function direBonjour(prenom) {
        console.log(`Bonjour ${prenom} !`);
    }


// index.html
<script type="module" src="index.js"></script>
   