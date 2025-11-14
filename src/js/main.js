// This file is intentionally left blank.
document.addEventListener('DOMContentLoaded', () => {
    const teacherBtn = document.getElementById('teacherBtn');
    const meBtn = document.getElementById('meBtn');
    const infoEl = document.getElementById('info');

    const teacher = {
        name: 'Ing. Elkin Gonzalez',
        role: 'Profesor',
        email: 'elkin.gonzalez@uniminuto.edu',
        bio: 'Profesor de Desarrollo de Aplicaciones Web con experiencia en transformación digital, desarrollo de software y seguridad informática.'
    };

    const me = {
        name: 'Harold Carrillo',
        role: 'Estudiante',
        email: 'harold.carrillo@uniminuto.edu.co',
        bio: 'Estudiante de la especialización, interesado en desarrollo de aplicaciones web.'
    };

    function renderPerson(person) {
        infoEl.innerHTML = `
            <h2>${person.name}</h2>
            <p><strong>Rol:</strong> ${person.role}</p>
            <p><strong>Email:</strong> <a href="mailto:${person.email}">${person.email}</a></p>
            <p>${person.bio}</p>
        `;
        infoEl.focus();
    }

    teacherBtn.addEventListener('click', () => renderPerson(teacher));
    meBtn.addEventListener('click', () => renderPerson(me));
});