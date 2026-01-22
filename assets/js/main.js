    window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;                // how far user scrolled
    const docHeight = document.documentElement.scrollHeight - window.innerHeight; // total scrollable height
    const scrollPercent = (scrollTop / docHeight) * 100; // percentage scrolled
    document.querySelector('.scroll-progress').style.width = scrollPercent + '%';
});

    
    window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".navbar-custom");
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });


const skillsData = [
    { title: "Languages", content: "Python, SQL, TypeScript, JavaScript, React", icon: "bi-code-slash" },
    { title: "Frameworks", content: "Flask, Django ORM, FastAPI, Angular, React", icon: "bi-tools" },
    { title: "Database", content: "MongoDB, PostgreSQL, MySQL", icon: "bi-server" },
    { title: "Cloud", content: "EC2, S3", icon: "bi-cloud" },
    { title: "Tools", content: "Apache Superset, MySQL, Git, PostgreSQL, Pandas, Matplotlib", icon: "bi-gear" },
    { title: "Platforms", content: "PyCharm, DBeaver, Jupyter Notebook, VSCode, Azure", icon: "bi-laptop" },
    { title: "Soft Skills", content: "Problem-Resolution, Teamwork, Communication, Adaptability", icon: "bi-people" },
    { title: "Methodologies", content: "Agile, Scrum", icon: "bi-list-check" },
];

const skillsContainer = document.getElementById("skills-container");

skillsData.forEach(skill => {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-3";

    col.innerHTML = `
        <div class="card custom-card-hover h-100 border-0 shadow-sm">
            <div class="card-body d-flex flex-column align-items-start">

                <div class="d-flex align-items-center skill-header mb-2">
                    <i class="bi ${skill.icon} skill-icon me-2"></i>
                    <h5 class="card-title mb-0">${skill.title}</h5>
                </div>

               <p class="card-text">
                    <ul class="mb-0">
                        ${skill.content.split(',').map(item => `<li>${item.trim()}</li>`).join('')}
                    </ul>
                </p>
            </div>
        </div>
    `;

    skillsContainer.appendChild(col);
});



// projects

const projectsData = [
    {
        title: "AT&T Apps",
        points: [
            "Improved frontend stability and overall user experience by identifying and resolving UI/UX issues across multiple application modules.",
            "Implemented responsive loading indicators to enhance perceived performance during asynchronous operations.",
            "Utilized cloud-native and serverless architecture to improve application scalability, optimize operational costs, and ensure high availability."
        ]
    },
    {
        title: "E-commerce Platform",
        points: [
            "Contributed to frontend stability by fixing UI/UX bugs and improving user interaction flows.",
            "Implemented a responsive loader mechanism to enhance perceived performance during async operations.",
            "Added and optimized SEO tags across product pages to improve search engine visibility and ranking.",
            "Designed and deployed serverless solutions using Azure Functions to handle event-driven workflows and automated tasks.",
            "Managed scalable application hosting and deployment pipelines through Azure App Service, ensuring high availability and performance.",
            "Leveraged cloud-native and serverless architectures to optimize costs, improve scalability, and enhance operational efficiency."
        ]
    },
    {
        title: "ERP Tools",
        points: [
            "ABP Market Core Module: Built foundational CRUD operations and UI workflows to support product and service listings.",
            "Employee Referral Module: Created a system for employee-led candidate referrals with approval workflows, referral tracking, and reward eligibility logic.",
            "Joining Bonus Management: Implemented a module to manage role-based joining bonuses, eligibility rules, and HR-controlled disbursements.",
            "Notice Period Advance Payment: Developed a workflow for employees to request advance salary payments during their notice period, integrated with approval chains and final settlement logic.",
            "Integrated Azure Blob Storage for secure storage and retrieval of employee documents, resumes, and compliance files across modules."
        ]
    },
    {
        title: "Dolphin IQ (ANPL)",
        points: [
            "Developed various Angular screens for efficient data management.",
            "Sole accountability for creating insightful dashboards using Chart.js and Apache Superset.",
            "Features include connection management, user and role administration, and role permission assignment.",
            "Implemented a robust data-processing model for seamless data handling across the platform.",
            "Deployed the application on Azure App Service, leveraging serverless architecture for scalability and cost efficiency."
        ]
    }
];

const projectsContainer = document.getElementById("projects-container");

projectsData.forEach(project => {
    const col = document.createElement("div");
    col.className = "col-md-6";

    col.innerHTML = `
        <div class="card portfolio-card h-100 border-0 shadow-sm p-3 custom-card-hover">
            <div class="card-body">
                <h5 class="card-title text-success mb-3">${project.title}</h5>
                <ul class="card-text mb-0">
                    ${project.points.map(point => `<li>${point}</li>`).join('')}
                </ul>
            </div>
        </div>

    `;

    projectsContainer.appendChild(col);
});



// salary and notice  period
const salaryData = [
    { label: "Current Organisation", value: "Plasma Softech Noida", icon: "bi-building" },
    { label: "Current CTC", value: "₹8,00,000 / Year", icon: "bi-currency-dollar" },
    { label: "Expected CTC", value: "₹13,00,000 / Year", icon: "bi-currency-dollar" },
    { label: "Notice Period", value: "15 Days", icon: "bi-clock" },
    { label: "Location", value: "PAN India", icon: "bi-geo-alt" }
];


const salaryContainer = document.getElementById("salary-container");

salaryData.forEach(item => {
    const col = document.createElement("div");
    col.className = "col-md-4";

    col.innerHTML = `
        <div class="card salary-card h-100 border-0 shadow-sm text-center custom-card-hover p-4">
            <i class="bi ${item.icon} salary-icon mb-2"></i>
            <h5 class="card-title mb-2">${item.label}</h5>
            <p class="card-text mb-0">${item.value}</p>
        </div>
    `;

    salaryContainer.appendChild(col);
});



// experience
const experienceData = [
    {
        company: "Plasma Softech Group Noida, UP",
        duration: "Oct 2025 - Present",
        role: "Front-End Developer (Client: AT&T)",
        points: [
            "Working as a Full Stack Developer for AT&T projects, developing and enhancing enterprise-level web applications.",
            "Designing and implementing scalable frontend modules using Angular, ensuring responsive UI.",
            "Implementing new features, optimizing functionalities, and resolving production issues.",
            "Participating in code reviews, testing, and deployment activities to ensure stable releases."
        ]
    },
    {
        company: "Atomic North Pvt Ltd Noida, UP",
        duration: "July 2023 - Oct 2025",
        role: "Full Stack Developer (Client: PI Industries)",
        points: [
            "Developed and maintained a web-based ERP system to automate key business operations.",
            "Utilized React, Django, and FastAPI for building full-stack applications.",
            "Collaborated with cross-functional teams to gather requirements and align platform features.",
            "Developed Angular-based dashboards for internal data tools using Chart.js and Apache Superset."
        ]
    }
];

const experienceContainer = document.getElementById("experience-container");

experienceData.forEach((exp, index) => {
    const col = document.createElement("div");
    col.className = "col-12";

    col.innerHTML = `
        <div class="card timeline-card mb-4 shadow-sm custom-card-hover">
            <div class="card-body d-flex">
                <!-- Left: Work Done -->
                <div class="timeline-content flex-grow-1 pe-4">
                    <h5 class="role-title mb-2">${exp.role}</h5>
                    <ul class="mb-0">
                        ${exp.points.map(point => `<li>${point}</li>`).join('')}
                    </ul>
                </div>

                <!-- Center: Line & Marker -->
                <div class="timeline-line text-center position-relative mx-3">
                    <span class="timeline-circle">${index + 1}</span>
                    <span class="line"></span>
                </div>

                <!-- Right: Company / Duration -->
                <div class="timeline-company flex-shrink-0 ps-4 text-end">
                    <h6 class="company-name mb-1">${exp.company}</h6>
                    <p class="duration mb-0">${exp.duration}</p>
                </div>
            </div>
        </div>
    `;

    experienceContainer.appendChild(col);
});


const aboutContent = {
    title: "About",
    subtitle: "Why You Hire Me?",
    description: `Full Stack Developer with 2.5+ years of experience in Angular, React, and Python (Django, FastAPI). Skilled
in building responsive UIs, RESTful APIs, and managing MySQL/PostgreSQL databases. Seeking to apply my
skills in a challenging and growth-oriented environment. Seeking to contribute technical expertise and problem-solving
skills to a dynamic development team focused on delivering impactful digital solutions.`,
    skills: [
        { name: "UI/UX Design", percent: 85 },
        { name: "HTML/CSS", percent: 90 },
        { name: "Javascript", percent: 85 },
        { name: "Angular", percent: 85 },
        { name: "React", percent: 70 },
        { name: "Python", percent: 85 },
        { name: "DataBase", percent: 75 },
    ]
};

// Target container (your col-lg-6 div)
const aboutContainer = document.querySelector("#about-content"); // make sure your div has id="about-content"

let skillsHTML = aboutContent.skills.map(skill => `
    <div class="skill mt-3">
        <h5>${skill.name} <span class="float-end">${skill.percent}%</span></h5>
        <div class="progress">
            <div class="progress-bar" style="width: ${skill.percent}%;"></div>
        </div>
    </div>
`).join('');

aboutContainer.innerHTML = `
    <h2>${aboutContent.title}</h2>
    <h4 class="mt-2 mb-3">${aboutContent.subtitle}</h4>
    <p>${aboutContent.description}</p>
    ${skillsHTML}
`;

// resume download 

// Resume data
const resumeData = {
    path: "assets/resume/Devendra_FSD_2.5+yr_python_angular.pdf",
    filename: "Devendra_Kumar_Singh_Resume.pdf",
    buttonText: "Download Resume"
};

// Target container where the button should appear
const resumeContainer = document.querySelector("#resume-download"); // Make sure your div has this id

// Insert the download button dynamically
resumeContainer.innerHTML = `

    <a href="${resumeData.path}" 
       download="${resumeData.filename}" 
       class="main-btn">
       <i class="bi bi-download me-2"></i>
       ${resumeData.buttonText}
    </a>
`;


// Education data array
const educationData = [
    { degree: "B.Tech", school: "GLA University", year: "2015 - 2019" },
    { degree: "Intermediate", school: "Simpkins School Agra", year: "2012 - 2014" },
    { degree: "High School", school: "SMK School Agra", year: "2011 - 2012" }
];

// Target container
const educationContainer = document.querySelector("#education-content");

// Generate HTML dynamically
educationContainer.innerHTML = educationData.map(edu => `
    <div class="col-md-4">
        <div class="card education-card custom-card-hover h-100 text-center p-4 border-0 shadow-sm">
            <h3 class="mb-2">${edu.degree}</h3>
            <p class="mb-1">${edu.school}</p>
            <p class="text-muted">${edu.year}</p>
        </div>
    </div>
`).join('');



const backToTopBtn = document.getElementById('backToTop');

// Show button after scrolling 300px
window.addEventListener('scroll', () => {
    backToTopBtn.style.display = (window.scrollY > 300) ? 'block' : 'none';
});

// Smooth scroll to top
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

