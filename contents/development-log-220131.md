---
date: "2022-01-31"
title: "22.01.31 MyPlaylist 프로젝트 개발일지"
categories: ["Devlog"]
summary: "배포 준비"
thumbnail: "../static/devlog.png"
---

### 1. deleteAllInBatch를 사용하여 각 테이블별 Single쿼리로 삭제 작업을 하도록 만듬

### 2. 오류 발생, 위에서 이미 delete가 나간 쿼리가 두번 더 나간다.

      해결, OneToMany 연관관계 컬렉션에 cascade = CascadeType.REMOVE 옵션을 지워주었음

### 3. Heroku에 배포시 gradlew 를 사용한다면 git add gradle/wrapper

      git commit -m "Gradle Wrapper" 명령어를 통해
      gradle/wrapper/gradle-wrapper.jar
      gradle/wrapper/gradle-wrapper.properties
      이 두 파일을 git 저장소에 추가해야 한다.

### 4. 배포 오류 로그가 compileJava 오류일시 자바 설정이 11로 되어있는지 확인

### 5. heroku config:add TZ="Asia/Seoul" --app=APP_NAME 타임존 설정

### Source

- https://velog.io/@leesg619/Spring-boot-Heroku-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0
