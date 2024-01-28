package com.c_comachi.inused.service;

import com.c_comachi.inused.dto.TokenDto;
import com.c_comachi.inused.dto.request.auth.RegisterRequestDto;
import com.c_comachi.inused.dto.request.auth.UserRequestDto;
import com.c_comachi.inused.dto.response.UserResponseDto;
import com.c_comachi.inused.dto.response.auth.RegisterResponseDto;
import org.springframework.http.ResponseEntity;

public interface AuthService {

    ResponseEntity<? super RegisterResponseDto> register(RegisterRequestDto requestDto);
    TokenDto login(UserRequestDto userRequestDto);
}
