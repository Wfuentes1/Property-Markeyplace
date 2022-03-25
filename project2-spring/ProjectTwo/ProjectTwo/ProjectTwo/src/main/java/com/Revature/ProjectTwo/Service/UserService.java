package com.Revature.ProjectTwo.Service;

import com.Revature.ProjectTwo.Entity.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {
    List<User> getAllUsers();
    User getUserById(int id);
    User addUser(User user);
    void updateUser(int id, User user);
    void deleteUser(int id);
}
