---
date: "2022-01-21"
title: "22.01.21 MyPlaylist 프로젝트 개발일지"
categories: ["Devlog"]
summary: "페이징"
thumbnail: "../static/devlog.png"
---

### 1. 페이징 번호는 0부터 시작한다.

      1부터 시작하게 하고싶으면 Pageable을 상속받아 PageRequest 구현체를 만들거나 하는게 제일 나음

### 2. 다행히도 Posts를 대상으로 Paging이 되기 때문에 fetch join으로 인한 오류는 없었다.

      쿼리를 더 줄여서 한 쿼리에 Playlist와 Link까지 가져오게되면 문제가 될 수도 있을것같다.

### 3. 기존 Jpa메소드에서 Pageable만 넘겨주면 알아서 Paging 해준다.

      Page의 메소드를 쓰고싶다면 Page<> 리턴 받아야 한다.

### 4. Controller에 파라미터로 Pageable을 선언하면 알아서 매핑하여 PageRequest를 만들어 내고 설정을 바꾸고 싶으면

      properties에 spring.data.web.pageable....으로 변경, 이 요청에서만 특별히 바꾸고 싶다면 @PageableDefault를 사용한다.

### 5. Page로 받을 때 getContent()를 해야 현재 페이지의 리스트를 받아오고 이것으로 현재 페이지에 정보가 있는지 없는지 확인 할 수 있다.

      getTotalElement()를 쓰면 전체 페이지에 총 요소가 몇개인지를 반환하므로 if문을 쓸때 조심하기

### 6. 커스텀 플레이리스트는 일단 네이버와 유튜브만 적용하였다.

      링크창을 그대로 복사해서 붙여넣어 저장한다는 가정하에 저장된 값을 파싱하도록 프론트를 수정하였다.

### 7. 각 사이트마다 링크에서 파싱해야되는 부분이 다르다.

      다른 사이트(카카오 등)도 지원하려면 다 파싱하는 부분을 따로 추가해줘야 될듯 하다.
