// ============================================
// PORTFOLIO WEBSITE - MAIN JAVASCRIPT
// ============================================

(function() {
    'use strict';
    
    // ============================================
    // LOAD PROJECTS FROM EXTERNAL FILE
    // ============================================
    async function loadProjects() {
        const projectsContainer = document.getElementById('projectsContainer');
        
        try {
            // Try to load from projects.json
            const response = await fetch('projects.json');
            
            if (!response.ok) {
                throw new Error('Failed to load projects');
            }
            
            const projects = await response.json();
            
            // Clear loading message
            projectsContainer.innerHTML = '';
            
            // Create project cards
            projects.forEach(project => {
                const card = createProjectCard(project);
                projectsContainer.appendChild(card);
            });
            
        } catch (error) {
            console.error('Error loading projects:', error);
            
            // Fallback to default projects if file not found
            loadDefaultProjects(projectsContainer);
        }
    }
    
    // ============================================
    // CREATE PROJECT CARD
    // ============================================
    function createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'card';
        
        card.innerHTML = `
            <h3>${escapeHtml(project.title)}</h3>
            <p class="tech-stack">${escapeHtml(project.techStack)}</p>
            <p>${escapeHtml(project.description)}</p>
        `;
        
        return card;
    }
    
    // ============================================
    // LOAD DEFAULT PROJECTS
    // ============================================
    function loadDefaultProjects(container) {
        container.innerHTML = '';
        
        const defaultProjects = [
            {
                title: 'Customer Churn Prediction',
                techStack: 'Python • Scikit-learn • XGBoost • AWS',
                description: 'Developed a machine learning model to predict customer churn with 92% accuracy, enabling proactive retention strategies that reduced churn by 25% and saved $2M annually.'
            },
            {
                title: 'Real-Time Analytics Dashboard',
                techStack: 'React • D3.js • Apache Kafka • PostgreSQL',
                description: 'Built an interactive real-time dashboard visualizing key business metrics across multiple regions, processing 50K+ events per second with sub-second latency.'
            },
            {
                title: 'Scalable ETL Pipeline',
                techStack: 'Apache Spark • Airflow • Docker • AWS S3',
                description: 'Designed and implemented a fault-tolerant ETL pipeline processing 10M+ records daily, reducing data processing time by 70% and infrastructure costs by 40%.'
            },
            {
                title: 'NLP Sentiment Analysis',
                techStack: 'Python • BERT • TensorFlow • FastAPI',
                description: 'Created an NLP model analyzing customer feedback sentiment from 100K+ reviews, providing actionable insights that improved product ratings by 15%.'
            }
        ];
        
        defaultProjects.forEach(project => {
            const card = createProjectCard(project);
            container.appendChild(card);
        });
    }
    
    // ============================================
    // ESCAPE HTML (SECURITY)
    // ============================================
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    // ============================================
    // THEME TOGGLE
    // ============================================
    function initThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        
        if (!themeToggle) return;
        
        // Load saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
            themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
        }
        
        // Toggle theme on click
        themeToggle.addEventListener('click', function() {
            const html = document.documentElement;
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            html.setAttribute('data-theme', newTheme);
            this.textContent = newTheme === 'dark' ? '☀️' : '🌙';
            
            // Save preference to localStorage
            localStorage.setItem('theme', newTheme);
        });
    }
    
    // ============================================
    // CONTACT BUTTON
    // ============================================
    function initContactButton() {
        const contactBtn = document.getElementById('contactBtn');
        
        if (!contactBtn) return;
        
        contactBtn.addEventListener('click', function() {
            window.location.href = 'mailto:your.email@gmail.com';
        });
    }
    
    // ============================================
    // SMOOTH SCROLL & ACTIVE NAV
    // ============================================
    function initNavigation() {
        const navLinks = document.querySelectorAll('.nav-btn');
        const sections = document.querySelectorAll('.section');
        
        let ticking = false;
        
        // Update active nav on scroll with throttling
        function updateActiveNav() {
            let currentSection = 'home';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (window.pageYOffset >= sectionTop - 200) {
                    currentSection = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + currentSection) {
                    link.classList.add('active');
                }
            });
            
            ticking = false;
        }
        
        function requestTick() {
            if (!ticking) {
                window.requestAnimationFrame(updateActiveNav);
                ticking = true;
            }
        }
        
        // Listen to scroll events
        window.addEventListener('scroll', requestTick);
        
        // Smooth scroll for navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 100;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Set initial active state
        updateActiveNav();
    }
    
    // ============================================
    // INITIALIZE ALL FUNCTIONALITY
    // ============================================
    function init() {
        // Load projects from external file
        loadProjects();
        
        // Initialize theme toggle
        initThemeToggle();
        
        // Initialize contact button
        initContactButton();
        
        // Initialize navigation
        initNavigation();
    }
    
    // ============================================
    // START APPLICATION
    // ============================================
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
})();