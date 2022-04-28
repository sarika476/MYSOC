package com.example.mysoc.service.impl;

import com.example.mysoc.entity.Complaint;
import com.example.mysoc.entity.ComplaintSequencer;
import com.example.mysoc.entity.MaintenenceSequencer;
import com.example.mysoc.repository.ComplaintRepo;
import com.example.mysoc.service.ComplaintService;
import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Objects;

import static org.springframework.data.mongodb.core.FindAndModifyOptions.options;
import static org.springframework.data.mongodb.core.query.Criteria.where;

public class ComplaintServiceImpl implements ComplaintService {
    @Autowired
    private ComplaintRepo complaintRepo;
    @Autowired
    MongoOperations mongoOperations;




    @Override
    public long generateSequence(String seqName) {
        ComplaintSequencer counter = mongoOperations.findAndModify(Query.query(where("_id").is(seqName)), new
                Update().inc("seq", 1), options().returnNew(true).upsert(true), ComplaintSequencer.class);
        return !Objects.isNull(counter) ? counter.getSeq() : 1;
    }

    @Override
    public int regeisterComplaint(Complaint obj,MultipartFile img) throws IOException {
        obj.setImage(new Binary(BsonBinarySubType.BINARY,img.getBytes()));
        complaintRepo.save(obj);
        return 1;
    }

}
