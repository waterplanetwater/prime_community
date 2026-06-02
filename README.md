# Prime Community Website v4

GitHub Pages用の静的Webサイトです。

## 反映済み

- Instagram: `@prime235711131719`
- Peatix: `https://prime12.peatix.com`
- 参加希望者: Instagram DM

## ファイル構成

```text
prime-community-site-v4/
├─ index.html
├─ styles.css
├─ script.js
├─ README.md
├─ .nojekyll
└─ assets/
   ├─ logo.jpeg
   └─ logo-source.png
```

## GitHub Pages公開手順

1. リポジトリ内の旧ファイルを削除
2. このフォルダの中身をすべてアップロード
3. `Settings` → `Pages`
4. `Deploy from a branch`
5. Branch: `main` / Folder: `/root`
6. 公開URLにアクセス

## ロゴが巨大表示される場合

ブラウザキャッシュが残っている可能性があります。

- Windows: `Ctrl + F5`
- Chrome DevTools: Network → Disable cache → 再読み込み

v4ではHTML内にもロゴサイズの緊急CSSを入れているため、通常は巨大表示されません。

## ロゴ差し替え

`assets/logo.jpeg` を同名ファイルで置き換えてください。


## v5 修正内容

スマホ表示で横方向のキャンバスが広がる問題を抑えるため、以下を追加しました。

- `overflow-x: hidden / clip`
- グリッドの `minmax(0, 1fr)` 強制
- モバイル時の `nowrap` 解除
- Hero/カード/コンテナの `max-width: 100%` 固定
