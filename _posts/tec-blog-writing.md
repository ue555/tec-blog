---
title: "Tecブログの書き方"
excerpt: "Tecブログの書き方についてのまとめ"
coverImage: "/assets/blog/image/sample1.jpg"
date: "2023-12-23T00:47:00.002Z"
ogImage:
  url: "/assets/blog/blog/sample1.jpg"
---

## 技術ブログの書き方

### ソース記載

````
```php
<?php
trait ezcReflectionReturnInfo {
    function getReturnType() { /*1*/ }
    function getReturnDescription() { /*2*/ }
}

class ezcReflectionMethod extends ReflectionMethod {
    use ezcReflectionReturnInfo;
    /* ... */
}

class ezcReflectionFunction extends ReflectionFunction {
    use ezcReflectionReturnInfo;
    /* ... */
}
?>

```
````

#### 結果

```php
<?php
trait ezcReflectionReturnInfo {
    function getReturnType() { /*1*/ }
    function getReturnDescription() { /*2*/ }
}

class ezcReflectionMethod extends ReflectionMethod {
    use ezcReflectionReturnInfo;
    /* ... */
}

class ezcReflectionFunction extends ReflectionFunction {
    use ezcReflectionReturnInfo;
    /* ... */
}
?>
```

### 図の表示

```
![AWSの構成図](http://localhost:3000/_next/image?url=%2Fassets%2Fblog%2Fsample%2Faws.png&w=3840&q=75)
```

#### 結果

![AWSの構成図](http://localhost:3000/_next/image?url=%2Fassets%2Fblog%2Fsample%2Faws.png&w=3840&q=75)
