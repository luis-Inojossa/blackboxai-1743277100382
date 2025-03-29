// Netflix Clone Main JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Netflix Clone initialized');
    
    // Navigation functionality
    const initNavigation = () => {
        // Language selector toggle
        const langBtn = document.querySelector('nav button.text-white');
        const langDropdown = document.createElement('div');
        langDropdown.className = 'hidden absolute top-full mt-2 bg-black/90 rounded shadow-lg p-2 min-w-[150px]';
        langDropdown.innerHTML = `
            <a href="#" class="block px-3 py-1 text-sm hover:bg-gray-800">English</a>
            <a href="#" class="block px-3 py-1 text-sm hover:bg-gray-800">Español</a>
        `;
        langBtn.parentNode.appendChild(langDropdown);
        langBtn.parentNode.classList.add('relative');
        
        langBtn.addEventListener('click', (e) => {
            e.preventDefault();
            langDropdown.classList.toggle('hidden');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
                langDropdown.classList.add('hidden');
            }
        });
    };

    // Content row scrolling functionality
    const initContentRows = () => {
        const rows = document.querySelectorAll('.content-rows > section > div > div');
        rows.forEach(row => {
            let isDown = false;
            let startX;
            let scrollLeft;

            row.addEventListener('mousedown', (e) => {
                isDown = true;
                startX = e.pageX - row.offsetLeft;
                scrollLeft = row.scrollLeft;
            });

            row.addEventListener('mouseleave', () => {
                isDown = false;
            });

            row.addEventListener('mouseup', () => {
                isDown = false;
            });

            row.addEventListener('mousemove', (e) => {
                if(!isDown) return;
                e.preventDefault();
                const x = e.pageX - row.offsetLeft;
                const walk = (x - startX) * 2;
                row.scrollLeft = scrollLeft - walk;
            });
        });
    };

    // Hero section interactions
    const initHeroSection = () => {
        // Email validation
        const emailInput = document.querySelector('.hero-section input[type="email"]');
        const getStartedBtn = document.querySelector('.hero-section button');

        getStartedBtn.addEventListener('click', () => {
            if (!emailInput.value || !emailInput.value.includes('@')) {
                emailInput.classList.add('border-red-500');
                setTimeout(() => {
                    emailInput.classList.remove('border-red-500');
                }, 2000);
            }
        });
    };

    // Initialize all components
    initNavigation();
    initContentRows();
    initHeroSection();
});