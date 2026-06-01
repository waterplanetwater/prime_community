# Prime Community Website v2

「積み上がる週末」をテーマにしたGitHub Pages用Webサイトです。

## ファイル構成

```text
prime-community-site-v2/
├─ index.html
├─ styles.css
├─ script.js
├─ README.md
└─ assets/
   ├─ logo.jpeg
   └─ logo-source.png
```

## GitHub Pages公開手順

1. GitHubで新規リポジトリを作成
2. このフォルダの中身をすべてアップロード
3. `Settings` → `Pages`
4. `Deploy from a branch`
5. Branch: `main` / Folder: `/root`
6. 公開URLにアクセス

## ロゴ差し替え

`assets/logo.jpeg` を同名で置き換えてください。

CSSでは `object-fit: contain` を指定しているため、ロゴが切れにくい設計です。

## 公開前に変更する場所

`index.html` の以下を実際のURL・メールアドレスに変更してください。

```html
https://peatix.com/
```

```html
hello@example.com
```
