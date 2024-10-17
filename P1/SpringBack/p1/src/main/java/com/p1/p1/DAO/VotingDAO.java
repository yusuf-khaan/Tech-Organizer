package com.p1.p1.DAO;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.p1.p1.models.Post;
import com.p1.p1.models.Voting;
import com.p1.p1.models.pOneModel;

@Repository
public interface VotingDAO extends JpaRepository<Voting, Integer> {

    Optional<Voting> findByUserAndPost(pOneModel user, Post post);

}
