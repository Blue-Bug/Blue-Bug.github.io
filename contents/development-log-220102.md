---
date: "2022-01-02"
title: "22.01.02 MyPlaylist 프로젝트 개발일지"
categories: ["Devlog"]
summary: "리다이렉트 문제 발생"
thumbnail: "../static/devlog.png"
---

### 1. addAttribute시 속성명을 지정해 주지 않으면 대문자인 부분부터 캐멀케이스로 변환되어 들어가니 주의

### 2. login시 302redirect로 /error 페이지로 리다이렉트 되는 문제 발생

#### defaultSuccessUrl이 없어서 인증 완료 후 기본 인증 완료 핸들러가 리다이렉트될 url을 찾지 못하기 때문에 error로 리다이렉트됨

- 원인 : SimpleUrlAuthenticationSuccessHandler가 기본으로 설정되어 있다

      defaultSuccessUrl을 추가하여 주거나 SuccessHandler를 구현하여 넣어주면 된다.
      기본으로 구현된 SavedRequestAwareAuthenticationSuccessHandler를
      넣어줘도 된다(세션에서 가져옴) Session에 SavedRequest 를 사용함

### Source

- https://stackoverflow.com/questions/50157911/spring-security-5-authentication-always-return-302
