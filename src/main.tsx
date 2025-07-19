import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

/**
 * 应用程序入口文件
 * 
 * 使用 React 18 的 createRoot API 渲染应用
 * 在严格模式下渲染 App 组件，以帮助开发过程中发现潜在问题
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
