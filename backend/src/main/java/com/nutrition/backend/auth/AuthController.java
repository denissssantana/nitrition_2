package com.nutrition.backend.auth;

import com.nutrition.backend.security.JwtService;
import com.nutrition.backend.user.UserAccount;
import com.nutrition.backend.user.UserAccountService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final UserAccountService userService;
    private final JwtService jwtService;

    public AuthController(
            AuthenticationManager authenticationManager,
            UserAccountService userService,
            JwtService jwtService) {
        this.authenticationManager = authenticationManager;
        this.userService = userService;
        this.jwtService = jwtService;
    }

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@Valid @RequestBody RegisterRequest request) {
        var user = userService.register(request.email(), request.password());
        var token = jwtService.generateToken(user);
        return ResponseEntity.ok(new AuthResponse(user.getEmail(), token));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@Valid @RequestBody LoginRequest request) {
        Authentication auth = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.email(), request.password()));
        var user = (UserAccount) auth.getPrincipal();
        var token = jwtService.generateToken(user);
        return ResponseEntity.ok(new AuthResponse(user.getEmail(), token));
    }

    @PostMapping("/recover")
    public ResponseEntity<MessageResponse> recover(@Valid @RequestBody RecoverRequest request) {
        // Aqui apenas simulamos o envio; em produção, envie email com token de reset
        return ResponseEntity.ok(new MessageResponse("Se o email existir, enviaremos um link de recuperação."));
    }

    @PostMapping("/reset")
    public ResponseEntity<MessageResponse> reset(@Valid @RequestBody ResetRequest request) {
        // Para fins de demonstração, usamos o token como email do usuário
        userService.updatePassword(request.token(), request.password());
        return ResponseEntity.ok(new MessageResponse("Senha alterada com sucesso."));
    }
}
