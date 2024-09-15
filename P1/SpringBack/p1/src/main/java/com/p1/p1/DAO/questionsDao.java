package com.p1.p1.DAO;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.p1.p1.models.Questions;

@Repository
public interface questionsDao extends JpaRepository<Questions, Integer>{

    @Query(value = "Select * from questions where category = :cat order by random() limit :limit", nativeQuery= true)
    List<Questions> generateQuestions(@Param("cat") String category, @Param("limit") Integer limit);

}
