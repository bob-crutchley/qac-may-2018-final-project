# spring-elasticsearch
##### docker elastic search
- running the container
    ```bash
    docker run -p 9200:9200 -p 9300:9300 -e "http.host=0.0.0.0" -e "transport.host=0.0.0.0" docker.elastic.co/elasticsearch/elasticsearch:6.3.0
    ```
- if there is an error about the `max_map_count`:
    ```bash
    sudo sysctl -w vm.max_map_count=262144
    ```
    