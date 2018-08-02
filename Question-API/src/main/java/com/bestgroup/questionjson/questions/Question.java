package com.bestgroup.questionjson.questions;

import org.springframework.data.elasticsearch.annotations.Document;
@Document(indexName = "questions", type="questions", shards = 1)
public class Question {

}
