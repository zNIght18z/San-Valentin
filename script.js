// Array de frases románticas
const frases = [
    {
        texto: "El amor no consiste en mirarse a los ojos, sino en mirar juntos en la misma dirección.",
        autor: "— Antoine de Saint-Exupéry"
    },
    {
        texto: "La vida es el flor de la cual el amor es la miel.",
        autor: "— Victor Hugo"
    },
    {
        texto: "Amar es cuando su felicidad es más importante que la mía.",
        autor: "— H. Jackson Brown Jr."
    },
    {
        texto: "En el amor, el silencio suele ser el lenguaje más elocuente.",
        autor: "— Shannon L. Alder"
    },
    {
        texto: "El amor verdadero no tiene final feliz porque el amor verdadero no tiene final.",
        autor: "— Anónimo"
    },
    {
        texto: "Te amo sin conocer exactamente qué es el amor.",
        autor: "— William Shakespeare"
    },
    {
        texto: "Amar no es mirarse el uno al otro, es mirar juntos en la misma dirección.",
        autor: "— Antoine de Saint-Exupéry"
    },
    {
        texto: "El corazón tiene sus razones que la razón desconoce.",
        autor: "— Blaise Pascal"
    },
    {
        texto: "La mejor y más hermosa de todas las cosas no pueden ser vistas ni tocadas, deben ser sentidas.",
        autor: "— Helen Keller"
    },
    {
        texto: "Eres mi hoy y todos mis mañanas.",
        autor: "— Anónimo"
    }
];

// Frases de sorpresa
const sorpresas = [
    "🌹 ¡Sorpresa! Prepara rosas rojas para tu persona especial.",
    "💌 ¡Sorpresa! Escribe una carta de amor a mano.",
    "🍫 ¡Sorpresa! Compra chocolates gourmet.",
    "🎭 ¡Sorpresa! Invita a cenar a tu lugar favorito.",
    "🎵 ¡Sorpresa! Crea una playlist de canciones especiales.",
    "📸 ¡Sorpresa! Prepara un álbum de fotos de recuerdos juntos.",
    "💍 ¡Sorpresa! Regala una joya con significado.",
    "🌙 ¡Sorpresa! Planifica un paseo bajo las estrellas.",
    "🎨 ¡Sorpresa! Encarga un retrato personalizado.",
    "🛍️ ¡Sorpresa! Prepara una caja sorpresa con detalles especiales.",
    "✍️ ¡Sorpresa! Escribe un poema especial.",
    "🍽️ ¡Sorpresa! Prepara una cena romántica en casa.",
    "🎁 ¡Sorpresa! Regala algo que sabes que desea.",
    "☕ ¡Sorpresa! Comparte un momento especial tomando café.",
    "🎉 ¡Sorpresa! Organiza una cena sorpresa con amigos."
];

// Función para cambiar la frase
function cambiarFrase() {
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    const frase = frases[indiceAleatorio];
    
    const quoteDisplay = document.getElementById('quote-display');
    if (quoteDisplay) {
        quoteDisplay.innerHTML = `
            <p>"${frase.texto}"</p>
            <footer>${frase.autor}</footer>
        `;
    }
}

// Función para mostrar una sorpresa aleatoria
function mostrarSorpresa() {
    const indiceSorpresa = Math.floor(Math.random() * sorpresas.length);
    const sorpresa = sorpresas[indiceSorpresa];
    
    // Crear un elemento temporal para mostrar la sorpresa
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #e91e63, #f06292);
        color: white;
        padding: 2rem;
        border-radius: 20px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.3);
        z-index: 1000;
        max-width: 400px;
        text-align: center;
        font-size: 1.3rem;
        animation: popIn 0.5s ease;
    `;
    
    modal.innerHTML = `
        <p style="margin: 0; font-size: 2rem; margin-bottom: 1rem;">✨</p>
        <p style="margin: 0; margin-bottom: 1.5rem;">${sorpresa}</p>
        <button onclick="this.parentElement.remove()" style="
            background: white;
            color: #e91e63;
            border: none;
            padding: 0.5rem 1.5rem;
            border-radius: 20px;
            cursor: pointer;
            font-weight: bold;
            font-size: 1rem;
        ">Cerrar</button>
    `;
    
    document.body.appendChild(modal);
    
    // Auto-cerrar después de 5 segundos
    setTimeout(() => {
        if (modal.parentElement) {
            modal.remove();
        }
    }, 5000);
}

// Función para scroll a la sección de cards
function scrollToSection() {
    const cardsSection = document.querySelector('.cards-grid');
    if (cardsSection) {
        cardsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Función para calcular el countdown hasta San Valentín
function actualizarCountdown() {
    // Obtener la fecha de San Valentín (14 de febrero)
    const ahora = new Date();
    const currentYear = ahora.getFullYear();
    let sanValentin = new Date(currentYear, 1, 14); // Mes 1 es febrero
    
    // Si San Valentín ya pasó este año, contar para el próximo
    if (ahora > sanValentin) {
        sanValentin = new Date(currentYear + 1, 1, 14);
    }
    
    // Calcular la diferencia
    const diferencia = sanValentin - ahora;
    
    // Convertir a días, horas, minutos y segundos
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
    
    // Actualizar los elementos
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    if (daysElement) daysElement.textContent = dias;
    if (hoursElement) hoursElement.textContent = horas;
    if (minutesElement) minutesElement.textContent = minutos;
    if (secondsElement) secondsElement.textContent = segundos;
}

// Actualizar countdown cada segundo
setInterval(actualizarCountdown, 1000);

// Inicializar countdown al cargar
document.addEventListener('DOMContentLoaded', function() {
    actualizarCountdown();
});

// Agregar efectos de animación suave
document.addEventListener('DOMContentLoaded', function() {
    // Animar elementos al hacer scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.card, .gift-card, .poem-card, .tip-section');
    elements.forEach(el => observer.observe(el));
});

// Agregar animación CSS con JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes popIn {
        0% {
            transform: translate(-50%, -50%) scale(0.3);
            opacity: 0;
        }
        70% {
            transform: translate(-50%, -50%) scale(1.1);
        }
        100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Validación de formularios y efectos adicionales
document.addEventListener('DOMContentLoaded', function() {
    // Marcar el enlace activo en la navbar
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage || 
            (currentPage === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    // Efecto hover en tarjetas
    document.querySelectorAll('.card, .gift-card, .poem-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Función para compartir en redes sociales (opcional)
function compartir(texto) {
    const urlShare = window.location.href;
    const textoCompleto = `${texto} ${urlShare}`;
    
    // Copiar al portapapeles
    navigator.clipboard.writeText(textoCompleto).then(() => {
        alert('¡Texto copiado! Puedes compartirlo en tus redes sociales.');
    }).catch(() => {
        alert('No se pudo copiar el texto');
    });
}

// ==========================================
// EFECTO DE CORAZONES SIGUIENDO AL CURSOR
// Basado en JavaScript Love Heart Cursor
// ==========================================

const heartConfig = {
    colours: ['#f00', '#f06', '#f0f', '#f6f', '#f39', '#f9c'],
    minisize: 16,
    maxisize: 28,
    hearts: 66,
    over_or_under: 'over'
};

let x = 400, ox = 400;
let y = 300, oy = 300;
let swide = 800, shigh = 600;
let sleft = 0, sdown = 0;
const herz = [];
const herzx = [];
const herzy = [];
const herzs = [];
let kiss = false;

function createHeartDiv() {
    const div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.height = 'auto';
    div.style.width = 'auto';
    div.style.overflow = 'hidden';
    div.style.backgroundColor = 'transparent';
    return div;
}

function initHearts() {
    if (!document.getElementById) return;
    
    for (let i = 0; i < heartConfig.hearts; i++) {
        const heart = createHeartDiv();
        heart.style.visibility = 'hidden';
        heart.style.zIndex = heartConfig.over_or_under === 'over' ? '1001' : '0';
        heart.style.color = heartConfig.colours[i % heartConfig.colours.length];
        heart.style.pointerEvents = 'none';
        heart.style.opacity = '0.75';
        heart.appendChild(document.createTextNode(String.fromCharCode(9829)));
        document.body.appendChild(heart);
        herz[i] = heart;
        herzy[i] = false;
    }
    
    setScroll();
    setWidth();
    animateHearts();
}

function animateHearts() {
    let c;
    if (Math.abs(x - ox) > 1 || Math.abs(y - oy) > 1) {
        ox = x;
        oy = y;
        for (c = 0; c < heartConfig.hearts; c++) {
            if (herzy[c] === false) {
                herz[c].firstChild.nodeValue = String.fromCharCode(9829);
                herz[c].style.left = (herzx[c] = x - heartConfig.minisize / 2) + 'px';
                herz[c].style.top = (herzy[c] = y - heartConfig.minisize) + 'px';
                herz[c].style.fontSize = heartConfig.minisize + 'px';
                herz[c].style.fontWeight = 'normal';
                herz[c].style.visibility = 'visible';
                herzs[c] = heartConfig.minisize;
                break;
            }
        }
    }
    
    for (c = 0; c < heartConfig.hearts; c++) {
        if (herzy[c] !== false) {
            animateHeartFall(c);
        }
    }
    setTimeout(animateHearts, 40);
}

function animateHeartFall(i) {
    herzy[i] -= herzs[i] / heartConfig.minisize + i % 2;
    herzx[i] += (i % 5 - 2) / 5;
    
    if (herzy[i] < sdown - herzs[i] || 
        herzx[i] < sleft - herzs[i] || 
        herzx[i] > sleft + swide - herzs[i]) {
        herz[i].style.visibility = 'hidden';
        herzy[i] = false;
    } else if (herzs[i] > heartConfig.minisize + 2 && Math.random() < 0.5 / heartConfig.hearts) {
        breakHeart(i);
    } else {
        if (Math.random() < heartConfig.maxisize / herzy[i] && herzs[i] < heartConfig.maxisize) {
            herz[i].style.fontSize = (++herzs[i]) + 'px';
        }
        herz[i].style.top = herzy[i] + 'px';
        herz[i].style.left = herzx[i] + 'px';
    }
}

function breakHeart(i) {
    herz[i].firstChild.nodeValue = String.fromCharCode(9676);
    herz[i].style.fontWeight = 'bold';
    herzy[i] = false;
    
    for (let t = herzs[i]; t <= heartConfig.maxisize; t++) {
        const fontSize = t + 'px';
        setTimeout(() => {
            herz[i].style.fontSize = fontSize;
        }, 60 * (t - herzs[i]));
    }
    
    setTimeout(() => {
        herz[i].style.visibility = 'hidden';
    }, 60 * (heartConfig.maxisize - herzs[i]));
}

function mouseDown() {
    ox = -1;
    oy = -1;
    kiss = setTimeout(mouseDown, 100);
}

function mouseMove(e) {
    if (e) {
        y = e.pageY;
        x = e.pageX;
    } else {
        setScroll();
        y = event.y + sdown;
        x = event.x + sleft;
    }
}

function setWidth() {
    let sw_min = 999999;
    let sh_min = 999999;
    
    if (document.documentElement && document.documentElement.clientWidth) {
        if (document.documentElement.clientWidth > 0) sw_min = document.documentElement.clientWidth;
        if (document.documentElement.clientHeight > 0) sh_min = document.documentElement.clientHeight;
    }
    
    if (typeof self.innerWidth === 'number' && self.innerWidth) {
        if (self.innerWidth > 0 && self.innerWidth < sw_min) sw_min = self.innerWidth;
        if (self.innerHeight > 0 && self.innerHeight < sh_min) sh_min = self.innerHeight;
    }
    
    if (document.body.clientWidth) {
        if (document.body.clientWidth > 0 && document.body.clientWidth < sw_min) sw_min = document.body.clientWidth;
        if (document.body.clientHeight > 0 && document.body.clientHeight < sh_min) sh_min = document.body.clientHeight;
    }
    
    if (sw_min === 999999 || sh_min === 999999) {
        sw_min = 800;
        sh_min = 600;
    }
    
    swide = sw_min;
    shigh = sh_min;
}

function setScroll() {
    if (typeof self.pageYOffset === 'number') {
        sdown = self.pageYOffset;
        sleft = self.pageXOffset;
    } else if (document.body && (document.body.scrollTop || document.body.scrollLeft)) {
        sdown = document.body.scrollTop;
        sleft = document.body.scrollLeft;
    } else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
        sleft = document.documentElement.scrollLeft;
        sdown = document.documentElement.scrollTop;
    } else {
        sdown = 0;
        sleft = 0;
    }
}

// Inicializar corazones cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHearts);
} else {
    initHearts();
}

// Event listeners para el efecto de corazones
document.addEventListener('mousemove', mouseMove);
document.addEventListener('mousedown', mouseDown);
document.addEventListener('mouseup', () => clearTimeout(kiss));
window.addEventListener('resize', setWidth);
window.addEventListener('scroll', setScroll);

