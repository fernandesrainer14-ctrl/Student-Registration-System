const form = document.getElementById("studentForm");
const tableBody = document.getElementById("studentTableBody");
const submitButton = document.getElementById("submitButton");

let editingRow = null;


// Submit Form

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("studentName").value;
    const id = document.getElementById("studentId").value;
    const email = document.getElementById("email").value;
    const contact = document.getElementById("contact").value;


    // Add new student

    if (editingRow === null) {

        const newRow = document.createElement("tr");

        newRow.innerHTML = `
            <td>${name}</td>
            <td>${id}</td>
            <td>${email}</td>
            <td>${contact}</td>
            <td>
                <button type="button" class="edit-button">Edit</button>
            </td>
        `;

        tableBody.appendChild(newRow);
    }


    // Update student records

    else {

        editingRow.cells[0].textContent = name;
        editingRow.cells[1].textContent = id;
        editingRow.cells[2].textContent = email;
        editingRow.cells[3].textContent = contact;

        editingRow = null;

        submitButton.textContent = "Register Now";
    }

    form.reset();

});


// Edit button

tableBody.addEventListener("click", function(event) {

    if (event.target.classList.contains("edit-button")) {

        const row = event.target.closest("tr");

        document.getElementById("studentName").value =
            row.cells[0].textContent;

        document.getElementById("studentId").value =
            row.cells[1].textContent;

        document.getElementById("email").value =
            row.cells[2].textContent;

        document.getElementById("contact").value =
            row.cells[3].textContent;

        editingRow = row;

        submitButton.textContent = "Update Student";
    }

});