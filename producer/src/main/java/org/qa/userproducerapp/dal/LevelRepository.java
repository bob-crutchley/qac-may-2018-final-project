package org.qa.userproducerapp.dal;

import org.qa.userproducerapp.model.Level;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LevelRepository extends ElasticsearchRepository<Level, Long> {
}
