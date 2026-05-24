// tailwind.config.mjs
// Tailwind CSSのカスタム設定ファイルです。
// カラーパレット・フォント・アニメーションなど、
// このサイト独自のデザインtokenを定義しています。

/** @type {import('tailwindcss').Config} */
export default {
  // Tailwindが解析するファイルの対象を指定します
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

  theme: {
    extend: {
      // -----------------------------------------------
      // カラーパレット
      // 薄いベージュとくすんだブルーを基調とした柔らかい配色
      // 真っ黒(#000)・真っ白(#fff)は使用しません
      // -----------------------------------------------
      colors: {
        // ベースカラー：ページ背景・テキストなどに使用
        base: {
          50:  '#faf8f5',  // 最も薄いベージュ（ページ背景）
          100: '#f3efe8',  // 薄いベージュ
          200: '#e8e0d4',  // ベージュ
          300: '#d6cab8',  // やや濃いベージュ
          400: '#c0ac94',  // ミドルベージュ
          500: '#a8906e',  // アクセントベージュ
        },
        // くすんだブルー系カラー：見出し・リンク・装飾に使用
        blue: {
          50:  '#eef2f7',  // 最も薄いブルー
          100: '#dce8f0',  // 薄いブルー
          200: '#b8cfe0',  // ライトブルー
          300: '#8aafc8',  // ミドルブルー
          400: '#6090b0',  // メインブルー（リンクやアクセント）
          500: '#3d6f8e',  // ダークブルー（見出しなど）
          600: '#2a5470',  // より濃いブルー
        },
        // テキストカラー：真っ黒を避けた落ち着いたグレー
        ink: {
          light: '#8a8278',  // 薄いテキスト（補助テキスト）
          mid:   '#6b6460',  // 中間テキスト
          dark:  '#3d3a36',  // メインテキスト（真っ黒ではない）
        },
      },

      // -----------------------------------------------
      // フォント設定
      // Google Fontsから細めの日本語フォントを使用します
      // -----------------------------------------------
      fontFamily: {
        // 本文用：Noto Sans JP（細め・読みやすい日本語フォント）
        sans: ['"Noto Sans JP"', 'sans-serif'],
        // 見出し用：Zen Kaku Gothic New（スタイリッシュな日本語フォント）
        display: ['"Zen Kaku Gothic New"', 'sans-serif'],
      },

      // -----------------------------------------------
      // カスタムアニメーション
      // Alpine.jsのバウンスアニメーションと組み合わせて使用します
      // -----------------------------------------------
      animation: {
        // ふわっと下からフェードインするアニメーション
        'fade-up': 'fadeUp 0.6s ease-out both',
        // バウンスしながら下からフェードインするアニメーション
        'bounce-in': 'bounceIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
        // ゆっくりバウンスするアニメーション
        'bounce-slow': 'bounce 2s infinite',
        // カードホバー時のリフトアニメーション
        'lift': 'lift 0.3s ease-out both',
        // スライドイン（右から）
        'slide-in': 'slideIn 0.4s ease-out both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceIn: {
          '0%':   { opacity: '0', transform: 'translateY(30px) scale(0.95)' },
          '60%':  { opacity: '1', transform: 'translateY(-6px) scale(1.02)' },
          '80%':  { transform: 'translateY(3px) scale(0.99)' },
          '100%': { transform: 'translateY(0) scale(1)' },
        },
        lift: {
          '0%':   { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-4px)' },
        },
        slideIn: {
          '0%':   { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },

      // -----------------------------------------------
      // その他のカスタム値
      // -----------------------------------------------
      // 最大幅：本文の読みやすい幅を設定
      maxWidth: {
        'reading': '72ch',  // 日本語テキストの読みやすい横幅
      },
      // 角丸：柔らかい印象のボーダーラジウス
      borderRadius: {
        'xl':  '12px',
        '2xl': '18px',
        '3xl': '24px',
      },
    },
  },

  plugins: [],
};
