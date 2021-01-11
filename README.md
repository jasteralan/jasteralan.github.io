# 在 GitHub 上用 Next.js 建立靜態網站

基本步驟看這篇 [Deploy Your Next.js App on GitHub Pages Using the GitHub Action](https://medium.com/javascript-in-plain-english/deploy-your-next-js-app-on-github-pages-using-the-github-action-525271137409) ，流程是在每次 push 上 master 後會觸發 GitHub Action 跑 `next build` 和 `next export`，再把產生出來的 `out` 資料夾裡的內容放到 `gh-pages` 的 branch。


## 🐞 Issue

照文章做的結果，GitHub Action 在跑到 Deploy 那一步驟的時候會失敗，參考文章裡給的[範例](https://github.com/NaveenDA/naveenda.github.io)，應該是 `intergrate.yml` 25行 似乎有點錯誤，原本只跑了 `npm run build`，但這樣並不會產生靜態內容，改成 `npm run build && npm run export` 之後推上去就成功了。


## 🧘🏿‍♂️ 蠻酷的 [Statically.io](https://statically.io/)

文章裡面有提到，GitHub page 找不到 `_next/assets` 下的檔案，原本想改 Next.js 的設定來回避這個問題，但沒有找到好解法。作者的作法更簡單，statically.io 這個服務不需要註冊，它會根據路徑去取得對應的資源。比如 `https://cdn.statically.io/gh/jasteralan/jasteralan.github.io/gh-pages/XXX.jpg` 會取得 GitHub user `jasteralan` 的 `jasteralan.github.io` 專案下 `gh-pages` branch `XXX.jpg` 圖片。