# Jiliang Cattery

**Jiliang Cattery** 英国短毛猫舍官方网站，支持 Atlanta, GA 和 Toronto, Canada 两个猫舍地点。

技术栈：Next.js 16 + TypeScript + Tailwind CSS v4 + shadcn/ui

---

## 如何运行项目

### 环境要求

- **Node.js** 18 或以上版本（推荐 20+）
- **npm**（随 Node.js 一起安装）

### 第一步：安装依赖

```bash
npm install
```

### 第二步：配置环境变量

```bash
cp .env.example .env.local
```

打开 `.env.local` 文件，确认以下配置：

```
# 管理后台密码
ADMIN_PASSWORD=admin123

# JWT 密钥（用于登录验证，正式上线前请改成随机长字符串）
JWT_SECRET=dev-jwt-secret-do-not-use-in-production

# 邮件发送（目前代码中已注释，暂时不需要配置）
RESEND_API_KEY=re_xxxxxxxxxxxx
```

### 第三步：启动开发服务器

```bash
npm run dev
```

启动后访问：**http://localhost:3000**

### 第四步：构建生产版本（可选）

```bash
npm run build
npm start
```

---

## 网站页面一览

| 地址 | 页面说明 |
|---|---|
| `/` | 首页（英雄区、信任条、精选小猫、家长猫展示、领养流程、客户评价、FAQ） |
| `/available` | 可领养小猫列表（支持按状态、性别、颜色筛选） |
| `/our-cats` | 种猫介绍（按 Atlanta / Toronto 分 Tab 展示） |
| `/about` | 猫舍故事和理念 |
| `/process` | 领养流程、价格、运输、健康保障 |
| `/faq` | 常见问题（12 个 FAQ） |
| `/apply` | 领养申请表（6 步表单） |
| `/contact` | 联系我们（表单 + 两个地点信息） |
| `/gallery` | 照片画廊 |

---

## 管理后台

管理后台用于添加、编辑、删除小猫和种猫信息，以及上传照片。

### 后台地址

**http://localhost:3000/admin**

### 登录方式

- **无用户名**，只需输入密码
- **默认密码：`admin123`**
- 密码在 `.env.local` 文件中的 `ADMIN_PASSWORD` 配置

### 后台页面

| 地址 | 说明 |
|---|---|
| `/admin` | 仪表盘（显示小猫数量统计） |
| `/admin/kittens` | 小猫管理（列表、新增、编辑、删除） |
| `/admin/kittens/new` | 新增小猫 |
| `/admin/cats` | 种猫管理（列表、新增、编辑、删除） |
| `/admin/cats/new` | 新增种猫 |

### 数据存储

- 小猫数据存在 `data/kittens.json`
- 种猫数据存在 `data/cats.json`
- 上传的照片保存在 `public/images/cats/` 目录
- 首次运行时会自动从代码中的示例数据生成 JSON 文件

---

## 上线前需要替换的内容

- [ ] **猫咪照片** — 替换 `public/images/cats/placeholder.svg` 为真实照片
- [ ] **地址** — 更新页脚和联系页面中的占位地址
- [ ] **电话** — 替换 `(404) 555-0123` 和 `(416) 555-0456`
- [ ] **社交媒体链接** — 更新页脚中的 Instagram / Facebook / TikTok 链接
- [ ] **TICA 注册号** — 替换 `#00000` 为真实注册号
- [ ] **价格** — 确认 `lib/kittens.ts` 中的 USD 和 CAD 价格
- [ ] **管理后台密码** — 正式上线前修改 `ADMIN_PASSWORD` 为强密码
- [ ] **JWT 密钥** — 正式上线前修改 `JWT_SECRET` 为随机长字符串
- [ ] **域名** — 更新 sitemap 和 metadata 中的域名
- [ ] **邮件** — 取消 API 路由中的 Resend 邮件代码注释，并配置真实 API Key

---

## 部署到 Vercel

1. 将代码推送到 GitHub（已完成）
2. 在 [Vercel](https://vercel.com) 导入此仓库
3. 在 Vercel 项目设置中添加环境变量（参考 `.env.example`）
4. 配置自定义域名
5. 配置 Resend 域名验证
6. 取消 `app/api/apply/route.ts` 和 `app/api/contact/route.ts` 中的邮件发送代码注释

---

## 技术栈

- **框架：** Next.js 16（App Router, Turbopack）
- **语言：** TypeScript
- **样式：** Tailwind CSS v4, shadcn/ui
- **字体：** Playfair Display（标题）, Inter（正文）
- **表单：** react-hook-form + zod
- **图标：** Lucide React
- **认证：** JWT（jose 库）
- **数据：** JSON 文件存储
