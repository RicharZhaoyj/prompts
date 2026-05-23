import { Prompt, Category } from './types';

// Sample prompts data
export const SAMPLE_PROMPTS: Prompt[] = [
  {
    id: '1',
    title: '终极博客写作专家',
    description: '生成在Google上排名的SEO优化博客文章',
    content: `您是一位专业的博客写作专家，专注于[主题/领域]。我需要您撰写一篇全面的、SEO优化的博客文章，要求：

1. **标题：** 创建一个引人入胜、富含关键词的标题来吸引读者
2. **Meta描述：** 撰写150-160个字符的meta描述
3. **引言：** 以强有力的钩子开头，解决[痛点/受众挑战]
4. **主要内容：** 涵盖以下要点：
   - 要点1：[关键信息]
   - 要点2：[支持细节]
   - 要点3：[可操作的建议]
5. **结论：** 总结并包含明确的行动号召

**风格要求：**
- 语气：[友好/专业/随意]
- 长度：[短/中/长 - 指定字数]
- 包含小标题以提高可读性
- 适当添加项目符号
- 保持对话流畅

**SEO要求：**
- 主要关键词：[关键词]
- 次要关键词：[相关关键词]
- 包含内部链接建议
- 尽可能优化特色摘要

让我们开始写作！`,
    category: '写作',
    price: 9.99,
    rating: 4.8,
    reviews: 234,
    sales: 1234,
    author_id: 'user-1',
    author_name: '陈Sarah',
    image_url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop',
    tags: ['SEO', '博客', '内容', '营销'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'React组件生成器',
    description: '使用TypeScript创建生产级React组件',
    content: '您是一位资深React工程师。我需要您创建一个生产级React组件...',
    category: '编程',
    price: 14.99,
    rating: 4.9,
    reviews: 156,
    sales: 856,
    author_id: 'user-2',
    author_name: '金Alex',
    image_url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
    tags: ['React', 'TypeScript', '组件', '前端'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '3',
    title: '人像摄影提示词',
    description: '使用电影级灯光创建惊艳的人像图像',
    content: '专业人像摄影，电影级灯光，景深，85mm镜头，f/1.8...',
    category: '图像生成',
    price: 7.99,
    rating: 4.7,
    reviews: 342,
    sales: 2341,
    author_id: 'user-3',
    author_name: '黄Emma',
    image_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
    tags: ['人像', 'Midjourney', '摄影', '艺术'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '4',
    title: '电子邮件营销活动',
    description: '为任何领域撰写高转化率的邮件序列',
    content: '您是电子邮件营销专家。我需要您撰写一个7天的邮件序列...',
    category: '营销',
    price: 12.99,
    rating: 4.6,
    reviews: 89,
    sales: 567,
    author_id: 'user-4',
    author_name: '布Michael',
    image_url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop',
    tags: ['邮件', '营销', '销售', '转化'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '5',
    title: '商业计划书生成器',
    description: '为初创企业创建全面的商业计划',
    content: '您是一位商业顾问。我需要您为一家初创企业创建全面的商业计划...',
    category: '商业',
    price: 19.99,
    rating: 4.8,
    reviews: 178,
    sales: 923,
    author_id: 'user-5',
    author_name: '李Lisa',
    image_url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    tags: ['商业', '初创', '计划', '战略'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '6',
    title: '产品描述写作专家',
    description: '撰写有说服力的产品描述来促进销售',
    content: '您是文案专家。我需要您为...撰写有说服力的产品描述',
    category: '营销',
    price: 8.99,
    rating: 4.5,
    reviews: 123,
    sales: 789,
    author_id: 'user-6',
    author_name: '李David',
    image_url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    tags: ['文案', '产品', '电商', '销售'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '7',
    title: 'Midjourney风景大师',
    description: '生成令人惊叹的风景和自然图像',
    content: '史诗风景摄影，黄金小时，戏剧性天空，[地点场景]，24mm广角镜头，国家地理风格，获奖摄影，8K，超详细...',
    category: '图像生成',
    price: 9.99,
    rating: 4.9,
    reviews: 521,
    sales: 3124,
    author_id: 'user-7',
    author_name: '罗Mia',
    image_url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop',
    tags: ['Midjourney', '风景', '自然', '摄影'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '8',
    title: 'Python代码调试专家',
    description: '像资深工程师一样调试和优化Python代码',
    content: '您是一位拥有10年以上经验的资深Python工程师。分析以下Python代码，识别错误，建议优化，并提供干净、生产级的修复...',
    category: '编程',
    price: 11.99,
    rating: 4.7,
    reviews: 287,
    sales: 1456,
    author_id: 'user-8',
    author_name: '威James',
    image_url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
    tags: ['Python', '调试', '优化', '后端'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '9',
    title: '社交媒体内容创作者',
    description: '为Instagram、Twitter、LinkedIn打造病毒级帖子',
    content: '您是一位社交媒体策略师，已将账户从0增长到10万+粉丝。为[平台]创建关于[主题]的引人入胜内容...',
    category: '营销',
    price: 10.99,
    rating: 4.8,
    reviews: 412,
    sales: 2234,
    author_id: 'user-9',
    author_name: '泰Jessica',
    image_url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop',
    tags: ['社交媒体', 'Instagram', 'LinkedIn', '病毒'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '10',
    title: '数学问题解决器和导师',
    description: '通过分步解释学习和解决数学问题',
    content: '您是一位拥有数学博士学位的经验丰富的数学导师。用简单、清晰的步骤解释如何解决这个问题...',
    category: '教育',
    price: 6.99,
    rating: 4.9,
    reviews: 623,
    sales: 4567,
    author_id: 'user-10',
    author_name: '朴博士',
    image_url: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400&h=300&fit=crop',
    tags: ['数学', '导师', '教育', '学习'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '11',
    title: '创意故事生成器',
    description: '用任何体裁写引人入胜的虚构和创意故事',
    content: '您是一位获奖小说作家。用这些元素写一个引人入胜的故事：[体裁]，[角色]，[背景]，[情节转折]...',
    category: '创意',
    price: 8.99,
    rating: 4.7,
    reviews: 345,
    sales: 1876,
    author_id: 'user-11',
    author_name: '斯Emma',
    image_url: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    tags: ['虚构', '故事', '创意', '写作'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '12',
    title: '日常生产力教练',
    description: '改变您的生产力并实现您的目标',
    content: '您是一位帮助数千人将产出翻倍的生产力教练。分析我当前的日常并提供个性化计划...',
    category: '生产力',
    price: 7.99,
    rating: 4.8,
    reviews: 267,
    sales: 1345,
    author_id: 'user-12',
    author_name: '安Chris',
    image_url: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=300&fit=crop',
    tags: ['生产力', '时间管理', '目标', '习惯'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

export const CATEGORIES: Category[] = [
  { id: 'writing', name: '写作', emoji: '✍️', prompt_count: 2340 },
  { id: 'coding', name: '编程', emoji: '💻', prompt_count: 1890 },
  { id: 'image', name: '图像生成', emoji: '🎨', prompt_count: 3200 },
  { id: 'marketing', name: '营销', emoji: '📊', prompt_count: 1560 },
  { id: 'business', name: '商业', emoji: '💼', prompt_count: 1120 },
  { id: 'education', name: '教育', emoji: '📚', prompt_count: 980 },
  { id: 'creative', name: '创意', emoji: '✨', prompt_count: 2780 },
  { id: 'productivity', name: '生产力', emoji: '⚡', prompt_count: 1450 },
];

// Get all prompts
export async function getPrompts(category?: string, search?: string): Promise<Prompt[]> {
  // For now, use sample data - later will connect to Supabase
  let prompts = [...SAMPLE_PROMPTS];
  
  if (category && category !== '全部') {
    prompts = prompts.filter(p => p.category === category);
  }
  
  if (search) {
    const searchLower = search.toLowerCase();
    prompts = prompts.filter(
      p => p.title.toLowerCase().includes(searchLower) ||
        p.description.toLowerCase().includes(searchLower)
    );
  }
  
  return prompts;
}

// Get prompt by id
export async function getPromptById(id: string): Promise<Prompt | undefined> {
  return SAMPLE_PROMPTS.find(p => p.id === id);
}

// Get all categories
export async function getCategories(): Promise<Category[]> {
  return CATEGORIES;
}

// Get featured prompts
export async function getFeaturedPrompts(): Promise<Prompt[]> {
  return SAMPLE_PROMPTS.slice(0, 6);
}

// Get trending prompts (by sales)
export async function getTrendingPrompts(limit: number = 5): Promise<Prompt[]> {
  return [...SAMPLE_PROMPTS]
    .sort((a, b) => b.sales - a.sales)
    .slice(0, limit);
}
