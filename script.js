window.onscroll = function() {
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    let totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    document.getElementById("progressBar").style.width = ((scrollPosition / totalHeight) * 100) + "%";
    
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
    
    if (window.scrollY < 300 && currentBgUrl !== heroBgUrl) {
        changeBackground(heroBgUrl);
    }
};

const bgLayer1 = document.getElementById('bg-layer-1');
const bgLayer2 = document.getElementById('bg-layer-2');
let currentLayer = 1;

const heroBgUrl = "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";
let currentBgUrl = heroBgUrl;

bgLayer1.style.backgroundImage = `url('${currentBgUrl}')`;

function changeBackground(newUrl) {
    if (newUrl === currentBgUrl) return; 
    
    currentBgUrl = newUrl;
    
    if (currentLayer === 1) {
        bgLayer2.style.backgroundImage = `url('${currentBgUrl}')`;
        setTimeout(() => {
            bgLayer2.classList.add('active'); 
            bgLayer1.classList.remove('active'); 
        }, 50); 
        currentLayer = 2;
    } else {
        bgLayer1.style.backgroundImage = `url('${currentBgUrl}')`;
        setTimeout(() => {
            bgLayer1.classList.add('active'); 
            bgLayer2.classList.remove('active'); 
        }, 50);
        currentLayer = 1;
    }
}

const blocos = document.querySelectorAll('.animar');
const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -30% 0px', 
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            const newBgUrl = entry.target.getAttribute('data-bg');
            if (newBgUrl) {
                changeBackground(newBgUrl);
            }
        }
    });
}, observerOptions);

blocos.forEach(bloco => observer.observe(bloco));