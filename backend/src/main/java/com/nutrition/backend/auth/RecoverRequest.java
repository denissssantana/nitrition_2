package com.nutrition.backend.auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record RecoverRequest(@Email @NotBlank String email) {
}
