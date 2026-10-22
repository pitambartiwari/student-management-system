package com.example.student_management_system;

import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository
extends JpaRepository<Student,Long> {
    boolean existsByNameIgnoreCase(String name);
}