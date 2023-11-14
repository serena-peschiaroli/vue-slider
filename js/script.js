/* Array per l'indice circolare:
const imageData = [ 'image1.png', 'img2.png', 'img3.png' ];
let currentImage = 0;

const nextImage = () => currentImage = (currentImage + 1) % imageData.length;

const prevImage = () => currentImage = (currentImage - 1 + imageData.length) % imageData.length;*/

const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Vivi la crescita di Miles Morales, il nuovo eroe che padroneggia incredibili ed esplosivi poteri per diventare il proprio Spider-Man.',
                },
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Esplora dimensioni con Ratchet and Clank mentre affrontano un malvagio imperatore proveniente da un\'altra realtà.',
                },
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Unisci tutti i tuoi amici e tuffati in Fortnite di Epic Games, un massiccio scontro a 100 giocatori che unisce saccheggi, creazioni, sparatorie e caos.",
                },
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Perso, ferito e solo, un gatto randagio deve districare un antico mistero per sfuggire a una città dimenticata da tempo.',
                },
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers è un epico gioco d\'azione e avventura in terza persona che unisce una storia originale e cinematografica a un gameplay in singolo e cooperativo.',
                }
            ],
            activeIndex: 0,
        };
    },
    // Funzioni:
    methods: {
        // Per impostare l'indice attivo
        setActiveIndex(index) {
            console.log("indice attivo su", index);

            this.activeIndex = index;
        },
        // Indice circolare per la slide successiva
        nextSlide() {
            console.log("next slide");
            this.activeIndex = (this.activeIndex + 1) % this.slides.length;
        },
        // Indice circolare per la slide precedente
        prevSlide() {
            console.log("previous slide");
            this.activeIndex = (this.activeIndex - 1 + this.slides.length) % this.slides.length;
        },
        // Metti in pausa l'autoplay
        pauseAutoplay() {
            console.log("autoplay in pausa");
            clearInterval(this.autoplayInterval);
        },
        // Riprendi l'autoplay
        resumeAutoplay() {
            console.log("autoplay ripresa");
            this.autoplayInterval = setInterval(() => {
                this.nextSlide();
            }, 3000);
        }
    },
    mounted() {
        // Inizia l'autoplay alla creazione dell'app
        console.log("componente caricato");
        this.autoplayInterval = setInterval(() => {
            this.nextSlide();
        }, 3000);
    },
    beforeUnmount() {
        console.log("componente disattivato");
        // Pulisci l'intervallo
        clearInterval(this.autoplayInterval);
    }
});

// Monta l'applicazione all'elemento con id "app"
app.mount(`#app`);

// The beforeUnmount lifecycle hook in Vue.js is called right before a Vue component is unmounted from the DOM. This hook is useful for performing cleanup tasks or clearing resources before the component is removed.