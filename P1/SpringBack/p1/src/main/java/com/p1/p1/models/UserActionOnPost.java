package com.p1.p1.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserActionOnPost {

    private Integer post_id;
    private Integer user_id;
    private Boolean vote;
}
