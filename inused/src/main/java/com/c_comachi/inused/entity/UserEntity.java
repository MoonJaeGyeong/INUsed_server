package com.c_comachi.inused.entity;

import com.c_comachi.inused.dto.request.auth.RegisterRequestDto;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity(name="users")
@Table(name="users")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id", nullable = false)
    private Long id;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String nickname;

    @Column(nullable = false)
    private String password;

    private String profileImage;

    private Double fireTemperature;

    @Enumerated(EnumType.STRING)
    private Authority authority;


    @Builder
    public UserEntity(String email, String password, String nickname, Double fireTemperature, Authority authority){
        this.email = email;
        this.password = password;
        this.nickname = nickname;
        this.fireTemperature = fireTemperature;
        this.authority = authority;
    }
}
