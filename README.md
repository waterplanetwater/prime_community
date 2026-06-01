# Prime Community Website v3

GitHub Pages用の静的サイトです。

## 連絡先

- Instagram: `@prime2357911131719`
- Peatix: `https://prime12.peatix.com`
- 参加希望者: Instagram DM

## ファイル構成

```text
prime-community-site-v3/
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
2. このフォルダ内のファイルをすべてアップロード
3. `Settings` → `Pages`
4. `Deploy from a branch`
5. Branch: `main` / Folder: `/root`
6. 公開URLにアクセス

## ロゴ差し替え

`assets/logo.jpeg` を同名ファイルで置き換えてください。

CSS側で `object-fit: contain` を指定しているため、ロゴが切れにくい構成です。
