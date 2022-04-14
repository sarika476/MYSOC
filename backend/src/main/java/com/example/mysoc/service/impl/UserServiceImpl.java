package com.example.mysoc.service.impl;

import com.example.mysoc.entity.User;
import com.example.mysoc.repository.UserRepositoy;
import com.example.mysoc.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepositoy userRepositoy;

    @Override
    public User saveUser(User user) {
        return userRepositoy.save(user);
    }

    @Override
    public List<User> getUsers() {
        return userRepositoy.findAll();
    }

    @Override
    public User updateUser(Long id, User user) {
        Optional<User> t=userRepositoy.findById(id);
        if(t.isPresent())
        {
            User nu=t.get();
            if(nu.getName()!=null && !nu.getName().isEmpty())
            {
                nu.setName(user.getName());
            }
            if(nu.getPassword()!=null &&  !nu.getPassword().isEmpty())
            {
                nu.setPassword(user.getPassword());
            }
            return userRepositoy.save(nu);
        }
        return null;
    }

    @Override
    public void deleteUser(Long id) {
    userRepositoy.deleteById(id);
    }

    @Override
    public User validateLogin(Long id, String password) {
         boolean found=false;
        List<User> all=userRepositoy.findAll();
        for(User u:all) {
            if (id == u.getId()) {
                if (password.equals(u.getPassword())) {
                    found=true;
                    System.out.println("found");
                    if (u.isAdminFlag() == true) {
                        System.out.println("Admin hai bhai");
                    } else {
                        System.out.println("Admin nahin hai bhai");
                    }

                    return u;
                } else {
                    System.out.println("Wrong Password Try again");
                    return null;
                }
            }
        }
        if(!found)
        {
            System.out.println("Not found any user with given id");
        }

        return null;
    }
}
