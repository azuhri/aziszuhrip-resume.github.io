const contact = document.getElementById('contact');
const kontak = document.getElementById('kontak');

const active1 = document.querySelector('.list li:nth-child(1) a');
const active2 = document.querySelector('.list li:nth-child(2) a');
const active3 = document.querySelector('.list li:nth-child(3) a');
const active4 = document.querySelector('.list li:nth-child(4) a');

active1.addEventListener('click', function() {
    active1.classList.toggle('active')
});

active2.addEventListener('click', function() {
    active2.classList.toggle('active')
});

active3.addEventListener('click', function() {
    active3.classList.toggle('active')

});

active4.addEventListener('click', function() {
    active4.classList.toggle('active')
});

active1.addEventListener('click', function() {
    active2.classList.remove('active')
    active3.classList.remove('active')
    active4.classList.remove('active')
});

active2.addEventListener('click', function() {
    active1.classList.remove('active')
    active3.classList.remove('active')
    active4.classList.remove('active')
});

active3.addEventListener('click', function() {
    active1.classList.remove('active')
    active2.classList.remove('active')
    active4.classList.remove('active')
})

active4.addEventListener('click', function() {
    active1.classList.remove('active')
    active2.classList.remove('active')
    active3.classList.remove('active')
});

const slide = document.querySelector('.main2');
active3.addEventListener('click', function(){
    slide.classList.toggle('slide');
    slide.classList.toggle('slide-out');
})

const resume = document.getElementById('resume');
// resume.style.backgroundColor = 'red'
resume.addEventListener('click', function(){
    document.location.href = 'https://drive.google.com/file/d/1BrAuOgqEm2T479gK9daewTdC2lBg-kRN/view?usp=sharing';
});

const exp = document.getElementById('exp');
// exp.style.backgroundColor = 'red'
exp.addEventListener('click', function() {
    slide.classList.toggle('slide');
    slide.classList.toggle('slide-out');
})

//testing
// active.style.backgroundColor = 'red';
// kontak.addEventListener('click', function(){
//     const contact = document.getElementById('contact');
//     body.location.href = '#contact';
// })