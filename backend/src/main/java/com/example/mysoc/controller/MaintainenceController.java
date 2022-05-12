package com.example.mysoc.controller;

import com.example.mysoc.entity.MaintainenceDB;
//import com.example.mysoc.entity.User;
import com.example.mysoc.service.MaintainenceService;
import com.sun.tools.javac.Main;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/Maitainence")
public class MaintainenceController {
    private static final Logger logger = LogManager.getLogger(UserController.class);

    @Autowired
    private MaintainenceService maintainenceService;

    @PostMapping("/save")
    public MaintainenceDB saveDetails(@RequestBody MaintainenceDB obj)
    {
        obj.setSkey(maintainenceService.generateSequence(MaintainenceDB.SEQUENCE_NAME));
        logger.info("[NewMaintainence]- Maitainenece added for user id "+obj.getId());
        return maintainenceService.saveDetails(obj);
    }

    @GetMapping("/getList")
    public List<MaintainenceDB> getList()
    {
        logger.info("[getAllMaintenanceDetails] - function for get the maintenance details is called");
        return maintainenceService.getList();
    }

    @PutMapping("/updateStatus/{uid}/{mon}/{yr}")
    public  boolean statusUpdate(@PathVariable("uid")Long id,@PathVariable("mon")int month,@PathVariable("yr")int year){
        logger.info("[MaintenanceUpdated] - Admin updated maintenance of user "+id);
        return maintainenceService.statusUpdate(id,month,year);
    }

    @GetMapping("/getById/{uid}")
    public List<MaintainenceDB> getById(@PathVariable("uid")Long id)
    {
       logger.info("[UserMaintenanceDetails] - function for getting maintenance details of the specific user is called");
        return maintainenceService.getById(id);
    }

    @GetMapping("/getRemaining")
    public List<MaintainenceDB> getReamaining()
    {
        logger.info("[Pending] -  function for list of users who's maintenance is pending is called");
        return maintainenceService.getRemaining();
    }

    @GetMapping("/getPaid")
    public List<MaintainenceDB> getPaid()
    {
        logger.info("[Paid]- function for list of users who's maintenance is paid is called");
        return maintainenceService.getPaid();
    }


    @GetMapping("/getMonthly/{Month}")
    public List<MaintainenceDB> getMonthly(@PathVariable("Month")String Month)
    {
        logger.info("[MonthlyDetails] - function for list of users maintenance month wise is called");
        return maintainenceService.getMonthly(Month);
    }
    @GetMapping("/getMonthlyUserWise/{id}/{Month}")
    public List<MaintainenceDB> getMonthlyUserWise(@PathVariable("id")Long id,@PathVariable("Month")String Month)
    {
        logger.info("[UserMonthlyDetails] - user "+id+" called function to get maintenance details month wise");
        return maintainenceService.getMonthlyUserWise(id,Month);
    }
    @GetMapping("/getRemainingUserWise/{id}")
    public List<MaintainenceDB> getReamainingUserWise(@PathVariable("id")Long id)
    {
        logger.info("[UserRemaining]- user "+id+ " called function to get list of pending maintenance");
        return maintainenceService.getRemainingUserWise(id);
    }

    @GetMapping("/getPaidUserWise/{id}")
    public List<MaintainenceDB> getPaidUserWise(@PathVariable("id")Long id)
    {
        logger.info("[UserWisePaid] - user "+id+" called fucntion to get list of paid maintenances");
        return maintainenceService.getPaidUserWise(id);
    }
}