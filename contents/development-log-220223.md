---
date: "2022-02-23"
title: "22.02.23 MyPlaylist 프로젝트 개발일지"
categories: ["Devlog"]
summary: "Argument Resolver"
thumbnail: "../static/devlog.png"
---

### 1. ModelMapper 사용시 이름이 같다면 타입이 달라도 복사가 된다.

    대신 타입이 다르므로 안의 값이 복사되는 것이 아니라 사이즈가 복사가된다.

    (실제 값은 2갠데 4개 사이즈가 복사가 되면서 null이 두개가 들어가버림)

### 2. Form submit 시 객체 배열에 값이 채워질때 중간 인덱스에 값들이 비어 있으면 null 값이 채워짐

### 3. 결국, Argument Resolver로 인덱스 상관없이 들어온 개수만큼 배열에 채우도록 만들어야된다.

### 4. Errors 파라미터의 위치 신경 쓸것

    400 Error가 발생해버린다.
