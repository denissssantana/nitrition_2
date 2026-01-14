package com.nutrition.backend.user;

import org.springframework.stereotype.Component;

@Component
public class UserAccountMapper {
    public UserAccount toDomain(UserAccountEntity entity) {
        return new UserAccount(entity.getId(), entity.getEmail(), entity.getPassword(), entity.getCreatedAt());
    }
}
