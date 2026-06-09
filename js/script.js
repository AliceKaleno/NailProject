document
  .getElementById("bookingForm")
  .addEventListener("submit", function (e) {

    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const servico = document.getElementById("servico").value;
    const data = document.getElementById("data").value;
    const horario = document.getElementById("horario").value;
    const mensagem = document.getElementById("mensagem").value;

    const texto = `
AGENDAMENTO ONLINE

Nome: ${nome}

Telefone da Cliente: ${telefone}

Serviço: ${servico}

Data: ${data}

Horário: ${horario}

Mensagem:
${mensagem}
`;

    const numeroNail = "5581999999999";

    const url =
      `https://wa.me/${numeroNail}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
});

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {

    const button = item.querySelector('.faq-question');

    button.addEventListener('click', () => {

        item.classList.toggle('active');

    });

});

const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {

    card.addEventListener('click', () => {

        card.classList.toggle('active');

    });

});

const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.querySelector(".close-modal");

document.querySelectorAll(".comparison-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        const card = btn.closest(".comparison-card");

        const afterImage =
            card.querySelectorAll(".image-box img")[1];

        modal.style.display = "flex";

        modalImage.src = afterImage.src;

    });

});

closeModal.addEventListener("click", () => {

    modal.style.display = "none";

});

modal.addEventListener("click", (e) => {

    if(e.target === modal){

        modal.style.display = "none";

    }

});

const menuToggle =
document.querySelector('.menu-toggle');

const nav =
document.querySelector('nav');

menuToggle.addEventListener('click', () => {

    nav.classList.toggle('active');

});