class Card {
    constructor(domElement) {
        this.domElement = domElement;

        this.cardExpand = this.domElement.dataset.card;
        this
    }
}

let userPosts = document.querySelectorAll('.user-card').forEach(card => new Card(card));