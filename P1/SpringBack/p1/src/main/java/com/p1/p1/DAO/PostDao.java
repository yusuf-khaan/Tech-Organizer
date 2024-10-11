package com.p1.p1.DAO;

import com.p1.p1.models.Post;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PostDao extends JpaRepository<Post, Integer> {

    List<Post> findByuser_id(Integer id);
    
    @Query(value = "Select * from post where id>= :startRange limit :limit", nativeQuery=true)
    List<Post> userFeed(@Param("startRange") Integer range, @Param("limit") Integer limit);
}
