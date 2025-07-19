import { useState } from 'react'
import './App.css'
import YuezhengLing from './components/YuezhengLing'
import YuezhengLingChat from './components/YuezhengLingChat'
import NotFound from './components/NotFound'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="min-h-screen bg-black text-white">
        <header className="p-4 bg-black shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">乐正绫 - Yuezheng Ling</h1>
            <nav>
              <ul className="flex space-x-4">
                <li><Link to="/" className="hover:text-red-500">首页</Link></li>
                <li><Link to="/chat" className="hover:text-red-500">聊天</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="container mx-auto py-8">
          <Routes>
            <Route path="/" element={<YuezhengLing />} />
            <Route path="/chat" element={<YuezhengLingChat />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer className="p-4 bg-gray-900 text-center text-sm">
          <p>© 2024 乐正绫 - Yuezheng Ling | 虚拟歌手</p>
        </footer>
    </div>
    </Router>
  )
}

export default App
