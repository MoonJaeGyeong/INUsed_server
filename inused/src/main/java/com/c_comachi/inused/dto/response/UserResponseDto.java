package com.c_comachi.inused.dto.response;

import com.c_comachi.inused.entity.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class UserResponseDto {
    private String email;

    public static UserResponseDto of(UserEntity user) {
        return new UserResponseDto(user.getEmail());
    }
}
