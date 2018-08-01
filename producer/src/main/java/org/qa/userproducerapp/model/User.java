package org.qa.userproducerapp.model;


import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

import java.util.Random;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
        "id",
        "name",
        "email",
        "seedNumber",
        "imageData",
        "score"
})
@Document(indexName = "user_index", type = "user")
public class User {

    @Id
    @JsonProperty("id")
    private Long id;
    @JsonProperty("name")
    private String name;
    @JsonProperty("email")
    private String email;
    @JsonProperty("seedNumber")
    private Long seedNumber;
    @JsonProperty("imageData")
    private String imageData;
    @JsonProperty("score")
    private Long score;



    @JsonProperty("id")
    public Long getId() {
        return id;
    }
    @JsonProperty("id")
    public void setId(Long id) {
        this.id = id;
    }
    @JsonProperty("name")
    public String getName() {
        return name;
    }
    @JsonProperty("name")
    public void setName(String name) {
        this.name = name;
    }
    @JsonProperty("email")
    public String getEmail() {
        return email;
    }
    @JsonProperty("email")
    public void setEmail(String email) {
        this.email = email;
    }
    @JsonProperty("score")
    public Long getScore() {
        return score; }
    @JsonProperty("score")
    public void setScore(Long score) {
        this.score = score; }

    public Long generateSeed(){
         seedNumber = (long) new Random().nextInt(2000);
        return seedNumber;
    }
    @JsonProperty("seedNumber")
    public Long getSeedNumber() { return seedNumber; }
    @JsonProperty("seedNumber")
    public void setSeedNumber(Long seedNumber) { this.seedNumber = seedNumber; }
    @JsonProperty("imageData")
    public String getImageData() { return imageData; }
    @JsonProperty("imageData")
    public void setImageData(String imageData) { this.imageData = imageData; }

    @Override
    public String toString() {
        return "User: " + "" +
                " id: " + id +
                " name: " + name +
                " email: " + email +
                " seedNumber: " + seedNumber +
                " imageData: " + imageData;
    }
}
