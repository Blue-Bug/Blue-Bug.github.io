---
date: "2022-02-17"
title: "22.02.17 MyPlaylist 프로젝트 개발일지"
categories: ["Devlog"]
summary: "Post Form 보충 작업"
thumbnail: "../static/devlog.png"
---

### 1. Posts Edit 작업에서 어려운 부분 Form에서 index가 순서대로 들어오는게 아니라

    중간에 비어있는 번호가 생기면 List에 null이 생기게 됨

    -> 결국 Validator나 Iterator로 null 인 부분은 제외하고 읽어오면 된다.

### 2. Edit Form에서는 이를 위해 Count와 Index를 따로 잡아주어야 한다.

    -> 어차피 백엔드에서 Validation 하더라도 프론트에서 할 수 있는 최선은 다 해야한다.
