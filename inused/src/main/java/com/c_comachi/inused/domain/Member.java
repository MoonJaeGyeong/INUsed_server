package com.c_comachi.inused.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MEMBER_ID")
    private Long id;

    @Column(nullable = false)
    private String email;

    @Column(name = "MEMBER_NAME", nullable = false)
    private String nickName;

    @Column(nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    private Authority authority;

    public void setNickname(String nickname) {
        this.nickName = nickName;
    }
    public void setPassword(String password) { this.password = password; }

    @Builder
    public Member(String email, String name, String password, Authority authority){
        this.email = email;
        this.nickName = name;
        this.password = password;
        this.authority = authority;
    }
}
