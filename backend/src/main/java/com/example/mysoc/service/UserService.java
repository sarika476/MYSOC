package com.example.mysoc.service;

import com.example.mysoc.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface UserService {
    public User saveUser(User user);
    public List<User> getUsers();
    public User updateUser(Long id,User user);
    public void deleteUser(Long id);
    public  User validateLogin(Long id, String password);
}
