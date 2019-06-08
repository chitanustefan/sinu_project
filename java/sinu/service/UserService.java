package sinu.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sinu.model.User;
import sinu.repository.UserRepository;
import sinu.service.interfaces.IUserService;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class UserService implements IUserService {

   // private static final Logger log = Logger.getLogger(UserService.class);

    @Autowired
    private UserRepository userRepository;

    public User login(String email, String password){
        List<User> userS = userRepository.findAll();
        for(User u: userS) {
            if (u.getEmail().equals(email) && u.getPassword().equals(password)) {
                System.out.println("Role: " + u.getRole());
                return u;
            }
        }
        return null;
    }

    @Override
    public List<User> getAllUsers() {
        List<User> result = userRepository.findAll();
        return result;
    }

    @Override
    public User saveUser(User user) {
        User savedUser = this.userRepository.save(user);
        return savedUser;

    }

    @Override
    @Transactional
    public User updateUser(Integer id, User user) {

        Optional<User> optionalUser = userRepository.findById(id);
        User result = optionalUser.orElse(user);
        return result;
    }

    @Override
    public void deleteUser(Integer id) {
        userRepository.deleteById(id);

    }
}
