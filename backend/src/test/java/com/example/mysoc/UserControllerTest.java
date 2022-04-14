package com.example.mysoc;

import com.example.mysoc.controller.UserController;
import com.example.mysoc.entity.User;
import com.example.mysoc.repository.UserRepositoy;
import org.junit.After;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import static org.junit.Assert.*;
import org.junit.Test;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = UserController.class)
@SpringBootTest
@AutoConfigureMockMvc
public class UserControllerTest {
    @Autowired
    private UserRepositoy userRepositoy;

    @Autowired
    private MongoTemplate mongoTemplate;

    @Autowired
    private MockMvc mockMvc;

    @After
    public void tearDown() throws  Exception{
        mongoTemplate.dropCollection(User.class);
    }

    @Test
    public void saveUser_test()
    {
        User u1=new User();
        u1.setId(1L);
        u1.setName("Monit");
        u1.setPassword("Abc");
        u1.setAdminFlag(false);
        assertEquals(u1,userRepositoy.save(u1));
    }


}
