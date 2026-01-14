package com.nutrition.backend.user;

import java.util.Optional;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserAccountService {

    private final UserAccountRepository repository;
    private final UserAccountMapper mapper;
    private final PasswordEncoder passwordEncoder;

    public UserAccountService(UserAccountRepository repository, UserAccountMapper mapper, PasswordEncoder passwordEncoder) {
        this.repository = repository;
        this.mapper = mapper;
        this.passwordEncoder = passwordEncoder;
    }

    @Transactional
    public UserAccount register(String email, String rawPassword) {
        if (repository.existsByEmail(email)) {
            throw new IllegalArgumentException("Email já cadastrado");
        }
        var entity = new UserAccountEntity(email, passwordEncoder.encode(rawPassword));
        var saved = repository.save(entity);
        return mapper.toDomain(saved);
    }

    public Optional<UserAccount> findByEmail(String email) {
        return repository.findByEmail(email).map(mapper::toDomain);
    }

    @Transactional
    public void updatePassword(String email, String rawPassword) {
        var entity = repository.findByEmail(email).orElseThrow(() -> new IllegalArgumentException("Usuário não encontrado"));
        entity.setPassword(passwordEncoder.encode(rawPassword));
        repository.save(entity);
    }
}
