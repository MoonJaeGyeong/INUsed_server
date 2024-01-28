package com.c_comachi.inused.service;

import com.c_comachi.inused.dto.TokenDto;
import com.c_comachi.inused.dto.request.auth.RegisterRequestDto;
import com.c_comachi.inused.dto.request.auth.LoginRequestDto;
import com.c_comachi.inused.dto.request.token.TokenRequestDto;
import com.c_comachi.inused.dto.response.auth.RegisterResponseDto;
import org.springframework.http.ResponseEntity;

public interface AuthService {

    ResponseEntity<? super RegisterResponseDto> register(RegisterRequestDto requestDto);
    TokenDto login(LoginRequestDto loginRequestDto);
    TokenDto reissue(TokenRequestDto tokenRequestDto);
}
