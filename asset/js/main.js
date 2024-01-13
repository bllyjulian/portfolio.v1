document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress_bar");
  const progressPercentages = document.querySelectorAll(".progress_name span:last-child");

  function checkScroll() {
    progressBars.forEach((progressBar, index) => {
      const boxTop = progressBar.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (boxTop < windowHeight * 0.8) {
        const targetPercentage = parseInt(progressBar.dataset.progress);
        let currentPercentage = 0;

        let start = null;
        function step(timestamp) {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          currentPercentage = Math.min((progress / 1000) * targetPercentage, targetPercentage);
          progressBar.style.width = `${currentPercentage}%`;
          progressPercentages[index].textContent = `${Math.floor(currentPercentage)}%`; // Update teks persentase
          if (progress < 1000) {
            window.requestAnimationFrame(step);
          }
        }
        window.requestAnimationFrame(step);
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
});

document.addEventListener("DOMContentLoaded", () => {
  const resumeWraps = document.querySelectorAll(".resume_wrap");

  function checkScroll() {
    resumeWraps.forEach((resumeWrap) => {
      const boxTop = resumeWrap.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const hasAnimatedClass = resumeWrap.classList.contains("animated");

      // Jika elemen ada di dalam viewport
      if (boxTop < windowHeight * 0.8 && !hasAnimatedClass) {
        resumeWrap.classList.add("animated");
        resumeWrap.dataset.animated = "true"; // Menandai bahwa animasi sudah dimainkan
      } else if (boxTop > windowHeight && hasAnimatedClass) {
        // Jika elemen telah lewat viewport, hapus kelas animated
        resumeWrap.classList.remove("animated");
        resumeWrap.removeAttribute("data-animated"); // Menghapus penanda animasi
      }
    });
  }

  window.addEventListener("scroll", checkScroll);

  // Trigger scroll check once on page load
  checkScroll();
});

document.addEventListener("DOMContentLoaded", () => {
  const aboutContainers = document.querySelectorAll(".about_container");

  function checkScroll() {
    aboutContainers.forEach((aboutContainer) => {
      const boxTop = aboutContainer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const hasAnimatedClass = aboutContainer.classList.contains("animated");

      if (boxTop < windowHeight * 0.6 && !hasAnimatedClass) {
        aboutContainer.classList.add("animated");
      } else if (boxTop > windowHeight && hasAnimatedClass) {
        aboutContainer.classList.remove("animated");
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Trigger scroll check once on page load
});
document.addEventListener("DOMContentLoaded", () => {
  const portfolioItems = document.querySelectorAll(".portfolio_item");

  function checkScroll() {
    portfolioItems.forEach((portfolioItem) => {
      const boxTop = portfolioItem.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const hasAnimatedClass = portfolioItem.classList.contains("animated");

      if (boxTop < windowHeight * 0.8 && !hasAnimatedClass) {
        portfolioItem.classList.add("animated");
        portfolioItem.dataset.animated = "true"; // Menandai bahwa animasi sudah dimainkan
      } else if (boxTop > windowHeight && hasAnimatedClass) {
        // Jika elemen telah lewat viewport, hapus kelas animated
        portfolioItem.classList.remove("animated");
        portfolioItem.removeAttribute("data-animated"); // Menghapus penanda animasi
      }
    });
  }

  window.addEventListener("scroll", checkScroll);

  // Trigger scroll check once on page load
  checkScroll();
});

document.addEventListener("DOMContentLoaded", () => {
  const testimonialItems = document.querySelectorAll(".testimonial_item");

  function checkScroll() {
    testimonialItems.forEach((testimonialItem) => {
      const boxTop = testimonialItem.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const hasAnimatedClass = testimonialItem.classList.contains("animated");

      if (boxTop < windowHeight * 0.5 && !hasAnimatedClass) {
        testimonialItem.classList.add("animated");
        testimonialItem.dataset.animated = "true"; // Menandai bahwa animasi sudah dimainkan
      } else if (boxTop > windowHeight && hasAnimatedClass) {
        // Jika elemen telah lewat viewport, hapus kelas animated
        testimonialItem.classList.remove("animated");
        testimonialItem.removeAttribute("data-animated"); // Menghapus penanda animasi
      }
    });
  }

  window.addEventListener("scroll", checkScroll);

  // Trigger scroll check once on page load
  checkScroll();
});

document.addEventListener("DOMContentLoaded", () => {
  const servicesItems = document.querySelectorAll(".services_container");

  function checkScroll() {
    servicesItems.forEach((servicesItem) => {
      const boxTop = servicesItem.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const hasAnimatedClass = servicesItem.classList.contains("animated");

      if (boxTop < windowHeight * 0.8 && !hasAnimatedClass) {
        servicesItem.classList.add("animated");
        servicesItem.dataset.animated = "true";
      } else if (boxTop > windowHeight && hasAnimatedClass) {
        servicesItem.classList.remove("animated");
        servicesItem.removeAttribute("data-animated");
      }
    });
  }

  window.addEventListener("scroll", checkScroll);

  // Trigger scroll check once on page load
  checkScroll();
});



const changeColorButton = document.getElementById('changeColorButton');
let currentColor = false;

changeColorButton.addEventListener('click', function(event) {
  event.preventDefault(); // Mencegah tindakan bawaan anchor

  if (!currentColor || currentColor === 'yellow') {
    document.documentElement.style.setProperty('--main-color', '#038994');
    currentColor = '#038994';
  } else {
    document.documentElement.style.setProperty('--main-color', '#F9AC40');
    currentColor = 'yellow';
  }
});

changeColorButton.addEventListener('mouseenter', function() {
  if (currentColor === '#038994') {
    changeColorButton.style.backgroundColor = '#F9AC40';
  }
});
changeColorButton.addEventListener('mouseleave', function() {
  if (currentColor === 'yellow') {
    changeColorButton.style.backgroundColor = '#fff';
  }
});
changeColorButton.addEventListener('mouseenter', function() {
  if (currentColor === 'yellow') {
    changeColorButton.style.backgroundColor = '#038994';
  }
});
changeColorButton.addEventListener('mouseleave', function() {
  if (currentColor === '#038994') {
    changeColorButton.style.backgroundColor = '#fff';
  }
});


const iconToggle = document.querySelector('.toggle_icon');
const navbarMenu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu_link');
const iconClose = document.querySelector('.close_icon');


iconToggle.addEventListener('click', ()=> {
  navbarMenu.classList.toggle('active');
});

iconClose.addEventListener('click', ()=> {
  navbarMenu.classList.remove('active');
});

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', () => {
    navbarMenu.classList.remove('active');
  })
})

function scrollHeader(){
  const header = document.getElementById('header');
  this.scrollY >= 20 ? header.classList.add('active') : header.classList.remove('active');
}
window.addEventListener('scroll', scrollHeader);

const typed = document.querySelector('.typed');
if(typed) {
  let typed_string = typed.getAttribute('data-typed-items');
  typed_string = typed_string.split(',');
  new Typed('.typed', {
    strings: typed_string,
    loop:true,
    typeSpeed: 110,
    backSpeed: 50,
    backDelay: 1000
  }); 
}


//nav scroll

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 50;

    let sectionId = section.getAttribute('id');

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.menu a[href *=' + sectionId + ']').classList.add('active-link');
    }else {
      document.querySelector('.menu a[href *=' + sectionId + ']').classList.remove('active-link');
    }
  })
}


window.addEventListener("scroll", scrollActive);

// //resume scroll
const pages = document.querySelectorAll('.page');
const resume = document.querySelector('resume');

function resumeActive() {
  const scrollY = window.pageYOffset;

  pages.forEach(page => {
    const sectionHeight = page.offsetHeight;
    const sectionTop = page.offsetTop - 200;

    let sectionId = page.getAttribute('id');

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.resume_tabs a[href *=' + sectionId + ']').classList.add('current');
    }else {
      document.querySelector('.resume_tabs a[href *=' + sectionId + ']').classList.remove('current');
    }
  })
}

window.addEventListener('scroll', resumeActive)

// portfolio
let filterItems = document.querySelectorAll('.portfolio_filters li');
let allFilter = document.querySelector('.portfolio_filters li[data-filter="*"]');
let isAllActive = false; // Menyimpan status apakah filter "All" sedang aktif

function limitItems() {
  let allItems = document.querySelectorAll('.portfolio_item');
  let hiddenItems = Array.from(allItems).slice(6);

  // Sembunyikan item setelah index 5 jika filter "All" sedang tidak aktif
  if (!isAllActive) {
    hiddenItems.forEach(item => {
      item.style.display = 'none';
    });
  }
}

function activePortfolio() {
  filterItems.forEach(el => {
    el.classList.remove('filter-active');
  });

  // Jika "All" yang diklik
  if (this === allFilter) {
    isAllActive = !isAllActive; // Toggle status
    this.classList.add('filter-active');

    let allItems = document.querySelectorAll('.portfolio_item');

    // Tampilkan semua item jika filter "All" aktif
    if (isAllActive) {
      allItems.forEach(item => {
        item.style.display = 'block';
      });
      // Ganti teks menjadi "Show All"
      this.textContent = "All";
    } else {
      // Jika filter "All" tidak aktif, panggil fungsi limitItems
      limitItems();
      // Ganti teks menjadi "Show 6 Items"
      this.textContent = "Less";
    }
  } else {
    this.classList.add('filter-active');

    // Sembunyikan item sebelum menampilkan item yang sesuai dengan filter yang diklik
    let allItems = document.querySelectorAll('.portfolio_item');
    allItems.forEach(item => {
      item.style.display = 'none';
    });

    // Tampilkan item yang sesuai dengan filter yang diklik
    let selectedItems = document.querySelectorAll(`.portfolio_item${this.getAttribute('data-filter')}`);
    selectedItems.forEach(item => {
      item.style.display = 'block';
    });
  }
}

filterItems.forEach(el => {
  el.addEventListener('click', activePortfolio);
})

// mixitup
let mixerPortfolio = mixitup('.portfolio_wrap-container', {
  selectors: {
    target: '.portfolio_item'
  },
  animation: {
    duration: 300
  }
});

let swiper = new Swiper(".testimonial_container", {
  effect: 'slide',
  loop:true,
  slidesPerView:1,
  grabCursor:true,
  spaceBetween:100,
  breakpoints: {
    768: {
      slidesPerView: 2,
    }
  }
});

// Panggil fungsi limitItems saat dokumen dimuat
document.addEventListener('DOMContentLoaded', limitItems);

// services
let modalBtns = document.querySelectorAll('.services_button'),
    modalViews = document.querySelectorAll(".services_modal"),
    modalClose = document.querySelectorAll(".modal_close-icon");


let modal = function(modalClick) {
  modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () => {
    modal(i)
  })
})

modalClose.forEach(el => {
  el.addEventListener('click', () => {
    modalViews.forEach(modalView => {
      modalView.classList.remove('active-modal')
    })
  })
})
