// 1. Controle da Barra de Progresso de Leitura
window.onscroll = function() {
    updateProgressBar();
    updateHeader();
};

function updateProgressBar() {
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    let totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollPercentage = (scrollPosition / totalHeight) * 100;
    document.getElementById("progressBar").style.width = scrollPercentage + "%";
}

// 2. Muda o fundo do header ao rolar a página
const header = document.getElementById('main-header');
function updateHeader() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// 3. Lógica do Menu Mobile (Hambúrguer)
const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('#nav-menu ul li a');

// Abre/fecha o menu ao clicar no ícone
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    const icon = menuToggle.querySelector('i');
    if(navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Fecha o menu automaticamente quando clica em um link (no celular)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// 4. Animação de entrada suave dos blocos ao rolar a página
const blocos = document.querySelectorAll('.animar');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.15 });

blocos.forEach(bloco => observer.observe(bloco));