package com.p1.p1.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import java.util.List;
import lombok.Data;

@Entity
@Data
public class pOneModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    @Column(unique=true)
    private String mail;

    private String password;

    @OneToMany
    // @JsonManagedReference("user-posts")
    private List<Post> posts;

    @OneToMany
    // @JsonManagedReference("user-comments")
    private List<Comments> comments;
}
