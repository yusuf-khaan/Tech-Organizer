package com.p1.p1.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "bookmarked_post", uniqueConstraints = {
    @UniqueConstraint(columnNames = {"user_id","post_id"})
})
@ToString(exclude = {"post","user"})
public class BookmarkedPost {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @NotNull
    @JsonBackReference("user-bookmark")
    private pOneModel user; //user who bookmark the post

    @ManyToOne
    @NotNull
    @JsonBackReference("post-bookmark")
    private Post post; // this is the bookmarked post

}
