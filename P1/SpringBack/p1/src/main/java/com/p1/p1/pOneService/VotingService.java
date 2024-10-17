package com.p1.p1.pOneService;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.p1.p1.DAO.PostDao;
import com.p1.p1.DAO.VotingDAO;
import com.p1.p1.DAO.pOne;
import com.p1.p1.models.Post;
import com.p1.p1.models.UserActionOnPost;
import com.p1.p1.models.Voting;
import com.p1.p1.models.pOneModel;

@Service
public class VotingService {

    @Autowired
    VotingDAO votingDAO;

    @Autowired
    PostDao postDao;

    @Autowired
    pOne pOneDAO;

    public Voting vote(UserActionOnPost vote) {
        Optional<pOneModel> user = pOneDAO.findById(vote.getUser_id());
        Optional<Post> post = postDao.findById(vote.getPost_id());
    
        if (user.isPresent() && post.isPresent()) {
            pOneModel unwrapped_user = user.get();
            Post unwrapped_post = post.get();
    
            Optional<Voting> voting = votingDAO.findByUserAndPost( unwrapped_user, unwrapped_post);
            
            if (voting.isPresent()) {
                Voting unwrapped_voting = voting.get();
                unwrapped_voting.setVote(vote.getVote());
                votingDAO.save(unwrapped_voting);
                return unwrapped_voting;
            } else {
                // Create new voting record
                Voting newVoting = new Voting(null, unwrapped_user, unwrapped_post, vote.getVote());
                votingDAO.save(newVoting);
                return newVoting;
            }
        } else {
            return new Voting();
        }
    }
    
}
