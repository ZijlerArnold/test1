console.log('Jij bent goed bezig man :-)');
console.log('=====Toggle Menu Color =====');
console.log('');


// ===== Hamburger icon =====
document.querySelector('#button').addEventListener('mouseover', (e) => {
    e.preventDefault();
    console.log('Jij bent goed bezig man :-)');
    const colorBox = document.querySelector('#color-box')
    // colorBox.classList.toggle('show-box');   
    // console.log(colorBox);
    if (colorBox.style.display !== 'block') {
        colorBox.style.display = 'block';
    }
    else {
        colorBox.style.display = 'none';
    }
});

// ===== Color Bars =====
colors = document.querySelectorAll('.color');

colors.forEach((color) => {
    console.log(color);
});



// colors = document.querySelectorAll('.color');

// colors[0].addEventListener('click', (e) => {
//     document.body.style.background = 'red';
// });

// colors[1].addEventListener('click', (e) => {
//     document.body.style.background = 'blue';
// });

// colors[2].addEventListener('click', (e) => {
//     document.body.style.background = 'yellow';
// });

// colors[3].addEventListener('click', (e) => {
//     document.body.style.background = 'pink';
// });

// colors[4].addEventListener('click', (e) => {
//     document.body.style.background = 'green';
// });









    // if (ul.style.display === 'block') {
    //     ul.style.display = 'none';
    // } else {
    //     ul.style.display = 'block';
    // }
    //ul.remove(); //Hier moet een Toggle functie voor komen.







// ===== Color beams
// const colors = document.querySelectorAll('.color');

// for (let i = 0; i < colors.length; i++) {
//     colors[i].addEventListener('click', function () {
//         console.log(colors[i]);
//     });


// }











// colors[0].addEventListener('click', (e) => {
//     e.preventDefault();
//     document.querySelector('body').style.background = 'red';
// });

// colors[1].addEventListener('click', (e) => {
//     e.preventDefault();
//     document.querySelector('body').style.background = 'blue';
// });

// colors[2].addEventListener('click', (e) => {
//     e.preventDefault();
//     document.querySelector('body').style.background = 'yellow';
// });

// colors[3].addEventListener('click', (e) => {
//     e.preventDefault();
//     document.querySelector('body').style.background = 'pink';
// });

// colors[4].addEventListener('click', (e) => {
//     e.preventDefault();
//     document.querySelector('body').style.background = 'green';
// });
