package com.c_comachi.inused.entity;

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

    @Column(name = "MEMBER_NAME", nullable = false)
    private String nickname;

    @Column(nullable = false)
    private String password;

    private String profileImage;

    @Enumerated(EnumType.STRING)
    private Authority authority;

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }
    public void setPassword(String password) { this.password = password; }

    @Builder
    public UserEntity(String email, String nickname, String password, Authority authority){
        this.email = email;
        this.nickname = nickname;
        this.password = password;
        this.authority = authority;
    }
}
