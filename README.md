# changeImg-library(LP用)

アンケート系LPで選択箇所が画像ではないときのライブラリ。 
 
# DEMO
index.php

```bash
<div class="relative q1_container" id="question">
    <p><img src="img/ls_04.png" alt=""></p>
    <div class="answer1_container absolute">
        <div class="answer1_box">
            <div class="flex">
                <div class="answer js_a1">ほぼない</div>
                <div class="answer js_a1">30分ほど</div>
            </div>
            <div class="flex">
                <div class="answer js_a1">60分ほど</div>
                <div class="answer js_a1">1日使える</div>
            </div>
        </div>
    </div>
</div>
<div class="relative q2_container">
    <p><img src="img/ls_05.png" alt=""></p>
    <div class="answer2_container absolute">
        <div class="answer2_box">     
            <div class="answer js_a2">メッセージアプリ(LINEなど)</div>
            <div class="answer js_a2">SNS(Instagramなど)</div>
            <div class="answer js_a2">動画視聴(YouTubeなど)</div>
            <div class="answer js_a2">ショッピング(Amazonなど)</div>
            <div class="answer js_a2">ネットサーフィン</div>
            <div class="answer js_a2">アプリゲーム</div>
        </div>
    </div>
</div>
```

 ```bash
<script src="https://cdn.jsdelivr.net/gh/If-you-give-up-then-it-all-ends-here/clickAnswer-library@v1.0.2/dist/index.js"></script>
<script>
   const answers1 = document.querySelectorAll(".js_a1")
   const answers2 = document.querySelectorAll(".js_a2")
   const answers3 = document.querySelectorAll(".js_a3")
   
   
   ClickAnswerLibrary.changeAnswerImg(answers1, 1, "active")
   ClickAnswerLibrary.changeAnswerImg(answers1, 1, "active")
   ClickAnswerLibrary.changeAnswerImg(answers2, 6, "active")
   ClickAnswerLibrary.changeAnswerImg(answers3, 1, "active")
</script>
 ```

 
 
# Requirement
 
LP側ですること

1. 選択された後のスタイルをcssに追加する　
(クラス名は何でもよい)

2. 質問ごとにいくつか答があるが、その質問ごとの答えのタグに同じクラス属性を追加する。    
(例) 
```bash
<!-- question1 -->
<div class="relative q1_container" id="question">
    <p><img src="img/ls_04.png" alt=""></p>
    <div class="answer1_container absolute">
        <div class="answer1_box">
            <div class="flex">
                <div class="answer js_a1">ほぼない</div>
                <div class="answer js_a1">30分ほど</div>
            </div>
            <div class="flex">
                <div class="answer js_a1">60分ほど</div>
                <div class="answer js_a1">1日使える</div>
            </div>
        </div>
    </div>
</div>


<!-- question2 -->
<div class="relative q2_container">
    <p><img src="img/ls_05.png" alt=""></p>
    <div class="answer2_container absolute">
        <div class="answer2_box">     
            <div class="answer js_a2">メッセージアプリ(LINEなど)</div>
            <div class="answer js_a2">SNS(Instagramなど)</div>
            <div class="answer js_a2">動画視聴(YouTubeなど)</div>
            <div class="answer js_a2">ショッピング(Amazonなど)</div>
            <div class="answer js_a2">ネットサーフィン</div>
            <div class="answer js_a2">アプリゲーム</div>
        </div>
    </div>
</div>
```

 
# Installation
 
1. npm使用する場合
 ```bash
 npm i clickAnswer-library
 ```
2. CDNで使用する場合
 ```bash
 <script src="https://cdn.jsdelivr.net/gh/If-you-give-up-then-it-all-ends-here/clickAnswer-library@v1.0.2/dist/index.js"></script>
 ```
 
# Usage
 
1. グローバル変数を設定する(答えのタグに追加したクラスを指定する)
 
```bash
const グローバル変数 = document.querySelectorAll(".クラス名")
```

2. 関数呼び出し  
 
```bash
ClickAnswerLibrary.changeAnswerImg(グローバル変数, 選択できる数(数字で),選択された後のスタイルを追加したクラス名 )
```
       
 
# Note
 
注意点などがあれば書く
 
# Author
 
作成情報を列挙する
 
* 作成者
* 所属
* E-mail
 
# License
ライセンスを明示する
 
"hoge" is under [MIT license](https://en.wikipedia.org/wiki/MIT_License).
 
社内向けなら社外秘であることを明示してる
 
"hoge" is Confidential.
