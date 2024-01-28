package com.c_comachi.inused.service.implement;

import com.c_comachi.inused.dto.TokenDto;
import com.c_comachi.inused.dto.request.auth.RegisterRequestDto;
import com.c_comachi.inused.dto.request.auth.UserRequestDto;
import com.c_comachi.inused.dto.response.ResponseDto;
import com.c_comachi.inused.dto.response.auth.RegisterResponseDto;
import com.c_comachi.inused.entity.RefreshToken;
import com.c_comachi.inused.entity.UserEntity;
import com.c_comachi.inused.jwt.TokenProvider;
import com.c_comachi.inused.repository.RefreshTokenRepository;
import com.c_comachi.inused.repository.UserRepository;
import com.c_comachi.inused.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AuthServiceImplement implements AuthService {

    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final UserRepository userRepository;
    private final TokenProvider tokenProvider;
    private final RefreshTokenRepository refreshTokenRepository;

    private final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

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

    @Transactional
    @Override
    public TokenDto login(UserRequestDto userRequestDto) {
        // 1. Login ID/PW 를 기반으로 AuthenticationToken 생성
        UsernamePasswordAuthenticationToken authenticationToken = userRequestDto.toAuthentication();

        // 2. 실제로 검증 (사용자 비밀번호 체크) 이 이루어지는 부분
        //    authenticate 메서드가 실행이 될 때 CustomUserDetailsService 에서 만들었던 loadUserByUsername 메서드가 실행됨
        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);

        // 3. 인증 정보를 기반으로 JWT 토큰 생성
        TokenDto tokenDto = tokenProvider.generateTokenDto(authentication);

        // 4. RefreshToken 저장
        RefreshToken refreshToken = RefreshToken.builder()
                .key(authentication.getName())
                .value(tokenDto.getRefreshToken())
                .build();

        refreshTokenRepository.save(refreshToken);

        // 5. 토큰 발급
        return tokenDto;
    }


}
