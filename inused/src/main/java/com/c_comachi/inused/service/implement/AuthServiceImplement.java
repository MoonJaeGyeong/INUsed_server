package com.c_comachi.inused.service.implement;

import com.c_comachi.inused.dto.request.auth.RegisterRequestDto;
import com.c_comachi.inused.dto.response.ResponseDto;
import com.c_comachi.inused.dto.response.auth.RegisterResponseDto;
import com.c_comachi.inused.entity.UserEntity;
import com.c_comachi.inused.repository.UserRepository;
import com.c_comachi.inused.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImplement implements AuthService {

    private final UserRepository userRepository;

    private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    @Override
    public ResponseEntity<? super RegisterResponseDto> register(RegisterRequestDto requestDto) {

        try {
            String email = requestDto.getEmail();
            boolean existedEmail = userRepository.existsByEmail(email);
            if (existedEmail) return RegisterResponseDto.duplicateEmail();

            String nickname = requestDto.getNickname();
            boolean existedNickname = userRepository.existsByNickname(nickname);
            if (existedNickname) return RegisterResponseDto.duplicateNickname();

            String password = requestDto.getPassword();
            String encodedPassword = passwordEncoder.encode(password);
            requestDto.setPassword(encodedPassword);

            UserEntity userEntity = new UserEntity(requestDto);
            userRepository.save(userEntity);

        } catch (Exception exception){
            exception.printStackTrace();
            return ResponseDto.databaseError();
        }

        return RegisterResponseDto.success();
    }
}
