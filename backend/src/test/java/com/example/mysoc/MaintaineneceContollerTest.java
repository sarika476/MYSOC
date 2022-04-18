package com.example.mysoc;

import com.example.mysoc.controller.MaintainenceController;
import com.example.mysoc.entity.MaintainenceDB;
import com.example.mysoc.service.MaintainenceService;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.jmx.export.annotation.ManagedOperation;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Date;

@RunWith(SpringRunner.class)
@WebMvcTest(value = MaintainenceController.class)
public class MaintaineneceContollerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private MaintainenceService maintainenceService;
    MaintainenceDB obj=new MaintainenceDB(5,1L,2021,3,new Date(2021-03-02),true,2000L,0);

}
