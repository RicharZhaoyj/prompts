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
  },
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
  {
    id: '29',
    title: '小红书爆款笔记生成器',
    description: '生成高互动率的小红书内容',
    content: `您是一位小红书头部博主，请帮我生成一篇爆款笔记：

**内容类型：** [种草/教程/好物分享/日常分享]
**主题：** [描述内容主题]
**核心亮点：** [列出3-5个吸引人的点]

要求：
1. 标题要有吸引力，包含emoji
2. 开头要抓人，3秒内吸引注意力
3. 正文结构清晰，适当分段
4. 加入真实个人体验和感受
5. 结尾要有互动引导
6. 添加5-10个相关标签

请开始创作！`,
    category: '营销',
    price: 0,
    rating: 4.9,
    reviews: 92,
    sales: 456,
    author_id: 'user-4',
    author_name: '营销策划小林',
    image_url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop',
    tags: ['小红书', '社交媒体', '内容创作', '爆款'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '30',
    title: '短视频脚本创作助手',
    description: '为抖音、快手等短视频平台创作吸引人的脚本',
    content: `您是一位抖音短视频创作专家，请帮我创作一个短视频脚本：

**视频类型：** [种草/知识科普/搞笑/情感/剧情]
**时长要求：** [15秒/30秒/60秒/3分钟]
**主题：** [视频主题]
**目标效果：** [想要达成的目标]

脚本结构：
1. 开场（0-3秒）：吸引注意力
2. 铺垫（3-10秒）：建立情境
3. 高潮（10-30秒）：核心内容
4. 结尾（最后5秒）：行动号召

要求：
- 台词简洁有力
- 有画面感和节奏感
- 适合配音或真人出镜
- 添加热门话题标签建议

请创作脚本！`,
    category: '创意',
    price: 0,
    rating: 4.8,
    reviews: 67,
    sales: 334,
    author_id: 'user-11',
    author_name: '小说作者小雪',
    image_url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop',
    tags: ['短视频', '抖音', '快手', '脚本创作'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '31',
    title: '数据分析报告撰写专家',
    description: '专业的数据分析报告撰写模板',
    content: `您是一位资深数据分析师，请帮我撰写数据分析报告：

**分析主题：** [描述分析主题]
**数据来源：** [描述数据来源]
**分析目标：** [明确分析要回答的问题]

请按以下结构撰写：

1. **执行摘要**（1-2段）
   - 主要发现
   - 关键结论
   - 建议行动

2. **背景与目标**
   - 分析背景
   - 分析目的

3. **数据概况**
   - 数据描述
   - 数据质量

4. **分析方法**
   - 使用的分析方法
   - 分析工具

5. **核心发现**
   - 发现1：[具体发现]
   - 发现2：[具体发现]
   - 发现3：[具体发现]

6. **数据可视化建议**
   - 推荐的图表类型
   - 展示建议

7. **结论与建议**
   - 主要结论
   - 可执行建议

请开始撰写报告！`,
    category: '编程',
    price: 0,
    rating: 4.9,
    reviews: 45,
    sales: 267,
    author_id: 'user-2',
    author_name: '前端开发老张',
    image_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    tags: ['数据分析', '报告', '商业智能', '可视化'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '32',
    title: '品牌故事文案创作',
    description: '打造有感染力的品牌故事',
    content: `您是一位资深品牌策划专家，请帮我创作品牌故事：

**品牌名称：** [品牌名]
**品牌定位：** [品牌定位]
**核心价值观：** [列出3-5个核心价值]
**创始故事：** [如有创始故事]

目标受众：[描述目标用户群体]

故事要求：
1. 情感共鸣：打动人心的情感元素
2. 真实性：真实可信的故事细节
3. 差异化：突出品牌独特性
4. 价值观传递：体现品牌理念

长度：[短篇500字/中篇1000字/长篇2000字]

请创作品牌故事！`,
    category: '写作',
    price: 0,
    rating: 4.7,
    reviews: 38,
    sales: 189,
    author_id: 'user-1',
    author_name: '内容创作者小王',
    image_url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop',
    tags: ['品牌', '文案', '营销', '故事'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '33',
    title: '微信公众账号运营专家',
    description: '专业的公众号运营策划方案',
    content: `您是一位资深公众号运营专家，请帮我制定公众号运营方案：

**公众号定位：** [描述公众号定位]
**目标用户：** [描述目标读者]
**运营目标：** [涨粉/变现/品牌传播等]

请提供：

1. **内容规划**
   - 选题方向（每周3-5个主题）
   - 内容形式（图文/条漫/视频）
   - 发布时间表

2. **标题模板库**
   - 提供10个爆款标题模板
   - 解释每个模板的适用场景

3. **用户增长策略**
   - 涨粉渠道
   - 裂变活动建议

4. **互动策略**
   - 留言互动技巧
   - 粉丝社群运营

5. **变现路径**（可选）
   - 付费内容
   - 知识付费
   - 广告合作

请制定详细方案！`,
    category: '营销',
    price: 0,
    rating: 4.8,
    reviews: 52,
    sales: 312,
    author_id: 'user-4',
    author_name: '营销策划小林',
    image_url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop',
    tags: ['公众号', '运营', '微信', '内容营销'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '34',
    title: '产品需求文档撰写',
    description: '专业的PRD文档模板和写作指南',
    content: `您是一位资深产品经理，请帮我撰写产品需求文档：

**产品名称：** [产品名]
**产品类型：** [App/网站/小程序/内部工具]
**目标用户：** [描述目标用户群体]
**核心功能：** [列出主要功能]

请按以下结构撰写PRD：

1. **文档信息**
   - 版本号
   - 更新日期
   - 产品负责人

2. **产品概述**
   - 产品背景
   - 产品目标
   - 成功指标

3. **用户分析**
   - 目标用户画像
   - 用户痛点
   - 用户旅程

4. **功能需求**
   - 功能列表
   - 功能详细描述
   - 优先级排序

5. **非功能需求**
   - 性能要求
   - 安全要求
   - 兼容性要求

6. **原型/设计稿**
   - 链接或描述

7. **测试计划**
   - 测试用例概述
   - 上线标准

请撰写完整的PRD文档！`,
    category: '商业',
    price: 0,
    rating: 4.9,
    reviews: 34,
    sales: 198,
    author_id: 'user-5',
    author_name: '创业导师老李',
    image_url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    tags: ['产品经理', 'PRD', '需求文档', '产品设计'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '35',
    title: 'AI绘图关键词优化器',
    description: '优化Midjourney、Stable Diffusion等AI绘图提示词',
    content: `您是一位AI艺术创作专家，请帮我优化AI绘图提示词：

**原始想法：** [描述你想要生成的画面]
**使用平台：** [Midjourney/Stable Diffusion/DALL-E]
**期望风格：** [写实/插画/摄影/3D等]

请帮我：

1. **优化主体描述**
   - 添加细节描写
   - 调整表达方式

2. **风格建议**
   - 推荐艺术风格
   - 添加风格参考

3. **光线与氛围**
   - 光线设置
   - 氛围营造

4. **技术参数**
   - 画质规格
   - 构图建议
   - 比例设置

5. **完整提示词**
   - 提供2-3个版本
   - 说明每个版本的特点

请优化我的提示词！`,
    category: '图像生成',
    price: 0,
    rating: 4.9,
    reviews: 78,
    sales: 423,
    author_id: 'user-3',
    author_name: 'AI绘画达人阿明',
    image_url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop',
    tags: ['AI绘图', 'Midjourney', 'Stable Diffusion', '提示词优化'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '36',
    title: '职场沟通话术专家',
    description: '处理各种职场沟通场景的话术模板',
    content: `您是一位资深职场沟通专家，请帮我准备职场沟通话术：

**场景类型：**
- [ ] 向上级汇报工作
- [ ] 请求加薪
- [ ] 团队会议发言
- [ ] 跨部门协作
- [ ] 处理客户投诉
- [ ] 拒绝不合理要求
- [ ] 其他：[描述场景]

**具体情境：**
[详细描述当前情况]

**沟通目标：**
[你希望达成的结果]

**对方可能的顾虑：**
[推测对方可能的担忧]

请提供：
1. 开场话术
2. 核心表达（2-3个版本）
3. 应对对方质疑的话术
4. 收尾表达
5. 注意事项

请帮我准备沟通话术！`,
    category: '职场',
    price: 0,
    rating: 4.8,
    reviews: 61,
    sales: 356,
    author_id: 'user-5',
    author_name: '创业导师老李',
    image_url: 'https://images.unsplash.com/photo-1521737604893-d14cc237f1cf?w=400&h=300&fit=crop',
    tags: ['职场', '沟通', '话术', '人际交往'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '37',
    title: '学习笔记整理专家',
    description: '高效整理学习笔记，知识点归纳',
    content: `您是一位学习方法和知识管理专家，请帮我整理学习笔记：

**学习主题：** [课程/书籍/视频主题]
**学习时长：** [总时长或总章节数]
**学习目标：** [想掌握的核心内容]

**原始笔记内容：**
[粘贴你的原始笔记/要点]

请帮我整理成：

1. **知识框架图**（文字版）
   - 核心主题
   - 一级知识点
   - 二级知识点

2. **重点精华**
   - 3-5个必须掌握的要点
   - 每个要点的详细解释

3. **记忆口诀/联想**
   - 帮助记忆的方法
   - 联想记忆点

4. **实践应用**
   - 如何应用这些知识
   - 实际案例

5. **复习计划**
   - 第1天复习什么
   - 第3天复习什么
   - 第7天复习什么

6. **自我检测**
   - 3-5个测试问题

请帮我整理笔记！`,
    category: '教育',
    price: 0,
    rating: 4.9,
    reviews: 76,
    sales: 445,
    author_id: 'user-10',
    author_name: '数学老师王博士',
    image_url: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
    tags: ['学习', '笔记', '知识管理', '自我提升'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '38',
    title: '电商产品详情页文案',
    description: '专业的产品详情页文案写作',
    content: `您是一位资深电商文案专家，请帮我撰写产品详情页文案：

**产品信息：**
- 产品名称：[名称]
- 产品类别：[类别]
- 价格：[价格]
- 核心卖点：[列出3-5个核心卖点]

**目标用户：**
[描述目标用户群体]

**竞品对比（可选）：**
[如有竞品对比信息]

请按以下结构撰写：

1. **吸引眼球的标题**
   - 主标题（卖点+产品名）
   - 副标题（补充说明）

2. **痛点-解决方案开头**
   - 描述用户痛点
   - 引出解决方案

3. **产品卖点详情**
   - 每个卖点的详细说明
   - 配图建议

4. **规格参数**
   - 清晰的产品规格
   - 使用说明

5. **用户评价精选**
   - 2-3个真实感评价

6. **行动号召**
   - 购买引导
   - 优惠信息

请撰写详情页文案！`,
    category: '营销',
    price: 0,
    rating: 4.8,
    reviews: 58,
    sales: 312,
    author_id: 'user-6',
    author_name: '电商运营小红',
    image_url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    tags: ['电商', '产品文案', '详情页', '销售'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '39',
    title: '技术博客文章创作',
    description: '撰写高质量的技术博客文章',
    content: `您是一位资深技术博主，请帮我撰写一篇技术博客：

**主题：** [文章主题]
**目标读者：** [初级/中级/高级开发者]
**技术栈：** [使用的技术]
**预计阅读时间：** [X分钟]

**核心内容要点：**
[列出想要覆盖的关键点]

请撰写：

1. **引人入胜的开头**
   - 以问题/故事/场景开头
   - 吸引读者继续阅读

2. **背景介绍**
   - 为什么要介绍这个主题
   - 解决什么问题

3. **核心内容**
   - 分步骤详细讲解
   - 代码示例（完整可运行）
   - 图表说明

4. **最佳实践**
   - 实际应用建议
   - 避坑指南

5. **总结**
   - 回顾要点
   - 下一步建议

6. **SEO优化建议**
   - 关键词建议
   - 标题优化

请撰写博客文章！`,
    category: '编程',
    price: 0,
    rating: 4.9,
    reviews: 67,
    sales: 378,
    author_id: 'user-8',
    author_name: '全栈工程师大熊',
    image_url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
    tags: ['技术博客', '编程', '教程', '知识分享'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '40',
    title: '年终述职报告撰写',
    description: '专业的年终述职报告模板和写作',
    content: `您是一位资深HR总监，请帮我撰写年终述职报告：

**基本信息：**
- 姓名：[姓名]
- 部门：[部门]
- 职位：[职位]
- 工作年限：[X年]

**时间范围：** [年度]

**本年度主要工作：**
[列出主要工作内容和项目]

**工作成果：**
[量化的工作成果]

**遇到的挑战：**
[遇到的困难和挑战]

**个人成长：**
[本年度的成长和收获]

请按以下结构撰写：

1. **工作概述**
   - 年度工作回顾
   - 工作完成情况

2. **核心成果**（重点！）
   - 用数据说话
   - 突出个人贡献
   - 项目案例展示

3. **能力提升**
   - 专业能力提升
   - 软技能提升

4. **不足与反思**
   - 诚实分析不足
   - 改进计划

5. **来年规划**
   - 工作目标
   - 发展计划

6. **需要的支持**
   - 资源需求
   - 培训需求

请撰写述职报告！`,
    category: '职场',
    price: 0,
    rating: 4.8,
    reviews: 89,
    sales: 534,
    author_id: 'user-5',
    author_name: '创业导师老李',
    image_url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    tags: ['述职报告', '年终总结', '职场', '汇报'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },

];

export const CATEGORIES: Category[] = [
  { id: 'writing', name: '写作', emoji: '✍️', prompt_count: 88 },
  { id: 'coding', name: '编程', emoji: '💻', prompt_count: 72 },
  { id: 'image', name: '图像生成', emoji: '🎨', prompt_count: 115 },
  { id: 'marketing', name: '营销', emoji: '📊', prompt_count: 78 },
  { id: 'business', name: '商业', emoji: '💼', prompt_count: 56 },
  { id: 'education', name: '教育', emoji: '📚', prompt_count: 68 },
  { id: 'creative', name: '创意', emoji: '✨', prompt_count: 52 },
  { id: 'productivity', name: '生产力', emoji: '⚡', prompt_count: 82 },
  { id: 'career', name: '职场', emoji: '💼', prompt_count: 95 },
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
