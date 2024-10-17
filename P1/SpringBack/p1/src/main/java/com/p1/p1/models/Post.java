package com.p1.p1.models;

import java.util.HashMap;
import java.util.List;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Data;
import lombok.ToString;
import picocli.CommandLine.Help.Ansi.Text;


@Data
@Entity
@ToString(exclude = {"user", "comments", "bookmarked", "vote"})
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JsonBackReference("user-posts")
    private pOneModel user;
    
    @Column(columnDefinition = "TEXT")
    private String xp;



    @OneToMany(mappedBy = "post", cascade=CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference("post-comments")
    private List<Comments> comments;

    @OneToMany
    @JsonManagedReference("post-bookmark")
    private List<BookmarkedPost> bookmarked;

    @OneToMany
    @JsonManagedReference("post-votes")
    private Set<Voting> vote;
    
    private long upvotes;
    private long downvotes;
}
