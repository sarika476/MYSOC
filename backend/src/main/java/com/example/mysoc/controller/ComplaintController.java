package com.example.mysoc.controller;

import com.example.mysoc.entity.Complaint;
import com.example.mysoc.entity.ComplaintSequencer;
import com.example.mysoc.entity.Response;
import com.example.mysoc.repository.ComplaintRepo;
import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import static org.springframework.data.mongodb.core.FindAndModifyOptions.options;
import static org.springframework.data.mongodb.core.query.Criteria.where;

@RestController
@CrossOrigin
@RequestMapping("/Complaint")
public class ComplaintController {
    public Response response=new Response();

//    @Autowired
//    private ComplaintService complaintService;


//    @Autowired
//    public ComplaintService complaintService;


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
                                                      @RequestParam("img")MultipartFile img,
                                                      @RequestParam("category")String category
    ,@RequestParam("date")String dt) throws IOException {
        System.out.println("Here reached");
        response.setStatus("Success");
        response.setMessage("Complaint regirsterd successfully");
        Complaint obj = new Complaint();
        obj.setSkey(this.generateSequence(Complaint.SEQUENCE_NAME));
        obj.setFlat_no(fno);
        obj.setDescription(des);
        if(!img.isEmpty()){
        obj.setImage(new Binary(BsonBinarySubType.BINARY, img.getBytes()));}
        obj.setCat(category);
        obj.setDate(dt);
        complaintRepo.save(obj);
        return ResponseEntity.ok().body(response);
    }
    @GetMapping("/GetAllComplaints")
    public List<Complaint> getALL()
    {
        return complaintRepo.findAll(Sort.by("date").descending());
    }

    @GetMapping("/GetPendingComplaints")
    public List<Complaint> getPending()
    {
        Query query=new Query();
        List<Criteria> criteria=new ArrayList<>();
        criteria.add(Criteria.where("Status").is(false));
        query.addCriteria(new Criteria().andOperator(criteria.toArray((new Criteria[criteria.size()]))));
        List<Complaint> ans=mongoOperations.find(query,Complaint.class);

        return ans;
    }
    @GetMapping("/getComplaintByUser/{uid}")
    public List<Complaint> getComplaintsbyUser(@PathVariable("uid")Long id)
    {
        Query query=new Query();
        List<Criteria> criteria=new ArrayList<>();
        criteria.add(Criteria.where("flat_no").is(id));
        query.addCriteria(new Criteria().andOperator(criteria.toArray((new Criteria[criteria.size()]))));
        List<Complaint> ans=mongoOperations.find(query,Complaint.class);
        return ans;
    }
    @PutMapping("/updateComplaintStatus/{skey}/{fno}")
    public boolean updateStatus(@PathVariable("skey")long sk, @PathVariable("fno")Long fno)
    {
        Query query=new Query();
        List<Criteria> criteria=new ArrayList<>();
        criteria.add(Criteria.where("skey").is(sk));
        criteria.add(Criteria.where("flat_no").is(fno));
        Complaint val=mongoOperations.findAndModify(query,new Update().set("Status",true),Complaint.class);
        return true;
    }
}
