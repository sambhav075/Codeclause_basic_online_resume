document.getElementById('addProjectButton').addEventListener('click', function() {
    const projectsContainer = document.querySelector('.projects');
    
    const newProjectItem = document.createElement('div');
    newProjectItem.className = 'project-item';
    
    newProjectItem.innerHTML = `
        <label for="projectName">Project Name:</label>
        <input type="text" class="projectName" name="projectName" required><br>

        <label for="projectDescription">Description:</label>
        <textarea class="projectDescription" name="projectDescription" rows="3" required></textarea><br>

        <label for="technologiesUsed">Technologies Used:</label>
        <input type="text" class="technologiesUsed" name="technologiesUsed" required><br>
    `;
    
    projectsContainer.insertBefore(newProjectItem, document.getElementById('addProjectButton'));
    
});

document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const projectItems = document.querySelectorAll('.project-item');
    const projects = Array.from(projectItems).map(item => {
        const projectName = item.querySelector('.projectName').value;
        const projectDescription = item.querySelector('.projectDescription').value;
        const technologiesUsed = item.querySelector('.technologiesUsed').value;
        return { projectName, projectDescription, technologiesUsed };
    });

    const company = document.getElementById('company').value;
    const designation = document.getElementById('designation').value;
    const years = document.getElementById('years').value;
    
    const school = document.getElementById('school').value;
    const college = document.getElementById('college').value;
    const schoolPercentage = document.getElementById('schoolPercentage').value;
    const collegePercentage = document.getElementById('collegePercentage').value;
    
    const skills = document.getElementById('skills').value;

    const personalInfoContent = `
        <h1>${name}</h1>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
    `;

    const projectContent = projects.map(project => `
        <div class="project-item">
            <p><strong>Project Name:</strong> ${project.projectName}</p>
            <p><strong>Description:</strong> ${project.projectDescription}</p>
            <p><strong>Technologies Used:</strong> ${project.technologiesUsed}</p>
        </div>
    `).join('');

    const experienceContent = `
        <h2>Experience</h2>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Designation:</strong> ${designation}</p>
        <p><strong>Years of Experience:</strong> ${years}</p>
    `;

    const educationContent = `
        <h2>Education</h2>
        <p><strong>School:</strong> ${school}</p>
        <p><strong>College:</strong> ${college}</p>
        <p><strong>School Percentage:</strong> ${schoolPercentage}%</p>
        <p><strong>College Percentage:</strong> ${collegePercentage}%</p>
    `;

    const skillsContent = `
        <h2>Skills</h2>
        <p>${skills}</p>
    `;

    const resumeDetailsContent = experienceContent + educationContent + skillsContent + projectContent;

    localStorage.setItem('personalInfoContent', personalInfoContent);
    localStorage.setItem('resumeDetailsContent', resumeDetailsContent);

    window.location.href = 'resume.html';
});
