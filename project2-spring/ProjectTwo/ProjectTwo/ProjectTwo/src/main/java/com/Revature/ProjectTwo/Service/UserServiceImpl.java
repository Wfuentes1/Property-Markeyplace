package com.Revature.ProjectTwo.Service;

import com.Revature.ProjectTwo.Entity.User;
import com.Revature.ProjectTwo.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository repository;

    @Override
    public List<User> getAllUsers() {
        return repository.findAll();
    }

    @Override
    public User getUserById(int id) {
        return repository.findById(id).get();
    }

    @Override
    public User addUser(User user) {
        return repository.save(user);
    }

    @Override
    public void updateUser(int id, User user) {
        User oldUser = repository.findById(id).get();
        oldUser.setEmail(user.getEmail());
        oldUser.setName(user.getName());
        oldUser.setPassword(user.getPassword());
        oldUser.setRating(user.getRating());
        repository.save(oldUser);

    }

    @Override
    public void deleteUser(int id) {
        repository.deleteById(id);

    }
}
