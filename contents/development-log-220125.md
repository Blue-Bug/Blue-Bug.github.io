---
date: "2022-01-25"
title: "22.01.25 MyPlaylist 프로젝트 개발일지"
categories: ["Devlog"]
summary: "페이징과 Fetch 조인"
thumbnail: "../static/devlog.png"
---

### 1. Paging 쿼리와 Fetch 조인을 같이 사용하면 메모리 낭비가 일어난다.

      2022-01-25 22:39:17.918  WARN 9036 --- [nio-8080-exec-1] o.h.h.internal.ast.QueryTranslatorImpl   : HHH000104: firstResult/maxResults specified with collection fetch; applying in memory!

### 2.Paging 쿼리를 먼저 날린뒤 따로 fetch 조인으로 데이터를 가져오는 방식으로 변경해야한다.

      혹은 Many to One을 기준으로 fetch 조인과 Paging 쿼리를 날리면 된다.

### 3. 그럼 왜 둘을 동시에 쓰면 안되나?

      데이터를 얼마나 가져와야 할지 몰라서 limit 를 무시하고 데이터를 전부
      메모리에 올려놓고 페이지를 계산한다
      -> Memory Leak 발생

### Source

- https://soon-devblog.tistory.com/40
- https://javabom.tistory.com/104
