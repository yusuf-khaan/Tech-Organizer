package com.p1.p1.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserpostDTO {

    private Integer id; //post id as per dbs
    private String name;
    private String xp;
    private Integer upvote;
    private Integer downvote;
}

//it is for the post that are made my user, it is viewed from profile where it says post made by user and post bookmarked by user whihc belong to user
