class Card {
    constructor(domElement) {
        this.domElement = domElement;

        this.cardSelect = this.domElement.querySelector('.description');
        console.log(this.cardSelect);

        this.domElement.addEventListener('click', () => this.selectPic());
    }
    selectPic() {
        const tab = document.querySelectorAll('.description');
        Array.from(tab).map(tab => tab.classList.remove('card-selected'));
        this.cardSelect.classList.add('card-selected');
    }
}

let userPosts = document.querySelectorAll('.user-card').forEach(card => new Card(card));