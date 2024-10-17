package com.p1.p1.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "voting", uniqueConstraints = {
    @UniqueConstraint(columnNames = {"user_id", "post_id"})
})
@ToString(exclude = {"user", "post"}) // Exclude to prevent recursion
public class Voting {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JsonBackReference("user-votes")
    private pOneModel user;

    @ManyToOne
    @JsonBackReference("post-votes")
    private Post post;

    private Boolean vote; // true for upvote and false for downvote and null for no vote
    //Boolean allows null values but boolean does not allow null values
}
