package com.example.mysoc.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Data
@Document
@NoArgsConstructor
@AllArgsConstructor
public class ComplaintSequencer {
    @Id
    private String id;

    private long seq;
}


