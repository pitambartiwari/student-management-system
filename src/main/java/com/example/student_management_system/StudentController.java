package com.example.student_management_system;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
public class StudentController{

    private final StudentRepository studentRepository;

    public StudentController(StudentRepository studentRepository){
        this.studentRepository = studentRepository;
    }


    @GetMapping("/api/test")
    public String test(){
        return "student Management System Backend is Working";
    }

    @GetMapping("/api/students")
    public List<Student> getAllStudents(){
        return studentRepository.findAll();
    }


@PostMapping("/api/students")
public ResponseEntity<?> addStudent(@RequestBody Student student) {

    if (studentRepository.existsByNameIgnoreCase(student.getName())) {
        return ResponseEntity
                .badRequest()
                .body("Student name already exists!");
    }

    return ResponseEntity.ok(studentRepository.save(student));
}


    @PutMapping ("/api/students/{id}")
    public Student updateStudent(
        @PathVariable Long id,
        @RequestBody Student updatedStudent){

            Student student = studentRepository.findById(id)
            .orElseThrow(()-> new RuntimeException("Student not found"));
            
            student.setName(updatedStudent.getName());
            student.setCourse(updatedStudent.getCourse());
            student.setRole(updatedStudent.getRole());

            return studentRepository.save(student);
        }

        @DeleteMapping ("/api/students/{id}")
        public String deletesString(@PathVariable Long id){
            studentRepository.deleteById(id);

            return "student deleted successfully!";
        }
}