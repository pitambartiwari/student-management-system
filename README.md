# Student Management System

A web-based Student Management System built using Java, Spring Boot, Spring Data JPA, Hibernate, MySQL, HTML, CSS, and JavaScript.

## Features

- Add new students
- View all students
- Update student details
- Delete student records
- Store student data in MySQL
- Simple and user-friendly web interface

## Technologies Used

- **Backend:** Java, Spring Boot
- **Database:** MySQL
- **ORM:** Spring Data JPA, Hibernate
- **Frontend:** HTML, CSS, JavaScript
- **Build Tool:** Maven
- **Version Control:** Git and GitHub

## Prerequisites

Make sure you have installed:

- JDK 21 or compatible Java version
- MySQL Server
- Git

## How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/pitambartiwari/student-management-system.git
cd student-management-system
```

### 2. Configure MySQL

Create the database:

```sql
CREATE DATABASE student_management_db;
```

### 3. Configure the database password

Set the `DB_PASSWORD` environment variable to your own MySQL password.

**Windows PowerShell:**

```powershell
$env:DB_PASSWORD="YOUR_MYSQL_PASSWORD"
```

Replace `YOUR_MYSQL_PASSWORD` with your actual MySQL password. Do not upload your password to GitHub.

### 4. Run the application

On Windows PowerShell:

```powershell
.\mvnw.cmd spring-boot:run
```

### 5. Open the application

Visit:

http://localhost:8080

## Author

**Pitambar Tiwari**

GitHub: [pitambartiwari](https://github.com/pitambartiwari)

## License

This project is available for learning and educational purposes.


      
