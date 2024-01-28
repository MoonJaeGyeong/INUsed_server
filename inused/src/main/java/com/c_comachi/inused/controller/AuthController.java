package com.c_comachi.inused.controller;

import com.c_comachi.inused.dto.TokenDto;
import com.c_comachi.inused.dto.request.auth.RegisterRequestDto;
import com.c_comachi.inused.dto.request.auth.LoginRequestDto;
import com.c_comachi.inused.dto.response.auth.RegisterResponseDto;
import com.c_comachi.inused.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/auth")
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<? super RegisterResponseDto> register(@RequestBody @Valid RegisterRequestDto requestBody) {
        ResponseEntity<? super RegisterResponseDto> response = authService.register(requestBody);
        return response;
    }
    @PostMapping("/login")
    public ResponseEntity<TokenDto> login(@RequestBody LoginRequestDto loginRequestDto) {
        return ResponseEntity.ok(authService.login(loginRequestDto));
    }
}
