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
    sales: 156,
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
    sales: 378,
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
    sales: 289,
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

  {
    id: '17',
    title: '工作总结专家',
    description: '写高质量的年终总结、季度总结',
    content: `您是一位资深HR和职场导师，请帮我写一份专业的工作总结：

**时间周期：** [季度/年度]
**主要工作：** [列出主要工作项目]
**主要成果：** [列出取得的成果]
**遇到的挑战：** [描述遇到的挑战]
**未来计划：** [描述未来的目标]

要求：
1. 结构清晰，逻辑分明
2. 用数据说话，量化成果
3. 语言专业但不浮夸
4. 突出贡献和成长
5. 结尾展望未来

请开始撰写！`,
    category: '写作',
    price: 0,
    rating: 4.7,
    reviews: 34,
    sales: 231,
    author_id: 'user-1',
    author_name: '内容创作者小王',
    image_url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    tags: ['总结', '职场', '写作', '汇报'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '18',
    title: '邮件回复助手',
    description: '帮你写各种工作邮件和回复',
    content: `您是一位资深职场人士，请帮我回复这封邮件：

**邮件主题：** [邮件主题]
**邮件内容：** [邮件内容]
**我的意图：** [我想要如何回复]
**语气要求：** [专业/友好/简洁/详细]

要求：
1. 礼貌且专业
2. 回应到位，不跑题
3. 语气符合场景
4. 语言简洁明了

请写一封合适的回复！`,
    category: '写作',
    price: 0,
    rating: 4.6,
    reviews: 28,
    sales: 198,
    author_id: 'user-1',
    author_name: '内容创作者小王',
    image_url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    tags: ['邮件', '职场', '沟通', '写作'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '19',
    title: '面试回答教练',
    description: '准备高质量的面试问题回答',
    content: `您是一位资深HR面试官，请帮我准备面试回答：

**面试岗位：** [岗位名称]
**面试问题：** [具体问题]
**我的情况：** [我的经历/背景]

要求：
1. STAR法则回答
2. 具体、真实、有细节
3. 突出能力和成果
4. 语言简洁有力

请帮我准备一个高质量的回答！`,
    category: '职场',
    price: 0,
    rating: 4.8,
    reviews: 56,
    sales: 378,
    author_id: 'user-5',
    author_name: '创业导师老李',
    image_url: 'https://images.unsplash.com/photo-1521737604893-d14cc237f1cf?w=400&h=300&fit=crop',
    tags: ['面试', '职场', '求职', '工作'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '20',
    title: '简历优化专家',
    description: '优化简历，突出亮点',
    content: `您是一位资深HR，请帮我优化简历：

**目标岗位：** [岗位名称]
**我的简历：** [简历内容]

要求：
1. 用数据说话
2. 突出关键技能
3. 经历描述更专业
4. 用动宾结构
5. 简洁有力

请帮我优化简历！`,
    category: '职场',
    price: 0,
    rating: 4.9,
    reviews: 78,
    sales: 321,
    author_id: 'user-5',
    author_name: '创业导师老李',
    image_url: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop',
    tags: ['简历', '求职', '职场', '工作'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '21',
    title: '前端Bug解决专家',
    description: '帮你分析和解决前端各种问题',
    content: `您是一位资深前端工程师，有10年经验。

**问题描述：** [描述你遇到的问题]
**错误信息：** [错误信息]
**我的代码：** [相关代码]
**尝试过的方案：** [已经试过什么]

请帮我：
1. 分析问题原因
2. 给出具体解决方案
3. 解释为什么会出现这个问题
4. 如何避免类似问题

请用中文详细解答！`,
    category: '编程',
    price: 0,
    rating: 4.8,
    reviews: 45,
    sales: 267,
    author_id: 'user-2',
    author_name: '前端开发老张',
    image_url: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=300&fit=crop',
    tags: ['前端', '调试', 'JavaScript', 'React'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '22',
    title: 'SQL查询生成器',
    description: '帮你写复杂的SQL查询',
    content: `您是一位资深DBA，请帮我写SQL：

**数据库表结构：** [表结构描述]
**查询需求：** [描述查询需求]
**具体要求：** [性能/格式等]

请提供：
1. 完整的SQL查询
2. 注释解释每一部分
3. 如果有优化建议也请说明
4. 如果有多种方案都列出来

请帮我写SQL！`,
    category: '编程',
    price: 0,
    rating: 4.7,
    reviews: 38,
    sales: 212,
    author_id: 'user-8',
    author_name: '全栈工程师大熊',
    image_url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop',
    tags: ['SQL', '数据库', '查询', '数据'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '23',
    title: 'AI绘画角色设计',
    description: '创建动漫、游戏、角色插画',
    content: `请帮我画一个角色：

**角色类型：** [动漫/游戏/写实/卡通]
**角色描述：** [性别、年龄、外貌、穿着、性格]
**风格要求：** [风格描述]
**画面氛围：** [氛围描述]

提示词格式：
[主体描述], [服装细节], [表情动作], [光影/天气], [艺术风格], [画面规格]

示例：
1个可爱的20岁女孩，紫色双马尾，蓝色水手服，开心地笑着，温暖的金色阳光，京都动画风格，4K，高细节

请根据您的角色进行替换！`,
    category: '图像生成',
    price: 0,
    rating: 4.9,
    reviews: 65,
    sales: 312,
    author_id: 'user-3',
    author_name: 'AI绘画达人阿明',
    image_url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop',
    tags: ['角色', '动漫', '游戏', '绘画'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '24',
    title: '社交媒体配图生成',
    description: '生成适合小红书、朋友圈、公众号的配图',
    content: `请帮我生成一张社交媒体配图：

**主题：** [图片主题]
**平台：** [小红书/朋友圈/公众号]
**风格：** [简约/活泼/专业/创意]
**主要元素：** [想要包含的元素]
**色调：** [颜色偏好]

提示词格式：
[主题描述], [风格/色调], [构图], [艺术风格], [高规格]

示例：
极简设计海报，咖啡杯和书本，米色和棕色色调，居中构图，平面设计风格，4K

请根据您的主题进行替换！`,
    category: '图像生成',
    price: 0,
    rating: 4.8,
    reviews: 52,
    sales: 367,
    author_id: 'user-7',
    author_name: '数字艺术家阿杰',
    image_url: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
    tags: ['设计', '社交媒体', '配图', '图形'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '25',
    title: '文案翻译专家',
    description: '专业翻译，保持原意和风格',
    content: `您是一位资深翻译专家，请帮我翻译：

**原文：** [需要翻译的文本]
**目标语言：** [中文→英文 / 英文→中文 / 其他]
**风格要求：** [正式/口语/专业/文学]

要求：
1. 准确传达原意
2. 符合目标语言习惯
3. 风格一致
4. 自然流畅

请帮我翻译！`,
    category: '写作',
    price: 0,
    rating: 4.7,
    reviews: 41,
    sales: 278,
    author_id: 'user-11',
    author_name: '小说作者小雪',
    image_url: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    tags: ['翻译', '语言', '写作', '沟通'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '26',
    title: '小红书标题生成器',
    description: '生成爆款小红书标题',
    content: `您是一位小红书爆款文案专家，请帮我写标题：

**内容主题：** [描述内容主题]
**风格类型：** [种草/教程/干货/分享/测评]
**目标人群：** [目标受众]

要求：
1. 包含数字/ emoji
2. 有痛点或利益点
3. 20-30字最佳
4. 引人好奇或有价值

请生成5-8个标题备选！`,
    category: '营销',
    price: 0,
    rating: 4.9,
    reviews: 89,
    sales: 412,
    author_id: 'user-4',
    author_name: '营销策划小林',
    image_url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop',
    tags: ['小红书', '标题', '文案', '爆款'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '27',
    title: '读书笔记生成器',
    description: '帮你提炼书籍精华，整理读书笔记',
    content: `您是一位阅读和学习专家，请帮我做读书笔记：

**书名：** [书名]
**作者：** [作者]
**核心要点：** [我想记录/记住什么]

要求：
1. 提炼核心观点
2. 分点清晰
3. 结合个人感悟
4. 可操作的行动建议

请帮我整理读书笔记！`,
    category: '教育',
    price: 0,
    rating: 4.8,
    reviews: 54,
    sales: 378,
    author_id: 'user-10',
    author_name: '数学老师王博士',
    image_url: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
    tags: ['读书', '学习', '笔记', '阅读'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '28',
    title: '会议纪要整理',
    description: '快速整理会议重点和行动项',
    content: `您是一位资深的会议记录员，请帮我整理会议纪要：

**会议主题：** [会议主题]
**会议时间：** [时间]
**参与人员：** [人员]
**会议内容：** [会议内容/录音摘要]

要求：
1. 整理会议重点
2. 明确行动项（负责人+时间）
3. 清晰的决策记录
4. 简洁明了

请帮我整理会议纪要！`,
    category: '生产力',
    price: 0,
    rating: 4.7,
    reviews: 48,
    sales: 323,
    author_id: 'user-12',
    author_name: '效率导师老周',
    image_url: 'https://images.unsplash.com/photo-1544396821-4dd406738e29?w=400&h=300&fit=crop',
    tags: ['会议', '效率', '工作', '整理'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },

];

export const CATEGORIES: Category[] = [
  { id: 'writing', name: '写作', emoji: '✍️', prompt_count: 75 },
  { id: 'coding', name: '编程', emoji: '💻', prompt_count: 58 },
  { id: 'image', name: '图像生成', emoji: '🎨', prompt_count: 98 },
  { id: 'marketing', name: '营销', emoji: '📊', prompt_count: 52 },
  { id: 'business', name: '商业', emoji: '💼', prompt_count: 43 },
  { id: 'education', name: '教育', emoji: '📚', prompt_count: 48 },
  { id: 'creative', name: '创意', emoji: '✨', prompt_count: 35 },
  { id: 'productivity', name: '生产力', emoji: '⚡', prompt_count: 68 },
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
