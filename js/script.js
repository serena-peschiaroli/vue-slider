/* circular index array: 
const imageData = [ 'image1.png', 'img2.png', 'img3.png' ];
let currentImage = 0;

const nextImage = () => currentImage = (currentImage + 1) % imageData.length;

const prevImage = () => currentImage = (currentImage - 1 + imageData.length) % imageData.length;*/


const {createApp} = Vue;

const app = createApp({
    data(){
        return{
            slides: [
                {image: 'img/01.webp',
                title: 'Marvel\'s Spiderman Miles Morale',
                text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
            }, 
            {
                image: 'img/02.webp',
                title: 'Ratchet & Clank: Rift Apart',
                text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
            }, 
            {
                image: 'img/03.webp',
                title: 'Fortnite',
                text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
            }, 
            {
                image: 'img/04.webp',
                title: 'Stray',
                text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
            }, 
            {
                image: 'img/05.webp',
                title: "Marvel's Avengers",
                text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
            }

            ],
            activeIndex : 0,

        };
    },
    //funzioni:
    methods: {
        //per settare l'index attivo
        setActiveIndex(index) {
            this.activeIndex = index;
        },
        //circular index per next slide 
        nextSlide() {
            this.activeIndex = (this.activeIndex + 1) % this.slides.length;
        },
        prevSlide(){
            //circular index per prev slide
            this.activeIndex = (this.activeIndex - 1 + this.slides.length) % this.slides.length;
        },
        pauseAutoplay() {
            clearInterval(this.autoplayInterval);
        },
        resumeAutoplay () {
            this.autoplayInterval = setInterval(() => {
                this.nextSlide();
            }, 3000);
        }
    },
    mounted () {
        this.autoplayInterval = setIterval(() => {
            this.nextSlide();
        }, 3000);
    },
    beforeUnmount(){
        clearInterval(this.autoplayInterval);
    }
});

app.mount(`#app`);



