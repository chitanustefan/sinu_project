package sinu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sinu.model.Profesor;

public interface ProfesorRepository extends JpaRepository<Profesor, Integer> {
}
