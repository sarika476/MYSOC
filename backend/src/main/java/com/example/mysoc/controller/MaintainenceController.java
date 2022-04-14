package com.example.mysoc.controller;

import com.example.mysoc.entity.MaintainenceDB;
//import com.example.mysoc.entity.User;
import com.example.mysoc.service.MaintainenceService;
import com.sun.tools.javac.Main;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/Maitainence")
public class MaintainenceController {
    @Autowired
    private MaintainenceService maintainenceService;

    @PostMapping("/save")
    public MaintainenceDB saveDetails(@RequestBody MaintainenceDB obj)
    {
        obj.setSkey(maintainenceService.generateSequence(MaintainenceDB.SEQUENCE_NAME));
        return maintainenceService.saveDetails(obj);
    }

    @GetMapping("/getList")
    public List<MaintainenceDB> getList()
    {
        return maintainenceService.getList();
    }

    @PutMapping("/updateStatus/{uid}/{mon}/{yr}")
    public  boolean statusUpdate(@PathVariable("uid")Long id,@PathVariable("mon")int month,@PathVariable("yr")int year){
        return maintainenceService.statusUpdate(id,month,year);
    }

    @GetMapping("/getById/{uid}")
    public List<MaintainenceDB> getById(@PathVariable("uid")Long id)
    {
       return maintainenceService.getById(id);
    }

    @GetMapping("/getRemaining")
    public List<MaintainenceDB> getReamaining()
    {
        return maintainenceService.getRemaining();
    }

    @GetMapping("/getPaid")
    public List<MaintainenceDB> getPaid()
    {
        return maintainenceService.getPaid();
    }


    @GetMapping("/geMonthly/{Month}")
    public List<MaintainenceDB> getMonthly(@PathVariable("Month")String Month)
    {
        return maintainenceService.getMonthly(Month);
    }
    @GetMapping("/geMonthlyUserWise/{id}/{Month}")
    public List<MaintainenceDB> getMonthlyUserWise(@PathVariable("id")Long id,@PathVariable("Month")String Month)
    {
        return maintainenceService.getMonthlyUserWise(id,Month);
    }
    @GetMapping("/getRemainingUserWise/{id}")
    public List<MaintainenceDB> getReamainingUserWise(@PathVariable("id")Long id)
    {
        return maintainenceService.getRemainingUserWise(id);
    }

    @GetMapping("/getPaidUserWise/{id}")
    public List<MaintainenceDB> getPaidUserWise(@PathVariable("id")Long id)
    {
        return maintainenceService.getPaidUserWise(id);
    }
}