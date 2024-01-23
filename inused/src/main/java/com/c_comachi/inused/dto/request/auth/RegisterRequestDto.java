package com.c_comachi.inused.dto.request.auth;

import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
public class RegisterRequestDto {
    @NotBlank @Email
    private String email;

    @NotBlank
    private String nickname;

    @NotBlank @Size(min=8, max=20)
    private String password;

//    @NotNull @AssertTrue
//    private Boolean agreedPersonal;
}
