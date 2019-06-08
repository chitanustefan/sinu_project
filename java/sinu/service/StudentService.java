package sinu.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sinu.model.Student;
import sinu.repository.StudentRepository;
import sinu.service.interfaces.IStudentService;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;


@Service
public class StudentService implements IStudentService {

    // private static final Logger log = Logger.getLogger(UserService.class);

    @Autowired
    private StudentRepository studentRepository;



    public Student login(String email, String password){
        List<Student> userS = studentRepository.findAll();
        for(Student u: userS)
            if(u.getEmail().equals(email) && u.getEmail().equals(password)){
                return u;
            }
        return null;
    }

    @Override
    public List<Student> getAllStudents() {
        List<Student> result = studentRepository.findAll();
        return result;
    }

    @Override
    public Student saveStudent(Student student) {
        Student savedUser = this.studentRepository.save(student);
        return savedUser;

    }

    @Override
    @Transactional
    public Student updateStudent(Integer id, Student student) {

        Optional<Student> optionalUser = studentRepository.findById(id);
        Student result = optionalUser.orElse(student);
        return result;
    }

    @Override
    public void deleteStudent(Integer id) {
        studentRepository.deleteById(id);
    }
}
