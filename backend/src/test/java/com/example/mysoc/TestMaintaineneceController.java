package com.example.mysoc;

import com.example.mysoc.controller.UserController;
import com.example.mysoc.entity.User;
import com.example.mysoc.repository.UserRepositoy;
import com.example.mysoc.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.web.JsonPath;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.hamcrest.Matchers.*;

//@SpringBootTest
@RunWith(SpringRunner.class)
@WebMvcTest(UserController.class)
public class TestMaintaineneceController {
    @Autowired
    MockMvc mockMvc;

    @Autowired
    ObjectMapper objectMapper;


    @MockBean
    UserService userRepositoy;

    public User user=new User(5L,"monit",false,"thakkar",849057581L);
    public User ures=new User(6L,"manthan",true,"shah",99246884861L);

    @Test
    public void checkingGetAPi() throws Exception{
        List<User> arr=new ArrayList<>(Arrays.asList(user,ures));
        Mockito.when(userRepositoy.getUsers()).thenReturn(arr);
        mockMvc.perform(MockMvcRequestBuilders
                 .get("/user/list")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$",hasSize(2)))
                .andExpect(jsonPath("$[0].name",is("monit")));

        System.out.println("New one is working");


    }

    @Test
    public void checkingPostApi() throws Exception
    {
        User user=new User(5L,"monit",false,"monit",8490057581L);
        Mockito.when(userRepositoy.saveUser(user)).thenReturn(user);
        MockHttpServletRequestBuilder mockHttpServletRequestBuilder=MockMvcRequestBuilders.post("/user/save")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .content(this.objectMapper.writeValueAsString(user));
        mockMvc.perform(mockHttpServletRequestBuilder)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$",notNullValue()))
                .andExpect(jsonPath("$.name",is("monit")));
    }
}
