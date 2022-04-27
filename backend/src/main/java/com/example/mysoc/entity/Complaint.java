package com.example.mysoc.entity;

import com.mongodb.lang.NonNull;
import com.mongodb.lang.Nullable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
import org.bson.types.Binary;

import java.util.ArrayList;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Complaint {
    @Transient
    public static final String SEQUENCE_NAME="user_sequence";
    @Id
    long skey;
    private Long flat_no;
    @NonNull
    private String Description;
    @Nullable
    private Binary image;

}
