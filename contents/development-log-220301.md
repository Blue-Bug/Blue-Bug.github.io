---
date: "2022-03-01"
title: "22.03.01 MyPlaylist 프로젝트 개발일지"
categories: ["Devlog"]
summary: "테스트의 중요성"
thumbnail: "../static/devlog.png"
---

### 1. 테스트의 중요성

- postsService.updatePosts() 에서 true가 나오면 정상처리이고
  false가 나오면 잘못된 요청인데 if문에서 !를 안 붙여놔서
  정상처리가 잘못된 요청인듯이 나가는 오류 발견

- 테스트를 하지 않았으면 발견하지 못했던 이유 :
  오류는 단지 flashAttribute에 오류 메시지만 담아서 보낼 뿐이고 정상처리나
  잘못된 요청이나 둘 다 똑같이 해당 posts 읽기페이지로 redirect 되기 때문

### 2. 업데이트에서 새로운 내용을 추가할때

     한 트랜잭션안에서는 flush가 안나가므로 변경사항을 체크할 수 없다.
     그러므로 1차캐시에 있는 객체에 추가해주는 로직이 들어가야만 한다.

### 3. Entity에서 Cascade 옵션과 orphanRemoval 설정으로 코드를 더 줄일 수 있었다.

### 4. 1차 캐시에 있는 컬렉션을 set등으로 아예 교체해버리면

    org.hibernate.HibernateException: A collection with cascade="all-delete-orphan"
    was no longer referenced by the owning entity instance: com.myplaylists.domain.Posts.playlists
    예외 발생
    -> 새로 넣어준 컬렉션은 하이버네이트에 의해 관리되는 컬렉션이 아니기 때문

### 5. 현재 시퀀스 생성이 1씩 증가하기 때문에 50개를 배치로 넣으면 50번의

    nextval 쿼리가 나가는 성능 이슈가 있다. 시퀀스 생성기로 해결

### 6. batch insert,update는 되는데 delete는 안되고 있음

### Source

- https://data-make.tistory.com/668
- https://blog.leocat.kr/notes/2016/04/26/hibernate-no-longer-reference
- https://velog.io/@bingbong-party/JPA-SEQUENCE%EC%A0%84%EB%9E%B5
- https://www.inflearn.com/questions/229835
