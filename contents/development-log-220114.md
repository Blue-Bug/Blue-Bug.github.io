---
date: "2022-01-14"
title: "22.01.14 MyPlaylist 프로젝트 개발일지"
categories: ["Devlog"]
summary: "Post 테스트 중 오류 발생"
thumbnail: "../static/devlog.png"
---

### 1. Posts를 작성한 갯수를 Member엔티티에 저장

      Posts를 작성할때마다 Member 테이블에 업데이트 쿼리가 나가므로 Profile 조회시 PostsRepository에서 긁어오도록 수정함

### 2. TEST에서 Lazy Loading 예외 발생 => @Transactional을 붙여주니 돌아감 => 영속성 컨텍스트가 없었나?

      2-1. 일단 왜 Lazy Loading이 되나 찾아봤더니 Posts에서 Member 객체를 가지고 Posts 작성자를
           설정 후 Member 객체의 Posts List에 넣어주는 과정에서 Lazy Loading 발생
      2-2. 근데 어차피 Service에 Transactional 어노테이션이 붙어있기 때문에 영속성 컨텍스트가 있을텐데?
      2-3. Member 객체가 세션에 있던 Detached 객체 였던 것 (영속성 컨텍스트가 관리하지 않는 객체임)
      2-4. PostsService에서 createPosts 메소드 실행전 Member 객체를 다시 Attached 시켜줌
      2-5. Transaction 어노테이션을 테스트에서 제거해도 잘 돌아감

### 3. 2번을 완전히 해결하기 전 또 오류 발생, 외래키 무결성 오류임

      3-1. 에러 메시지를 보니 AfterEach에서 모든 Member를 지울때 발생햇음
      3-2. Posts에 Member_id를 외래키로 달아놔서 삭제하지 못한거임
      3-3. Member 전부 삭제 전 Posts 부터 전부 삭제하는 것으로 해결
