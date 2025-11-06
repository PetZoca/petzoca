// script.js
const items = document.querySelectorAll('.servicos .itens-container');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show'); 
      
    }
  });
}, {
  threshold: 0.4 
});

items.forEach(item => {
  observer.observe(item);
});



const whatsappNumber = "558591029849";

function enviarMensagem(mensagem) {
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}


document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("button").forEach((btn) => {
    const texto = btn.innerText.toLowerCase();

    if (texto.includes("agendar agora")) {
      btn.addEventListener("click", () => enviarMensagem("Olá, gostaria de agendar um banho simples."));
    }

    if (texto.includes("assinar pacote") && btn.closest(".card")?.innerText.includes("Semanal")) {
      btn.addEventListener("click", () => enviarMensagem("Olá, gostaria de assinar o pacote semanal."));
    }

    if (texto.includes("assinar pacote") && btn.closest(".card")?.innerText.includes("Premium")) {
      btn.addEventListener("click", () => enviarMensagem("Olá, gostaria de assinar o pacote premium."));
    }

    if (texto.includes("verificar valores")) {
      btn.addEventListener("click", () => enviarMensagem("Olá, gostaria de verificar os valores dos serviços adicionais."));
    }

    if (texto.includes("solicitar táxi dog") || texto.includes("taxi dog")) {
      btn.addEventListener("click", () => enviarMensagem("Olá, gostaria de verificar os valores do táxi dog."));
    }
  });
});


document.querySelectorAll('header nav ul li a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const destino = this.getAttribute('href');
    const section = document.querySelector(destino);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, 
        behavior: "smooth"
      });
    }

    const menuToggle = document.getElementById("menu-toggle");
    if (menuToggle) menuToggle.checked = false;
  });
});


