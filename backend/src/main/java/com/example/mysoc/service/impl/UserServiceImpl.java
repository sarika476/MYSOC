package com.example.mysoc.service.impl;

import com.example.mysoc.entity.User;
import com.example.mysoc.repository.UserRepositoy;
import com.example.mysoc.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    BCryptPasswordEncoder bCryptPasswordEncoder=new BCryptPasswordEncoder();
    @Autowired
    private UserRepositoy userRepositoy;

    @Override
    public User saveUser(User user) {
        String pass=bCryptPasswordEncoder.encode(user.getPassword());
//        System.out.println("Encoded password is "+pass);
        user.setPassword(pass);
        return  userRepositoy.save(user);
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
            System.out.println("user found");
            User nu=t.get();
            System.out.println(nu.getName()+" "+nu.getPassword()+" "+nu.getContact_number());
            if(user.getName()!=null && !user.getName().isEmpty())
            {
                nu.setName(user.getName());
            }
            if(user.getPassword()!=null &&  !user.getPassword().isEmpty())
            {
                nu.setPassword(user.getPassword());
            }
            if(user.getContact_number()!=null)
            {
                nu.setContact_number(user.getContact_number());
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
    public int validateLogin(Long id, String password) {
         boolean found=false;
         Optional<User> user=userRepositoy.findById(id);
         if(user.isEmpty())
         {
             System.out.println("nahi mila");
             return 0;
         }
         else
         {
             if(bCryptPasswordEncoder.matches(password,user.get().getPassword()))
             {
                 System.out.println("Successfull login");
             }
             else
             {
                 System.out.println("Wrong password");
                 return 2;
             }
            return 1;
         }

    }

    @Override
    public Optional<User>  getUserByid(Long id) {
        return userRepositoy.findById(id);
    }

    @Override
    public int checkforadmin(Long id) {
        Optional<User> user=userRepositoy.findById(id);
        if(user.isEmpty())
            return 0;
        else if(user.get().isAdminFlag())
        {
            return 1;
        }
        return 0;
    }
}
