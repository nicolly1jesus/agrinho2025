// script.js
document.addEventListener('DOMContentLoaded', function() {
    const donateButtons = document.querySelectorAll('.donate-button');
    const otherAmountInput = document.getElementById('other-amount');
    const donateOtherButton = document.getElementById('donate-other');
    const donationMessage = document.getElementById('donation-message');
    const contactForm = document.getElementById('contactForm');
    const contactMessage = document.getElementById('contact-message');

    donateButtons.forEach(button => {
        button.addEventListener('click', function() {
            const amount = this.dataset.value;
            alert(`Obrigado pela sua doação de R$ ${amount}! (Funcionalidade de pagamento não implementada)`);
            donationMessage.classList.remove('hidden');
            setTimeout(() => {
                donationMessage.classList.add('hidden');
            }, 3000);
        });
    });

    donateOtherButton.addEventListener('click', function() {
        const amount = otherAmountInput.value;
        if (amount && !isNaN(amount) && parseFloat(amount) > 0) {
            alert(`Obrigado pela sua doação de R$ ${parseFloat(amount).toFixed(2)}! (Funcionalidade de pagamento não implementada)`);
            donationMessage.classList.remove('hidden');
            setTimeout(() => {
                donationMessage.classList.add('hidden');
            }, 3000);
            otherAmountInput.value = '';
        } else {
            alert('Por favor, insira um valor válido para doação.');
        }
    });

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Aqui você pode adicionar a lógica para enviar os dados do formulário
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');

            console.log('Nome:', name);
            console.log('Email:', email);
            console.log('Mensagem:', message);

            contactMessage.classList.remove('hidden');
            setTimeout(() => {
                contactMessage.classList.add('hidden');
                contactForm.reset();
            }, 3000);
        });
    }
});