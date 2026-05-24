# hayo_nee.com

自作キャラクターと小説の紹介サイトです。

- **公開URL（予定）**: https://hayo_nee.github.io/hayo_nee.com
- **フレームワーク**: [Astro](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/)
- **軽量JS**: [Alpine.js](https://alpinejs.dev/)（アニメーション・インタラクション用）
- **ホスティング**: GitHub Pages

---

## セットアップ手順

### 必要な環境

- Node.js 20以上
- npm 9以上

### ローカルでの起動

```bash
# 1. リポジトリをクローンします
git clone https://github.com/hayo_nee/hayo_nee.com.git
cd hayo_nee.com

# 2. パッケージをインストールします
npm install

# 3. 開発サーバーを起動します
npm run dev
# → http://localhost:4321 でアクセスできます
```

### ビルドとプレビュー

```bash
# 本番用ビルドを生成します（dist/ フォルダに出力）
npm run build

# ビルドしたファイルをローカルでプレビューします
npm run preview
```

---

## GitHub Pagesへのデプロイ

1. このリポジトリをGitHubにpushします
2. GitHubリポジトリの **Settings → Pages** を開きます
3. **Source** を `GitHub Actions` に変更します
4. `main` ブランチにpushすると自動でデプロイが始まります

---

## ファイル構成

```
hayo_nee.com/
│
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions デプロイ設定
│
├── public/
│   ├── favicon.svg             # ファビコン（SVG）
│   └── images/                 # キャラクター画像を置く場所
│       ├── chara01.png         # ← 実際の画像に差し替えてください
│       ├── chara02.png
│       └── chara03.png
│
├── src/
│   ├── content/                # Markdownコンテンツ（キャラ・小説）
│   │   ├── config.ts           # Content Collectionsのスキーマ定義
│   │   ├── characters/         # キャラクターMarkdownファイル
│   │   │   ├── yuki-sakura.md
│   │   │   ├── shiina-aoi.md
│   │   │   └── fujimura-hina.md
│   │   └── novels/             # 小説Markdownファイル
│   │       ├── hoshi-furu-yoru-01.md
│   │       └── hoshi-furu-yoru-02.md
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro    # 全ページ共通レイアウト（ヘッダー・フッター・ドロワー）
│   │
│   ├── pages/                  # ページコンポーネント
│   │   ├── index.astro         # トップページ
│   │   ├── about.astro         # Aboutページ
│   │   ├── characters/
│   │   │   ├── index.astro     # キャラクター一覧
│   │   │   └── [slug].astro    # キャラクター詳細（動的ルート）
│   │   └── novels/
│   │       ├── index.astro     # 小説一覧（検索・フィルタリング付き）
│   │       └── [slug].astro    # 小説詳細（動的ルート）
│   │
│   └── styles/
│       └── global.css          # グローバルCSS（Tailwindのベース＋カスタムスタイル）
│
├── astro.config.mjs            # Astro設定（GitHub Pages対応）
├── tailwind.config.mjs         # Tailwind CSS設定（カラーパレット・フォントなど）
├── package.json                # 依存関係
└── README.md                   # このファイル
```

---

## コンテンツの追加方法

### キャラクターを追加する

`src/content/characters/` フォルダに新しいMarkdownファイルを作成します。

ファイル名がURLのslugになります（例: `tanaka-hanako.md` → `/characters/tanaka-hanako`）

```markdown
---
name: "田中 花子"
nameEn: "Tanaka Hanako"
age: 16
tag: "活発・笑顔が眩しい"
image: "/images/chara04.png"
works: ["作品タイトル"]
youtubeUrl: "https://www.youtube.com/watch?v=xxxxxxxx"  # 省略可
color: "#f5c9b0"  # アイコンの背景色（省略可）
---

キャラクターの説明文をここに書きます。

## 人物について

...（Markdown形式で自由に書けます）
```

### 小説を追加する

`src/content/novels/` フォルダに新しいMarkdownファイルを作成します。

```markdown
---
title: "作品タイトル"
chapter: 3
summary: "あらすじをここに書く"
publishedAt: 2024-08-01
updatedAt: 2024-08-05  # 省略可
characters: ["yuki-sakura", "shiina-aoi"]  # 登場キャラのslug
series: "シリーズ名"  # 省略可（省略時はtitleを使用）
tags: ["青春", "ファンタジー"]  # 省略可
---

## 第三章　タイトル

本文をここに書きます。
```

---

## デザインについて

- **カラーパレット**: 薄いベージュ（`#faf8f5`）とくすんだブルー（`#6090b0`）を基調としています
- **フォント**: Noto Sans JP（本文）、Zen Kaku Gothic New（見出し）
- **アニメーション**: ページ読み込み時のバウンスイン（`animate-bounce-in`）を各要素に適用

カラーや余白などはすべて `tailwind.config.mjs` と `src/styles/global.css` で管理しています。

---

## ライセンス

このサイトのコードはMITライセンスです。
コンテンツ（キャラクター・小説・イラスト）の権利はhayo_neeに帰属します。
