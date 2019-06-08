package sinu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sinu.model.Student;

public interface StudentRepository extends JpaRepository<Student, Integer> {
}
