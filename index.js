const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controls');
const secBtn = document.querySelectorAll('.control');
const allSec = document.getElementById('content-wrap');

function pageSwitch () {
    for (let i = 0; i < secBtn.length; i++) {
        secBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        });
    }

    // Active sections
    allSec.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            secBtns.forEach((btn) => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active')

            // Hide sections

            sections.forEach((sections) => {
                sections.classList.remove('active');
            });

            const el = document.getElementById(id);
            el.classList.add('active');
        }
    });
}

// Toggle body color change

const switchBtn = document.getElementById('switchColor');

switchBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('switchMode');
});



pageSwitch();



