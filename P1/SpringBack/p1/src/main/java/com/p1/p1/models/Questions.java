package com.p1.p1.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.Data;

@Entity
@Data
public class Questions {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;

    private String question;

    @Lob
    private byte[] questionImage;

    private String optiona;

    private String optionb;

    private String optionc;

    private String optiond;

    private String correctAnswer;
}
