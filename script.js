// Smooth scrolling for navigation links
document.querySelectorAll("a[data-scroll]").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const targetId = link.getAttribute("href")
    const targetElement = document.querySelector(targetId)

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
      // Close mobile menu if open
      const navMenu = document.getElementById("navMenu")
      navMenu.classList.remove("active")
    }
  })
})

// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle")
const navMenu = document.getElementById("navMenu")

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")
})

// Close menu when a link is clicked
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
  })
})

// Update current year in footer
document.getElementById("year").textContent = new Date().getFullYear()

// Contact form submission
const contactForm = document.getElementById("contactForm")

contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form values
  const fullname = document.getElementById("fullname").value
  const email = document.getElementById("email").value
  const phone = document.getElementById("phone").value
  const practiceArea = document.getElementById("practice-area").value
  const caseSummary = document.getElementById("case-summary").value

  // Validate form
  if (!fullname || !email || !practiceArea || !caseSummary) {
    alert("Por favor, preencha todos os campos obrigatórios.")
    return
  }

  // Show success message
  alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")

  // Reset form
  contactForm.reset()
})

// Book consultation button functionality
const bookConsultationBtn = document.getElementById("bookConsultation")
if (bookConsultationBtn) {
  bookConsultationBtn.addEventListener("click", () => {
    const contactSection = document.getElementById("contact")
    contactSection.scrollIntoView({ behavior: "smooth" })
  })
}
