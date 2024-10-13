package com.p1.p1.models;

import java.util.HashMap;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Data
@Entity
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    // @JsonBackReference("user-posts")
    private pOneModel user;
    
    private String xp;

    private Integer upvote;
    
    private Integer downvote;

    @JsonIgnore
    @OneToMany(mappedBy = "post", cascade=CascadeType.ALL, orphanRemoval = true)
    // @JsonManagedReference("post-comments")
    private List<Comments> comments;

    @JsonIgnore
    @OneToMany
    private List<BookmarkedPost> bookmarked;
}
