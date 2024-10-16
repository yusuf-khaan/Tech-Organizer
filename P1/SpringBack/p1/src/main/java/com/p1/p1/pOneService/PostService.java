package com.p1.p1.pOneService;

import java.util.ArrayList;
import java.util.List;
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

    public String savepost(Post post) {
        postDao.save(post);
        return "successfully posted";
    }

    public List<Post> userFeed(Integer range) {
        Integer limit = 50;
        List<Post> posts = postDao.userFeed(range, limit);
        return posts;
    }

    public String Comment(Comments comment) {
        commentsDao.save(comment);
        // System.out.println(comment);
        return "Successfully Commented";
    }

    public Comments comm(Integer id) {
        return commentsDao.findBypost_id(id);
    }

    public List<Post> getuserposts(Integer id ){
        return postDao.findByuser_id(id);
        // return postDao.findById(id).orElseThrow(() -> new RuntimeException("   "));
    }

    public Post getpostbyid(Integer id) {
        return postDao.findById(id).orElseThrow(() -> new RuntimeException("Post Not Found"));
    }
}
