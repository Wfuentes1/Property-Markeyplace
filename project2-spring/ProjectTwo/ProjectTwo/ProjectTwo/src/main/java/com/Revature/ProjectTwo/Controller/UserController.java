package com.Revature.ProjectTwo.Controller;

import com.Revature.ProjectTwo.Entity.User;
import com.Revature.ProjectTwo.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class UserController {

    @Autowired
    private UserService service;

    @GetMapping("/users")
    public List<User> getAllUsers(){
        return service.getAllUsers();
    }

    @GetMapping("/users/{id}")
    public User getUserById(@PathVariable("id") int id){
        return service.getUserById(id);
    }

    @PostMapping("/users")
    public User addUser(@RequestBody User user){
        return service.addUser(user);
    }

    @PutMapping("/users/{id}")
    public String updateUser(@PathVariable("id") int id, @RequestBody User user){
        service.updateUser(id, user);
        return "record updated successfully";
    }

    @DeleteMapping("/users/{id}")
    public String deleteUser(@PathVariable("id") int id){
        service.deleteUser(id);
        return "record deleted successfully";
    }
}