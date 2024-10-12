package com.p1.p1.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CommentsDTO {

    private Integer id;
    private String comment_owner;
    private String comment_text;

}
