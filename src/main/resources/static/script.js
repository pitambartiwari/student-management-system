console.log("JavaScript loaded!");


const studentForm = document.getElementById("studentForm");
const studentTable = document.getElementById("studentTable");

const submitButton = document.getElementById("submitButton");
const cancelButton = document.getElementById("cancelButton");
let editStudentId = null;

// Database se students ki list lana
async function loadStudents() {
    try {
        const response = await fetch("/api/students");
        const students = await response.json();

        studentTable.innerHTML = "";

        students.forEach(student => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.course}</td>
                <td>${student.role}</td>
                <td>
                <button onclick="editStudent(${student.id})">Edit</button>
                <button onclick="deleteStudent(${student.id})">Delete</button>
                </td>
            `;

            studentTable.appendChild(row);
        });
    } catch (error) {
        console.error("Students load nahi hue:", error);
    }
}

// Form submit hone par student save karna

studentForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const student = {
        name: document.getElementById("name").value.trim(),
        course: document.getElementById("course").value.trim(),
        role: document.getElementById("role").value.trim()
    };

    const isEditing = editStudentId !== null;

    try {
        const response = await fetch(
            isEditing ? `/api/students/${editStudentId}` : "/api/students",
            {
                method: isEditing ? "PUT" : "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(student)
            }
        );

        if (!response.ok) {
            const message = await response.text();
            throw new Error(message);
        }

        alert(isEditing ? "Student updated successfully!" : "Student successfully added!");

        studentForm.reset();
        editStudentId = null;
        submitButton.textContent = "Add Student";
        cancelButton.style.display = "none";

        await loadStudents();
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
});


loadStudents();


async function editStudent(id) {
    try {
        const response = await fetch("/api/students");
        const students = await response.json();

        const student = students.find(s => s.id === id);

        if (!student) {
            alert("Student nahi mila!");
            return;
        }

        document.getElementById("name").value = student.name;
        document.getElementById("course").value = student.course;
        document.getElementById("role").value = student.role;

        editStudentId = id;
        submitButton.textContent = "Update Student";
        cancelButton.style.display = "inline-block";

        studentForm.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
        console.error(error);
        alert("Student details load nahi hui!");
    }
}


async function deleteStudent(id) {
    if (!confirm("Are you sure you want to delete this student?")) {
        return;
    }

    try {
        const response = await fetch(`/api/students/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error("Student delete failed");
        }

        alert("Student deleted successfully!");
        await loadStudents();
    } catch (error) {
        console.error(error);
        alert("Student delete nahi hua!");
    }
}


cancelButton.addEventListener("click", function () {
    studentForm.reset();
    editStudentId = null;
    submitButton.textContent = "Add Student";
    cancelButton.style.display = "none";
});

