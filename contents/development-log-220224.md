---
date: "2022-02-24"
title: "22.02.24 MyPlaylist 프로젝트 개발일지"
categories: ["Devlog"]
summary: "Argument Resolver 만드는 중"
thumbnail: "../static/devlog.png"
---

### 1. @ControllerAdvice랑 @ExceptionHanlder 어노테이션으로 Argument Resolver에서 던진 예외를 처리가능

    JSON으로 바로 에러를 전송 한다던가 등등 구현 가능

### 2. 내가 하고 싶은 Errors 파라미터에 바인딩하는 방법

    그냥 단순히 Argument Resolver에서 mavContainer.removeAttributes(bindingResultModel);
        mavContainer.addAllAttributes(bindingResultModel); 를 해주면 되었다.
    -> https://github.com/spring-projects/spring-framework/issues/18109
    -> 그렇다 해도 Errors의 위치는 항상 Valid하는 모든 파라미터의 뒤에 위치해야 한다. 안그러면 Errors 뒤의 파라미터는 바인딩이 안됨.

### 3. PlaylistsEditFormList를 지우고 다시 PostsEditForm에 넣어놓았다.

    더 깔끔해지고 파라미터도 하나만 쓰면되고 Argument Resolver에서 그냥 PostsEditForm까지 만들어주면 됨.

### 4. List안의 요소를 Validation 할때 커스텀 어노테이션과 Validator를 사용

    Errors의 필드가 List안의 각 요소마다 잡히는게 아니라 List 자체가 잡혀버림
    -> List<@NotBlank @Length String> links 이렇게 해서 해결
