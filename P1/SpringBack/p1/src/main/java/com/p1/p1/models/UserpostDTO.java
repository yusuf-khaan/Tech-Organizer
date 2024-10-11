package com.p1.p1.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserpostDTO {

    private Integer id;
    private String xp;
    private Integer upvote;
    private Integer downvote;
    // private List<Comments> comments;
}
