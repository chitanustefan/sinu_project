package sinu.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import sinu.model.Profesor;
import sinu.model.Student;
import sinu.model.User;
import sinu.service.ProfesorService;
import sinu.service.StudentService;
import sinu.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class LoginController {


    @Autowired
    private UserService userService = new UserService();

    @PostMapping("/login")
    public User login(@RequestBody User user) {

        System.out.println(user.getEmail() + " " + user.getPassword());
        User u = userService.login(user.getEmail(),user.getPassword());
        System.out.println("idUser: " + u.getIdUser() );
        return u;
    }
}
