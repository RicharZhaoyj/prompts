# Vercel 部署指南

## 仓库信息
- **GitHub**: https://github.com/RicharZhaoyj/prompts
- **子域名**: prompts.link.cn

---

## 步骤 1: 部署到 Vercel

### 1.1 访问 Vercel

1. 打开浏览器访问 [vercel.com](https://vercel.com)
2. 点击 **"Sign Up"** 或 **"Log In"**
3. 推荐使用 **GitHub 账号登录**（点击 "Continue with GitHub"）

### 1.2 导入项目

1. 登录后，点击 **"Add New..."** → **"Project"**
2. 在 "Import Git Repository" 页面，你会看到 GitHub 仓库列表
3. 找到 `RicharZhaoyj/prompts`（如果没有显示，点击 "Install GitHub App" 授权）
4. 点击 **"Import"** 按钮导入

### 1.3 配置项目

在配置页面，Vercel 会自动检测 Next.js 项目，保持默认配置：

```
Framework Preset: Next.js
Root Directory: ./
Build Command: npm run build (自动)
Output Directory: .next (自动)
Environment Variables: 暂时不填，后面再添加
```

直接点击 **"Deploy"** 按钮开始部署。

### 1.4 等待部署

部署过程约 1-3 分钟，你会看到：
- ✅ Building...
- ✅ Deploying...
- ✅ Success!

部署成功后，Vercel 会生成一个临时域名，如：`https://prompts.vercel.app`

**点击访问确认网站正常运行！**

---

## 步骤 2: 配置自定义域名

### 2.1 添加域名

1. 进入你的项目 Dashboard
2. 点击 **"Settings"**（项目设置）
3. 在左侧菜单选择 **"Domains"**
4. 在输入框中输入：`prompts.link.cn`
5. 点击 **"Add"** 添加域名

### 2.2 配置 DNS 记录

Vercel 会显示需要配置的 DNS 记录。

**打开 link.cn 域名管理后台**，添加以下记录：

#### 方案 A: A 记录（推荐）
```
记录类型: A
主机记录: prompts
记录值: 76.76.21.21
TTL: 3600
优先级: -
```

#### 方案 B: CNAME 记录（备选）
```
记录类型: CNAME
主机记录: prompts
记录值: cname.vercel-dns.com
TTL: 3600
优先级: -
```

### 2.3 验证域名

返回 Vercel Domains 页面，点击 **"Check DNS Records"** 按钮。

- 如果显示 ✅ "Valid Configuration"，说明配置成功
- 如果显示 ❌，等待 5-10 分钟后再试（DNS 传播需要时间）

---

## 步骤 3: 访问你的网站

完成以上步骤后，访问 **https://prompts.link.cn** 即可看到你的 AI 提示词商店！

---

## 常见问题

### Q1: 部署失败怎么办？
- 检查 GitHub 仓库代码是否有错误
- 查看 Vercel 部署日志中的错误信息
- 确保 package.json 中的依赖已正确配置

### Q2: 域名验证失败？
- 确认 DNS 记录已正确添加
- 等待 10-30 分钟让 DNS 生效
- 检查主机记录是否填写正确（prompts，而不是 prompts.link.cn）

### Q3: HTTPS 证书问题？
- Vercel 会自动配置 SSL 证书
- 如果证书申请失败，等待几分钟后点击 "Refresh" 按钮

### Q4: 如何更新代码？
- 只需推送到 GitHub 主分支，Vercel 会自动重新部署

---

## 后续优化建议

1. **添加环境变量**：在 Vercel Settings → Environment Variables 添加必要的配置
2. **配置构建变量**：如果需要数据库、支付等，添加相应的环境变量
3. **开启分析功能**：Vercel Analytics 可以帮助你分析网站流量
4. **配置 SEO**：添加 sitemap、robots.txt 等

---

## 项目页面预览

部署成功后，你应该能看到以下页面：

- **首页**: https://prompts.link.cn/ - 展示特色提示词
- **浏览页**: https://prompts.link.cn/prompts - 所有提示词列表
- **提交页**: https://prompts.link.cn/submit - 提交新提示词
- **文档页**: https://prompts.link.cn/docs - 使用文档

---

祝你部署成功！🎉

如果遇到任何问题，随时告诉我！
