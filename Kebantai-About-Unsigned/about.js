let menuToggle = document.querySelector('.navigation-toggle');
let rightTab = document.querySelector('.right-header-tab');
let darkBackground = document.querySelector('.dark-background');

darkBackground.addEventListener('click', () => {
    darkBackground.classList.remove('active');
    rightTab.classList.remove('active');
});
  
menuToggle.addEventListener('click', () => {
    rightTab.classList.add('active');
    darkBackground.classList.add('active');
});

card1 = document.getElementById('card-1');
card2 = document.getElementById('card-2');
card3 = document.getElementById('card-3');

cardToggles = document.querySelectorAll('.card-box-lower');

// card1.addEventListener('click', () => {
//     if (card2.classList.contains('active')) {
//         card2.classList.remove('active');
//     } 
//     if (card3.classList.contains('active')) {
//         card3.classList.remove('active');
//     }
//     card1.classList.add('active');
// })

// card2.addEventListener('click', () => {
//     if (card1.classList.contains('active')) {
//         card1.classList.remove('active');
//     } 
//     if (card3.classList.contains('active')) {
//         card3.classList.remove('active');
//     }
//     card2.classList.add('active');
// })

// card3.addEventListener('click', () => {
//     if (card1.classList.contains('active')) {
//         card1.classList.remove('active');
//     } 
//     if (card2.classList.contains('active')) {
//         card2.classList.remove('active');
//     }
//     card3.classList.add('active');
// })

for (let i = 0; i < cardToggles.length; i++) {
    cardToggles[0].addEventListener('click', () => {
        if (card2.classList.contains('active')) {
            card2.classList.remove('active');
        } 
        if (card3.classList.contains('active')) {
            card3.classList.remove('active');
        }
        card1.classList.toggle('active');
    })

    cardToggles[1].addEventListener('click', () => {
        if (card1.classList.contains('active')) {
            card1.classList.remove('active');
        } 
        if (card3.classList.contains('active')) {
            card3.classList.remove('active');
        }
        card2.classList.toggle('active');
    })

    cardToggles[2].addEventListener('click', () => {
        if (card1.classList.contains('active')) {
            card1.classList.remove('active');
        } 
        if (card2.classList.contains('active')) {
            card2.classList.remove('active');
        }
        card3.classList.toggle('active');
    })
}