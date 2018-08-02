package com.bestgroup.questionjson.questions.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

@RestController
@RequestMapping(value = "/questions")
public class QuestionController {


    public QuestionController(){


    }



    @RequestMapping(value ="/all", method = RequestMethod.GET)
    public String[] getAll(){
        String[] strReturn = new String[]{jsonToString("src/main/resources/JSONs/Easy.JSON") ,jsonToString("src/main/resources/JSONs/Medium.JSON") ,jsonToString("src/main/resources/JSONs/Hard.JSON") };
        return strReturn;
    }


    @RequestMapping(value = "/difficulty/{level}", method = RequestMethod.GET)
    public String getByLevels(@PathVariable int level){
        if (level == 1){
            return jsonToString("src/main/resources/JSONs/Easy.JSON");
        }else if ( level == 2){
            return jsonToString("src/main/resources/JSONs/Medium.JSON");
        }else if (level == 3){
            return jsonToString("src/main/resources/JSONs/Hard.JSON");
        }else{
            return "{\"Error\":\"Level Not Defined\"}";
        }
    }


        private String jsonToString(String fileURL){

        try {
            return new String(Files.readAllBytes(Paths.get(fileURL)));
        } catch (IOException e) {
            return "OOPSIE WHOOPSIE!! UWU We a made a upsie daisy!! A little humpty dumpty! The pagie wagie had failed to loadie-wodie::   " + e;
        }
    }


}
