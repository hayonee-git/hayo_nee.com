// src/entrypoint.ts
// Alpine.jsのエントリポイントです。
// ここでAlpine.jsのプラグインを登録します。
// x-collapse ディレクティブ：FAQのアコーディオン開閉アニメーション用

import type { Alpine } from 'alpinejs';
import collapse from '@alpinejs/collapse';

export default (Alpine: Alpine) => {
  // collapseプラグインを登録します
  // これにより、x-collapse が使えるようになります
  Alpine.plugin(collapse);
};
