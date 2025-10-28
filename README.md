# my-tailwind-app

軽量な React + TypeScript + Vite + Tailwind CSS のテンプレートです。

主なファイル:
- コンポーネント: [`Card`](src/components/Card.tsx), [`DetailButton`](src/components/DetailButton.tsx)
- アプリ本体: [`App`](src/App.tsx)
- エントリポイント: [src/main.tsx](src/main.tsx)
- Vite 設定: [vite.config.ts](vite.config.ts)
- Tailwind 設定: [tailwind.config.js](tailwind.config.js)
- パッケージ管理: [package.json](package.json)

セットアップと起動:
```sh
npm install
npm run dev
# ビルド
npm run build
# プレビュー
npm run preview
```

使い方:
- コンポーネントは `src/components/` に配置されています。UI は Tailwind のユーティリティクラスで組んであります。
- 開発中は Vite の HMR が効きます。ファイル編集で即時反映されます。
