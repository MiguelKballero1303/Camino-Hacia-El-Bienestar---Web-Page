// Main JavaScript functionality for the psychology website

document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu functionality
  const mobileMenuBtn = document.getElementById("mobile-menu-btn")
  const mobileMenu = document.getElementById("mobile-menu")

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden")
      const icon = mobileMenuBtn.querySelector("i")
      if (mobileMenu.classList.contains("hidden")) {
        icon.classList.remove("fa-times")
        icon.classList.add("fa-bars")
      } else {
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-times")
      }
    })
  }

  // Carousel functionality
  const carousel = document.getElementById("carousel")
  const prevBtn = document.getElementById("prev-btn")
  const nextBtn = document.getElementById("next-btn")

  if (carousel && prevBtn && nextBtn) {
    let currentSlide = 0
    const slides = carousel.querySelectorAll(".carousel-slide")
    const totalSlides = slides.length

    function updateCarousel() {
      const translateX = -currentSlide * 100
      carousel.style.transform = `translateX(${translateX}%)`
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides
      updateCarousel()
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides
      updateCarousel()
    }

    nextBtn.addEventListener("click", nextSlide)
    prevBtn.addEventListener("click", prevSlide)

    // Auto-advance carousel every 5 seconds
    setInterval(nextSlide, 5000)
  }

  // Contact form functionality
  const contactForm = document.getElementById("contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form data
      const formData = new FormData(contactForm)
      const data = Object.fromEntries(formData)

      // Simple validation
      if (!data.nombre || !data.email || !data.telefono || !data.servicio || !data.mensaje) {
        alert("Por favor, completa todos los campos requeridos.")
        return
      }

      if (!data.privacidad) {
        alert("Debes aceptar la política de privacidad para continuar.")
        return
      }

      // Simulate form submission
      const submitBtn = contactForm.querySelector('button[type="submit"]')
      const originalText = submitBtn.textContent
      submitBtn.textContent = "Enviando..."
      submitBtn.disabled = true

      setTimeout(() => {
        alert("¡Mensaje enviado exitosamente! Te contactaremos pronto.")
        contactForm.reset()
        submitBtn.textContent = originalText
        submitBtn.disabled = false
      }, 2000)
    })
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Add animation classes on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fadeInUp")
      }
    })
  }, observerOptions)

  // Observe elements for animation
  document.querySelectorAll(".shadow-lg, .bg-white, .bg-gradient-to-br").forEach((el) => {
    observer.observe(el)
  })

  // Add loading states to buttons
  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", function () {
      if (this.type !== "submit") {
        const originalText = this.textContent
        this.textContent = "Cargando..."
        this.disabled = true

        setTimeout(() => {
          this.textContent = originalText
          this.disabled = false
        }, 1000)
      }
    })
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (mobileMenu && !mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
      mobileMenu.classList.add("hidden")
      const icon = mobileMenuBtn.querySelector("i")
      icon.classList.remove("fa-times")
      icon.classList.add("fa-bars")
    }
  })

  // Add current page highlighting to navigation
  const currentPage = window.location.pathname.split("/").pop() || "index.html"
  document.querySelectorAll("nav a").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("bg-pink-500")
      link.classList.remove("hover:bg-white", "hover:bg-opacity-20")
    }
  })
})

// Utility functions
function showNotification(message, type = "success") {
  const notification = document.createElement("div")
  notification.className = `fixed top-4 right-4 p-4 rounded-lg text-white z-50 ${
    type === "success" ? "bg-green-500" : "bg-red-500"
  }`
  notification.textContent = message

  document.body.appendChild(notification)

  setTimeout(() => {
    notification.remove()
  }, 3000)
}

// Form validation helper
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

function validatePhone(phone) {
  const re = /^[+]?[1-9][\d]{0,15}$/
  return re.test(phone.replace(/\s/g, ""))
}
