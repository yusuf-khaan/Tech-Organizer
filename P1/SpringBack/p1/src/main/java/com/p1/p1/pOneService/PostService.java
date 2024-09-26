package com.p1.p1.pOneService;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.p1.p1.DAO.PostDao;
import com.p1.p1.DAO.CommentDao;
import com.p1.p1.models.Comments;
import com.p1.p1.models.Post;

@Service
public class PostService {

    @Autowired
    private PostDao postDao;

    @Autowired
    private CommentDao commentsDao;

    public String Post(Post post) {
        postDao.save(post);
        return "successfully posted";
    }

    public String Comment(Comments comment) {
        commentsDao.save(comment);
        return "Successfully Commented";
    }

    public Optional<Post> response(Integer id ){
        return PostDao.findById(id).orElseThrow(Optional<Post>);
    }
}
