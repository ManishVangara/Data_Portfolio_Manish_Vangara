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
            
            // Create skill bubbles (passing category index for coloring)
            skillCategories.forEach((category, index) => {
                const bubbles = createSkillCategoryCard(category, index);
                skillsContainer.appendChild(bubbles);
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
    // LOAD EDUCATION FROM EXTERNAL FILE
    // ============================================
    async function loadEducation() {
        const educationContainer = document.getElementById('educationContainer');
        
        try {
            // Try to load from education.json
            const response = await fetch('education.json');
            
            if (!response.ok) {
                throw new Error('Failed to load education');
            }
            
            const education = await response.json();
            
            // Clear loading message
            educationContainer.innerHTML = '';
            
            // Create education timeline items
            education.forEach(edu => {
                const item = createEducationItem(edu);
                educationContainer.appendChild(item);
            });
            
        } catch (error) {
            console.error('Error loading education:', error);
            
            // Fallback to default education if file not found
            loadDefaultEducation(educationContainer);
        }
    }
    
    // ============================================
    // LOAD HOBBIES FROM EXTERNAL FILE
    // ============================================
    async function loadHobbies() {
        const hobbiesContainer = document.getElementById('hobbiesContainer');
        
        try {
            // Try to load from hobbies.json
            const response = await fetch('hobbies.json');
            
            if (!response.ok) {
                throw new Error('Failed to load hobbies');
            }
            
            const hobbies = await response.json();
            
            // Clear loading message
            hobbiesContainer.innerHTML = '';
            
            // Create hobby cards
            hobbies.forEach(hobby => {
                const card = createHobbyCard(hobby);
                hobbiesContainer.appendChild(card);
            });
            
        } catch (error) {
            console.error('Error loading hobbies:', error);
            
            // Fallback to default hobbies if file not found
            loadDefaultHobbies(hobbiesContainer);
        }
    }
    
    // ============================================
    // LOAD MY STORY FROM EXTERNAL FILE
    // ============================================
    async function loadMyStory() {
        const storyContainer = document.getElementById('storyContainer');
        
        try {
            // Try to load from mystory.json
            const response = await fetch('mystory.json');
            
            if (!response.ok) {
                throw new Error('Failed to load story');
            }
            
            const stories = await response.json();
            
            // Clear loading message
            storyContainer.innerHTML = '';
            
            // Create story cards
            stories.forEach(story => {
                const card = createStoryCard(story);
                storyContainer.appendChild(card);
            });
            
        } catch (error) {
            console.error('Error loading story:', error);
            
            // Fallback to default story if file not found
            loadDefaultStory(storyContainer);
        }
    }
    
    // ============================================
    // LOAD ASK ME ABOUT FROM EXTERNAL FILE
    // ============================================
    async function loadAskMe() {
        const askMeContainer = document.getElementById('askMeContainer');
        
        try {
            // Try to load from askme.json
            const response = await fetch('askme.json');
            
            if (!response.ok) {
                throw new Error('Failed to load ask me topics');
            }
            
            const topics = await response.json();
            
            // Clear loading message
            askMeContainer.innerHTML = '';
            
            // Create ask me cards
            topics.forEach(topic => {
                const card = createAskMeCard(topic);
                askMeContainer.appendChild(card);
            });
            
        } catch (error) {
            console.error('Error loading ask me topics:', error);
            
            // Fallback to default topics if file not found
            loadDefaultAskMe(askMeContainer);
        }
    }
    
    // ============================================
    // LOAD LESSONS FROM EXTERNAL FILE
    // ============================================
    async function loadLessons() {
        const lessonsContainer = document.getElementById('lessonsContainer');
        
        try {
            // Try to load from lessons.json
            const response = await fetch('lessons.json');
            
            if (!response.ok) {
                throw new Error('Failed to load lessons');
            }
            
            const lessons = await response.json();
            
            // Clear loading message
            lessonsContainer.innerHTML = '';
            
            // Create lesson cards
            lessons.forEach(lesson => {
                const card = createLessonCard(lesson);
                lessonsContainer.appendChild(card);
            });
            
        } catch (error) {
            console.error('Error loading lessons:', error);
            
            // Fallback to default lessons if file not found
            loadDefaultLessons(lessonsContainer);
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
        
        // Create image container
        let imageHTML = '';
        if (project.image) {
            imageHTML = `
                <div class="card-image-container">
                    <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)}" class="card-image" loading="lazy">
                </div>
            `;
        } else {
            // Fallback placeholder if no image provided
            imageHTML = `
                <div class="card-image-container">
                    <div class="card-image-placeholder">📊</div>
                </div>
            `;
        }
        
        card.innerHTML = `
            ${imageHTML}
            <div class="card-content">
                <h3>${escapeHtml(project.title)}</h3>
                <p class="tech-stack">${escapeHtml(project.techStack)}</p>
                <p>${escapeHtml(project.description)}</p>
            </div>
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
            <div class="card-content">
                <h3>${escapeHtml(certification.title)}</h3>
                <p class="tech-stack">${escapeHtml(certification.organization)}</p>
                <p>${escapeHtml(certification.description)}</p>
            </div>
            ${certification.link ? '<span class="project-link-icon">🔗</span>' : ''}
        `;
        
        return card;
    }
    
    // ============================================
    // CREATE SKILL CATEGORY CARD (BUBBLE STYLE)
    // ============================================
    function createSkillCategoryCard(category, categoryIndex) {
        // Instead of creating a category card, create individual bubbles
        const fragment = document.createDocumentFragment();
        
        // Determine sizes for visual hierarchy
        const sizes = ['large', 'medium', 'medium', 'small', 'small'];
        
        category.skills.forEach((skill, index) => {
            const bubble = document.createElement('div');
            bubble.className = 'skill-bubble';
            
            // Add size class (cycle through sizes)
            const sizeClass = sizes[index % sizes.length];
            bubble.classList.add(`size-${sizeClass}`);
            
            // Add category-based color
            bubble.classList.add(`category-${categoryIndex % 6}`);
            
            bubble.textContent = escapeHtml(skill);
            
            fragment.appendChild(bubble);
        });
        
        return fragment;
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
    // CREATE EDUCATION ITEM
    // ============================================
    function createEducationItem(education) {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        
        item.innerHTML = `
            <h3>${escapeHtml(education.degree)}</h3>
            <p class="company">${escapeHtml(education.institution)}</p>
            <p class="date">${escapeHtml(education.date)} | ${escapeHtml(education.location)}</p>
            <p>${escapeHtml(education.description)}</p>
        `;
        
        return item;
    }
    
    // ============================================
    // CREATE HOBBY CARD
    // ============================================
    function createHobbyCard(hobby) {
        const card = document.createElement('div');
        card.className = 'hobby-card';
        
        card.innerHTML = `
            <div class="hobby-icon">${escapeHtml(hobby.icon)}</div>
            <h3>${escapeHtml(hobby.title)}</h3>
            <p>${escapeHtml(hobby.description)}</p>
        `;
        
        return card;
    }
    
    // ============================================
    // CREATE STORY CARD
    // ============================================
    function createStoryCard(story) {
        const card = document.createElement('div');
        card.className = 'story-card';
        
        card.innerHTML = `
            <div class="story-icon">${escapeHtml(story.icon)}</div>
            <h3>${escapeHtml(story.title)}</h3>
            <p>${escapeHtml(story.description)}</p>
        `;
        
        return card;
    }
    
    // ============================================
    // CREATE ASK ME CARD
    // ============================================
    function createAskMeCard(topic) {
        const card = document.createElement('div');
        card.className = 'ask-me-card';
        
        card.innerHTML = `
            <div class="ask-me-icon">${escapeHtml(topic.icon)}</div>
            <h3>${escapeHtml(topic.title)}</h3>
            <p>${escapeHtml(topic.description)}</p>
        `;
        
        return card;
    }
    
    // ============================================
    // CREATE LESSON CARD
    // ============================================
    function createLessonCard(lesson) {
        const card = document.createElement('div');
        card.className = 'lesson-card';
        
        // Build tags HTML
        let tagsHTML = '';
        lesson.tags.forEach(tag => {
            const tagClass = tag.type === 'failure' ? 'lesson-tag failure' : 
                           tag.type === 'mistake' ? 'lesson-tag mistake' : 
                           'lesson-tag';
            tagsHTML += `<span class="${tagClass}">${escapeHtml(tag.name)}</span>`;
        });
        
        card.innerHTML = `
            <div class="lesson-number">${escapeHtml(lesson.number)}</div>
            <h3>${escapeHtml(lesson.title)}</h3>
            <div class="lesson-meta">
                ${tagsHTML}
            </div>
            <p class="lesson-story">${escapeHtml(lesson.story)}</p>
            <div class="lesson-learned">
                <strong>💡 The Lesson:</strong> ${escapeHtml(lesson.lesson)}
            </div>
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
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
                techStack: 'Python • Scikit-learn • XGBoost • AWS',
                description: 'Developed a machine learning model to predict customer churn with 92% accuracy, enabling proactive retention strategies that reduced churn by 25% and saved $2M annually.',
                link: 'https://github.com/yourusername/churn-prediction'
            },
            {
                title: 'Real-Time Analytics Dashboard',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80',
                techStack: 'React • D3.js • Apache Kafka • PostgreSQL',
                description: 'Built an interactive real-time dashboard visualizing key business metrics across multiple regions, processing 50K+ events per second with sub-second latency.',
                link: 'https://github.com/yourusername/analytics-dashboard'
            },
            {
                title: 'Scalable ETL Pipeline',
                image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
                techStack: 'Apache Spark • Airflow • Docker • AWS S3',
                description: 'Designed and implemented a fault-tolerant ETL pipeline processing 10M+ records daily, reducing data processing time by 70% and infrastructure costs by 40%.',
                link: 'https://github.com/yourusername/etl-pipeline'
            },
            {
                title: 'NLP Sentiment Analysis',
                image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop',
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
    // LOAD DEFAULT CERTIFICATIONS
    // ============================================
    function loadDefaultCertifications(container) {
        container.innerHTML = '';
        
        const defaultCertifications = [
            {
                title: 'AWS Certified Machine Learning - Specialty',
                organization: 'Amazon Web Services',
                description: 'Specialty certification demonstrating expertise in building, training, and deploying machine learning models on AWS platform.',
                link: 'https://aws.amazon.com/certification/certified-machine-learning-specialty/'
            },
            {
                title: 'Google Data Analytics Professional Certificate',
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
                title: 'Apache Spark & Scala Certification',
                organization: 'Databricks',
                description: 'Professional certification demonstrating proficiency in big data processing and analytics using Apache Spark and Scala.'
            },
            {
                title: 'Microsoft Certified: Azure Data Scientist Associate',
                organization: 'Microsoft',
                description: 'Certification validating skills in implementing and running machine learning workloads on Microsoft Azure.',
                link: 'https://learn.microsoft.com/en-us/certifications/azure-data-scientist/'
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
        
        defaultSkills.forEach((category, index) => {
            const bubbles = createSkillCategoryCard(category, index);
            container.appendChild(bubbles);
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
    
    // ============================================
    // LOAD DEFAULT EDUCATION
    // ============================================
    function loadDefaultEducation(container) {
        container.innerHTML = '';
        
        const defaultEducation = [
            {
                degree: 'Master of Science in Data Science',
                institution: 'Stanford University',
                date: '2016 - 2018',
                location: 'Stanford, CA',
                description: 'Specialized in machine learning and statistical modeling. Thesis on predictive analytics for healthcare outcomes. GPA: 3.9/4.0'
            },
            {
                degree: 'Bachelor of Science in Computer Science',
                institution: 'University of California, Berkeley',
                date: '2012 - 2016',
                location: 'Berkeley, CA',
                description: 'Focus on algorithms, data structures, and artificial intelligence. Dean\'s List all semesters. Founded the Data Science Club. GPA: 3.8/4.0'
            }
        ];
        
        defaultEducation.forEach(edu => {
            const item = createEducationItem(edu);
            container.appendChild(item);
        });
    }
    
    // ============================================
    // LOAD DEFAULT HOBBIES
    // ============================================
    function loadDefaultHobbies(container) {
        container.innerHTML = '';
        
        const defaultHobbies = [
            {
                icon: '📊',
                title: 'Data Visualization',
                description: 'Creating beautiful and insightful visualizations in my free time. Love experimenting with D3.js and creative chart designs.'
            },
            {
                icon: '🎮',
                title: 'Gaming',
                description: 'Strategy games and puzzle solving. It\'s all about patterns and optimization - just like data science!'
            },
            {
                icon: '📚',
                title: 'Reading',
                description: 'Tech blogs, research papers, and sci-fi novels. Always learning something new about AI and data science.'
            },
            {
                icon: '🏃',
                title: 'Running',
                description: 'Marathon runner tracking my progress with data. Nothing beats a morning run to clear the mind!'
            },
            {
                icon: '🎨',
                title: 'Creative Coding',
                description: 'Building generative art with Python and exploring the intersection of art and algorithms.'
            },
            {
                icon: '☕',
                title: 'Coffee Enthusiast',
                description: 'Perfecting the art of brewing coffee. Data-driven approach to finding the perfect cup!'
            }
        ];
        
        defaultHobbies.forEach(hobby => {
            const card = createHobbyCard(hobby);
            container.appendChild(card);
        });
    }
    
    // ============================================
    // LOAD DEFAULT STORY
    // ============================================
    function loadDefaultStory(container) {
        container.innerHTML = '';
        
        const defaultStory = [
            {
                icon: '✨',
                title: 'The Spark',
                description: 'My journey into data science began during my first internship when I discovered hidden patterns in coffee shop sales data. That "aha!" moment of turning raw numbers into actionable insights changed everything. I realized data could tell stories that transform businesses.'
            },
            {
                icon: '🚀',
                title: 'The Transition',
                description: 'I made the leap from traditional analytics to full-stack data science, diving deep into machine learning and engineering. Late nights debugging models and early mornings studying new frameworks became my routine. Every challenge was a puzzle waiting to be solved.'
            },
            {
                icon: '💡',
                title: 'The Philosophy',
                description: 'I believe the best data science isn\'t about the fanciest algorithms—it\'s about asking the right questions and delivering insights people can actually use. My goal is to bridge the gap between complex models and real-world impact, making data accessible and actionable for everyone.'
            },
            {
                icon: '🎯',
                title: 'Today & Beyond',
                description: 'Now, I\'m focused on building scalable ML systems that solve real problems. I\'m passionate about mentoring aspiring data scientists and contributing to open-source projects. My mission? To prove that great data science comes from curiosity, persistence, and always learning.'
            }
        ];
        
        defaultStory.forEach(story => {
            const card = createStoryCard(story);
            container.appendChild(card);
        });
    }
    
    // ============================================
    // LOAD DEFAULT ASK ME
    // ============================================
    function loadDefaultAskMe(container) {
        container.innerHTML = '';
        
        const defaultTopics = [
            {
                icon: '💡',
                title: 'How I reduced ETL processing time by 70%',
                description: 'Optimized a legacy data pipeline using Apache Spark and clever caching strategies. Happy to share the architecture decisions that made the difference.'
            },
            {
                icon: '🎯',
                title: 'Why I chose data science over software engineering',
                description: 'The intersection of statistics, programming, and business impact fascinated me. I love that every project is a new puzzle with real-world consequences.'
            },
            {
                icon: '🔥',
                title: 'My biggest data mishap (and the lesson)',
                description: 'Once deployed a model without checking data drift. Production accuracy dropped 30% in a week. Now I obsess over monitoring and validation pipelines.'
            },
            {
                icon: '🌙',
                title: 'The project that kept me up for 3 nights',
                description: 'Building a real-time recommendation system that needed to serve 50K requests/second. The optimization challenges were intense but incredibly rewarding.'
            },
            {
                icon: '🎲',
                title: 'My unpopular opinion on model complexity',
                description: 'Simple models that stakeholders understand often outperform complex ones they don\'t trust. Interpretability isn\'t just nice—it\'s essential for adoption.'
            },
            {
                icon: '📚',
                title: 'Resources that changed my career trajectory',
                description: 'Three books, two MOOCs, and one mentor shaped how I think about data. The Pragmatic Programmer taught me more than any ML course.'
            }
        ];
        
        defaultTopics.forEach(topic => {
            const card = createAskMeCard(topic);
            container.appendChild(card);
        });
    }
    
    // ============================================
    // LOAD DEFAULT LESSONS
    // ============================================
    function loadDefaultLessons(container) {
        container.innerHTML = '';
        
        const defaultLessons = [
            {
                number: '01',
                title: 'The Model That Looked Perfect... On Paper',
                tags: [
                    { name: 'Failure', type: 'failure' },
                    { name: 'Machine Learning', type: 'normal' }
                ],
                story: 'Built a customer churn prediction model with 95% accuracy in testing. Celebrated, deployed, and... it failed spectacularly in production. Turns out, I had data leakage—using information that wouldn\'t be available at prediction time.',
                lesson: 'Always simulate the production environment during testing. If it feels too good to be true, dig deeper. Now I obsessively check for temporal leakage and use time-based splits.'
            },
            {
                number: '02',
                title: 'When I Over-Engineered a Simple Solution',
                tags: [
                    { name: 'Mistake', type: 'mistake' },
                    { name: 'Architecture', type: 'normal' }
                ],
                story: 'Spent three weeks building a sophisticated deep learning model for a classification problem. A senior engineer showed me a logistic regression solution that performed just as well and took 10 minutes to build.',
                lesson: 'Start simple, then scale complexity only when needed. The best solution is the one that solves the problem reliably, not the one that sounds coolest at conferences.'
            },
            {
                number: '03',
                title: 'Ignoring the Stakeholders\' Perspective',
                tags: [
                    { name: 'Failure', type: 'failure' },
                    { name: 'Communication', type: 'normal' }
                ],
                story: 'Created an amazing recommendation system with cutting-edge collaborative filtering. Business team rejected it because they couldn\'t explain to customers why certain products were recommended. All that work, shelved.',
                lesson: 'Model interpretability isn\'t optional—it\'s a feature. Now I involve stakeholders from day one and prioritize solutions they can actually use and trust.'
            },
            {
                number: '04',
                title: 'The Pipeline That Wasn\'t Production-Ready',
                tags: [
                    { name: 'Mistake', type: 'mistake' },
                    { name: 'Engineering', type: 'normal' }
                ],
                story: 'My Jupyter notebook worked perfectly for the demo. Handed it off to engineering, and they spent two weeks refactoring it. No error handling, hardcoded paths, no logging, no tests. It was a mess.',
                lesson: 'Write production-quality code from the start. Every notebook should have error handling, logging, and tests. "It works on my machine" isn\'t a deployment strategy.'
            }
        ];
        
        defaultLessons.forEach(lesson => {
            const card = createLessonCard(lesson);
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
    // IMMERSIVE HERO ANIMATIONS
    // ============================================
    
    // Typewriter Effect
    function initTypewriter() {
        const phrases = [
            'turn data into decisions',
            'teach machines to learn',
            'find patterns in chaos',
            'make complexity simple',
            'build AI that matters'
        ];
        
        const typewriterElement = document.getElementById('typewriter');
        if (!typewriterElement) return;
        
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function type() {
            const currentPhrase = phrases[phraseIndex];
            
            if (isDeleting) {
                typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
            }
            
            let typeSpeed = isDeleting ? 50 : 100;
            
            if (!isDeleting && charIndex === currentPhrase.length) {
                typeSpeed = 2000; // Pause at end
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typeSpeed = 500; // Pause before next phrase
            }
            
            setTimeout(type, typeSpeed);
        }
        
        type();
    }
    
    // Count Up Animation for Metrics
    function initMetricsCounter() {
        const metrics = document.querySelectorAll('.metric-value');
        
        const observerOptions = {
            threshold: 0.5
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const target = parseInt(element.getAttribute('data-target'));
                    animateCounter(element, target);
                    observer.unobserve(element);
                }
            });
        }, observerOptions);
        
        metrics.forEach(metric => observer.observe(metric));
    }
    
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 50;
        const duration = 2000;
        const stepTime = duration / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, stepTime);
    }
    
    // Particle Background Animation
    function initParticleBackground() {
        const canvas = document.getElementById('particleCanvas');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        let particles = [];
        let animationFrameId;
        
        // Set canvas size
        function resizeCanvas() {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        }
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        // Particle class
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.opacity = Math.random() * 0.5 + 0.2;
            }
            
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                
                // Wrap around edges
                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;
            }
            
            draw() {
                ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        // Create particles
        function createParticles() {
            const particleCount = Math.min(100, Math.floor(canvas.width / 10));
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }
        
        createParticles();
        
        // Connect particles with lines
        function connectParticles() {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 120) {
                        const opacity = (1 - distance / 120) * 0.2;
                        ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        }
        
        // Animation loop
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            
            connectParticles();
            
            animationFrameId = requestAnimationFrame(animate);
        }
        
        animate();
        
        // Cleanup
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }
    
    // Initialize all hero animations
    function initHeroAnimations() {
        initTypewriter();
        initMetricsCounter();
        initParticleBackground();
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
        
        // Load education from external file
        loadEducation();
        
        // Load skills from external file - THIS WAS MISSING!
        loadSkills();
        
        // Load hobbies from external file
        loadHobbies();
        
        // Load my story from external file
        loadMyStory();
        
        // Load ask me about from external file
        loadAskMe();
        
        // Load lessons learned from external file
        loadLessons();
        
        // Initialize theme toggle
        initThemeToggle();
        
        // Initialize contact button
        initContactButton();
        
        // Initialize navigation
        initNavigation();
        
        // Initialize hero animations
        initHeroAnimations();
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
