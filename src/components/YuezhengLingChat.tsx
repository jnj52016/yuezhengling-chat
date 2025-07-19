import React, { useState } from 'react';




/**
 * 乐正绫聊天组件
 * 
 * 该组件提供与乐正绫角色对话的功能，使用DeepSeek API模拟角色回复
 */
const YuezhengLingChat: React.FC = () => {
  // 聊天消息记录
  const [messages, setMessages] = useState<Array<{role: string, content: string}>>([{
    role: "assistant", content: "你好！我是乐正绫，很高兴认识你~有什么想和我聊的吗？"
  }]);
  // 用户输入
  const [input, setInput] = useState("");
  // 加载状态
  const [isLoading, setIsLoading] = useState(false);
  // 错误消息
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  // 模型选择
  const [modelName, setModelName] = useState<string>("deepseek-chat");
  // 调试模式
  const [debugMode, setDebugMode] = useState<boolean>(false);
  // 调试信息
  const [debugInfo, setDebugInfo] = useState<string>("");

  // 发送消息处理函数
  const handleSend = async () => {
    if (!input.trim()) return;
    
    // 添加用户消息到聊天记录
    const userMessage = {role: "user", content: input};
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setErrorMessage(null);
    setDebugInfo("");
    
    try {
      // 系统提示
      const systemPrompt = "你是虚拟歌手乐正绫。你是一个活力十足的16岁女高中生，个性直来直去、不拘小节，同时也是乐器制造商和音乐大企业——乐正集团的大小姐。请以乐正绫的身份与用户对话，保持活泼、元气的语气。";
      
      // 准备消息
      const apiMessages = [
        { role: "system", content: systemPrompt },
        ...messages,
        userMessage
      ];

      // 通过后端API发送消息
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messages: apiMessages,
          model: modelName,
          temperature: 0.7,
          max_tokens: 300
        })
      });
      
      if (!response) {
        throw new Error('API响应为空');
      }
      
      // 记录调试信息
      if (debugMode) {
        const responseClone = response.clone();
        const responseText = await responseClone.text();
        setDebugInfo(`状态码: ${response.status}\n\n响应内容:\n${responseText}`);
      }

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`API错误: ${JSON.stringify(errorData)}`);
      }
      
      const data = await response.json();
      
      // 添加AI回复到聊天记录
      const aiMessage = {role: "assistant", content: data.message};
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMsg = error instanceof Error ? error.message : '未知错误';
      setErrorMessage(`API调用失败: ${errorMsg}`);
      setMessages(prev => [...prev, {role: "assistant", content: "啊，出了点小问题，能再说一次吗？"}]);
    } finally {
      setIsLoading(false);
    }
  };

  // 这些函数已被移除，因为我们现在使用后端API

  // 这些函数已被移除，因为我们现在使用后端API

  return (
    <div className="w-11/12 mx-auto mt-16 mb-10 bg-gray-900 rounded-lg p-4">
      <h2 className="text-2xl font-bold mb-6 border-l-4 border-red-600 pl-4">与乐正绫对话</h2>
      
      {/* 模型选择 */}
      <div className="bg-gray-800 rounded-lg p-4 mb-4">
        <div className="mb-3">
          <p className="text-sm mb-1">选择DeepSeek模型：</p>
          <select 
            value={modelName}
            onChange={(e) => setModelName(e.target.value)}
            className="w-full p-2 rounded-lg bg-gray-700 focus:outline-none"
          >
            <option value="deepseek-chat">DeepSeek Chat</option>
            <option value="deepseek-coder">DeepSeek Coder</option>
          </select>
        </div>
        
        {/* 调试模式切换 */}
        <div className="mt-3 flex items-center">
          <input
            type="checkbox"
            id="debugMode"
            checked={debugMode}
            onChange={(e) => setDebugMode(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="debugMode" className="text-xs text-gray-400">启用调试模式（显示API响应详情）</label>
        </div>
      </div>
      
      {/* 错误消息显示 */}
      {errorMessage && (
        <div className="bg-red-800 text-white p-3 rounded-lg mb-4 text-sm">
          {errorMessage}
          <button 
            className="ml-2 underline"
            onClick={() => setErrorMessage(null)}
          >
            关闭
          </button>
        </div>
      )}
      
      {/* 调试信息显示 */}
      {debugMode && debugInfo && (
        <div className="bg-gray-700 text-white p-3 rounded-lg mb-4 text-xs overflow-auto max-h-40">
          <p className="font-bold mb-1">调试信息：</p>
          <pre>{debugInfo}</pre>
        </div>
      )}
      
      {/* 聊天消息区域 */}
      <div className="bg-gray-800 rounded-lg p-4 h-80 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-3 ${msg.role === "user" ? "text-right" : ""}`}>
            <div className={`inline-block p-3 rounded-lg ${
              msg.role === "user" ? "bg-blue-600" : "bg-red-600"
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="text-left mb-3">
            <div className="inline-block p-3 rounded-lg bg-red-600">
              <span className="animate-pulse">乐正绫正在输入...</span>
            </div>
          </div>
        )}
      </div>
      
      {/* 输入区域 */}
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="和乐正绫聊天..."
          className="flex-1 p-3 rounded-l-lg bg-gray-700 focus:outline-none"
        />
        <button 
          onClick={handleSend}
          disabled={isLoading}
          className="bg-red-600 hover:bg-red-700 text-white px-4 rounded-r-lg"
        >
          发送
        </button>
      </div>
      
      {/* API信息显示 */}
      <div className="mt-4 text-xs text-gray-400">
        <div>
          当前模型: DeepSeek ({modelName})
        </div>
      </div>
    </div>
  );
};

export default YuezhengLingChat;