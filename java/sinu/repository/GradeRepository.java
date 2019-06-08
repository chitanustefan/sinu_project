package sinu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sinu.model.Grade;

public interface GradeRepository extends JpaRepository<Grade, Integer> {
}
