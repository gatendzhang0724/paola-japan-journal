# Paola 的日本旅行手记

一个记录日本旅行、Vlog、摄影、美食与城市生活的响应式个人网站。

## 已实现

- 日系编辑风首页与 Sticky Navbar
- 旅程卡片、精选旅程时间线、城市足迹
- 可筛选的美食记录
- Vlog 展示区
- 支持键盘方向键与 ESC 的照片 Lightbox
- 关于我与社交入口
- 桌面、平板、iPhone 响应式布局
- SEO 标题、描述、关键词与 Open Graph 基础信息
- 键盘焦点、图片 Alt Text、减少动态效果偏好支持

## 本地查看

需要 Node.js 22.13 或更高版本。

```bash
npm install
npm run dev
```

浏览器打开终端显示的本地地址。

## 替换成你的内容

主要内容都在 `app/page.tsx`，样式在 `app/globals.css`。

1. 在 `journeys` 数组替换旅程标题、日期、城市、摘要和图片。
2. 在 `food` 数组替换餐厅、类型、人均价格和体验。
3. 在 `gallery` 数组替换照片、说明与 Alt Text。
4. 将 Vlog 播放按钮替换为你的 Bilibili 或 YouTube 链接/嵌入播放器。
5. 修改“关于我”、邮箱和页脚社交链接。
6. 在 `app/layout.tsx` 修改网站标题、描述和分享信息。

当前照片为 Unsplash 示例图。正式发布前建议换成你的原创照片，并将图片放入 `public/images/`，然后把地址改为 `/images/文件名.jpg`。

## 发布到自己的 GitHub Pages

项目已经包含自动发布工作流：

1. 在 GitHub 新建空仓库，例如 `paola-japan-journal`。
2. 把这个项目的全部文件上传到仓库。
3. 打开仓库 **Settings → Pages**。
4. 在 **Build and deployment → Source** 选择 **GitHub Actions**。
5. 打开仓库的 **Actions** 页面，等待 `Deploy to GitHub Pages` 完成。
6. 网站地址会显示为 `https://你的用户名.github.io/仓库名/`。

以后每次更新 `main` 分支，网站都会自动重新发布。

## 也可以使用 Vercel

如果希望绑定独立域名或获得更简单的预览流程，可以在 Vercel 选择 **Add New Project**，导入同一个 GitHub 仓库。项目中的 `vercel.json` 会自动使用 Next.js 构建。

如果只想把代码公开在 GitHub，第 2 步完成即可。

## 发布前检查

- 替换示例照片、邮箱、社交链接和 Vlog 链接
- 核对旅程日期、餐厅信息与价格
- 用 iPhone Safari 和桌面 Chrome 检查
- 补充网站图标与社交分享封面
- 确认所用照片、音乐和视频拥有发布权限
