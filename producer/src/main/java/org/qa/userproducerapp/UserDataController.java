package org.qa.userproducerapp;

import com.google.gson.Gson;
import org.qa.userproducerapp.dal.UserRepository;
import org.qa.userproducerapp.model.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;


@RestController
public class UserDataController {

    private final Logger log = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private Gson gson;

    @Autowired
    private RabbitTemplate rabbitTemplate;

    @RequestMapping("/user/all")
    public List<User> getAll() {
        log.info("getting all users. total {}", userRepository.count());
        List<User> target = new ArrayList<>();
        userRepository.findAll().forEach(target::add);
        return target;
    }

    @RequestMapping("user/highscores/{count}")
    public List<User> getTop10(@PathVariable int count){


        List<User> userList = new ArrayList<>();

        userRepository.findAll(Sort.by("score").descending()).forEach(userList :: add);
        userList = userList.stream().limit(count).collect(Collectors.toList());
        return userList;
    }

    @RequestMapping("/user/save")
    public User save(@RequestBody User user){
        log.info("adding a new user: {}", user.toString());

        UserDataController control = new UserDataController();

        String imageData = control.getImage(user);

        user.setImageData(imageData);

            user.setId(getUniqueId());

                rabbitTemplate.convertAndSend(UserApplication.topicExchangeName, "foo.bar.baz", gson.toJson(user));
                return userRepository.save(user);

    }

    private long getUniqueId(){
        List<Long>userIds = new ArrayList<>();
        userRepository.findAll(Sort.by("_id")).forEach(user -> userIds.add(user.getId()));
        if (userIds.isEmpty() ){
            return 1L;
        }
        return (Collections.max(userIds)+1);

    }

    private String getImage(User user){

        Long seed = user.generateSeed();

        user.setSeedNumber(seed);

        BufferedReader in;
        StringBuffer response = null;

        try{
            String url = "https://avatars.dicebear.com/v2/identicon/"+user.getSeedNumber()+".svg";

            URL obj = new URL(url);
            HttpURLConnection con = (HttpURLConnection) obj.openConnection();
            con.setRequestMethod("GET");
            int responseCode = con.getResponseCode();
            log.info("\nSending GET request to URL:" + url);
            log.info("Response Code:" + responseCode);
            in = new BufferedReader(
                    new InputStreamReader(con.getInputStream()));

            String inputLine;
            response = new StringBuffer();

            while((inputLine = in.readLine()) != null){
                response.append(inputLine);
            }
            in.close();

        } catch (IOException el){
            el.printStackTrace();
        }
        log.info(response.toString());
        return response.toString();

    }
}
