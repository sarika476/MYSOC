package com.example.mysoc.controller;

import com.example.mysoc.MysocApplication;
import com.example.mysoc.entity.Credentials;
import com.example.mysoc.entity.Response;
import com.example.mysoc.entity.User;
import com.example.mysoc.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.*;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.List;
import java.util.Optional;
import java.util.logging.Level;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {
//    Logger logger= LoggerFactory.getLogger(UserController.class);
    private static final Logger logger = LogManager.getLogger(UserController.class);
    BCryptPasswordEncoder bCryptPasswordEncoder=new BCryptPasswordEncoder();

    @Autowired
    private UserService userService;

    @GetMapping("/getByid/{id}")
    public Optional<User> getUserByid(@PathVariable("id")Long id)
    {
        logger.info("[getUserById] -get user by id method called and finding for "+id);
        return userService.getUserByid(id);
    }

    @PostMapping("/save")
    public User saveUser(@RequestBody User user){
        logger.info("[UserSave]- new user added with user id "+user.getId());
        return userService.saveUser(user);
    }

    @GetMapping("/list")
        public List<User> getUsers()
    {
        logger.info("[getAllUser]- get list of user is called");
        return userService.getUsers();
        }
    @PutMapping("/update/{user_id}")
    public User updateUser(@RequestBody User user,@PathVariable("user_id")Long id){
        logger.info("[updateUser]- update user function called by user-"+id);
        return userService.updateUser(id,user);
    }
    @DeleteMapping("/delet/{user_id}")
    public String deleteUser(@PathVariable("user_id")Long id){
        logger.info("[deleteUser]- delete function called by user with id-"+id);
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
//                   logger.info("User "+check.getId().toString()+" Logged in");
                   logger.info("[Login] - user "+check.getId()+" Logged in");
                   return ResponseEntity.ok().header("Content Type","application/json")
                           .body(response);
               }
               else if(x==0)
               {
                   System.out.println("User not found");
                   response.setStatus("Not found");
                   response.setMessage("User not found");
                   logger.info("[UserNotFound] User with id "+check.getId() +" Not found");
                   return ResponseEntity.notFound().build();
               }
               else
               {
                   System.out.println("invalid Credential");
                   response.setStatus("Invalid");
                   response.setMessage("Wrong Password");
                   logger.info("[Wrong Password] User "+check.getId()+" Entered wrong password");
                   return ResponseEntity.badRequest().header("Content Type","application/json")
                           .body(response);
               }

    }
    @GetMapping("/isAdmin/{id}")
    public ResponseEntity<Response> checkIfAdmin(@PathVariable("id")Long id)
    {
        int x=userService.checkforadmin(id);
        Response response=new Response();
        if(x==1)
        {
            System.out.println("ya it's an admin");
            response.setMessage("Yes admin");
            response.setStatus("Admin");
            logger.info("[AdminLogin] -One of the admin logged in with id-"+id);
            return ResponseEntity.ok().header("Content Type","application/json")
                    .body(response);
        }
        else {
            System.out.println("User");
            response.setStatus("User");
            response.setMessage("its a user");
            logger.info("[userLogin] - one of the user logged in with user id-"+id);
            return ResponseEntity.badRequest().header("Content Type","application/json")
                    .body(response);

        }
    }
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    class InvalidRequestException extends RuntimeException {
        public InvalidRequestException(String s) {
            super(s);
        }
    }



}
