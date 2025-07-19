import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {
  SwitchIcon,
  WeiboIcon,
  BilibiliIcon,
} from './Icons';

// 导入图片资源
import sing1 from '../assets/sing1.jpg';
import sing2 from '../assets/sing2.jpg';
import sing3 from '../assets/sing3.jpg';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';

/**
 * 乐正绫角色展示组件
 * 
 * 该组件展示了乐正绫角色的基本信息、图片轮播、社交媒体链接和歌曲样本等内容
 * 使用了响应式布局，适配移动端和桌面端不同屏幕大小
 */
const YuezhengLing: React.FC = () => {
  // 角色图片和歌曲数据
  const characterImages = [p1, p2, p3, p4]; // 角色图片数组
  const songImages = [sing1, sing2, sing3]; // 歌曲封面图片数组
  const songNames = ['丑马', '梦语', 'Scarlet Drop']; // 歌曲名称数组
  const songLinks = [
    'https://www.bilibili.com/festival/yzl2025?bvid=BV19AdaY4Erx&spm_id_from=333.337.search-card.all.click',
    'https://www.bilibili.com/video/BV1FadaYqEEo/?spm_id_from=333.337.search-card.all.click',
    'https://www.bilibili.com/video/BV1ks411U7G3/?spm_id_from=333.337.search-card.all.click'
  ]; // 歌曲B站链接数组

  return (
    <div>
      <div className="w-11/12 mx-auto md:w-5/6 flex flex-col md:flex-row justify-between space-y-10 md:space-y-0 md:space-x-10">
        {/* 左侧区域 - 角色图片轮播 */}
        <div className="md:w-2/5 overflow-hidden relative flex items-center justify-center">
          {/* Swiper 轮播组件 - 使用官方功能 */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="vsingerSwiper w-full rounded"
          >
            {/* 角色图片轮播项,图片位于左侧区域宽的中心*/}
            {characterImages.map((image, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center">
                <img
                  className="rounded w-full h-auto mx-auto object-contain"
                  src={image}
                  alt={`Yuezheng Ling ${index + 1}`}
                  style={{ maxHeight: '70vh' }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 右侧区域 - 角色信息展示 */}
        <div className="md:w-3/5 flex flex-col space-y-4 bg-no-repeat relative bg-contain" style={{ backgroundImage: 'url("/images/yzl-bg.png")' }}>
          {/* 角色名称标题 */}
          <div className="flex">
            <div className="text-2xl font-extrabold border-t-4 border-white w-max pt-3">乐正绫</div>
            <div className="md:hidden rounded-full w-10 h-10 flex justify-center items-end text-white">
              <SwitchIcon className="svg-icon fill-current icon-switch inline" style={{ width: '1em', height: '20px' }} />
            </div>
          </div>

          {/* 角色英文名称和代表色 */}
          <div className="text-xs font-extralight uppercase">YUEZHENG LING</div>
          <div className="text-sm" style={{ color: '#EE0000' }}> 代表色： #EE0000</div>

          {/* 社交媒体链接 */}
          <div className="flex flex-gap-3 absolute top-0 right-0 md:relative">
            {/* 微博链接 */}
            <div className="group rounded-full h-10 w-10 border flex items-center justify-center cursor-pointer hover:invert bg-black relative">
              <a href="https://weibo.com/u/5146669192" target="_blank" rel="noopener noreferrer">
                <WeiboIcon className="svg-icon fill-current icon-weibo inline" style={{ width: '1em', height: '20px' }} />
              </a>
              {/* 悬停显示二维码 */}
              <div className="absolute h-20 w-20 top-10 group-hover:invert hidden group-hover:block p-2 bg-white">
                <img src="https://res.vsinger.com/images/34d3c3c04e1c67ff91b37ade208a00b5.png" alt="Weibo QR" />
              </div>
            </div>
            {/* B站链接 */}
            <div className="group rounded-full h-10 w-10 border flex items-center justify-center cursor-pointer hover:invert bg-black relative">
              <a href="https://space.bilibili.com/406948651" target="_blank" rel="noopener noreferrer">
                <BilibiliIcon className="svg-icon fill-current icon-bilibili inline" style={{ width: '1em', height: '20px' }} />
              </a>
              {/* 悬停显示二维码 */}
              <div className="absolute h-20 w-20 top-10 group-hover:invert hidden group-hover:block p-2 bg-white">
                <img src="https://res.vsinger.com/images/8fd59f52ed3057c528701066e39bc910.png" alt="Bilibili QR" />
              </div>
            </div>
          </div>

          {/* 角色基本信息 */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div>年龄：16岁</div>
            <div>生日：4月12日</div>
            <div>身高：160cm</div>
            <div>音之精灵：释天</div>
            <div>乐器：吉他</div>
            <div>声源：祈Inory</div>
          </div>

          {/* 角色设定描述 */}
          <div className="text-lg py-3">人物设定</div>
          <div className="text-xs leading-6">
            头顶呆毛的乐正绫是一个活力十足的女高中生，个性直来直去、不拘小节，同时也是乐器制造商和音乐大企业——乐正集团的大小姐。她有着元气的声线和对高音的驾驭能力。
          </div>

      
          
        </div>
      </div>

      {/* 歌曲试听专区 */}
      <div className="w-11/12 mx-auto mt-16 mb-10">
        <h2 className="text-2xl font-bold mb-6 border-l-4 border-red-600 pl-4">歌曲试听</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {songNames.map((name, index) => (
            <a
              key={index}
              href={songLinks[index]}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors duration-300 flex flex-col"
            >
              <div className="relative pt-[56.25%]"> {/* 16:9 宽高比 */}
                <img
                  src={songImages[index]}
                  alt={name}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/400x225/111/fff?text=${encodeURIComponent(name)}`;
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">{name}</h3>
                <p className="text-gray-400 text-sm mt-1">点击播放 - B站视频</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YuezhengLing; 