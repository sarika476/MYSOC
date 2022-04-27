package com.example.mysoc.controller;

import com.example.mysoc.entity.Complaint;
import com.example.mysoc.entity.ComplaintSequencer;
import com.example.mysoc.entity.MaintainenceDB;
import com.example.mysoc.entity.Response;
import com.example.mysoc.repository.ComplaintRepo;
import com.example.mysoc.service.ComplaintService;
import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Objects;

import static org.springframework.data.mongodb.core.FindAndModifyOptions.options;
import static org.springframework.data.mongodb.core.query.Criteria.where;

@Controller
@CrossOrigin
@RequestMapping("/Complaint")
public class ComplaintController {
    public Response response=new Response();
/*

    @Autowired
    private ComplaintService complaintService;
*/
    @Autowired
    public ComplaintRepo complaintRepo;

    @Autowired
    MongoOperations mongoOperations;

    public long generateSequence(String seqName) {
        ComplaintSequencer counter = mongoOperations.findAndModify(Query.query(where("_id").is(seqName)), new
                Update().inc("seq", 1), options().returnNew(true).upsert(true), ComplaintSequencer.class);
        return !Objects.isNull(counter) ? counter.getSeq() : 1;
    }
    @PostMapping("/Register")
    public ResponseEntity<Response> registerComplaint(@RequestParam("fno")Long fno,@RequestParam("des")String des,
                                                      @RequestParam("img")MultipartFile img) throws IOException {
//        System.out.println("Here reached");
        response.setStatus("abc");
        response.setMessage("xyc");
        Complaint obj=new Complaint();
        obj.setSkey(this.generateSequence(Complaint.SEQUENCE_NAME));
        obj.setFlat_no(fno);
        obj.setDescription(des);
        obj.setImage(new Binary(BsonBinarySubType.BINARY,img.getBytes()));
        complaintRepo.save(obj);
        return ResponseEntity.ok().body(response);
    }



}
