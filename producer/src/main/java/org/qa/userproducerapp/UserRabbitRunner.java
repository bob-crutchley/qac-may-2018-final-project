package org.qa.userproducerapp;

import com.google.gson.Gson;
import org.qa.userproducerapp.constants.Constants;
import org.qa.userproducerapp.model.User;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class UserRabbitRunner implements CommandLineRunner {

    private final RabbitTemplate rabbitTemplate;
    private final RestTemplate restTemplate;
    private final Gson gson;
    @Autowired
    UserDataController userDataController;
    public UserRabbitRunner(RabbitTemplate rabbitTemplate, RestTemplate restTemplate, Gson gson){
        this.rabbitTemplate = rabbitTemplate;
        this.restTemplate = restTemplate;
        this.gson = gson;
    }

    @Override
    public void run(String... args) throws Exception{
        User[] user = restTemplate.getForObject(
                Constants.API_ADDRESS, User[].class);
        rabbitTemplate.convertAndSend(UserApplication.topicExchangeName, "foo.bar.baz", gson.toJson(user));
    }
}
