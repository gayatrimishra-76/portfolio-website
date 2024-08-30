document.addEventListener('DOMContentLoaded', function () {
    const projects = [
        {
            title: 'Java Inventory Management System',
            description: 'Developed an inventory management system using Java and MySQL for small businesses.'
        },
        {
            title: 'social media android studio',
            description: 'Created by using language xml and java.'
        },
        {
            title: 'library management system',
            description: 'built by using language php and mysql.'
        }
    ];

    const projectsContainer = document.getElementById('projects');

    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('p-4', 'bg-white', 'shadow-md', 'rounded-md');

        const projectTitle = document.createElement('h3');
        projectTitle.classList.add('text-xl', 'font-semibold', 'mb-2');
        projectTitle.textContent = project.title;

        const projectDescription = document.createElement('p');
        projectDescription.classList.add('text-lg');
        projectDescription.textContent = project.description;

        projectElement.appendChild(projectTitle);
        projectElement.appendChild(projectDescription);

        projectsContainer.appendChild(projectElement);
    });
});
