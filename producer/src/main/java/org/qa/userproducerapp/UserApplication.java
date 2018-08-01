package org.qa.userproducerapp;

import com.google.gson.Gson;
import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.core.TopicExchange;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class UserApplication {

    static final String topicExchangeName = "spring-boot-exchange";

    static final String queueName = "spring-boot";



    @Bean
    Queue queue() {
        return new Queue(queueName, false);
    }

    @Bean
    TopicExchange exchange() {
        return new TopicExchange(topicExchangeName);
    }

    @Bean
    Binding binding(Queue queue, TopicExchange exchange){
        return BindingBuilder.bind(queue).to(exchange).with("foo.bar.#");
    }

    @Bean
    RestTemplate getRestTemplate(){
        return new RestTemplate();
    }

    @Bean
    Gson getGson(){
        return new Gson();
    }

    public static void main(String[] args) {
        SpringApplication.run(UserApplication.class, args);
    }
}
