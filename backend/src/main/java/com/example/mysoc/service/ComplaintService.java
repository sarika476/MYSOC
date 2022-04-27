package com.example.mysoc.service;

import com.example.mysoc.entity.Complaint;
import com.mongodb.annotations.Beta;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
//@Configurable
public interface ComplaintService {
    public long generateSequence(String seqName);
    public int regeisterComplaint(Complaint obj) throws IOException;
}
