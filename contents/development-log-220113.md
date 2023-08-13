---
date: "2022-01-13"
title: "22.01.13 MyPlaylist 프로젝트 개발일지"
categories: ["Devlog"]
summary: "플레이리스트 조회 시 무한루프 발생"
thumbnail: "../static/devlog.png"
---

### 1. Posts 엔티티에서 postsOwner 멤버의 연관 관계를 변경하여 추가로 나가던 쿼리를 outer join으로 변경

      1-1. playlist랑 link는 여전히 분리된 쿼리가 나간다(join되어 읽기 시 쿼리가 한번만 나가도 되도록 변경하기)
      1-2. 현재 playlist 개수만큼 link를 찾는 쿼리가 나감(playlist가 2개면 playlist를 찾는 쿼리 1개,link를 찾는 쿼리 2개)

### 2. 플레이리스트를 읽을 때 엔티티를 변환 중 무한루프가 발생

- 원인 : JPA에 양방향 매핑이 되어있고 Jackson 라이브러리의 ObjectMapper에 의해 엔티티의 필드가  
  다른 엔티티를 참조하고 그 엔티티 클래스의 필드가 또 다른 엔티티를 참조

      @JsonManagedReference @JsonBackReference 를사용하여 해결

### Source

- https://pasudo123.tistory.com/350
