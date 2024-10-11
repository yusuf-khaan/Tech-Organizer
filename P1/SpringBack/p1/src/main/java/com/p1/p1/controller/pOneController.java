package com.p1.p1.controller;

import com.p1.p1.models.Comments;
import com.p1.p1.models.Feedback;
import com.p1.p1.models.Post;
import com.p1.p1.models.Questions;
import com.p1.p1.models.UserpostDTO;
import com.p1.p1.models.pOneModel;
import com.p1.p1.models.postDTO;
import com.p1.p1.models.userDTO;
import com.p1.p1.models.viewpostDTO;
import com.p1.p1.pOneService.PostService;
import com.p1.p1.pOneService.pOneService;
import com.p1.p1.pOneService.questionService;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "https://localhost:5173")
@RestController
@RequestMapping("/pOne")
public class pOneController {

    @Autowired
    private pOneService poneService;

    @Autowired
    private questionService questionservice;

    @Autowired
    private PostService postService;

    @RequestMapping(value = "login", method = RequestMethod.POST)
    public userDTO login(@RequestBody pOneModel request) {
        // System.out.println(request.getMail());
        // System.out.println(request.getPassword());
        pOneModel userOrg = poneService.login(request);
        if (userOrg != null) {
            userDTO user = new userDTO(userOrg.getId(), userOrg.getName(), userOrg.getMail());
            return user;
        }
        return new userDTO();
    }

    @RequestMapping(value = "signup", method = RequestMethod.POST)
    public String requestMethodName(@RequestBody pOneModel request) {
        userDTO user = new userDTO(request.getId(), request.getName(), request.getMail());
        return poneService.signup(request);
    }

    // not in use now
    @RequestMapping(value = "/pdf", method = RequestMethod.POST)
    public void requestMethodName() {
        String path = "C:/Users/LENOVO/OneDrive/Desktop/papper.pdf";
        try {
            questionservice.processPdf(path);
            System.out.println("Success");
        } catch (Exception e) {
            System.out.println(e.getMessage());
            System.out.println("error caught");
        }

    }

    @RequestMapping(value = "/generate", method = RequestMethod.POST)
    public List<Questions> generateQuiz(@RequestParam String category, @RequestParam Integer numbers) {
        return questionservice.generator(category, numbers);
    }

    @PostMapping("/feedback")
    public String feedback(@RequestBody Feedback feedback) {
        return poneService.feedback(feedback);
    }

    @RequestMapping(value = "/savepost", method = RequestMethod.POST)
    public String savepost(@RequestBody Post post) {
        return postService.savepost(post);
    }

    // created DTO for the feed where various post will be shown
    @RequestMapping(value = "/postfeed", method = RequestMethod.GET)
    public List<postDTO> postfeed(@RequestParam Integer range) {
        List<postDTO> posts = new ArrayList<>();
        List<Post> original = postService.userFeed(range);
        for (Post post : original) {
            postDTO postDTO = new postDTO(post.getId(), post.getUser().getName(), post.getUser().getId(), post.getXp(),
                    post.getUpvote(), post.getDownvote());
            posts.add(postDTO);
        }
        return posts;
    }

    @RequestMapping(value = "/getpostbyid", method = RequestMethod.GET)
    public viewpostDTO getpostbyid(@RequestParam Integer postid) {
        Post post = postService.getpostbyid(postid);
        viewpostDTO viewpost = new viewpostDTO(post.getId(), post.getXp(), post.getUser().getName(), post.getUpvote(),
        post.getDownvote(), post.getComments());
        return viewpost;
    }

    @PostMapping("/comment")
    public String comment(@RequestBody Comments comments) {
        return postService.Comment(comments);
    }

    // for profile --(posts made by user displayed over the profile)
    @PostMapping("/postmadebyuser")
    public List<UserpostDTO> response(@RequestBody Map<String, Integer> payload) {
        Integer id = payload.get("user_id");
        List<Post> posts = postService.getuserposts(id);
        List<UserpostDTO> userposts = new ArrayList<>();
        for (Post post : posts) {
            UserpostDTO userpost = new UserpostDTO(post.getId(), post.getXp(), post.getUpvote(), post.getDownvote());
            userposts.add(userpost);
        }
        return userposts;
    }

    @GetMapping("/Testgetcomment")
    public Comments getComment(@RequestParam Integer id) {
        return postService.comm(id);
    }

}
