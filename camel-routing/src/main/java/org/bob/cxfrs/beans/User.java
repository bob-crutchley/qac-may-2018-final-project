package org.bob.cxfrs.beans;

import org.bob.cxfrs.beans.util.JSONUtil;


public class User {

    JSONUtil util = new JSONUtil();

    private Long id;
    private String name;
    private Long score;
    private String email;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getScore() {
        return score;
    }

    public void setScore(Long score) {
        this.score = score;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public User(){

    }

}