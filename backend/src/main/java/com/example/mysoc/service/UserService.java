package com.example.mysoc.service;

import com.example.mysoc.entity.User;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
//@Component
public interface UserService {
    public User saveUser(User user);
    public List<User> getUsers();
    public User updateUser(Long id,User user);
    public void deleteUser(Long id);
    public  int validateLogin(Long id, String password);
    public Optional<User> getUserByid(Long id);
    public boolean checkforadmin(Long id);
}
