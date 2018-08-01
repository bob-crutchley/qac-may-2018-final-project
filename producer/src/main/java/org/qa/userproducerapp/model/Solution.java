package org.qa.userproducerapp.model;

import org.springframework.data.annotation.Id;

public class Solution {

    @Id
    private Long id;
    private String answerPosition;
    private String answerCodeSnippet;

    public Solution(){

    }

    public Solution(Long id, String answerPosition, String answerCodeSnippet) {
        this.id = id;
        this.answerPosition = answerPosition;
        this.answerCodeSnippet = answerCodeSnippet;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAnswerPosition() {
        return answerPosition;
    }

    public void setAnswerPosition(String answerPosition) {
        this.answerPosition = answerPosition;
    }

    public String getAnswerCodeSnippet() {
        return answerCodeSnippet;
    }

    public void setAnswerCodeSnippet(String answerCodeSnippet) {
        this.answerCodeSnippet = answerCodeSnippet;
    }
}
