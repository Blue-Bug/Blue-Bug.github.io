---
date: "2022-03-03"
title: "22.03.03 MyPlaylist 프로젝트 개발일지"
categories: ["Devlog"]
summary: "쿼리 유지 보수"
thumbnail: "../static/devlog.png"
---

### 1. hibernate 배치에 관한 글

    -> Source 1번 확인

### 2. insert나 update는 제대로 배치설정대로 쿼리가 나가는데 delete는 안되는 이유

    hibernate의 ActionQueue에서 delete문은 정렬되지 않는다
    -> JDBC 배치 는 모든 문이 동일한 데이터베이스 테이블에 속하는 경우에만 재사용할 수 있다.
    -> 즉 delete는 정렬되지 않기 때문에 테이블 순서가 섞여서 들어오게 되므로 배치불가
    -> 연관 객체들을 수동으로 지우고 플러쉬를 먼저 날리거나
    -> Cascade Delete 옵션을 줘서 배치로 만들 수 있다.

### 3. 배치(벌크)는 한번에 여러개의 쿼리를 모아서 보낸다(마치 preparedStatment처럼 동작하게 해줌)

    rewriteBatchedStatements 옵션을 db에 연결할때 url 파라미터로 넣어주면
    insert 쿼리도 멀티라인 insert로 재구성된다.

### 4. @OnDelete(action = OnDeleteAction.CASCADE) 설정

    DB 제약조건도 수정완료

### 5. logging.level.org.hibernate.engine.jdbc.batch.internal.BatchingBatch=DEBUG

    설정으로 넣어주면 배치사이즈를 볼 수 있다.

### 6. 배치로 나가는것도 좋지만 여기서 deleteAllInBatch를 쓰면 jpa가 1차캐시에서 db로 쿼리가 나가기 전에 컬렉션안에 있는 모든 엔티티를 지우는 한줄의 쿼리로 만들어 준다.

    -> 대신 컬렉션을 만들고 그 안에 모든 엔티티를 넣어야 하니 지워야할 엔티티숫자가 크다면 메모리를 생각해서 쓰지 않는것이 좋을 것 같다.

### 7. addPosts 와 deletePosts할때 6번의 메소드를 썼는데 제거함

    엔티티에 Cascade 옵션과 orphanRemoval 옵션을 줬음
    -> 대신 싱글 라인 쿼리로 나가던 이점이 사라짐

### Source

- https://techblog.woowahan.com/2695/
- https://vladmihalcea.com/how-to-batch-delete-statements-with-hibernate/
- https://velog.io/@rainmaker007/spring-data-jpa-batch-insert-%EC%A0%95%EB%A6%AC
