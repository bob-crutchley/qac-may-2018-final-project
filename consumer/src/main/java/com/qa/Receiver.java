package com.qa;

import org.springframework.stereotype.Component;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;


@Component
public class Receiver {

    private final String USER_AGENT = "Mozilla/5.0";

    public void receiveMessage(String postJsonData) throws IOException {

        httpPost("http://localhost:9000/email", postJsonData);
        httpPost("http://localhost:9000/audit", postJsonData);
        httpPost("http://localhost:9000/database", postJsonData);

    }

    private void httpPost(String url, String postJsonData) throws IOException{
        URL obj = new URL(url);
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();

        con.setRequestMethod("POST");
        con.setRequestProperty("User-Agent", USER_AGENT);
        con.setRequestProperty("Accept-Language", "en-US,en;q=0.5");
        con.setRequestProperty("Content-Type", "application/json");

        con.setDoOutput(true);
        DataOutputStream os = new DataOutputStream(con.getOutputStream());
        os.writeBytes(postJsonData);
        os.flush();


        int responseCode = con.getResponseCode();
        System.out.println("\nSending 'POST' request to URL : " + url);
        System.out.println("Response Code : " + responseCode);

        BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
        String output;
        StringBuffer response = new StringBuffer();

        while ((output = in.readLine()) != null) {
            response.append(output);
        }



        System.out.println("Response: " + response.toString());
    }
}


