package org.qa.userproducerapp;

import com.fasterxml.jackson.databind.util.JSONPObject;
import com.google.gson.Gson;
import com.google.gson.JsonElement;
import org.qa.userproducerapp.constants.Constants;
import org.qa.userproducerapp.dal.LevelRepository;
import org.qa.userproducerapp.model.Level;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/questions")
public class LevelDataController {


    @Autowired
    private LevelRepository levelRepository;
    @Autowired
    private Gson gson;

    @Autowired
    private RabbitTemplate rabbitTemplate;

    @Autowired
    private RestTemplate restTemplate;


    private final Logger log = LoggerFactory.getLogger(this.getClass());

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/getAll")
    private String getAllQuestions(){

        String questions = restTemplate.getForObject(Constants.QUESTIONS_API, String.class);
        log.info("getting all level. total {}", levelRepository.count());
        List<Level> levels = new ArrayList<>();

        levelRepository.findAll().forEach(levels::add);

        return questions;
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/difficulty/{level}", method = RequestMethod.GET)
    private String getLevel(@PathVariable Long level){

        String question = restTemplate.getForObject(Constants.QUESTIONS_API_LEVEL_SELECT +level, String.class);
        Level lev = new Level(level, question);
        levelRepository.save(lev);
        return question;
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/elastic/{difficulty}", method = RequestMethod.GET)
    public Optional<Level> getLevelFromElastic(@PathVariable Long difficulty){

        Optional<Level> level = levelRepository.findById(difficulty);

        return level;

    }

}
