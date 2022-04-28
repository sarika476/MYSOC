package com.example.mysoc.controller;

import com.example.mysoc.entity.Credentials;
import com.example.mysoc.entity.Response;
import com.example.mysoc.entity.User;
import com.example.mysoc.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.*;


import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {


    BCryptPasswordEncoder bCryptPasswordEncoder=new BCryptPasswordEncoder();

    @Autowired
    private UserService userService;

    @GetMapping("/getByid/{id}")
    public Optional<User> getUserByid(@PathVariable("id")Long id)
    {
        return userService.getUserByid(id);
    }

    @PostMapping("/save")
    public User saveUser(@RequestBody User user){
        return userService.saveUser(user);
    }

    @GetMapping("/list")
        public List<User> getUsers()
    {
            return userService.getUsers();
        }
    @PutMapping("/update/{user_id}")
    public User updateUser(@RequestBody User user,@PathVariable("user_id")Long id){
        return userService.updateUser(id,user);
    }
    @DeleteMapping("/delet/{user_id}")
    public String deleteUser(@PathVariable("user_id")Long id){
        userService.deleteUser(id);
        return "yeahh boy";
    }

    @PostMapping("/login")
    public ResponseEntity<Response> validateLogin(@RequestBody Credentials check)
    {
               int x=userService.validateLogin(check.getId(),check.getPassword());
               Response response=new Response();
               if(x==1)
               {
                   System.out.println("Login success");
                   response.setStatus("Success");
                   response.setMessage("Login Successful");
                   return ResponseEntity.ok().header("Content Type","application/json")
                           .body(response);
               }
               else if(x==0)
               {
                   System.out.println("User not found");
                   response.setStatus("Not found");
                   response.setMessage("User not found");
                   return ResponseEntity.notFound().build();
               }
               else
               {
                   System.out.println("invalid Credential");
                   response.setStatus("Invalid");
                   response.setMessage("Wrong Password");
                   return ResponseEntity.badRequest().header("Content Type","application/json")
                           .body(response);
               }

    }
    @GetMapping("/isAdmin/{id}")
    public boolean checkIfAdmin(@PathVariable("id")Long id)
    {
        return userService.checkforadmin(id);
    }
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    class InvalidRequestException extends RuntimeException {
        public InvalidRequestException(String s) {
            super(s);
        }
    }



}
