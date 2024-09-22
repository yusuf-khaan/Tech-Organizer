package com.p1.p1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.p1.p1.models.Feedback;
import com.p1.p1.models.Questions;
import com.p1.p1.models.pOneModel;
import com.p1.p1.pOneService.pOneService;
import com.p1.p1.pOneService.questionService;


@CrossOrigin(origins = "https://localhost:5173/")
@RestController
@RequestMapping("pOne")
public class pOneController {

    @Autowired
    private pOneService poneService;

    @Autowired
    private questionService questionservice;

    @RequestMapping(value ="login", method = RequestMethod.POST)
    public String login(@RequestBody pOneModel request) {
        System.out.println(request.getMail());
        System.out.println(request.getPassword());
        

        return poneService.login(request);
    }

    @RequestMapping(value = "signup", method=RequestMethod.POST)
    public String requestMethodName(@RequestBody pOneModel request) {
        System.out.println(request.getMail());
        System.out.println(request.getPassword());
        System.out.println(request.getName());
        return poneService.signup(request);
    }


    //not in use now
    @RequestMapping(value = "/pdf", method=RequestMethod.POST)
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

    @RequestMapping(value ="/generate", method = RequestMethod.POST)
    public List<Questions> generateQuiz(@RequestParam String category, @RequestParam Integer numbers) {
        return questionservice.generator(category, numbers);
    }

    @PostMapping("/feed")
    public String feedback(@RequestBody Feedback feedback ) {
        return poneService.feedback(feedback);
    }


    
    
}
