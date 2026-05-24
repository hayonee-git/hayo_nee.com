// src/content/config.ts
// Astro Content Collections の設定ファイルです。
// キャラクターと小説のMarkdownファイルの構造（スキーマ）を定義します。
// これにより、MarkdownのフロントマターをTypeScriptの型として扱えます。

import { defineCollection, z } from 'astro:content';

// -----------------------------------------------
// キャラクターコレクションのスキーマ定義
// src/content/characters/ 配下のMarkdownファイルに適用されます
// -----------------------------------------------
const characters = defineCollection({
  type: 'content',
  schema: z.object({
    // キャラクター名（必須）
    name: z.string(),
    // 名前のアルファベット表記（必須）
    nameEn: z.string(),
    // 年齢（数値・省略可能）
    age: z.number().optional(),
    // 性格タグ（「明るい・好奇心旺盛」のような文字列）
    tag: z.string().optional(),
    // アイコン画像パス（省略時はプレースホルダー使用）
    image: z.string().optional(),
    // 登場作品タイトルの配列
    works: z.array(z.string()).optional(),
    // イメージソングのYouTube URL（省略可能）
    youtubeUrl: z.string().url().optional(),
    // キャラクターの色テーマ（カラーコード・省略可能）
    color: z.string().optional(),
  }),
});

// -----------------------------------------------
// 小説コレクションのスキーマ定義
// src/content/novels/ 配下のMarkdownファイルに適用されます
// -----------------------------------------------
const novels = defineCollection({
  type: 'content',
  schema: z.object({
    // 作品タイトル（必須）
    title: z.string(),
    // チャプター番号（必須）
    chapter: z.number(),
    // あらすじ（必須）
    summary: z.string(),
    // 公開日（必須）
    publishedAt: z.coerce.date(),
    // 最終更新日（省略可能）
    updatedAt: z.coerce.date().optional(),
    // 登場キャラクターのslug配列（キャラクターページへのリンクに使用）
    characters: z.array(z.string()).optional(),
    // 作品シリーズ名（省略可能）
    series: z.string().optional(),
    // タグ（ジャンルなど・省略可能）
    tags: z.array(z.string()).optional(),
  }),
});

// コレクションをエクスポートします
export const collections = { characters, novels };
