package com.p1.p1.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class postDTO {

    private Integer post_id; //postid
    private String post_owner;//post owner name
    private Integer logged_in_user; //the id of the user which differ from the post logged in user
    private String xp;//post string
    private Integer upvotes;//upvotes
    private Integer downvotes;//downvotes
}
