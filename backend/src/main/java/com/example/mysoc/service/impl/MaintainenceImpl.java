package com.example.mysoc.service.impl;

import com.example.mysoc.entity.MaintainenceDB;
import com.example.mysoc.entity.MaintenenceSequencer;
import com.example.mysoc.repository.MaintainenceRepo;
import com.example.mysoc.service.MaintainenceService;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.util.*;

import static org.springframework.data.mongodb.core.FindAndModifyOptions.options;
import static org.springframework.data.mongodb.core.query.Criteria.where;

@Service
public class MaintainenceImpl implements MaintainenceService {
    @Autowired
    private MaintainenceRepo maintainenceRepo;


    @Override
    public MaintainenceDB saveDetails(MaintainenceDB mdb) {
        return maintainenceRepo.save(mdb);
    }

    @Override
    public List<MaintainenceDB> getList() {
        return maintainenceRepo.findAll();
    }

    @Override
    public List<MaintainenceDB> getById(Long id) {
        List<MaintainenceDB> all = maintainenceRepo.findAll();
        List<MaintainenceDB> ans = new ArrayList<>();
        for (MaintainenceDB x : all) {
            if (x.getId() == id) {
                ans.add(x);
            }
        }
        return ans;
    }

    @Override
    public boolean statusUpdate(Long uid,int mon,int yr) {
        Query query=new Query();
        List<Criteria> criteria=new ArrayList<>();
        criteria.add(Criteria.where("id").is(uid));
        criteria.add(Criteria.where("month").is(mon));
        criteria.add(Criteria.where("year").is(yr));
        query.addCriteria(new Criteria().andOperator(criteria.toArray((new Criteria[criteria.size()]))));
     /*   MaintainenceDB check= (MaintainenceDB) mongoOperations.find(query,MaintainenceDB.class);
        if(check.isStatus()==true)
        {
            System.out.println("Yeh kya kar raha hai bhai tu");
            return false;
        }*/
        MaintainenceDB val=mongoOperations.findAndModify(query,new Update().set("status",true),MaintainenceDB.class);
            return true;
    }

    @Override
    public List<MaintainenceDB> getRemaining() {
        List<MaintainenceDB> all = maintainenceRepo.findAll();
        List<MaintainenceDB> ans = new ArrayList<>();
        for (MaintainenceDB obj : all) {
            if (obj.isStatus() == false) {
                ans.add(obj);
            }
        }
        return ans;
    }

    @Autowired
    private MongoOperations mongoOperations;

    @Override
    public long generateSequence(String seqName) {
        MaintenenceSequencer counter = mongoOperations.findAndModify(Query.query(where("_id").is(seqName)), new
                Update().inc("seq", 1), options().returnNew(true).upsert(true), MaintenenceSequencer.class);
        return !Objects.isNull(counter) ? counter.getSeq() : 1;
    }

    public HashMap<String, Integer> map = new HashMap<>();

    public void updateMap() {
        map.put("January", 1);
        map.put("February", 2);
        map.put("March", 3);
        map.put("April", 4);
        map.put("May", 5);
        map.put("June", 6);
        map.put("July", 7);
        map.put("August", 8);
        map.put("September", 9);
        map.put("October", 10);
        map.put("November", 11);
        map.put("December", 12);
    }
    @Autowired
    MongoTemplate mongoTemplate;
    @Override
    public List<MaintainenceDB> getMonthly(String Month) {
        if (map.size() != 12) {
            updateMap();
        }
        int m = map.get(Month);
        Query query=new Query();
        query.addCriteria(Criteria.where("month").is(m));
        List<MaintainenceDB> ans=mongoTemplate.find(query,MaintainenceDB.class);
        return ans;
    }
}
