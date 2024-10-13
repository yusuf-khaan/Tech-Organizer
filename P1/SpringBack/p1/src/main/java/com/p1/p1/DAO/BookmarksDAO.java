package com.p1.p1.DAO;

import com.p1.p1.models.BookmarkedPost;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookmarksDAO extends JpaRepository<BookmarkedPost, Integer> {

    List<BookmarkedPost> findAllByuser_id(Integer user_id);
}
