package com.p1.p1.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;
import lombok.ToString;

@Data
@Entity
@ToString(exclude = {"post","user"})
public class Comments {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String comment;
    
    @ManyToOne
    @JsonBackReference("user-comments")
    private pOneModel user;

    private Integer upvote;

    private Integer downvote;

    @ManyToOne
    @JoinColumn(name = "post_id")
    @JsonBackReference("post-comments")
    private Post post;
}
