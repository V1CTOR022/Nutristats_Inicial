document.addEventListener('DOMContentLoaded', function () {

    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null,
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visivel');
            } else {
                entry.target.classList.remove('visivel');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const trilho = document.querySelector(".carrossel-trilho");
    const slides = document.querySelectorAll(".depoimento-item");
    const botaoProximo = document.querySelector(".botao-proximo");
    const botaoAnterior = document.querySelector(".botao-anterior");

    if (trilho && slides.length > 0) {
        let index = 0;

        function atualizarSlide() {
            trilho.style.transform = `translateX(-${index * 100}%)`;
        }

        if (botaoProximo) {
            botaoProximo.addEventListener("click", function () {
                index = (index + 1) % slides.length;
                atualizarSlide();
            });
        }

        if (botaoAnterior) {
            botaoAnterior.addEventListener("click", function () {
                index = (index - 1 + slides.length) % slides.length;
                atualizarSlide();
            });
        }

        setInterval(() => {
            index = (index + 1) % slides.length;
            atualizarSlide();
        }, 4000);
    }

    const botoesAssinar = document.querySelectorAll('.botao-assinar');
    botoesAssinar.forEach(botao => {
        botao.addEventListener('click', function () {

        });
    });

    const botaoTeste = document.querySelector('.botao-teste');
    if (botaoTeste) {
        botaoTeste.addEventListener('click', function () {

        });
    }

    const botaoCta = document.querySelector('.botao-secundario');
    if (botaoCta) {
        botaoCta.addEventListener('click', function (e) {
            e.preventDefault();

        });
    }

    const botaoDemo = document.querySelector('.botao-verde');
    if (botaoDemo) {
        botaoDemo.addEventListener('click', function (e) {
            e.preventDefault();
        });
    }

    console.log('Site da NutriStats carregado com sucesso!');
});