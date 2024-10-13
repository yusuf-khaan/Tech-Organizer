package com.p1.p1.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.p1.p1.models.BookmarkedPost;

@Repository
public interface BookmarksDAO extends JpaRepository<BookmarkedPost, Integer> {

}
