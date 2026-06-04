import { Prompt, Category } from './types';

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
    price: 0,
    rating: 4.6,
    reviews: 23,
    sales: 156,
    author_id: 'user-1',
    author_name: '内容创作者小王',
    image_url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop',
    tags: ['SEO', '博客', '内容', '营销'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '2',
    title: '小红书爆款文案生成器',
    description: '生成吸引人的小红书笔记文案',
    content: `您是一位小红书文案专家，请帮我撰写一篇引人入胜的小红书笔记：

**主题：** [产品/体验/教程/分享]
**目标受众：** [描述目标读者]
**核心卖点：** [列出3-5个要点]

**要求：**
1. 标题要吸引人，使用emoji增加表现力
2. 正文分段落，每段1-2句话
3. 使用口语化表达，亲切自然
4. 加入真实使用体验和感受
5. 结尾引导互动
6. 标签5-10个

请开始撰写！`,
    category: '写作',
    price: 0,
    rating: 4.8,
    reviews: 45,
    sales: 234,
    author_id: 'user-1',
    author_name: '内容创作者小王',
    image_url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop',
    tags: ['小红书', '文案', '社交媒体', '营销'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'React组件生成器',
    description: '使用TypeScript创建生产级React组件',
    content: '您是一位资深React工程师。我需要您创建一个生产级React组件，包括完整的类型定义、错误处理和性能优化...',
    category: '编程',
    price: 0,
    rating: 4.9,
    reviews: 18,
    sales: 89,
    author_id: 'user-2',
    author_name: '前端开发老张',
    image_url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
    tags: ['React', 'TypeScript', '组件', '前端'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '4',
    title: 'Python数据分析专家',
    description: '专业的Python数据分析和可视化',
    content: `您是一位拥有10年经验的数据科学家。我需要您帮助分析以下数据：

**数据描述：** [描述您的数据]
**分析目标：** [明确您的目标]
**需要分析的问题：**
1. [问题1]
2. [问题2]
3. [问题3]

请提供：
1. 数据清洗和预处理的代码
2. 探索性分析的关键发现
3. 可视化图表（使用Matplotlib/Seaborn/Plotly）
4. 深入分析和洞察
5. 可操作的建议

使用pandas、numpy、scikit-learn等库。`,
    category: '编程',
    price: 0,
    rating: 4.8,
    reviews: 32,
    sales: 145,
    author_id: 'user-2',
    author_name: '前端开发老张',
    image_url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
    tags: ['Python', '数据分析', '可视化', '数据科学'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '5',
    title: '人像摄影提示词',
    description: '使用电影级灯光创建惊艳的人像图像',
    content: '专业人像摄影，电影级灯光，景深，85mm镜头，f/1.8...',
    category: '图像生成',
    price: 0,
    rating: 4.7,
    reviews: 28,
    sales: 167,
    author_id: 'user-3',
    author_name: 'AI绘画达人阿明',
    image_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
    tags: ['人像', 'Midjourney', '摄影', '艺术'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '6',
    title: '风景照片生成大师',
    description: '生成令人惊叹的自然风景照片',
    content: `请生成一张令人惊叹的风景照片，使用以下格式：

[场景描述] + [天气/时间] + [风格] + [技术规格]

示例：
阿尔卑斯山脉日出，金色阳光，晨雾，壮丽山峰，清澈湖水，国家地理摄影风格，8K，超高清，超详细，HDR

更多示例：
- 挪威峡湾，极光，星空，长时间曝光，摄影师Ansel Adams风格
- 日本京都竹林，细雨，清晨，禅意，电影感，复古胶片风格

请根据您想要的场景进行替换！`,
    category: '图像生成',
    price: 0,
    rating: 4.9,
    reviews: 67,
    sales: 345,
    author_id: 'user-3',
    author_name: 'AI绘画达人阿明',
    image_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
    tags: ['风景', 'Midjourney', '摄影', '艺术'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '7',
    title: '电子邮件营销活动',
    description: '为任何领域撰写高转化率的邮件序列',
    content: '您是电子邮件营销专家。我需要您撰写一个7天的邮件序列，包括欢迎邮件、价值邮件、成交邮件...',
    category: '营销',
    price: 0,
    rating: 4.6,
    reviews: 12,
    sales: 567,
    author_id: 'user-4',
    author_name: '营销策划小林',
    image_url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop',
    tags: ['邮件', '营销', '销售', '转化'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '8',
    title: '产品描述写作专家',
    description: '撰写有说服力的产品描述来促进销售',
    content: '您是文案专家。我需要您为产品撰写有说服力的描述，突出卖点、解决用户痛点...',
    category: '营销',
    price: 0,
    rating: 4.5,
    reviews: 15,
    sales: 67,
    author_id: 'user-6',
    author_name: '电商运营小红',
    image_url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    tags: ['文案', '产品', '电商', '销售'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '9',
    title: 'Midjourney风景大师',
    description: '生成令人惊叹的风景和自然图像',
    content: '史诗风景摄影，黄金小时，戏剧性天空，[地点场景]，24mm广角镜头，国家地理风格，获奖摄影，8K，超详细...',
    category: '图像生成',
    price: 0,
    rating: 4.9,
    reviews: 54,
    sales: 289,
    author_id: 'user-7',
    author_name: '数字艺术家阿杰',
    image_url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop',
    tags: ['Midjourney', '风景', '自然', '摄影'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '10',
    title: 'Python代码调试专家',
    description: '像资深工程师一样调试和优化Python代码',
    content: '您是一位拥有10年以上经验的资深Python工程师。分析以下Python代码，识别错误，建议优化，并提供干净、生产级的修复...',
    category: '编程',
    price: 0,
    rating: 4.7,
    reviews: 21,
    sales: 98,
    author_id: 'user-8',
    author_name: '全栈工程师大熊',
    image_url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
    tags: ['Python', '调试', '优化', '后端'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '11',
    title: '社交媒体内容创作者',
    description: '为Instagram、Twitter、LinkedIn打造病毒级帖子',
    content: '您是一位社交媒体策略师，已将账户从0增长到10万+粉丝。创建引人入胜的内容，提升互动率...',
    category: '营销',
    price: 0,
    rating: 4.8,
    reviews: 38,
    sales: 176,
    author_id: 'user-9',
    author_name: '自媒体运营阿华',
    image_url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop',
    tags: ['社交媒体', 'Instagram', 'LinkedIn', '病毒'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '12',
    title: '数学问题解决器和导师',
    description: '通过分步解释学习和解决数学问题',
    content: '您是一位拥有数学博士学位的经验丰富的数学导师。用简单、清晰的步骤解释如何解决这个问题...',
    category: '教育',
    price: 0,
    rating: 4.9,
    reviews: 29,
    sales: 345,
    author_id: 'user-10',
    author_name: '数学老师王博士',
    image_url: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400&h=300&fit=crop',
    tags: ['数学', '导师', '教育', '学习'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '13',
    title: '周报生成器',
    description: '专业的工作周报撰写工具',
    content: `您是一位经验丰富的企业高管，请帮我撰写一份专业的工作周报。

**本周工作：** [列出本周完成的工作]
**下周计划：** [列出下周计划]
**遇到的问题：** [如有问题请描述]

要求：
1. 结构清晰，使用要点列表
2. 用数据说话，量化成果
3. 语言专业简洁
4. 突出重点工作
5. 问题部分要有解决方案建议

请开始撰写。`,
    category: '生产力',
    price: 0,
    rating: 4.9,
    reviews: 89,
    sales: 456,
    author_id: 'user-12',
    author_name: '效率导师老周',
    image_url: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=300&fit=crop',
    tags: ['周报', '工作', '效率', '职场'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '14',
    title: '学习计划制定专家',
    description: '为任何学习目标制定个性化学习计划',
    content: `您是一位资深学习教练，请帮我制定学习计划。

**学习目标：** [描述您的目标]
**可用时间：** [每天/每周多少时间]
**目前基础：** [描述现有基础]
**截止日期：** [如有截止日期]

请提供：
1. 阶段性学习目标
2. 每周学习计划
3. 推荐学习资源
4. 检验学习成果的方法
5. 常见问题和解决建议`,
    category: '教育',
    price: 0,
    rating: 4.8,
    reviews: 45,
    sales: 3210,
    author_id: 'user-10',
    author_name: '数学老师王博士',
    image_url: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400&h=300&fit=crop',
    tags: ['学习', '计划', '教育', '自我提升'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '15',
    title: '创意故事生成器',
    description: '用任何体裁写引人入胜的虚构和创意故事',
    content: '您是一位获奖小说作家。用这些元素写一个引人入胜的故事：[体裁]，[角色]，[背景]，[情节转折]...',
    category: '创意',
    price: 0,
    rating: 4.7,
    reviews: 19,
    sales: 87,
    author_id: 'user-11',
    author_name: '小说作者小雪',
    image_url: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    tags: ['虚构', '故事', '创意', '写作'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '16',
    title: '商业计划书生成器',
    description: '为初创企业创建全面的商业计划',
    content: '您是一位商业顾问。我需要您为一家初创企业创建全面的商业计划，包括市场分析、竞争分析、财务预测...',
    category: '商业',
    price: 0,
    rating: 4.8,
    reviews: 11,
    sales: 43,
    author_id: 'user-5',
    author_name: '创业导师老李',
    image_url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    tags: ['商业', '初创', '计划', '战略'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

export const CATEGORIES: Category[] = [
  { id: 'writing', name: '写作', emoji: '✍️', prompt_count: 89 },
  { id: 'coding', name: '编程', emoji: '💻', prompt_count: 71 },
  { id: 'image', name: '图像生成', emoji: '🎨', prompt_count: 156 },
  { id: 'marketing', name: '营销', emoji: '📊', prompt_count: 65 },
  { id: 'business', name: '商业', emoji: '💼', prompt_count: 43 },
  { id: 'education', name: '教育', emoji: '📚', prompt_count: 63 },
  { id: 'creative', name: '创意', emoji: '✨', prompt_count: 58 },
  { id: 'productivity', name: '生产力', emoji: '⚡', prompt_count: 89 },
];

export async function getPrompts(category?: string, search?: string): Promise<Prompt[]> {
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

export async function getPromptById(id: string): Promise<Prompt | undefined> {
  return SAMPLE_PROMPTS.find(p => p.id === id);
}

export async function getCategories(): Promise<Category[]> {
  return CATEGORIES;
}

export async function getFeaturedPrompts(): Promise<Prompt[]> {
  return SAMPLE_PROMPTS.slice(0, 6);
}

export async function getTrendingPrompts(limit: number = 5): Promise<Prompt[]> {
  return [...SAMPLE_PROMPTS]
    .sort((a, b) => b.sales - a.sales)
    .slice(0, limit);
}
