document.addEventListener("DOMContentLoaded", function() {
    const awardsSection = document.querySelector('.awards');
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    function showAwards() {
        if (isInViewport(awardsSection)) {
            awardsSection.classList.add('visible');
        }
    }
    showAwards();
    window.addEventListener('scroll', showAwards);
});
 


$(document).ready(function() {
    $('.solutions-container').slick({
        slidesToShow: 4,   
        slidesToScroll: 1, 
        infinite: true, 
        autoplay: true, 
      autoplaySpeed: 3000, 
        prevArrow: '#prevBtn', 
        nextArrow: '#nextBtn', 
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1, 
                    slidesToScroll: 1 
                }
            }
        ]
    });
});


    $(document).ready(function(){
    $('.testimonial-wrapper').slick({
      infinite: true, 
      slidesToShow: 1,
      slidesToScroll: 1, 
      arrows: false, 
      autoplay: true,
      autoplaySpeed: 3000, 
      dots: true, 
    });

    $('#prevTestimonial').on('click', function() {
      $('.testimonial-wrapper').slick('slickPrev');
    });

    $('#nextTestimonial').on('click', function() {
      $('.testimonial-wrapper').slick('slickNext');
    });
  });

  document.addEventListener("DOMContentLoaded", function () {

    function startCounting(element, target) {
        let count = 0;
        const increment = target / 100;
        const interval = setInterval(() => {
            count += increment;
            if (count >= target) {
                clearInterval(interval);
                element.textContent = target + '+';
            } else {
                element.textContent = Math.floor(count) + '+';
            }
        }, 20); 
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                const stat = entry.target;
                const target = parseInt(stat.textContent.replace('+', '')); 
                startCounting(stat, target);

                observer.unobserve(stat);
            }
        });
    }, { threshold: 0.5 });
    const stats = document.querySelectorAll('.stat h3');
    stats.forEach(stat => {
        observer.observe(stat);
    });
});

window.onscroll = function() {
    var navbar = document.querySelector("header");
    var screenWidth = window.innerWidth;
    if (screenWidth <= 786) {
      if (window.scrollY > 50) { 
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
  };

  document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      const cardText = this.previousElementSibling;
  
      if (cardText.classList.contains('full-text')) {
        cardText.classList.remove('full-text');
        this.textContent = 'Read More ↗';
      } else {
        cardText.classList.add('full-text');
        this.textContent = 'Read Less ↗';
      }
    });
  });
  





/*document.addEventListener("DOMContentLoaded", function() {
    const solutionsContainer = document.querySelector('.solutions-container-wrapper');
    const solutionCards = document.querySelectorAll('.solution-card');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Define the scroll step
    const scrollStep = 800; // Adjust this value to match your card width

    // Function to update active card based on scroll position
    function updateActiveCard() {
        const scrollLeft = solutionsContainer.scrollLeft;
        const containerWidth = solutionsContainer.clientWidth;
        const middlePosition = scrollLeft + containerWidth / 2;

        solutionCards.forEach(card => {
            const cardLeft = card.offsetLeft;
            const cardRight = cardLeft + card.offsetWidth;
            if (middlePosition > cardLeft && middlePosition < cardRight) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });
    }

    // Add event listeners to the buttons with smooth scrolling
    nextBtn.addEventListener('click', () => {
        solutionsContainer.classList.add('scrolling'); // Add shadow
        solutionsContainer.scrollBy({
            left: scrollStep,  // Scroll to the right
            behavior: 'smooth' // Smooth scroll
        });
        setTimeout(() => {
            solutionsContainer.classList.remove('scrolling'); // Remove shadow after scrolling
        }, 400);
    });

    prevBtn.addEventListener('click', () => {
        solutionsContainer.classList.add('scrolling'); // Add shadow
        solutionsContainer.scrollBy({
            left: -scrollStep, // Scroll to the left
            behavior: 'smooth' // Smooth scroll
        });
        setTimeout(() => {
            solutionsContainer.classList.remove('scrolling'); // Remove shadow after scrolling
        }, 400);
    });

    // Update active card on scroll
    solutionsContainer.addEventListener('scroll', updateActiveCard);
});


document.addEventListener("DOMContentLoaded", function () {
    // Function to start counting
    function startCounting(element, target) {
        let count = 0;
        const increment = target / 100; // Adjust the number of steps
        const interval = setInterval(() => {
            count += increment;
            if (count >= target) {
                clearInterval(interval);
                element.textContent = target + '+';
            } else {
                element.textContent = Math.floor(count) + '+';
            }
        }, 20); // Adjust the speed (lower number for faster count)
    }

    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Start counting when the element is visible
                const stat = entry.target;
                const target = parseInt(stat.textContent.replace('+', '')); // Get the target number
                startCounting(stat, target);
                // Stop observing this element after counting has started
                observer.unobserve(stat);
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is in view

    // Get all the stat elements
    const stats = document.querySelectorAll('.stat h3');

    // Observe each stat element
    stats.forEach(stat => {
        observer.observe(stat);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const testimonialWrapper = document.querySelector('.testimonial-wrapper');
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');

    // Define the scroll step
    const scrollStep = 1000; // Adjust this value to match your testimonial width

    // Add event listeners to the buttons with smooth scrolling
    nextBtn.addEventListener('click', () => {
        testimonialWrapper.scrollBy({
            left: scrollStep,  // Scroll to the right
            behavior: 'smooth' // Smooth scroll
        });
    });

    prevBtn.addEventListener('click', () => {
        testimonialWrapper.scrollBy({
            left: -scrollStep, // Scroll to the left
            behavior: 'smooth' // Smooth scroll
        });
    });
});*/

