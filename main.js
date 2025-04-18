document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
  
    // Smooth scroll para links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Fechar menu mobile se estiver aberto
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                }
            }
        });
    });
  
  
    const productGrid = document.querySelector('.product-grid');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="product-price">${product.price}</p>
            </div>
        `;
        
        productGrid.appendChild(productCard);
    });

    document.addEventListener('DOMContentLoaded', function () {
        const contactForm = document.getElementById('whatsapp-form');
    
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
    
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('telefone').value;
            const mensagem = document.getElementById('mensagem').value;
    
            const numeroWhatsApp = "554197506776";
            const texto = `Olá, meu nome é ${nome}.
    Email: ${email}
    Telefone: ${telefone}
    Mensagem: ${mensagem}`;
    
            const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(texto)}`;
    
            window.open(url, '_blank'); // Abre o WhatsApp
            alert("Mensagem gerada! Verifique o WhatsApp.");
            this.reset();
        });
    });
});
