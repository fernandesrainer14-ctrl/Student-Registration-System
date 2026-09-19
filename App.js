const form = document.getElementById(studentForm);
const tableBody = document.getElementById(studentTableBody);

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("studentname");
    const id = document.getElementById("studentId");
    const email = document.getElementById("email");
    const contact = document.getElementById("contact");

    const newRow = document.createElement("tr");

    newRow.innerHTML = `
    <td>${name}</td>
    <td>${id}</td>
    <td>${email}</td>
    <td>${contact}</td>
    `;

    tableBody.appendChild(newRow);

    form.reset();

});