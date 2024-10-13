package com.p1.p1.models;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class viewpostDTO {

    private Integer post_id;
    private String xp;
    private String post_owner;
    private Integer upvote;
    private Integer downvote;
    private List<CommentsDTO> comments;
}
//it is for user feed like insta feed full of random post