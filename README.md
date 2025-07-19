# 乐正绫个人主页与聊天应用

这是一个基于 React 的应用程序，展示了虚拟歌手乐正绫的个人主页，并提供与乐正绫聊天的功能。

## 功能特色

- 响应式设计，兼容移动端和桌面端
- 使用 Swiper 实现图片轮播
- 交互元素带有悬停特效
- 展示角色详细信息
- 音乐样本试听
- 与乐正绫聊天功能（支持多种AI模型）

## 技术栈

### 前端
- React
- TypeScript
- Tailwind CSS
- Swiper（用于轮播功能）

### 后端
- Node.js
- Express
- OpenAI API
- DeepSeek API
- OpenRouter API

## 快速开始

1. 克隆本仓库
2. 安装前端依赖：
   ```
   pnpm install
   ```
3. 安装后端依赖：
   ```
   cd server
   pnpm install
   ```
4. 配置API密钥：
   - 复制`server/.env.example`为`server/.env`
   - 在`.env`文件中填入你的API密钥
5. 启动后端服务：
   ```
   cd server
   pnpm run dev
   ```
6. 启动前端开发服务器：
   ```
   pnpm dev
   ```

## 项目结构

### 前端
- `src/components/YuezhengLing.tsx` - 主页主要组件
- `src/components/YuezhengLingChat.tsx` - 聊天功能组件
- `src/components/Icons.tsx` - 页面使用的 SVG 图标
- `src/hooks/useSwiper.ts` - Swiper 相关自定义 Hook
- `src/types/swiper.d.ts` - Swiper 的类型声明

### 后端
- `server/index.js` - 后端服务入口文件
- `server/.env.example` - 环境变量示例文件
- `server/package.json` - 后端依赖配置

## 致谢

本项目为粉丝自制，参考了 Vsinger 官网的设计。
