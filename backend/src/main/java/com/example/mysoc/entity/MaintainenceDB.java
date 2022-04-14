package com.example.mysoc.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
//import org.springframework.boot.context.properties.bind.DefaultValue;
import org.springframework.boot.context.properties.bind.DefaultValue;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.annotation.Generated;
import java.util.Date;

import java.util.Date;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
//public static long counter=0;
public class MaintainenceDB {

    @Transient
    public static final String SEQUENCE_NAME="user_sequence";
    @Id
    long skey;
    Long id;
    private int year;
    private int month;
    private Date paid_on;
    @JsonProperty
    private boolean status=false;
    private Long ammount;
    private long fine=0;
}
