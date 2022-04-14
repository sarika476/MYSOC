package com.example.mysoc.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
//import org.springframework.boot.context.properties.bind.DefaultValue;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Date;

import java.util.Date;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
     Long id;
    private String name;
    @JsonProperty
    private boolean AdminFlag;
    private String password;

}
