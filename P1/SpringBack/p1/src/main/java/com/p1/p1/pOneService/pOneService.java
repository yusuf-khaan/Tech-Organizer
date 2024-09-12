package com.p1.p1.pOneService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.p1.p1.DAO.pOne;
import com.p1.p1.models.pOneModel;

@Service
public class pOneService {

    @Autowired
    pOne poneDAO;

    pOneModel user;

    public String login(pOneModel request) {
        String mail = request.getMail();
        String pass = request.getPassword();

        user = poneDAO.findBymail(mail);

        if(user != null && mail.equals(user.getMail()) && pass.equals(user.getPassword()))
        return "Successfully Authenticated";
        else 
        return "Failed Authentication";
    }

    public String signup(pOneModel request) {
        pOneModel user = poneDAO.findBymail(request.getMail());
        if(user != null) return "User Exist Already, Please Login Using Your Details";
        try {
        poneDAO.save(request);
        }
        catch(Exception e) {
            return "Failed To Create User Bruv! Something Fishy";
        }
        return "User Created Successfully";
    }
}
