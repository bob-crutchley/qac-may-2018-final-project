package com.qa;

import com.qa.constants.Constants;
import org.springframework.stereotype.Component;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;


@Component
public class Receiver {



    public void receiveMessage(String postJsonData) throws IOException {

        String emailJson = postJsonData;
        String databaseJson = postJsonData;


        httpPost(Constants.AUDIT_URL, postJsonData);
        System.out.println(postJsonData);
        httpPost(Constants.EMAIL_URL, emailJson);
        System.out.println(postJsonData);
        httpPost(Constants.DATABASE_URL, databaseJson);

    }
//

    private void httpPost(String url, String postJsonData) throws IOException {
        URL obj = new URL(url);
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();

        con.setRequestMethod("POST");
        con.setRequestProperty("User-Agent", Constants.USER_AGENT);
        con.setRequestProperty("Accept-Language", Constants.LANGUAGE );
        con.setRequestProperty("Content-Type", "application/json");

        con.setDoOutput(true);
        DataOutputStream os = new DataOutputStream(con.getOutputStream());
        os.writeBytes(postJsonData);
        os.flush();
//        os.close();


        int responseCode = con.getResponseCode();
        System.out.println("\nSending 'POST' request to URL : " + url);
        System.out.println("jsondata: " + postJsonData);
        System.out.println("Response Code : " + responseCode);

        BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
        String output;
        StringBuffer response = new StringBuffer();

        while ((output = in.readLine()) != null) {
            response.append(output);
//            in.close();
        }


        System.out.println("Response: " + response.toString());
    }
}


