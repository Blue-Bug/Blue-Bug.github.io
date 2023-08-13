---
date: "2022-02-05"
title: "22.02.05 MyPlaylist 프로젝트 개발일지"
categories: ["Devlog"]
summary: "배포 준비4"
thumbnail: "../static/devlog.png"
---

### 1. DNS가 Maximum Redirect가 뜨면서 제대로 작동하지 않았는데 그이유는

    Cloudflare에서 요청을 보낼때 유연 SSL 옵션이 켜져있다면 HTTP요청을 보내기 때문

    이는 내 서버에서 설정해놓은 HTTPS 강제 리디렉션에 걸려서 다시 HTTPS요청을

    보내게 되는 리디렉션 루프에 빠진다는 것이다.

-> Security 설정에서 강제 HTTPS 설정을 빼주는 것으로 해결

### Source

- https://support.cloudflare.com/hc/ko/articles/115000219871-%EB%A6%AC%EB%94%94%EB%A0%89%EC%85%98-%EB%A3%A8%ED%94%84-%EC%98%A4%EB%A5%98-%ED%95%B4%EA%B2%B0
