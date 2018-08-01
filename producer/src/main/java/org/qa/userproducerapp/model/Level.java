package org.qa.userproducerapp.model;


import org.elasticsearch.index.engine.Engine;
import org.omg.CORBA.portable.IDLEntity;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.expression.spel.ast.Identifier;

import javax.annotation.Generated;

@Document(indexName = "level_index", type = "level")
public class Level {

    @Id
    private Long id;
    private String levelString;


    public Level(){

    }
    public Level(Long id, String levelString) {
        this.id = id;
        this.levelString = levelString;

    }

    public Long getId() {
        return id;
    }

    public String getLevelString() {
        return levelString;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setLevelString(String levelString) {
        this.levelString = levelString;
    }

    /*
    private String levelDifficulty;
    private String levelPosition;
    private String levelNumber;
    private String levelName;
    private String levelDescription;
    private String levelCode;
    private Long timer;
    private Long chances;


    public Level(){

    }
    public Level(Long id, String levelDifficulty, String levelPosition, String levelNumber, String levelName, String levelDescription, String levelCode, Long timer, Long chances) {
        this.id = id;
        this.levelDifficulty = levelDifficulty;
        this.levelPosition = levelPosition;
        this.levelNumber = levelNumber;
        this.levelName = levelName;
        this.levelDescription = levelDescription;
        this.levelCode = levelCode;
        this.timer = timer;
        this.chances = chances;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLevelDifficulty() {
        return levelDifficulty;
    }

    public void setLevelDifficulty(String levelDifficulty) {
        this.levelDifficulty = levelDifficulty;
    }

    public String getLevelPosition() {
        return levelPosition;
    }

    public void setLevelPosition(String levelPosition) {
        this.levelPosition = levelPosition;
    }

    public String getLevelNumber() {
        return levelNumber;
    }

    public void setLevelNumber(String levelNumber) {
        this.levelNumber = levelNumber;
    }

    public String getLevelName() {
        return levelName;
    }

    public void setLevelName(String levelName) {
        this.levelName = levelName;
    }

    public String getLevelDescription() {
        return levelDescription;
    }

    public void setLevelDescription(String levelDescription) {
        this.levelDescription = levelDescription;
    }

    public String getLevelCode() {
        return levelCode;
    }

    public void setLevelCode(String levelCode) {
        this.levelCode = levelCode;
    }

    public Long getTimer() {
        return timer;
    }

    public void setTimer(Long timer) {
        this.timer = timer;
    }

    public Long getChances() {
        return chances;
    }

    public void setChances(Long chances) {
        this.chances = chances;
    }*/


}
