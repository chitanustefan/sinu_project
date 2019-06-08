package sinu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import sinu.model.Student;
import sinu.model.User;

import javax.transaction.Transactional;


public interface UserRepository extends JpaRepository<User, Integer> {
}
