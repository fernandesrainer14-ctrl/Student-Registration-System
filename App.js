console.log("JavaScript is running");

const form = document.getElementById("studentForm");
const tableBody = document.getElementById("studentTableBody");

console.log(form);
console.log(tableBody);

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("studentName");
    const id = document.getElementById("studentId");
    const email = document.getElementById("email");
    const contact = document.getElementById("contact");

    const newRow = document.createElement("tr");

    newRow.innerHTML = `
    <td>${name.value}</td>
    <td>${id.value}</td>
    <td>${email.value}</td>
    <td>${contact.value}</td>
    `;

    tableBody.appendChild(newRow);

    form.reset();

});