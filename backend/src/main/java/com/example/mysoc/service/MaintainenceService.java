package com.example.mysoc.service;

import com.example.mysoc.entity.MaintainenceDB;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface MaintainenceService {
    public MaintainenceDB saveDetails(MaintainenceDB mdb);
    public List<MaintainenceDB> getList();
    public List<MaintainenceDB> getById(Long id);
    public boolean statusUpdate(Long id,int month,int year);
    public List<MaintainenceDB> getRemaining();
    public long generateSequence(String seqName);
    public List<MaintainenceDB> getMonthly(String Month);
}
