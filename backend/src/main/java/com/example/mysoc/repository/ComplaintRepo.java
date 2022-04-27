package com.example.mysoc.repository;

import com.example.mysoc.entity.Complaint;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ComplaintRepo extends MongoRepository<Complaint, Long> {

}
