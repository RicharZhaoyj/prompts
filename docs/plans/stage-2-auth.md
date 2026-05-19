# 阶段2：用户认证系统 - 实施计划

## 目标
添加用户注册/登录功能，创建用户仪表盘。

## 架构
使用 NextAuth.js（Auth.js）v5，支持多种认证方式（GitHub, Google, 邮箱等）。

## 技术栈
- NextAuth.js (Auth.js) v5
- Session management
- Protected routes

---

## 任务列表

### 任务1: 添加依赖
**文件修改**: package.json
- 添加 next-auth@beta

### 任务2: 配置Auth.js
**文件创建**:
- lib/auth.ts - Auth配置
- middleware.ts - 路由保护
- app/api/auth/[...nextauth]/route.ts - API路由

### 任务3: 更新页面
**文件修改/创建**:
- 更新 app/layout.tsx - 添加SessionProvider
- 创建 app/dashboard/page.tsx - 仪表盘
- 创建 app/login/page.tsx - 登录页
- 更新 app/components/navbar.tsx - 添加登录按钮和用户菜单

### 任务4: 创建环境变量
**文件创建**: .env.example（更新）
- 添加 NextAuth相关环境变量
