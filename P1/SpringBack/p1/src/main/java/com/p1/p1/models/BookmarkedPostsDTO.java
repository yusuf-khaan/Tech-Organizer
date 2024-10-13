package com.p1.p1.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookmarkedPostsDTO {

    private Integer bookmarked_post_id;
    private Integer bookmarking_user_id; //user who has bookmarked the post
}
