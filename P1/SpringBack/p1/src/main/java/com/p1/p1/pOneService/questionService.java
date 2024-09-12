package com.p1.p1.pOneService;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.imageio.ImageIO;

import org.apache.pdfbox.Loader;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.p1.p1.DAO.questionsDao;
import com.p1.p1.models.Questions;

@Service
public class questionService {

    @Autowired
    private questionsDao questionRepository;

    // Main method to process PDF and save questions to the database
    public void processPdf(String pdfPath) throws Exception {
        // Step 1: Extract text from PDF
        String questionsText = extractTextFromPDF(pdfPath);
        System.out.println(questionsText);

        // Step 2: Process the questions and options
        processAndSaveQuestions(questionsText);
    }

    // Step 1: Extract text from PDF
    private static String extractTextFromPDF(String filePath) throws IOException {
        File pdfFile = new File(filePath);  // Use File directly

        // Use Loader to load the PDF document
        try (PDDocument document = Loader.loadPDF(pdfFile)) {
            PDFTextStripper pdfStripper = new PDFTextStripper();
            return pdfStripper.getText(document);  // Extract text from PDF
        }
    }

    // Step 2: Process questions, convert to image, and save in the database
    private void processAndSaveQuestions(String questionsText) throws IOException {
        // Split the questions based on "Q"
        String[] questionBlocks = questionsText.split("Q");

        // Regex pattern to match options (A), (B), (C), (D)
        Pattern optionsPattern = Pattern.compile("(A\\)(.*?)\\n)?(B\\)(.*?)\\n)?(C\\)(.*?)\\n)?(D\\)(.*?)\\n)?");

        for (String questionBlock : questionBlocks) {
            String questionText = questionBlock.trim();

            System.out.println(questionText);
            System.out.println("this is question block");
            

            // Extract options using regex
            Matcher matcher = optionsPattern.matcher(questionText);
            String optionA = "", optionB = "", optionC = "", optionD = "";
            System.out.println(optionA);
            System.out.println("this is option A");

            System.out.println(optionB);
            System.out.println("optionB");

            System.out.println(optionC);
            System.out.println("optionC");

            System.out.println(optionD);

            if (matcher.find()) {
                optionA = matcher.group(1) != null ? matcher.group(2).trim() : "";
                optionB = matcher.group(3) != null ? matcher.group(4).trim() : "";
                optionC = matcher.group(5) != null ? matcher.group(6).trim() : "";
                optionD = matcher.group(7) != null ? matcher.group(8).trim() : "";
                questionText = questionText.replace(matcher.group(0), "").trim(); // Remove options from the question text
            }

            // Convert question text to image
            byte[] questionImage = convertTextToImage(questionText);

            // Create a new Questions object
            Questions question = new Questions();
            question.setQuestion(questionText);
            question.setQuestionImage(questionImage); // Set the image as a byte array
            question.setOptiona(optionA);
            question.setOptionb(optionB);
            question.setOptionc(optionC);
            question.setOptiond(optionD);
            question.setCorrectAnswer(""); // You can handle how to find the correct answer based on your logic
            
            // Save the question to the database
            questionRepository.save(question);
        }
    }

    // Convert the question text to an image
    private byte[] convertTextToImage(String text) throws IOException {
        BufferedImage image = new BufferedImage(800, 400, BufferedImage.TYPE_INT_RGB);
        Graphics g = image.getGraphics();

        g.setFont(new Font("Arial", Font.PLAIN, 16));
        g.setColor(Color.WHITE);
        g.fillRect(0, 0, 800, 400);

        g.setColor(Color.BLACK);
        g.drawString(text, 20, 50); // Render the text as an image
        g.dispose();

        // Write the image to a byte array
        File tempFile = File.createTempFile("question_image", ".png");
        ImageIO.write(image, "png", tempFile);

        // Convert the file to byte array
        FileInputStream fis = new FileInputStream(tempFile);
        byte[] imageData = fis.readAllBytes();
        fis.close();
        tempFile.delete(); // Clean up temp file

        return imageData;
    }
}

 