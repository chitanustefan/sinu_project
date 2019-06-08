package sinu.service.interfaces;

import sinu.model.Student;
import sinu.model.User;

import java.util.List;

public interface IUserService {

    List<User> getAllUsers();
    User saveUser(User user);
    User updateUser(Integer id, User user);
    void deleteUser(Integer id);
}
