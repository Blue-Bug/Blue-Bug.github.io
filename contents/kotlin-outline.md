---
date: "2023-06-15"
title: "Kotlin 개요"
categories: ["Kotlin"]
summary: "코틀린은 무엇이며 왜 사용하는가? 자바랑 무슨 차이가 있는가?"
thumbnail: "../static/kotlin-img.png"
---

### 1. Kotlin 이란?

JVM 기반의 언어이며 Java와 유사하지만 더 간결한 문법과 다양한 기능을 추가한 언어이다.  
Java와의 상호 운용이 100% 지원되므로 Java에 익숙한 개발자도 쉽게 접근할 수 있고  
안드로이드, 스프링 프레임워크 등에서도 사용할 수 있다.

### 2. Java 쓰지 왜 굳이 Kotlin을 사용하는가?

Java와는 달리 간결한 문법에 유용한 기능 특히 Null 관련 처리를 안전하고 편하게 처리할 수 있다.

## 간결한 문법

```kotlin
// getters, setters, equals(), hashCode(), toString(), copy()를 한 줄로 선언 가능
data class Course(val id : Int, val name : String, val author : String)
```

## Null 처리

```kotlin
//형변환이 실패하는 모든 경우에 대해 안전하게 null을 반환해준다.

null as? String // null
"string" as? File // null

//as는 경우에 따라 kotlin.TypeCastException이나 java.lang.ClassCastException 예외를 발생시킬 수 있다

null as File // kotlin.TypeCastException 예외 발생
null as File? // null
"string" as File // java.lang.ClassCastException 예외 발생
"string" as File? // java.lang.ClassCastException 예외 발생
```

---

## Source

https://kotlinlang.org/docs/home.html  
https://developer.android.com/codelabs/basic-android-kotlin-compose-first-program?hl=ko#0  
https://namu.wiki/w/Kotlin
