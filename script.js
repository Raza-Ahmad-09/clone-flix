// JavaScript for Netflix-like Website

// Function to handle movie scrolling
function scrollMovies(direction) {
    const wrapper = document.querySelector('.movies-wrapper');
    const scrollAmount = direction === 'left' ? -400 : 400;
    wrapper.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

// Function to toggle FAQ answers
document.querySelectorAll('.q-1').forEach((faq) => {
    faq.addEventListener('click', () => {
        const answer = faq.querySelector('p');
        const icon = faq.querySelector('i');

        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
        } else {
            answer.style.display = 'block';
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
        }
    });
});

// Function to handle email input for membership
document.querySelector('.box button').addEventListener('click', (e) => {
    e.preventDefault();
    const emailInput = document.querySelector('.box input');
    const email = emailInput.value.trim();

    if (email === '') {
        alert('Please enter your email address.');
    } else if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
    } else {
        alert(`Thank you! Your membership will start with the email: ${email}`);
        emailInput.value = '';
    }
});

// Function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Function to handle language selection
document.querySelector('.language-btn').addEventListener('click', () => {
    const languageOptions = document.createElement('div');
    languageOptions.innerHTML = `
        <button onclick="changeLanguage('English')">English</button>
        <button onclick="changeLanguage('Urdu')">Urdu</button>
        <button onclick="changeLanguage('Arabic')">Arabic</button>
    `;
    languageOptions.style.position = 'absolute';
    languageOptions.style.backgroundColor = 'white';
    languageOptions.style.border = '1px solid #ccc';
    languageOptions.style.padding = '10px';
    languageOptions.style.zIndex = '1000';
    document.body.appendChild(languageOptions);
});

function changeLanguage(language) {
    alert(`Language changed to ${language}`);
    document.querySelector('.language-btn').innerHTML = `<i class="fa-solid fa-language"></i> ${language} <i class="fa-solid fa-caret-down"></i>`;
    document.body.removeChild(document.querySelector('.language-btn + div'));
}