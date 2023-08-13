---
date: "2022-03-04"
title: "22.03.04 MyPlaylist 프로젝트 개발일지"
categories: ["Devlog"]
summary: "유지 보수"
thumbnail: "../static/devlog.png"
---

### 1. 잘못된 Playlist값을 받으면 값 변경없이 바로 리턴해야되는데 변경이 되는 문제

    -> Posts 제목과 설명이 바뀐다. 현재 정상적으로 들어온 Playlist까지 전부 바뀜
    트랜잭션을 여러개로 나눠서 특정 트랜잭션만 롤백하게 만들어도 될 것 같다.

### 2. 롤백 되도록 서비스를 수정하고 TEST 하기

    -> Source 1번의 링크에 있던 방법으로 Propagation.REQUIRES_NEW로 새로운 트랜잭션을 만든다.

    -> 이렇게 하면 TEST의 Transaction이 A가 되고 Service의 Edit 메소드가 Transaction B로
    서로 분리가 되고 예외를 날리면 Transaction B만 롤백이 된다.

### 3. 호스팅 할때 DB원격 접속해서 시퀀스랑 제약조건 변경

### Source

- https://stackoverflow.com/questions/59739952/why-transaction-not-getting-rollbacked-in-spring-jpa-for-required-propagation-le
