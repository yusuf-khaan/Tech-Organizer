package com.p1.p1.pOneService;

import com.p1.p1.DAO.FeedbackDAO;
import com.p1.p1.DAO.pOne;
import com.p1.p1.models.Feedback;
import com.p1.p1.models.pOneModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class pOneService {

    @Autowired
    pOne poneDAO;

    @Autowired
    FeedbackDAO feedbackDAO;

    pOneModel user;

    public pOneModel login(pOneModel request) {
        String mail = request.getMail();
        String pass = request.getPassword();

        user = poneDAO.findBymail(mail);

        if(user != null && mail.equals(user.getMail()) && pass.equals(user.getPassword()))
        return user;
        
        return null;
    }

    public String signup(pOneModel request) {
        user = poneDAO.findBymail(request.getMail());
        if(user != null) return "User Exist Already, Please Login Using Your Details";
        try {
        poneDAO.save(request);
        }
        catch(Exception e) {
            return "Failed To Create User Bruv! Something Fishy";
        }
        return "User Created Successfully";
    }

    public String  feedback(Feedback feedback) {
        try {
        feedbackDAO.save(feedback);
        return "We have Delivered Your Request";
        }
        catch(Exception e) {
            return "Unfortunately, We have faced a Issue!";
        }
        
    }

}
