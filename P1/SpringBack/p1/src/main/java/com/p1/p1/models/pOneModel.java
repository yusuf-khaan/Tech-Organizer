package com.p1.p1.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import java.util.List;
import java.util.Set;
import lombok.Data;

@Entity
@Data
public class pOneModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    @Column(unique=true)
    // @JsonIgnore
    private String mail;

    // @JsonIgnore
    private String password;

    @OneToMany
    // @JsonManagedReference("user-posts")
    private List<Post> posts;

    @OneToMany
    // @JsonManagedReference("user-comments")
    private List<Comments> comments;

    @OneToMany
    @JsonIgnore
    private Set<BookmarkedPost> bookmarked_post_by_user;
    
}
