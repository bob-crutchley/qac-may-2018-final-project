package com.bestgroup.questionjson.questions;

import org.elasticsearch.client.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.elasticsearch.core.ElasticsearchOperations;

import java.util.Map;

@SpringBootApplication
public class QuestionsApplication {



    public static void main(String[] args) {
        SpringApplication.run(QuestionsApplication.class, args);
    }


}
