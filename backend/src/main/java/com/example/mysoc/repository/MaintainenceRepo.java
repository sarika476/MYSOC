package com.example.mysoc.repository;

import com.example.mysoc.entity.MaintainenceDB;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface MaintainenceRepo extends MongoRepository<MaintainenceDB,Long> {
    @Query("{'id' : ?0, month' : ?1 , 'status' : ?2}")
    public MaintainenceDB getUserStatus(Long Id,int mon,boolean flag);

}