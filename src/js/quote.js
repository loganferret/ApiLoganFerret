import $ from 'jquery';
import QuoteTemplate from './hbs/quote.hbs';
import {getTime} from './helpers/getHourHelper';
/*
* Objectif : récupérer une citation aléatoire à partir d'une API et l'afficher
*
* Étapes :
* 1- Créer une référence vers les éléments du DOM qu'on va utiliser
* 2- Récupérer une citation aléatoire à partir de l'API de QuotesOnDesign (https://quotesondesign.com/api/)
* 3- Afficher la citation
* */

export default class Quote {
    constructor(IP) {
        this.IP = IP;
        this.initEls();
        this.initEvents();
    }
        initEls (){
            this.$els = {
                quoteContainer: $('.js-quote'),
                container: $('.js-container'),
            };
        }

        initEvents(){
            this.getQuote();

        }
        getQuote () {
            const api = {
                endpoint: `https://api.coindesk.com/v1/bpi/currentprice.json`,
            };
            $.getJSON(api.endpoint)
                .then((response) => {
                    console.log(response);
                    this.renderQuote(response);
                })
                .catch((e) => {
                    console.log('Quote error : ', e)
                })
        }
        renderQuote(quote) {
        const date = getTime(quote.time.updated);
        const quoteDisclaimer = quote.disclaimer;
        const quoteCoin = quote.chartname;
        const quoteUSD = quote.bpi.USD.code;
        const quoteUSDP = quote.bpi.USD.rate;
        const quoteEUR = quote.bpi.EUR.code;
        const quoteEURP = quote.bpi.EUR.rate;
        const quoteGBP = quote.bpi.GBP.code;
        const quoteGBPP = quote.bpi.GBP.rate;

        const quoteTemplate = QuoteTemplate({time: date, quote: quoteDisclaimer, coin: quoteCoin, USD: quoteUSD, USD_P: quoteUSDP, EUR: quoteEUR, EUR_P: quoteEURP, GBP: quoteGBP, GBP_P: quoteGBPP})
        this.$els.quoteContainer.html(quoteTemplate);
        this.$els.container.addClass('is-ready');
        }

}
