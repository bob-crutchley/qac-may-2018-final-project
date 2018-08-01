package org.qa.userproducerapp;

import org.elasticsearch.client.Client;
import org.elasticsearch.client.transport.TransportClient;
import org.elasticsearch.common.settings.Settings;
import org.elasticsearch.common.transport.InetSocketTransportAddress;
import org.elasticsearch.transport.client.PreBuiltTransportClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.net.InetAddress;
import java.net.UnknownHostException;

@Configuration
public class ElasticSearchConfig {

    @Bean
    public Client client() throws UnknownHostException {
        Settings settings = Settings.builder()
                .put("cluster.name", "docker-cluster")
                .put("client.transport.sniff", true)
                .build();
        TransportClient client = new PreBuiltTransportClient(settings);
        client.addTransportAddress(new InetSocketTransportAddress(InetAddress.getByName("localhost"), 9300));
        return client;
    }
}
