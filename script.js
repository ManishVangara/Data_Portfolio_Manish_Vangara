// ============================================
// PORTFOLIO WEBSITE - MAIN JAVASCRIPT
// ============================================

(function() {
    // ============================================
    // LOAD DEFAULT CERTIFICATIONS
    // ============================================
    function loadDefaultCertifications(container) {
        container.innerHTML = '';
        
        const defaultCertifications = [
            {
                title: 'AWS Certified Machine Learning',
                organization: 'Amazon Web Services',
                description: 'Specialty certification demonstrating expertise in building, training, and deploying machine learning models on AWS platform.',
                link: 'https://aws.amazon.com/certification/certified-machine-learning-specialty/'
            },
            {
                title: 'Google Data Analytics Professional',
                organization: 'Google',
                description: 'Professional certificate covering data analysis, visualization, and storytelling using industry-standard tools and practices.',
                link: 'https://www.coursera.org/professional-certificates/google-data-analytics'
            },
            {
                title: 'TensorFlow Developer Certificate',
                organization: 'TensorFlow',
                description: 'Official certification validating skills in building and training neural networks using TensorFlow framework.',
                link: 'https://www.tensorflow.org/certificate'
            },
            {
                title: 'Apache Spark Certification',
                organization: 'Databricks',
                description: 'Professional certification demonstrating proficiency in big data processing and analytics using Apache Spark.'
            }
        ];
        
        defaultCertifications.forEach(certification => {
            const card = createCertificationCard(certification);
            container.appendChild(card);
        });
    }
    
    // ============================================
    // LOAD DEFAULT SKILLS
    // ============================================
    function loadDefaultSkills(container) {
        container.innerHTML = '';
        
        const defaultSkills = [
            {
                category: 'Programming',
                skills: ['Python', 'SQL', 'R', 'Scala']
            },
            {
                category: 'Machine Learning',
                skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'XGBoost']
            },
            {
                category: 'Data Engineering',
                skills: ['Apache Spark', 'Airflow', 'Kafka', 'Docker']
            },
            {
                category: 'Cloud & Tools',
                skills: ['AWS', 'Azure', 'Tableau', 'Git']
            }
        ];
        
        defaultSkills.forEach(category => {
            const categoryCard = createSkillCategoryCard(category);
            container.appendChild(categoryCard);
        });
    }
    
    // ============================================
    // LOAD DEFAULT EXPERIENCE
    // ============================================
    function loadDefaultExperience(container) {
        container.innerHTML = '';
        
        const defaultExperience = [
            {
                title: 'Senior Data Scientist',
                company: 'Tech Company Inc.',
                date: 'Jan 2022 - Present',
                location: 'San Francisco, CA',
                description: 'Leading a team of 5 data scientists in developing ML models for customer behavior prediction. Implemented automated ML pipelines that reduced model deployment time by 60%. Collaborated with product teams to integrate ML-driven features serving 2M+ users.'
            },
            {
                title: 'Data Engineer',
                company: 'Growth Startup LLC',
                date: 'Jun 2020 - Dec 2021',
                location: 'Remote',
                description: 'Built and maintained scalable data infrastructure processing terabytes of data daily. Optimized data pipelines resulting in 40% cost reduction and 3x performance improvement. Designed data warehouse architecture supporting real-time analytics for business teams.'
            },
            {
                title: 'Junior Data Analyst',
                company: 'Analytics Solutions Co.',
                date: 'Jul 2018 - May 2020',
                location: 'New York, NY',
                description: 'Performed statistical analysis and created visualizations to support business decisions. Developed automated reporting systems that saved 20 hours per week. Collaborated with stakeholders to define KPIs and metrics tracking business performance.'
            }
        ];
        
        defaultExperience.forEach(experience => {
            const item = createExperienceItem(experience);
            container.appendChild(item);
        });
    }
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
    // LOAD CERTIFICATIONS FROM EXTERNAL FILE
    // ============================================
    async function loadCertifications() {
        const certificationsContainer = document.getElementById('certificationsContainer');
        
        try {
            // Try to load from certifications.json
            const response = await fetch('certifications.json');
            
            if (!response.ok) {
                throw new Error('Failed to load certifications');
            }
            
            const certifications = await response.json();
            
            // Clear loading message
            certificationsContainer.innerHTML = '';
            
            // Create certification cards
            certifications.forEach(certification => {
                const card = createCertificationCard(certification);
                certificationsContainer.appendChild(card);
            });
            
        } catch (error) {
            console.error('Error loading certifications:', error);
            
            // Fallback to default certifications if file not found
            loadDefaultCertifications(certificationsContainer);
        }
    }
    
    // ============================================
    // LOAD SKILLS FROM EXTERNAL FILE
    // ============================================
    async function loadSkills() {
        const skillsContainer = document.getElementById('skillsContainer');
        
        try {
            // Try to load from skills.json
            const response = await fetch('skills.json');
            
            if (!response.ok) {
                throw new Error('Failed to load skills');
            }
            
            const skillCategories = await response.json();
            
            // Clear loading message
            skillsContainer.innerHTML = '';
            
            // Create skill category cards
            skillCategories.forEach(category => {
                const categoryCard = createSkillCategoryCard(category);
                skillsContainer.appendChild(categoryCard);
            });
            
        } catch (error) {
            console.error('Error loading skills:', error);
            
            // Fallback to default skills if file not found
            loadDefaultSkills(skillsContainer);
        }
    }
    
    // ============================================
    // LOAD EXPERIENCE FROM EXTERNAL FILE
    // ============================================
    async function loadExperience() {
        const experienceContainer = document.getElementById('experienceContainer');
        
        try {
            // Try to load from experience.json
            const response = await fetch('experience.json');
            
            if (!response.ok) {
                throw new Error('Failed to load experience');
            }
            
            const experiences = await response.json();
            
            // Clear loading message
            experienceContainer.innerHTML = '';
            
            // Create experience timeline items
            experiences.forEach(experience => {
                const item = createExperienceItem(experience);
                experienceContainer.appendChild(item);
            });
            
        } catch (error) {
            console.error('Error loading experience:', error);
            
            // Fallback to default experience if file not found
            loadDefaultExperience(experienceContainer);
        }
    }
    
    // ============================================
    // CREATE PROJECT CARD
    // ============================================
    function createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'card';
        
        // If project has a link, make it clickable
        if (project.link) {
            card.style.cursor = 'pointer';
            card.addEventListener('click', function() {
                window.open(project.link, '_blank');
            });
            
            // Add visual indicator for clickable cards
            card.classList.add('clickable');
        }
        
        card.innerHTML = `
            <h3>${escapeHtml(project.title)}</h3>
            <p class="tech-stack">${escapeHtml(project.techStack)}</p>
            <p>${escapeHtml(project.description)}</p>
            ${project.link ? '<span class="project-link-icon">🔗</span>' : ''}
        `;
        
        return card;
    }
    
    // ============================================
    // CREATE CERTIFICATION CARD
    // ============================================
    function createCertificationCard(certification) {
        const card = document.createElement('div');
        card.className = 'card';
        
        // If certification has a link, make it clickable
        if (certification.link) {
            card.style.cursor = 'pointer';
            card.addEventListener('click', function() {
                window.open(certification.link, '_blank');
            });
            
            // Add visual indicator for clickable cards
            card.classList.add('clickable');
        }
        
        card.innerHTML = `
            <h3>${escapeHtml(certification.title)}</h3>
            <p class="tech-stack">${escapeHtml(certification.organization)}</p>
            <p>${escapeHtml(certification.description)}</p>
            ${certification.link ? '<span class="project-link-icon">🔗</span>' : ''}
        `;
        
        return card;
    }
    
    // ============================================
    // CREATE SKILL CATEGORY CARD
    // ============================================
    function createSkillCategoryCard(category) {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'skill-category';
        
        const title = document.createElement('h3');
        title.textContent = escapeHtml(category.category);
        categoryCard.appendChild(title);
        
        category.skills.forEach(skill => {
            const skillItem = document.createElement('div');
            skillItem.className = 'skill-item';
            skillItem.textContent = escapeHtml(skill);
            categoryCard.appendChild(skillItem);
        });
        
        return categoryCard;
    }
    
    // ============================================
    // CREATE EXPERIENCE ITEM
    // ============================================
    function createExperienceItem(experience) {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        
        item.innerHTML = `
            <h3>${escapeHtml(experience.title)}</h3>
            <p class="company">${escapeHtml(experience.company)}</p>
            <p class="date">${escapeHtml(experience.date)} | ${escapeHtml(experience.location)}</p>
            <p>${escapeHtml(experience.description)}</p>
        `;
        
        return item;
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
                description: 'Developed a machine learning model to predict customer churn with 92% accuracy, enabling proactive retention strategies that reduced churn by 25% and saved $2M annually.',
                link: 'https://github.com/yourusername/churn-prediction'
            },
            {
                title: 'Real-Time Analytics Dashboard',
                techStack: 'React • D3.js • Apache Kafka • PostgreSQL',
                description: 'Built an interactive real-time dashboard visualizing key business metrics across multiple regions, processing 50K+ events per second with sub-second latency.',
                link: 'https://github.com/yourusername/analytics-dashboard'
            },
            {
                title: 'Scalable ETL Pipeline',
                techStack: 'Apache Spark • Airflow • Docker • AWS S3',
                description: 'Designed and implemented a fault-tolerant ETL pipeline processing 10M+ records daily, reducing data processing time by 70% and infrastructure costs by 40%.',
                link: 'https://github.com/yourusername/etl-pipeline'
            },
            {
                title: 'NLP Sentiment Analysis',
                techStack: 'Python • BERT • TensorFlow • FastAPI',
                description: 'Created an NLP model analyzing customer feedback sentiment from 100K+ reviews, providing actionable insights that improved product ratings by 15%.',
                link: 'https://github.com/yourusername/sentiment-analysis'
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
        
        // Load certifications from external file
        loadCertifications();
        
        // Load experience from external file
        loadExperience();
        
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