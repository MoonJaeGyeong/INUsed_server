package com.c_comachi.inused.entity;

import com.c_comachi.inused.dto.request.auth.RegisterRequestDto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name="user")
@Table(name="user")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "USER_ID")
    private Long id;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String nickname;

    @Column(nullable = false)
    private String password;

    private String profileImage;

    private Float fireTemperature;

    //private Boolean agreedPersonal;

    @Enumerated(EnumType.STRING)
    private Authority authority;

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }
    public void setPassword(String password) { this.password = password; }

    @Builder
    public UserEntity(RegisterRequestDto dto){
        this.email = dto.getEmail();
        this.nickname = dto.getNickname();
        this.password = dto.getPassword();
        //this.agreedPersonal = dto.getAgreedPersonal();
        //this.authority = ;
    }
}
