import $ from 'jquery';
import Quote from "./quote";
import {getGreetingByTime} from './helpers/greetingHelper';
//import {getGreetingByTime} from './helpers/greetingHelper';
/*
* Objectif : déterminer un "salut" en fonction de l'heure et l'afficher
*
* Étapes :
* 1- Créer une référence vers les éléments du DOM qu'on va utiliser
* 2- Récupérer une salutation en fonction de l'heure
* 3- Récupérer une valeur aléatoire à partir d'un tableau
* 4- Afficher le résultat
* */

export default class Greeting  {
    constructor() {
        this.initEls();
        this.initEvents();
    }

    initEls () {
        this.$els = {
            greeting: $('.js-greeting')
        };

    }
    initEvents(){
        this.getIP();
    }

    getIP () {
        const api = {
            endpoint: 'https://api.ipify.org?format=json',
        };
        $.ajaxSetup({cache:false});
        $.getJSON(api.endpoint)
            .then((response) => {
                console.log(response);
                this.renderIP(response);
            })
            .catch((e) => {
                console.log('Quote error : ', e)
            })
    }

    renderIP(IP) {
        const greeting = IP.ip;
        this.$els.greeting.text(this.makeMessage(greeting));
        new Quote(greeting);
    }

    makeMessage (quote) {
        return `Good ${getGreetingByTime()}: ${quote}.`;
    }

}
