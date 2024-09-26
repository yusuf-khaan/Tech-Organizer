package com.p1.p1.models;

import java.util.HashMap;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Data
@Entity
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String originalposter;
    private String xp;

    @OneToMany(mappedBy = "post", cascade=CascadeType.ALL, orphanRemoval = true)
    private List<Comments> comments;
}
