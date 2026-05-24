// astro.config.mjs
// Astroの設定ファイルです。GitHub Pagesへのデプロイ設定も含まれます。

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';

export default defineConfig({
  // GitHub Pagesのサイトルート設定（ユーザー名とリポジトリ名を正しく指定）
  site: 'https://hayonee-git.github.io',
  // リポジトリ名がそのままパスになる場合は base を設定します
  base: '/hayo_nee.com/',

  // 使用するインテグレーション（プラグイン）の一覧
  integrations: [
    // Tailwind CSSを有効化します
    tailwind(),
    // Alpine.jsを有効化します（アニメーションなどの軽量JS用）
    // collapseプラグイン：FAQアコーディオンのスムーズ開閉に使用します
    alpinejs({ entrypoint: '/src/entrypoint.ts' }),
  ],
});
