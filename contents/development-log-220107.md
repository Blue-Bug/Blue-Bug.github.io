---
date: "2022-01-07"
title: "22.01.07 MyPlaylist 프로젝트 개발일지"
categories: ["Devlog"]
summary: "개발 중 팁"
thumbnail: "../static/devlog.png"
---

### 1.엔티티 생성 시 필요한 파라미터를 받도록 하는 생성 메서드를 만들고 기본 생성자를 막아두면 좋다

      다른 사람들이 이 생성 메서드만 사용하도록 강제하고 알아보기 쉽기 때문이다.
      이걸로 막기 @NoArgsConstructor(access = AccessLevel.PROTECTED)

### 2. @OneToMany 연관 관계를 만들었을때 cascade 옵션을 주면

      제일 상위의 엔티티 save시 연관관계에 있는 모든 엔티티들도 같이 save되므로 편하다

### 3. 연관 관계를 만들었으면 연관 관계 메서드를 추가

```java
//연관 관계 메서드
public void setMember(Member member){
      this.member = member;
      member.getOrders().add(this);
}
```

### 4. 엔티티에 List 필드는 선언시 항상 초기화 해놓기 (Null때문에)

### 5. CustomValidator를 만들더라도 Controller상에서 생성되지 않는다면 Validation 되지 않는다

      List<Object> 안의 Object 에서 List안의 요소를 Validation하고 싶다면 Annotation을 만들어야됨

### 6. git 사용중 잘못해서 커밋이 날라가도 커밋이 한번이라도 됐다면 복구 가능

### Source

- https://coderedirect.com/questions/511240/spring-validate-list-of-strings-for-non-empty-elements
- https://niceman.tistory.com/187
