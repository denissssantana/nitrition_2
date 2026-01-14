package com.nutrition.backend.auth;

import jakarta.validation.constraints.NotBlank;

public record ResetRequest(@NotBlank String token, @NotBlank String password) {
}
