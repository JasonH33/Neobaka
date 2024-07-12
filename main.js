// Opens Menu
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show');
  });
}

// Toggle Menu
const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show');
  });
}

// Active links
const sections = document.querySelectorAll('main section[id]');
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active');
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active');
    }
  }
}

// Smooth Scroll for Internal Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    }
  });
});

// Random Banner Image
const images = [
  "assets/backgrounds/toshi_banner_site_neo.png",
  "assets/backgrounds/eeiris_banner_site_neo.png",
  "assets/backgrounds/dante_banner_site_neo.png",
  "assets/backgrounds/ravi_banner_site_neo.png"
];
const randomIndex = Math.floor(Math.random() * images.length);
const bannerImage = document.createElement('img');
bannerImage.src = images[randomIndex];
bannerImage.style.width = '100%';
bannerImage.style.height = '100%';

const banner = document.querySelector('.banner');
if (banner) {
  banner.appendChild(bannerImage);
}

// Carousel
const carousel = document.querySelector('.carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselTitle = document.getElementById('carouselTitle');
const carouselText = document.getElementById('carouselText');

let index = 0;
const texts = [
  "A primeira geração de Talentos é composta por três integrantes, conhecidos como os Viajantes. Cada um deles possui uma história única que os envolve em aventuras através do tempo.",
  "A segunda geração, chamada de Destinados, é formada por humanos que por sua história individual obtém uma joia consagrada (colares), cada um contendo o poder selado de um deus elementar nomeado de Mentores.",
  "A geração Extra, denominada NeoX, é composta por criadores de conteúdo já conhecidos pelo público, que decidiram se juntar à parceria com a agência"
];

const updateContent = () => {
  const groupIndex = Math.floor(index / 3);
  carouselTitle.textContent = `${groupIndex + 1}° GERAÇÃO • `;
  carouselText.textContent = texts[groupIndex];
};

const showSlide = () => {
  const totalSlides = document.querySelectorAll('.carousel-cell').length;
  const maxIndex = totalSlides - 3;
  if (index < 0) index = 0;
  if (index > maxIndex) index = maxIndex;
  carousel.style.transform = `translateX(-${index * (100 / 3)}%)`;
};

prevBtn.addEventListener('click', () => {
  index -= 3;
  if (index < 0) index = maxIndex;
  updateContent();
  showSlide();
});

nextBtn.addEventListener('click', () => {
  index += 3;
  const totalSlides = document.querySelectorAll('.carousel-cell').length;
  const maxIndex = totalSlides - 3;
  if (index > maxIndex) index = 0;
  updateContent();
  showSlide();
});

updateContent();
showSlide();

//Pop-up
const bannerPop = document.querySelector('.popup-wrapper-banner')
const tozi = document.querySelector('.popup-wrapper-toshi')
const dante = document.querySelector('.popup-wrapper-dante')
const eeiris = document.querySelector('.popup-wrapper-eeiris')
const ravi = document.querySelector('.popup-wrapper-raviel')
const eve = document.querySelector('.popup-wrapper-eveline')
const torajo = document.querySelector('.popup-wrapper-torajo')
const emi = document.querySelector('.popup-wrapper-emi')

function openT() {
  tozi.style.display = 'block'
}

function openD() {
  dante.style.display = 'block'
}

function openE() {
  eeiris.style.display = 'block'
}

function openR() {
  ravi.style.display = 'block'
}

function openV() {
  eve.style.display = 'block'
}

function openA() {
  torajo.style.display = 'block'
}

function openK() {
  emi.style.display = 'block'
}

function closeP() {
  if (bannerPop) {
    bannerPop.style.display = 'none';
  }
  if (tozi) {
    tozi.style.display = 'none';
  }
  if (dante) {
    dante.style.display = 'none';
  }
  if (eeiris) {
    eeiris.style.display = 'none';
  }
  if (ravi) {
    ravi.style.display = 'none';
  }
  if (eve) {
    eve.style.display = 'none';
  }
  if (torajo) {
    torajo.style.display = 'none';
  }
  if (emi) {
    emi.style.display = 'none';
  }
}

// Função para esconder o banner após 5 segundos
function hideBannerAfterDelay() {
  setTimeout(() => {
    closeP();
  }, 5000); // 5000 ms = 5 segundos
}
hideBannerAfterDelay();
