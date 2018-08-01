package org.qa.userproducerapp.dal;

import org.qa.userproducerapp.model.User;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends ElasticsearchRepository<User, Long> {
}
