import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { OpenAI } from 'openai';

// 加载环境变量
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// 中间件
app.use(cors());
app.use(express.json());

// 路由
app.get('/', (req, res) => {
  res.send('乐正绫聊天API服务正在运行');
});

// 聊天API路由
app.post('/api/chat', async (req, res) => {
  try {
    const { messages, model } = req.body;
    
    if (!messages) {
      return res.status(400).json({ error: '缺少必要参数' });
    }
    
    let response;
    
    // DeepSeek API调用
    const deepseek = new OpenAI({
      baseURL: 'https://api.deepseek.com',
      apiKey: process.env.DEEPSEEK_API_KEY,
    });
    
    response = await deepseek.chat.completions.create({
      model: model || "deepseek-chat",
      messages,
      temperature: 0.7,
      max_tokens: 300
    });
    
    // 处理DeepSeek API的响应格式
    let aiMessage = response.choices[0].message.content;
    
    // 返回统一的响应格式
    res.json({
      message: aiMessage,
      provider: 'deepseek',
      model: model,
      debug: req.body.debug ? response : null // 调试模式下可以查看完整响应
    });
  } catch (error) {
    console.error('API调用错误:', error);
    res.status(500).json({ error: error.message || '服务器错误' });
  }
});

// 启动服务器
app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
});