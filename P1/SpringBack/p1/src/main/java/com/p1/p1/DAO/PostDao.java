package com.p1.p1.DAO;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.p1.p1.models.Comments;
import com.p1.p1.models.Post;

@Repository
public interface PostDao extends JpaRepository<Post, Integer> {

    Optional<Post> findById(Integer id);
}
