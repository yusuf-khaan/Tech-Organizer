package com.p1.p1.pOneService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.p1.p1.DAO.BookmarksDAO;
import com.p1.p1.models.BookmarkedPost;

@Service
public class BookmarkService {

    @Autowired
    private BookmarksDAO bookmarkRepository;

    public String savingBookmark(BookmarkedPost bookmarked_Post) {
        try {
            bookmarkRepository.save(bookmarked_Post);
            return "saved";
        } catch (Exception e) {
            return "error while saving bookmark";
        }
    }

    public List<BookmarkedPost> getbBookmarkedPost(Integer user_id) {
        return bookmarkRepository.findAllByuser_id(user_id);
        // return bookmarkRepository.findById(user_id);
    }
}
