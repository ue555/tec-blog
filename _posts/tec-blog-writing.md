---
title: "Tecブログの書き方"
excerpt: "Tecブログの書き方についてのまとめ"
coverImage: "/assets/blog/image/blog1.jpg"
date: "2023-12-23T00:47:00.002Z"
ogImage:
  url: "/assets/blog/blog/blog1.jpg"
---

## 技術ブログの書き方

### 見出し

```
# 見出し1
## 見出し2
### 見出し3
#### 見出し4
```

### テキストリンク

```
[アンカーテキスト](リンクのURL)
```

#### 結果

[Tec ブログ](http://localhost:3000)

### 太字、イタリック、打消し線、Code、コメント

```
*イタリック*
**太字**
~~打消し線~~
インラインで`code`を挿入
<!-- コメント -->
```

#### 結果

_イタリック_
**太字**
~~打消し線~~
インラインで`code`を挿入

<!-- コメント -->

### リスト

```
- List1
- List2
    - List2-1
    * List2-2
        - List2-2-1
        - List2-2-2
```

#### 結果

- List1
- List2
  - List2-1
  * List2-2
    - List2-2-1
    - List2-2-2

### 番号付リスト

```
1. List1
2. List2
    2.1 List2-1
    2.2 List2-2
        2.2.1 List2-2-1
        2.2.2 List2-2-2
```

#### 結果

1. List1
2. List2
   2.1 List2-1
   2.2 List2-2
   2.2.1 List2-2-1
   2.2.2 List2-2-2

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

[対応言語の一覧](https://prismjs.com/#supported-languages)

### diff のシンタックスハイライト

````
```diff js
@@ -4,6 +4,5 @@
+ const foo = bar.baz([1, 2, 3]) + 1;
- let foo = bar.baz([1, 2, 3]);
```
````

#### 結果

```diff js
@@ -4,6 +4,5 @@
+ const foo = bar.baz([1, 2, 3]) + 1;
- let foo = bar.baz([1, 2, 3]);
```

### 図の表示

```
![AWSの構成図](http://localhost:3000/_next/image?url=%2Fassets%2Fblog%2Fsample%2Faws.png&w=3840&q=75)
```

#### 結果

![AWSの構成図](http://localhost:3000/_next/image?url=%2Fassets%2Fblog%2Fsample%2Faws.png&w=3840&q=75)

### Zenn 独自の記法

```
:::message
メッセージをここに
:::
```

```
:::message alert
警告メッセージをここに
:::
```

#### 結果

:::message
メッセージをここに
:::

:::message alert
警告メッセージをここに
:::

### 参考元

[\* Zenn の Markdown 記法一覧](https://zenn.dev/zenn/articles/markdown-guide)
[\* Zenn デビュー](https://zenn.dev/dameoyajie/articles/doe01-first-step)
