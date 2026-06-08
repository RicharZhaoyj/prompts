import { Prompt, Category } from './types';

export const SAMPLE_PROMPTS: Prompt[] = [
  {
    id: '1',
    title: 'SEO博客写作助手',
    description: '生成符合Google算法的SEO优化文章',
    content: `你是一位写作专家，请生成符合Google算法的SEO优化文章。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '写作',
    price: 0,
    rating: 4.7,
    reviews: 27,
    sales: 158,
    author_id: 'author_001',
    author_name: '张明远',
    image_url: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    tags: ["SEO", "\u535a\u5ba2", "Google"],
    created_at: '2025-07-04T23:21:11.686302',
    updated_at: '2026-05-20T23:21:11.686302',
  },
  {
    id: '2',
    title: '小红书爆款文案',
    description: '创作吸引眼球的小红书爆款笔记',
    content: `你是一位写作专家，请创作吸引眼球的小红书爆款笔记。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '写作',
    price: 9.9,
    rating: 4.3,
    reviews: 144,
    sales: 797,
    author_id: 'author_002',
    author_name: '李思琪',
    image_url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop',
    tags: ["\u5c0f\u7ea2\u4e66", "\u6587\u6848", "\u793e\u4ea4\u5a92\u4f53"],
    created_at: '2025-08-27T23:21:11.686302',
    updated_at: '2026-05-19T23:21:11.686302',
  },
  {
    id: '3',
    title: '知乎专业回答',
    description: '生成高质量的知乎回答',
    content: `你是一位写作专家，请生成高质量的知乎回答。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '写作',
    price: 99,
    rating: 4.3,
    reviews: 22,
    sales: 163,
    author_id: 'author_003',
    author_name: '王晓峰',
    image_url: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=400&h=300&fit=crop',
    tags: ["\u77e5\u4e4e", "\u95ee\u7b54", "\u4e13\u4e1a"],
    created_at: '2025-10-25T23:21:11.686302',
    updated_at: '2026-05-20T23:21:11.686302',
  },
  {
    id: '4',
    title: '产品文案大师',
    description: '撰写高转化率的产品描述',
    content: `你是一位写作专家，请撰写高转化率的产品描述。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '写作',
    price: 19.9,
    rating: 4.4,
    reviews: 4,
    sales: 44,
    author_id: 'author_004',
    author_name: '赵雅琳',
    image_url: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop',
    tags: ["\u7535\u5546", "\u4ea7\u54c1", "\u8425\u9500"],
    created_at: '2025-11-11T23:21:11.686302',
    updated_at: '2026-06-06T23:21:11.686302',
  },
  {
    id: '5',
    title: '新闻稿撰写模板',
    description: '专业的新闻稿写作模板',
    content: `你是一位写作专家，请专业的新闻稿写作模板。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '写作',
    price: 0,
    rating: 4.4,
    reviews: 28,
    sales: 155,
    author_id: 'author_005',
    author_name: '陈浩然',
    image_url: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    tags: ["\u65b0\u95fb", "PR", "\u5a92\u4f53"],
    created_at: '2025-12-07T23:21:11.686302',
    updated_at: '2026-05-13T23:21:11.686302',
  },
  {
    id: '6',
    title: '邮件营销文案',
    description: '高打开率的营销邮件生成器',
    content: `你是一位写作专家，请高打开率的营销邮件生成器。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '写作',
    price: 39.9,
    rating: 4.4,
    reviews: 12,
    sales: 118,
    author_id: 'author_006',
    author_name: '刘思远',
    image_url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop',
    tags: ["\u90ae\u4ef6", "\u8425\u9500", "EDM"],
    created_at: '2025-06-28T23:21:11.686302',
    updated_at: '2026-06-02T23:21:11.686302',
  },
  {
    id: '7',
    title: '抖音短视频脚本',
    description: '抖音/快手短视频脚本生成',
    content: `你是一位写作专家，请抖音/快手短视频脚本生成。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '写作',
    price: 29.9,
    rating: 4.2,
    reviews: 24,
    sales: 166,
    author_id: 'author_007',
    author_name: '黄子轩',
    image_url: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=400&h=300&fit=crop',
    tags: ["\u6296\u97f3", "\u5feb\u624b", "\u77ed\u89c6\u9891"],
    created_at: '2025-11-13T23:21:11.686302',
    updated_at: '2026-05-18T23:21:11.686302',
  },
  {
    id: '8',
    title: '求职简历优化',
    description: '让简历脱颖而出',
    content: `你是一位写作专家，请让简历脱颖而出。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '写作',
    price: 29.9,
    rating: 4.3,
    reviews: 133,
    sales: 783,
    author_id: 'author_008',
    author_name: '周佳宁',
    image_url: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop',
    tags: ["\u7b80\u5386", "\u6c42\u804c", "\u804c\u573a"],
    created_at: '2025-07-09T23:21:11.686302',
    updated_at: '2026-05-14T23:21:11.686302',
  },
  {
    id: '9',
    title: '公众号推文助手',
    description: '高质量公众号文章生成',
    content: `你是一位写作专家，请高质量公众号文章生成。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '写作',
    price: 39.9,
    rating: 4.3,
    reviews: 24,
    sales: 142,
    author_id: 'author_009',
    author_name: '吴文博',
    image_url: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    tags: ["\u516c\u4f17\u53f7", "\u5fae\u4fe1", "\u5185\u5bb9"],
    created_at: '2025-10-18T23:21:11.686302',
    updated_at: '2026-05-12T23:21:11.686302',
  },
  {
    id: '10',
    title: '品牌故事创作',
    description: '动人的品牌故事脚本',
    content: `你是一位写作专家，请动人的品牌故事脚本。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '写作',
    price: 0,
    rating: 3.9,
    reviews: 52,
    sales: 457,
    author_id: 'author_010',
    author_name: '徐梦洁',
    image_url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop',
    tags: ["\u54c1\u724c", "\u6545\u4e8b", "\u60c5\u6000"],
    created_at: '2025-08-07T23:21:11.686302',
    updated_at: '2026-06-06T23:21:11.686302',
  },
  {
    id: '11',
    title: '直播带货话术',
    description: '李佳琦风格的直播脚本',
    content: `你是一位写作专家，请李佳琦风格的直播脚本。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '写作',
    price: 9.9,
    rating: 4.0,
    reviews: 18,
    sales: 97,
    author_id: 'author_011',
    author_name: '孙雨晴',
    image_url: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=400&h=300&fit=crop',
    tags: ["\u76f4\u64ad", "\u5e26\u8d27", "\u7535\u5546"],
    created_at: '2025-06-11T23:21:11.686302',
    updated_at: '2026-05-14T23:21:11.686302',
  },
  {
    id: '12',
    title: '朋友圈文案生成',
    description: '吸睛朋友圈文案模板',
    content: `你是一位写作专家，请吸睛朋友圈文案模板。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '写作',
    price: 19.9,
    rating: 4.8,
    reviews: 16,
    sales: 105,
    author_id: 'author_012',
    author_name: '马晓东',
    image_url: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop',
    tags: ["\u670b\u53cb\u5708", "\u793e\u4ea4", "\u6587\u6848"],
    created_at: '2025-06-17T23:21:11.686302',
    updated_at: '2026-06-02T23:21:11.686302',
  },
  {
    id: '13',
    title: '自我介绍优化',
    description: '让人印象深刻的自我介绍',
    content: `你是一位写作专家，请让人印象深刻的自我介绍。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '写作',
    price: 9.9,
    rating: 4.7,
    reviews: 27,
    sales: 189,
    author_id: 'author_013',
    author_name: '朱若溪',
    image_url: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    tags: ["\u81ea\u6211\u4ecb\u7ecd", "\u793e\u4ea4", "\u804c\u573a"],
    created_at: '2025-09-10T23:21:11.686302',
    updated_at: '2026-05-27T23:21:11.686302',
  },
  {
    id: '14',
    title: '活动策划方案',
    description: '完整的营销活动策划',
    content: `你是一位写作专家，请完整的营销活动策划。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '写作',
    price: 9.9,
    rating: 4.3,
    reviews: 134,
    sales: 698,
    author_id: 'author_014',
    author_name: '胡宇航',
    image_url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop',
    tags: ["\u6d3b\u52a8", "\u7b56\u5212", "\u6267\u884c"],
    created_at: '2025-11-18T23:21:11.686302',
    updated_at: '2026-05-23T23:21:11.686302',
  },
  {
    id: '15',
    title: '工作总结模板',
    description: '专业的年终/季度总结',
    content: `你是一位写作专家，请专业的年终/季度总结。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '写作',
    price: 0,
    rating: 4.8,
    reviews: 63,
    sales: 605,
    author_id: 'author_015',
    author_name: '林诗琪',
    image_url: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=400&h=300&fit=crop',
    tags: ["\u603b\u7ed3", "\u804c\u573a", "\u6c47\u62a5"],
    created_at: '2025-09-13T23:21:11.686302',
    updated_at: '2026-05-23T23:21:11.686302',
  },
  {
    id: '16',
    title: 'React组件生成器',
    description: '快速生成React组件代码',
    content: `你是一位编程专家，请快速生成React组件代码。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '编程',
    price: 9.9,
    rating: 4.2,
    reviews: 23,
    sales: 189,
    author_id: 'author_001',
    author_name: '张明远',
    image_url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
    tags: ["React", "\u524d\u7aef", "TypeScript"],
    created_at: '2025-09-21T23:21:11.686302',
    updated_at: '2026-06-01T23:21:11.686302',
  },
  {
    id: '17',
    title: 'Python数据分析',
    description: '专业的数据分析脚本',
    content: `你是一位编程专家，请专业的数据分析脚本。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '编程',
    price: 99,
    rating: 4.4,
    reviews: 14,
    sales: 100,
    author_id: 'author_002',
    author_name: '李思琪',
    image_url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
    tags: ["Python", "\u6570\u636e", "\u5206\u6790"],
    created_at: '2025-09-15T23:21:11.686302',
    updated_at: '2026-05-17T23:21:11.686302',
  },
  {
    id: '18',
    title: 'SQL查询优化',
    description: '生成高效的SQL语句',
    content: `你是一位编程专家，请生成高效的SQL语句。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '编程',
    price: 0,
    rating: 3.9,
    reviews: 7,
    sales: 56,
    author_id: 'author_003',
    author_name: '王晓峰',
    image_url: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=300&fit=crop',
    tags: ["SQL", "\u6570\u636e\u5e93", "\u4f18\u5316"],
    created_at: '2025-10-26T23:21:11.686302',
    updated_at: '2026-05-18T23:21:11.686302',
  },
  {
    id: '19',
    title: 'Vue3组合式API',
    description: '使用Vue3 Composition API',
    content: `你是一位编程专家，请使用Vue3 Composition API。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '编程',
    price: 29.9,
    rating: 4.3,
    reviews: 24,
    sales: 124,
    author_id: 'author_004',
    author_name: '赵雅琳',
    image_url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
    tags: ["Vue", "\u524d\u7aef", "JavaScript"],
    created_at: '2025-08-11T23:21:11.686302',
    updated_at: '2026-05-19T23:21:11.686302',
  },
  {
    id: '20',
    title: 'Node.js API开发',
    description: 'RESTful API开发模板',
    content: `你是一位编程专家，请RESTful API开发模板。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '编程',
    price: 49.9,
    rating: 4.7,
    reviews: 16,
    sales: 134,
    author_id: 'author_005',
    author_name: '陈浩然',
    image_url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
    tags: ["Node", "API", "\u540e\u7aef"],
    created_at: '2025-10-10T23:21:11.686302',
    updated_at: '2026-06-06T23:21:11.686302',
  },
  {
    id: '21',
    title: 'Docker配置模板',
    description: '快速生成Docker配置',
    content: `你是一位编程专家，请快速生成Docker配置。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '编程',
    price: 49.9,
    rating: 4.0,
    reviews: 9,
    sales: 59,
    author_id: 'author_006',
    author_name: '刘思远',
    image_url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
    tags: ["Docker", "DevOps", "\u5bb9\u5668"],
    created_at: '2025-09-12T23:21:11.686302',
    updated_at: '2026-05-30T23:21:11.686302',
  },
  {
    id: '22',
    title: 'Git提交规范',
    description: '规范化的Git提交信息',
    content: `你是一位编程专家，请规范化的Git提交信息。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '编程',
    price: 49.9,
    rating: 3.9,
    reviews: 89,
    sales: 495,
    author_id: 'author_007',
    author_name: '黄子轩',
    image_url: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=300&fit=crop',
    tags: ["Git", "\u7248\u672c\u63a7\u5236", "\u89c4\u8303"],
    created_at: '2025-11-26T23:21:11.686302',
    updated_at: '2026-05-12T23:21:11.686302',
  },
  {
    id: '23',
    title: '单元测试生成',
    description: '自动生成测试用例',
    content: `你是一位编程专家，请自动生成测试用例。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '编程',
    price: 39.9,
    rating: 4.5,
    reviews: 10,
    sales: 93,
    author_id: 'author_008',
    author_name: '周佳宁',
    image_url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
    tags: ["\u6d4b\u8bd5", "Jest", "\u8d28\u91cf"],
    created_at: '2025-06-07T23:21:11.686302',
    updated_at: '2026-06-06T23:21:11.686302',
  },
  {
    id: '24',
    title: 'Next.js全栈模板',
    description: '完整的Next.js项目模板',
    content: `你是一位编程专家，请完整的Next.js项目模板。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '编程',
    price: 9.9,
    rating: 4.3,
    reviews: 58,
    sales: 553,
    author_id: 'author_009',
    author_name: '吴文博',
    image_url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
    tags: ["Next.js", "React", "\u5168\u6808"],
    created_at: '2025-08-25T23:21:11.686302',
    updated_at: '2026-05-09T23:21:11.686302',
  },
  {
    id: '25',
    title: 'TypeScript类型生成',
    description: '智能TypeScript类型定义',
    content: `你是一位编程专家，请智能TypeScript类型定义。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '编程',
    price: 0,
    rating: 4.3,
    reviews: 3,
    sales: 30,
    author_id: 'author_010',
    author_name: '徐梦洁',
    image_url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
    tags: ["TypeScript", "\u7c7b\u578b", "\u524d\u7aef"],
    created_at: '2025-12-07T23:21:11.686302',
    updated_at: '2026-06-06T23:21:11.687302',
  },
  {
    id: '26',
    title: 'GraphQL Schema',
    description: 'GraphQL API设计模板',
    content: `你是一位编程专家，请GraphQL API设计模板。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '编程',
    price: 9.9,
    rating: 4.6,
    reviews: 6,
    sales: 38,
    author_id: 'author_011',
    author_name: '孙雨晴',
    image_url: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=300&fit=crop',
    tags: ["GraphQL", "API", "\u540e\u7aef"],
    created_at: '2025-08-27T23:21:11.687302',
    updated_at: '2026-05-21T23:21:11.687302',
  },
  {
    id: '27',
    title: 'Python爬虫脚本',
    description: '网页数据采集模板',
    content: `你是一位编程专家，请网页数据采集模板。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '编程',
    price: 39.9,
    rating: 3.9,
    reviews: 17,
    sales: 93,
    author_id: 'author_012',
    author_name: '马晓东',
    image_url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
    tags: ["\u722c\u866b", "Python", "\u6570\u636e"],
    created_at: '2025-10-05T23:21:11.687302',
    updated_at: '2026-05-13T23:21:11.687302',
  },
  {
    id: '28',
    title: 'Redis缓存策略',
    description: 'Redis缓存最佳实践',
    content: `你是一位编程专家，请Redis缓存最佳实践。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '编程',
    price: 39.9,
    rating: 4.7,
    reviews: 85,
    sales: 749,
    author_id: 'author_013',
    author_name: '朱若溪',
    image_url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
    tags: ["Redis", "\u7f13\u5b58", "\u540e\u7aef"],
    created_at: '2025-12-07T23:21:11.687302',
    updated_at: '2026-05-25T23:21:11.687302',
  },
  {
    id: '29',
    title: 'AWS Lambda函数',
    description: '无服务器函数模板',
    content: `你是一位编程专家，请无服务器函数模板。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '编程',
    price: 39.9,
    rating: 4.2,
    reviews: 25,
    sales: 161,
    author_id: 'author_014',
    author_name: '胡宇航',
    image_url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
    tags: ["AWS", "Lambda", "\u4e91"],
    created_at: '2025-11-22T23:21:11.687302',
    updated_at: '2026-06-04T23:21:11.687302',
  },
  {
    id: '30',
    title: 'MongoDB聚合查询',
    description: '复杂的MongoDB查询模板',
    content: `你是一位编程专家，请复杂的MongoDB查询模板。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '编程',
    price: 39.9,
    rating: 4.6,
    reviews: 8,
    sales: 86,
    author_id: 'author_015',
    author_name: '林诗琪',
    image_url: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=300&fit=crop',
    tags: ["MongoDB", "\u6570\u636e\u5e93", "NoSQL"],
    created_at: '2025-07-16T23:21:11.687302',
    updated_at: '2026-06-02T23:21:11.687302',
  },
  {
    id: '31',
    title: 'GitHub Actions',
    description: 'CI/CD自动化流程',
    content: `你是一位编程专家，请CI/CD自动化流程。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '编程',
    price: 39.9,
    rating: 4.5,
    reviews: 35,
    sales: 182,
    author_id: 'author_001',
    author_name: '张明远',
    image_url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
    tags: ["CI/CD", "GitHub", "DevOps"],
    created_at: '2025-07-21T23:21:11.687302',
    updated_at: '2026-05-23T23:21:11.687302',
  },
  {
    id: '32',
    title: 'API接口文档',
    description: '标准的API文档模板',
    content: `你是一位编程专家，请标准的API文档模板。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '编程',
    price: 9.9,
    rating: 4.6,
    reviews: 21,
    sales: 171,
    author_id: 'author_002',
    author_name: '李思琪',
    image_url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
    tags: ["API", "\u6587\u6863", "Swagger"],
    created_at: '2025-12-08T23:21:11.687302',
    updated_at: '2026-06-01T23:21:11.687302',
  },
  {
    id: '33',
    title: '前端性能优化',
    description: 'Web性能优化提示词',
    content: `你是一位编程专家，请Web性能优化提示词。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '编程',
    price: 99,
    rating: 4.2,
    reviews: 64,
    sales: 323,
    author_id: 'author_003',
    author_name: '王晓峰',
    image_url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
    tags: ["\u6027\u80fd", "\u4f18\u5316", "\u524d\u7aef"],
    created_at: '2025-10-05T23:21:11.687302',
    updated_at: '2026-05-24T23:21:11.687302',
  },
  {
    id: '34',
    title: '代码审查清单',
    description: '全面的代码审查指南',
    content: `你是一位编程专家，请全面的代码审查指南。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '编程',
    price: 19.9,
    rating: 4.4,
    reviews: 105,
    sales: 606,
    author_id: 'author_004',
    author_name: '赵雅琳',
    image_url: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=300&fit=crop',
    tags: ["Code Review", "\u8d28\u91cf", "\u89c4\u8303"],
    created_at: '2025-09-03T23:21:11.687302',
    updated_at: '2026-05-12T23:21:11.687302',
  },
  {
    id: '35',
    title: '移动端适配',
    description: '响应式设计模板',
    content: `你是一位编程专家，请响应式设计模板。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '编程',
    price: 29.9,
    rating: 4.4,
    reviews: 51,
    sales: 261,
    author_id: 'author_005',
    author_name: '陈浩然',
    image_url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
    tags: ["\u79fb\u52a8\u7aef", "\u54cd\u5e94\u5f0f", "CSS"],
    created_at: '2025-08-02T23:21:11.687302',
    updated_at: '2026-05-30T23:21:11.687302',
  },
  {
    id: '36',
    title: 'Midjourney提示词',
    description: '生成惊艳的Midjourney图像',
    content: `你是一位图像生成专家，请生成惊艳的Midjourney图像。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '图像生成',
    price: 49.9,
    rating: 4.7,
    reviews: 17,
    sales: 171,
    author_id: 'author_006',
    author_name: '刘思远',
    image_url: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop',
    tags: ["Midjourney", "AI\u7ed8\u56fe", "\u521b\u610f"],
    created_at: '2025-09-17T23:21:11.687302',
    updated_at: '2026-05-12T23:21:11.687302',
  },
  {
    id: '37',
    title: 'Stable Diffusion提示词',
    description: '专业级SD提示词模板',
    content: `你是一位图像生成专家，请专业级SD提示词模板。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '图像生成',
    price: 49.9,
    rating: 4.4,
    reviews: 72,
    sales: 535,
    author_id: 'author_007',
    author_name: '黄子轩',
    image_url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
    tags: ["Stable Diffusion", "AI\u7ed8\u56fe", "\u5199\u5b9e"],
    created_at: '2025-06-24T23:21:11.687302',
    updated_at: '2026-05-16T23:21:11.687302',
  },
  {
    id: '38',
    title: 'Logo设计描述',
    description: 'AI生成Logo设计提示词',
    content: `你是一位图像生成专家，请AI生成Logo设计提示词。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '图像生成',
    price: 0,
    rating: 3.8,
    reviews: 22,
    sales: 124,
    author_id: 'author_008',
    author_name: '周佳宁',
    image_url: 'https://images.unsplash.com/photo-1634973357973-f1ee79d4bcf2?w=400&h=300&fit=crop',
    tags: ["Logo", "\u54c1\u724c", "\u8bbe\u8ba1"],
    created_at: '2025-07-13T23:21:11.687302',
    updated_at: '2026-05-28T23:21:11.687302',
  },
  {
    id: '39',
    title: '产品摄影提示词',
    description: '电商产品图生成提示词',
    content: `你是一位图像生成专家，请电商产品图生成提示词。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '图像生成',
    price: 39.9,
    rating: 4.0,
    reviews: 36,
    sales: 181,
    author_id: 'author_009',
    author_name: '吴文博',
    image_url: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=400&h=300&fit=crop',
    tags: ["\u7535\u5546", "\u4ea7\u54c1", "\u6444\u5f71"],
    created_at: '2025-11-25T23:21:11.687302',
    updated_at: '2026-05-24T23:21:11.687302',
  },
  {
    id: '40',
    title: '动漫风格生成',
    description: '日漫/国漫风格图像',
    content: `你是一位图像生成专家，请日漫/国漫风格图像。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '图像生成',
    price: 9.9,
    rating: 4.7,
    reviews: 21,
    sales: 176,
    author_id: 'author_010',
    author_name: '徐梦洁',
    image_url: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop',
    tags: ["\u52a8\u6f2b", "\u4e8c\u6b21\u5143", "\u63d2\u753b"],
    created_at: '2025-07-18T23:21:11.687302',
    updated_at: '2026-05-15T23:21:11.687302',
  },
  {
    id: '41',
    title: 'UI界面设计',
    description: 'App/网站UI界面描述',
    content: `你是一位图像生成专家，请App/网站UI界面描述。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '图像生成',
    price: 29.9,
    rating: 4.6,
    reviews: 29,
    sales: 181,
    author_id: 'author_011',
    author_name: '孙雨晴',
    image_url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
    tags: ["UI", "\u754c\u9762", "App"],
    created_at: '2025-11-27T23:21:11.687302',
    updated_at: '2026-05-14T23:21:11.687302',
  },
  {
    id: '42',
    title: '建筑效果图',
    description: '建筑可视化渲染描述',
    content: `你是一位图像生成专家，请建筑可视化渲染描述。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '图像生成',
    price: 49.9,
    rating: 3.9,
    reviews: 13,
    sales: 73,
    author_id: 'author_012',
    author_name: '马晓东',
    image_url: 'https://images.unsplash.com/photo-1634973357973-f1ee79d4bcf2?w=400&h=300&fit=crop',
    tags: ["\u5efa\u7b51", "\u6548\u679c", "3D"],
    created_at: '2025-06-09T23:21:11.687302',
    updated_at: '2026-06-05T23:21:11.687302',
  },
  {
    id: '43',
    title: '人像摄影提示词',
    description: '专业人像照片生成',
    content: `你是一位图像生成专家，请专业人像照片生成。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '图像生成',
    price: 19.9,
    rating: 4.3,
    reviews: 27,
    sales: 174,
    author_id: 'author_013',
    author_name: '朱若溪',
    image_url: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=400&h=300&fit=crop',
    tags: ["\u4eba\u50cf", "\u6444\u5f71", "\u5199\u771f"],
    created_at: '2025-11-03T23:21:11.687302',
    updated_at: '2026-05-16T23:21:11.687302',
  },
  {
    id: '44',
    title: '风景画生成',
    description: '唯美风景图提示词',
    content: `你是一位图像生成专家，请唯美风景图提示词。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '图像生成',
    price: 9.9,
    rating: 4.2,
    reviews: 19,
    sales: 122,
    author_id: 'author_014',
    author_name: '胡宇航',
    image_url: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop',
    tags: ["\u98ce\u666f", "\u81ea\u7136", "\u5c71\u6c34"],
    created_at: '2025-10-29T23:21:11.687302',
    updated_at: '2026-06-03T23:21:11.687302',
  },
  {
    id: '45',
    title: '商业插画模板',
    description: '商业插画风格描述',
    content: `你是一位图像生成专家，请商业插画风格描述。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '图像生成',
    price: 0,
    rating: 4.4,
    reviews: 108,
    sales: 567,
    author_id: 'author_015',
    author_name: '林诗琪',
    image_url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
    tags: ["\u63d2\u753b", "\u5546\u4e1a", "\u77e2\u91cf"],
    created_at: '2025-11-07T23:21:11.687302',
    updated_at: '2026-05-16T23:21:11.687302',
  },
  {
    id: '46',
    title: '海报设计描述',
    description: '营销海报生成提示词',
    content: `你是一位图像生成专家，请营销海报生成提示词。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '图像生成',
    price: 0,
    rating: 4.4,
    reviews: 19,
    sales: 179,
    author_id: 'author_001',
    author_name: '张明远',
    image_url: 'https://images.unsplash.com/photo-1634973357973-f1ee79d4bcf2?w=400&h=300&fit=crop',
    tags: ["\u6d77\u62a5", "\u8425\u9500", "\u8bbe\u8ba1"],
    created_at: '2025-10-29T23:21:11.687302',
    updated_at: '2026-05-24T23:21:11.687302',
  },
  {
    id: '47',
    title: '游戏角色设计',
    description: '游戏角色原画描述',
    content: `你是一位图像生成专家，请游戏角色原画描述。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '图像生成',
    price: 29.9,
    rating: 4.5,
    reviews: 26,
    sales: 196,
    author_id: 'author_002',
    author_name: '李思琪',
    image_url: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=400&h=300&fit=crop',
    tags: ["\u6e38\u620f", "\u89d2\u8272", "\u539f\u753b"],
    created_at: '2025-10-11T23:21:11.687302',
    updated_at: '2026-05-27T23:21:11.687302',
  },
  {
    id: '48',
    title: '图标设计提示词',
    description: 'App图标生成模板',
    content: `你是一位图像生成专家，请App图标生成模板。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '图像生成',
    price: 0,
    rating: 4.3,
    reviews: 2,
    sales: 15,
    author_id: 'author_003',
    author_name: '王晓峰',
    image_url: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop',
    tags: ["\u56fe\u6807", "App", "UI"],
    created_at: '2025-10-21T23:21:11.687302',
    updated_at: '2026-05-25T23:21:11.687302',
  },
  {
    id: '49',
    title: '产品包装设计',
    description: '产品包装渲染描述',
    content: `你是一位图像生成专家，请产品包装渲染描述。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '图像生成',
    price: 0,
    rating: 4.6,
    reviews: 99,
    sales: 617,
    author_id: 'author_004',
    author_name: '赵雅琳',
    image_url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
    tags: ["\u5305\u88c5", "\u4ea7\u54c1", "\u6e32\u67d3"],
    created_at: '2025-11-29T23:21:11.687302',
    updated_at: '2026-05-09T23:21:11.687302',
  },
  {
    id: '50',
    title: '室内设计效果图',
    description: '室内装修效果图生成',
    content: `你是一位图像生成专家，请室内装修效果图生成。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '图像生成',
    price: 9.9,
    rating: 4.0,
    reviews: 14,
    sales: 122,
    author_id: 'author_005',
    author_name: '陈浩然',
    image_url: 'https://images.unsplash.com/photo-1634973357973-f1ee79d4bcf2?w=400&h=300&fit=crop',
    tags: ["\u5ba4\u5185", "\u88c5\u4fee", "\u8bbe\u8ba1"],
    created_at: '2025-11-20T23:21:11.687302',
    updated_at: '2026-05-09T23:21:11.687302',
  },
  {
    id: '51',
    title: '服装设计图',
    description: '服装设计效果图',
    content: `你是一位图像生成专家，请服装设计效果图。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '图像生成',
    price: 99,
    rating: 3.9,
    reviews: 7,
    sales: 66,
    author_id: 'author_006',
    author_name: '刘思远',
    image_url: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=400&h=300&fit=crop',
    tags: ["\u670d\u88c5", "\u65f6\u5c1a", "\u8bbe\u8ba1"],
    created_at: '2025-06-30T23:21:11.687302',
    updated_at: '2026-06-06T23:21:11.687302',
  },
  {
    id: '52',
    title: '宠物图像生成',
    description: '可爱宠物照片描述',
    content: `你是一位图像生成专家，请可爱宠物照片描述。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '图像生成',
    price: 29.9,
    rating: 4.0,
    reviews: 6,
    sales: 35,
    author_id: 'author_007',
    author_name: '黄子轩',
    image_url: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop',
    tags: ["\u5ba0\u7269", "\u52a8\u7269", "\u53ef\u7231"],
    created_at: '2025-08-07T23:21:11.687302',
    updated_at: '2026-05-18T23:21:11.687302',
  },
  {
    id: '53',
    title: '美食摄影描述',
    description: '美食照片生成提示词',
    content: `你是一位图像生成专家，请美食照片生成提示词。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '图像生成',
    price: 29.9,
    rating: 4.0,
    reviews: 2,
    sales: 14,
    author_id: 'author_008',
    author_name: '周佳宁',
    image_url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
    tags: ["\u7f8e\u98df", "\u6444\u5f71", "\u9910\u996e"],
    created_at: '2025-06-19T23:21:11.687302',
    updated_at: '2026-05-31T23:21:11.687302',
  },
  {
    id: '54',
    title: '汽车设计渲染',
    description: '汽车外观设计描述',
    content: `你是一位图像生成专家，请汽车外观设计描述。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '图像生成',
    price: 39.9,
    rating: 4.6,
    reviews: 6,
    sales: 33,
    author_id: 'author_009',
    author_name: '吴文博',
    image_url: 'https://images.unsplash.com/photo-1634973357973-f1ee79d4bcf2?w=400&h=300&fit=crop',
    tags: ["\u6c7d\u8f66", "\u8bbe\u8ba1", "\u6e32\u67d3"],
    created_at: '2025-12-08T23:21:11.687302',
    updated_at: '2026-05-12T23:21:11.687302',
  },
  {
    id: '55',
    title: 'NFT艺术生成',
    description: '数字艺术品生成提示词',
    content: `你是一位图像生成专家，请数字艺术品生成提示词。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '图像生成',
    price: 39.9,
    rating: 4.4,
    reviews: 4,
    sales: 37,
    author_id: 'author_010',
    author_name: '徐梦洁',
    image_url: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=400&h=300&fit=crop',
    tags: ["NFT", "\u6570\u5b57\u827a\u672f", "\u533a\u5757\u94fe"],
    created_at: '2025-07-18T23:21:11.687302',
    updated_at: '2026-05-25T23:21:11.687302',
  },
  {
    id: '56',
    title: '社交媒体策略',
    description: '全平台社交媒体运营方案',
    content: `你是一位营销专家，请全平台社交媒体运营方案。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '营销',
    price: 29.9,
    rating: 4.7,
    reviews: 8,
    sales: 70,
    author_id: 'author_011',
    author_name: '孙雨晴',
    image_url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    tags: ["\u793e\u4ea4\u5a92\u4f53", "\u8fd0\u8425", "\u7b56\u7565"],
    created_at: '2025-09-17T23:21:11.687302',
    updated_at: '2026-05-22T23:21:11.687302',
  },
  {
    id: '57',
    title: '内容营销计划',
    description: '年度内容营销规划',
    content: `你是一位营销专家，请年度内容营销规划。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '营销',
    price: 9.9,
    rating: 4.6,
    reviews: 93,
    sales: 501,
    author_id: 'author_012',
    author_name: '马晓东',
    image_url: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=300&fit=crop',
    tags: ["\u5185\u5bb9\u8425\u9500", "SEO", "\u6d41\u91cf"],
    created_at: '2025-10-19T23:21:11.687302',
    updated_at: '2026-05-10T23:21:11.687302',
  },
  {
    id: '58',
    title: 'Google广告文案',
    description: 'Google Ads广告文案',
    content: `你是一位营销专家，请Google Ads广告文案。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '营销',
    price: 99,
    rating: 4.5,
    reviews: 100,
    sales: 636,
    author_id: 'author_013',
    author_name: '朱若溪',
    image_url: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=400&h=300&fit=crop',
    tags: ["Google Ads", "PPC", "\u5e7f\u544a"],
    created_at: '2025-07-09T23:21:11.687302',
    updated_at: '2026-05-09T23:21:11.687302',
  },
  {
    id: '59',
    title: 'Facebook广告模板',
    description: 'Facebook广告文案生成',
    content: `你是一位营销专家，请Facebook广告文案生成。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '营销',
    price: 9.9,
    rating: 4.2,
    reviews: 111,
    sales: 581,
    author_id: 'author_014',
    author_name: '胡宇航',
    image_url: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&h=300&fit=crop',
    tags: ["Facebook", "\u5e7f\u544a", "\u793e\u4ea4"],
    created_at: '2025-06-14T23:21:11.687302',
    updated_at: '2026-05-08T23:21:11.687302',
  },
  {
    id: '60',
    title: '品牌故事撰写',
    description: '品牌故事脚本创作',
    content: `你是一位营销专家，请品牌故事脚本创作。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '营销',
    price: 99,
    rating: 3.9,
    reviews: 18,
    sales: 140,
    author_id: 'author_015',
    author_name: '林诗琪',
    image_url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    tags: ["\u54c1\u724c", "\u6545\u4e8b", "\u60c5\u6000"],
    created_at: '2025-07-19T23:21:11.687302',
    updated_at: '2026-05-09T23:21:11.687302',
  },
  {
    id: '61',
    title: '活动策划方案',
    description: '完整的营销活动策划',
    content: `你是一位营销专家，请完整的营销活动策划。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '营销',
    price: 49.9,
    rating: 4.6,
    reviews: 10,
    sales: 51,
    author_id: 'author_001',
    author_name: '张明远',
    image_url: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=300&fit=crop',
    tags: ["\u6d3b\u52a8", "\u7b56\u5212", "\u6267\u884c"],
    created_at: '2025-09-02T23:21:11.687302',
    updated_at: '2026-06-02T23:21:11.687302',
  },
  {
    id: '62',
    title: '用户增长策略',
    description: 'AARRR用户增长模型',
    content: `你是一位营销专家，请AARRR用户增长模型。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '营销',
    price: 39.9,
    rating: 4.3,
    reviews: 31,
    sales: 183,
    author_id: 'author_002',
    author_name: '李思琪',
    image_url: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=400&h=300&fit=crop',
    tags: ["\u589e\u957f", "\u8fd0\u8425", "AARRR"],
    created_at: '2025-11-13T23:21:11.687302',
    updated_at: '2026-05-30T23:21:11.687302',
  },
  {
    id: '63',
    title: '邮件营销序列',
    description: '自动化邮件营销序列',
    content: `你是一位营销专家，请自动化邮件营销序列。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '营销',
    price: 19.9,
    rating: 4.1,
    reviews: 20,
    sales: 186,
    author_id: 'author_003',
    author_name: '王晓峰',
    image_url: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&h=300&fit=crop',
    tags: ["\u90ae\u4ef6", "\u81ea\u52a8\u5316", "\u8425\u9500"],
    created_at: '2025-08-05T23:21:11.687302',
    updated_at: '2026-05-27T23:21:11.687302',
  },
  {
    id: '64',
    title: '短视频营销方案',
    description: '抖音/快手营销策略',
    content: `你是一位营销专家，请抖音/快手营销策略。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '营销',
    price: 39.9,
    rating: 4.3,
    reviews: 26,
    sales: 159,
    author_id: 'author_004',
    author_name: '赵雅琳',
    image_url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    tags: ["\u77ed\u89c6\u9891", "\u6296\u97f3", "\u8425\u9500"],
    created_at: '2025-06-24T23:21:11.687302',
    updated_at: '2026-05-24T23:21:11.687302',
  },
  {
    id: '65',
    title: 'KOL合作方案',
    description: '网红合作执行方案',
    content: `你是一位营销专家，请网红合作执行方案。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '营销',
    price: 0,
    rating: 4.9,
    reviews: 382,
    sales: 2361,
    author_id: 'author_005',
    author_name: '陈浩然',
    image_url: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=300&fit=crop',
    tags: ["KOL", "\u7f51\u7ea2", "\u5408\u4f5c"],
    created_at: '2025-08-31T23:21:11.687302',
    updated_at: '2026-05-18T23:21:11.687302',
  },
  {
    id: '66',
    title: 'SEO优化方案',
    description: '网站SEO全面优化',
    content: `你是一位营销专家，请网站SEO全面优化。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '营销',
    price: 99,
    rating: 4.7,
    reviews: 102,
    sales: 734,
    author_id: 'author_006',
    author_name: '刘思远',
    image_url: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=400&h=300&fit=crop',
    tags: ["SEO", "\u641c\u7d22", "\u6392\u540d"],
    created_at: '2025-10-15T23:21:11.687302',
    updated_at: '2026-06-05T23:21:11.687302',
  },
  {
    id: '67',
    title: '用户调研问卷',
    description: '产品用户调研模板',
    content: `你是一位营销专家，请产品用户调研模板。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '营销',
    price: 99,
    rating: 4.4,
    reviews: 44,
    sales: 329,
    author_id: 'author_007',
    author_name: '黄子轩',
    image_url: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&h=300&fit=crop',
    tags: ["\u8c03\u7814", "\u95ee\u5377", "\u7528\u6237"],
    created_at: '2025-08-24T23:21:11.687302',
    updated_at: '2026-05-19T23:21:11.687302',
  },
  {
    id: '68',
    title: '竞品分析报告',
    description: '竞品分析模板',
    content: `你是一位营销专家，请竞品分析模板。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '营销',
    price: 39.9,
    rating: 4.6,
    reviews: 28,
    sales: 169,
    author_id: 'author_008',
    author_name: '周佳宁',
    image_url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    tags: ["\u7ade\u54c1", "\u5206\u6790", "\u5e02\u573a"],
    created_at: '2025-11-05T23:21:11.687302',
    updated_at: '2026-05-11T23:21:11.687302',
  },
  {
    id: '69',
    title: 'PR危机公关',
    description: '危机公关处理方案',
    content: `你是一位营销专家，请危机公关处理方案。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '营销',
    price: 39.9,
    rating: 3.8,
    reviews: 11,
    sales: 80,
    author_id: 'author_009',
    author_name: '吴文博',
    image_url: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=300&fit=crop',
    tags: ["\u516c\u5173", "\u5371\u673a", "\u5904\u7406"],
    created_at: '2025-08-15T23:21:11.687302',
    updated_at: '2026-05-11T23:21:11.687302',
  },
  {
    id: '70',
    title: '会员体系设计',
    description: '用户会员体系方案',
    content: `你是一位营销专家，请用户会员体系方案。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '营销',
    price: 9.9,
    rating: 4.5,
    reviews: 20,
    sales: 135,
    author_id: 'author_010',
    author_name: '徐梦洁',
    image_url: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=400&h=300&fit=crop',
    tags: ["\u4f1a\u5458", "\u8fd0\u8425", "\u4f53\u7cfb"],
    created_at: '2025-11-11T23:21:11.687302',
    updated_at: '2026-05-17T23:21:11.687302',
  },
  {
    id: '71',
    title: '商业计划书模板',
    description: '专业商业计划书',
    content: `你是一位商业专家，请专业商业计划书。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '商业',
    price: 99,
    rating: 4.6,
    reviews: 7,
    sales: 78,
    author_id: 'author_011',
    author_name: '孙雨晴',
    image_url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    tags: ["BP", "\u878d\u8d44", "\u521b\u4e1a"],
    created_at: '2025-10-23T23:21:11.687302',
    updated_at: '2026-05-31T23:21:11.687302',
  },
  {
    id: '72',
    title: '市场分析报告',
    description: '竞品和市场分析模板',
    content: `你是一位商业专家，请竞品和市场分析模板。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '商业',
    price: 49.9,
    rating: 4.5,
    reviews: 82,
    sales: 625,
    author_id: 'author_012',
    author_name: '马晓东',
    image_url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=300&fit=crop',
    tags: ["\u5e02\u573a", "\u7ade\u54c1", "\u5206\u6790"],
    created_at: '2025-06-29T23:21:11.687302',
    updated_at: '2026-05-25T23:21:11.687302',
  },
  {
    id: '73',
    title: '项目提案书',
    description: '赢得客户的项目提案',
    content: `你是一位商业专家，请赢得客户的项目提案。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '商业',
    price: 9.9,
    rating: 4.5,
    reviews: 15,
    sales: 82,
    author_id: 'author_013',
    author_name: '朱若溪',
    image_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    tags: ["\u63d0\u6848", "\u5ba2\u6237", "\u5546\u52a1"],
    created_at: '2025-06-28T23:21:11.687302',
    updated_at: '2026-05-08T23:21:11.687302',
  },
  {
    id: '74',
    title: '财务分析模型',
    description: '财务预测和分析模板',
    content: `你是一位商业专家，请财务预测和分析模板。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '商业',
    price: 39.9,
    rating: 4.4,
    reviews: 11,
    sales: 81,
    author_id: 'author_014',
    author_name: '胡宇航',
    image_url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    tags: ["\u8d22\u52a1", "\u9884\u6d4b", "Excel"],
    created_at: '2025-11-27T23:21:11.687302',
    updated_at: '2026-05-29T23:21:11.687302',
  },
  {
    id: '75',
    title: '融资路演PPT',
    description: '投资人喜欢的路演',
    content: `你是一位商业专家，请投资人喜欢的路演。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '商业',
    price: 0,
    rating: 4.1,
    reviews: 9,
    sales: 47,
    author_id: 'author_015',
    author_name: '林诗琪',
    image_url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    tags: ["\u8def\u6f14", "\u878d\u8d44", "PPT"],
    created_at: '2025-09-01T23:21:11.687302',
    updated_at: '2026-05-28T23:21:11.687302',
  },
  {
    id: '76',
    title: 'SWOT分析模板',
    description: '企业SWOT分析',
    content: `你是一位商业专家，请企业SWOT分析。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '商业',
    price: 99,
    rating: 4.1,
    reviews: 28,
    sales: 162,
    author_id: 'author_001',
    author_name: '张明远',
    image_url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=300&fit=crop',
    tags: ["SWOT", "\u6218\u7565", "\u5206\u6790"],
    created_at: '2025-11-04T23:21:11.687302',
    updated_at: '2026-05-25T23:21:11.687302',
  },
  {
    id: '77',
    title: '商业模式画布',
    description: 'Business Model Canvas',
    content: `你是一位商业专家，请Business Model Canvas。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '商业',
    price: 0,
    rating: 4.9,
    reviews: 135,
    sales: 693,
    author_id: 'author_002',
    author_name: '李思琪',
    image_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    tags: ["\u5546\u4e1a\u6a21\u5f0f", "\u753b\u5e03", "\u521b\u4e1a"],
    created_at: '2025-11-03T23:21:11.687302',
    updated_at: '2026-05-15T23:21:11.687302',
  },
  {
    id: '78',
    title: '用户画像模板',
    description: '精准用户画像',
    content: `你是一位商业专家，请精准用户画像。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '商业',
    price: 19.9,
    rating: 4.5,
    reviews: 21,
    sales: 185,
    author_id: 'author_003',
    author_name: '王晓峰',
    image_url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    tags: ["\u7528\u6237\u753b\u50cf", "\u753b\u50cf", "\u8fd0\u8425"],
    created_at: '2025-09-02T23:21:11.687302',
    updated_at: '2026-05-29T23:21:11.687302',
  },
  {
    id: '79',
    title: 'OKR制定模板',
    description: '目标管理OKR模板',
    content: `你是一位商业专家，请目标管理OKR模板。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '商业',
    price: 49.9,
    rating: 4.7,
    reviews: 31,
    sales: 307,
    author_id: 'author_004',
    author_name: '赵雅琳',
    image_url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    tags: ["OKR", "\u76ee\u6807", "\u7ba1\u7406"],
    created_at: '2025-08-21T23:21:11.687302',
    updated_at: '2026-05-30T23:21:11.687302',
  },
  {
    id: '80',
    title: '商业合同模板',
    description: '常用商业合同范本',
    content: `你是一位商业专家，请常用商业合同范本。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '商业',
    price: 99,
    rating: 3.9,
    reviews: 22,
    sales: 125,
    author_id: 'author_005',
    author_name: '陈浩然',
    image_url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=300&fit=crop',
    tags: ["\u5408\u540c", "\u6cd5\u52a1", "\u5546\u52a1"],
    created_at: '2025-10-15T23:21:11.687302',
    updated_at: '2026-06-03T23:21:11.687302',
  },
  {
    id: '81',
    title: '人力资源规划',
    description: 'HR年度规划模板',
    content: `你是一位商业专家，请HR年度规划模板。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '商业',
    price: 39.9,
    rating: 3.9,
    reviews: 12,
    sales: 108,
    author_id: 'author_006',
    author_name: '刘思远',
    image_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    tags: ["HR", "\u4eba\u529b", "\u89c4\u5212"],
    created_at: '2025-06-16T23:21:11.687302',
    updated_at: '2026-05-27T23:21:11.687302',
  },
  {
    id: '82',
    title: '年度预算模板',
    description: '企业年度预算',
    content: `你是一位商业专家，请企业年度预算。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '商业',
    price: 0,
    rating: 3.8,
    reviews: 12,
    sales: 74,
    author_id: 'author_007',
    author_name: '黄子轩',
    image_url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    tags: ["\u9884\u7b97", "\u8d22\u52a1", "\u89c4\u5212"],
    created_at: '2025-08-24T23:21:11.687302',
    updated_at: '2026-05-09T23:21:11.687302',
  },
  {
    id: '83',
    title: '绩效考核方案',
    description: '员工绩效考核模板',
    content: `你是一位商业专家，请员工绩效考核模板。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '商业',
    price: 39.9,
    rating: 4.7,
    reviews: 102,
    sales: 629,
    author_id: 'author_008',
    author_name: '周佳宁',
    image_url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    tags: ["\u7ee9\u6548", "\u8003\u6838", "\u7ba1\u7406"],
    created_at: '2025-09-30T23:21:11.687302',
    updated_at: '2026-05-15T23:21:11.687302',
  },
  {
    id: '84',
    title: '项目管理流程',
    description: 'PM项目管理体系',
    content: `你是一位商业专家，请PM项目管理体系。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '商业',
    price: 99,
    rating: 4.7,
    reviews: 16,
    sales: 94,
    author_id: 'author_009',
    author_name: '吴文博',
    image_url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=300&fit=crop',
    tags: ["PM", "\u9879\u76ee", "\u7ba1\u7406"],
    created_at: '2025-10-08T23:21:11.687302',
    updated_at: '2026-05-28T23:21:11.687302',
  },
  {
    id: '85',
    title: '创业启动清单',
    description: '创业起步检查清单',
    content: `你是一位商业专家，请创业起步检查清单。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '商业',
    price: 0,
    rating: 4.7,
    reviews: 15,
    sales: 92,
    author_id: 'author_010',
    author_name: '徐梦洁',
    image_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    tags: ["\u521b\u4e1a", "\u542f\u52a8", "\u6e05\u5355"],
    created_at: '2025-06-28T23:21:11.687302',
    updated_at: '2026-05-24T23:21:11.687302',
  },
  {
    id: '86',
    title: '在线课程设计',
    description: '在线课程结构规划',
    content: `你是一位教育专家，请在线课程结构规划。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '教育',
    price: 99,
    rating: 4.1,
    reviews: 6,
    sales: 48,
    author_id: 'author_011',
    author_name: '孙雨晴',
    image_url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop',
    tags: ["\u8bfe\u7a0b", "\u5728\u7ebf\u6559\u80b2", "\u6559\u5b66"],
    created_at: '2025-10-14T23:21:11.687302',
    updated_at: '2026-06-05T23:21:11.687302',
  },
  {
    id: '87',
    title: '考试题目生成',
    description: '各学科考试题目',
    content: `你是一位教育专家，请各学科考试题目。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '教育',
    price: 99,
    rating: 4.3,
    reviews: 2,
    sales: 11,
    author_id: 'author_012',
    author_name: '马晓东',
    image_url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop',
    tags: ["\u8003\u8bd5", "\u9898\u76ee", "\u6d4b\u8bc4"],
    created_at: '2025-10-06T23:21:11.687302',
    updated_at: '2026-05-09T23:21:11.687302',
  },
  {
    id: '88',
    title: '学习计划制定',
    description: '个性化学习计划',
    content: `你是一位教育专家，请个性化学习计划。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '教育',
    price: 0,
    rating: 3.9,
    reviews: 37,
    sales: 266,
    author_id: 'author_013',
    author_name: '朱若溪',
    image_url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop',
    tags: ["\u5b66\u4e60", "\u8ba1\u5212", "\u6548\u7387"],
    created_at: '2025-06-07T23:21:11.687302',
    updated_at: '2026-05-12T23:21:11.687302',
  },
  {
    id: '89',
    title: '教学课件模板',
    description: '教师课件制作模板',
    content: `你是一位教育专家，请教师课件制作模板。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '教育',
    price: 49.9,
    rating: 4.3,
    reviews: 106,
    sales: 605,
    author_id: 'author_014',
    author_name: '胡宇航',
    image_url: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=400&h=300&fit=crop',
    tags: ["\u8bfe\u4ef6", "\u6559\u5b66", "PPT"],
    created_at: '2025-10-15T23:21:11.687812',
    updated_at: '2026-06-06T23:21:11.687812',
  },
  {
    id: '90',
    title: '培训方案设计',
    description: '企业培训方案',
    content: `你是一位教育专家，请企业培训方案。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '教育',
    price: 0,
    rating: 3.9,
    reviews: 27,
    sales: 233,
    author_id: 'author_015',
    author_name: '林诗琪',
    image_url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop',
    tags: ["\u57f9\u8bad", "\u4f01\u4e1a", "\u65b9\u6848"],
    created_at: '2025-09-08T23:21:11.687812',
    updated_at: '2026-05-24T23:21:11.687812',
  },
  {
    id: '91',
    title: '知识点总结',
    description: '学科知识点归纳',
    content: `你是一位教育专家，请学科知识点归纳。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '教育',
    price: 29.9,
    rating: 4.8,
    reviews: 66,
    sales: 547,
    author_id: 'author_001',
    author_name: '张明远',
    image_url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop',
    tags: ["\u77e5\u8bc6", "\u603b\u7ed3", "\u5f52\u7eb3"],
    created_at: '2025-06-20T23:21:11.687812',
    updated_at: '2026-06-04T23:21:11.687812',
  },
  {
    id: '92',
    title: '学习方法指导',
    description: '高效学习方法',
    content: `你是一位教育专家，请高效学习方法。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '教育',
    price: 0,
    rating: 4.1,
    reviews: 17,
    sales: 92,
    author_id: 'author_002',
    author_name: '李思琪',
    image_url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop',
    tags: ["\u65b9\u6cd5", "\u5b66\u4e60", "\u6280\u5de7"],
    created_at: '2025-10-02T23:21:11.687812',
    updated_at: '2026-05-16T23:21:11.687812',
  },
  {
    id: '93',
    title: '论文写作模板',
    description: '学术论文写作指南',
    content: `你是一位教育专家，请学术论文写作指南。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '教育',
    price: 49.9,
    rating: 4.3,
    reviews: 17,
    sales: 99,
    author_id: 'author_003',
    author_name: '王晓峰',
    image_url: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=400&h=300&fit=crop',
    tags: ["\u8bba\u6587", "\u5b66\u672f", "\u5199\u4f5c"],
    created_at: '2025-11-02T23:21:11.687812',
    updated_at: '2026-05-10T23:21:11.687812',
  },
  {
    id: '94',
    title: '课后习题设计',
    description: '课后练习题生成',
    content: `你是一位教育专家，请课后练习题生成。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '教育',
    price: 99,
    rating: 4.7,
    reviews: 2,
    sales: 19,
    author_id: 'author_004',
    author_name: '赵雅琳',
    image_url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop',
    tags: ["\u4e60\u9898", "\u7ec3\u4e60", "\u4f5c\u4e1a"],
    created_at: '2025-07-21T23:21:11.687812',
    updated_at: '2026-06-06T23:21:11.687812',
  },
  {
    id: '95',
    title: '家长会发言稿',
    description: '教师家长会模板',
    content: `你是一位教育专家，请教师家长会模板。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '教育',
    price: 29.9,
    rating: 4.1,
    reviews: 2,
    sales: 10,
    author_id: 'author_005',
    author_name: '陈浩然',
    image_url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop',
    tags: ["\u5bb6\u957f\u4f1a", "\u53d1\u8a00", "\u6559\u5e08"],
    created_at: '2025-09-13T23:21:11.687812',
    updated_at: '2026-05-12T23:21:11.687812',
  },
  {
    id: '96',
    title: '教案模板',
    description: '教师教案设计',
    content: `你是一位教育专家，请教师教案设计。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '教育',
    price: 0,
    rating: 4.7,
    reviews: 30,
    sales: 188,
    author_id: 'author_006',
    author_name: '刘思远',
    image_url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop',
    tags: ["\u6559\u6848", "\u5907\u8bfe", "\u6559\u5e08"],
    created_at: '2025-07-31T23:21:11.687812',
    updated_at: '2026-05-15T23:21:11.687812',
  },
  {
    id: '97',
    title: '职业规划方案',
    description: '学生职业规划',
    content: `你是一位教育专家，请学生职业规划。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '教育',
    price: 39.9,
    rating: 4.6,
    reviews: 100,
    sales: 764,
    author_id: 'author_007',
    author_name: '黄子轩',
    image_url: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=400&h=300&fit=crop',
    tags: ["\u804c\u4e1a", "\u89c4\u5212", "\u5c31\u4e1a"],
    created_at: '2025-08-03T23:21:11.687812',
    updated_at: '2026-05-18T23:21:11.687812',
  },
  {
    id: '98',
    title: '知识点测试',
    description: '单元测试卷生成',
    content: `你是一位教育专家，请单元测试卷生成。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '教育',
    price: 29.9,
    rating: 4.7,
    reviews: 23,
    sales: 182,
    author_id: 'author_008',
    author_name: '周佳宁',
    image_url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop',
    tags: ["\u6d4b\u8bd5", "\u8bd5\u5377", "\u5355\u5143"],
    created_at: '2025-08-15T23:21:11.687812',
    updated_at: '2026-05-18T23:21:11.687812',
  },
  {
    id: '99',
    title: '学习方法分享',
    description: '学霸学习方法',
    content: `你是一位教育专家，请学霸学习方法。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '教育',
    price: 49.9,
    rating: 3.9,
    reviews: 29,
    sales: 159,
    author_id: 'author_009',
    author_name: '吴文博',
    image_url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop',
    tags: ["\u5b66\u9738", "\u65b9\u6cd5", "\u5206\u4eab"],
    created_at: '2025-07-28T23:21:11.687812',
    updated_at: '2026-06-03T23:21:11.687812',
  },
  {
    id: '100',
    title: '教育调研报告',
    description: '教育行业调研',
    content: `你是一位教育专家，请教育行业调研。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '教育',
    price: 19.9,
    rating: 4.6,
    reviews: 14,
    sales: 98,
    author_id: 'author_010',
    author_name: '徐梦洁',
    image_url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop',
    tags: ["\u8c03\u7814", "\u6559\u80b2", "\u62a5\u544a"],
    created_at: '2025-08-25T23:21:11.687812',
    updated_at: '2026-05-23T23:21:11.687812',
  },
  {
    id: '101',
    title: '故事创作助手',
    description: '小说/剧本创作',
    content: `你是一位创意专家，请小说/剧本创作。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '创意',
    price: 49.9,
    rating: 4.3,
    reviews: 96,
    sales: 655,
    author_id: 'author_011',
    author_name: '孙雨晴',
    image_url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop',
    tags: ["\u6545\u4e8b", "\u521b\u4f5c", "\u5c0f\u8bf4"],
    created_at: '2025-07-17T23:21:11.687812',
    updated_at: '2026-05-11T23:21:11.687812',
  },
  {
    id: '102',
    title: '诗歌生成器',
    description: '古风/现代诗创作',
    content: `你是一位创意专家，请古风/现代诗创作。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '创意',
    price: 99,
    rating: 4.3,
    reviews: 14,
    sales: 94,
    author_id: 'author_012',
    author_name: '马晓东',
    image_url: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop',
    tags: ["\u8bd7\u6b4c", "\u8bd7\u8bcd", "\u521b\u4f5c"],
    created_at: '2025-07-20T23:21:11.687812',
    updated_at: '2026-06-03T23:21:11.687812',
  },
  {
    id: '103',
    title: '歌词创作模板',
    description: '歌曲歌词创作',
    content: `你是一位创意专家，请歌曲歌词创作。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '创意',
    price: 99,
    rating: 4.1,
    reviews: 78,
    sales: 483,
    author_id: 'author_013',
    author_name: '朱若溪',
    image_url: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop',
    tags: ["\u6b4c\u8bcd", "\u97f3\u4e50", "\u521b\u4f5c"],
    created_at: '2025-08-17T23:21:11.687812',
    updated_at: '2026-06-04T23:21:11.687812',
  },
  {
    id: '104',
    title: '剧本杀剧本',
    description: '剧本杀故事创作',
    content: `你是一位创意专家，请剧本杀故事创作。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '创意',
    price: 49.9,
    rating: 4.3,
    reviews: 19,
    sales: 183,
    author_id: 'author_014',
    author_name: '胡宇航',
    image_url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    tags: ["\u5267\u672c\u6740", "\u6e38\u620f", "\u6545\u4e8b"],
    created_at: '2025-09-26T23:21:11.687812',
    updated_at: '2026-05-21T23:21:11.687812',
  },
  {
    id: '105',
    title: '桌游设计模板',
    description: '桌游规则设计',
    content: `你是一位创意专家，请桌游规则设计。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '创意',
    price: 9.9,
    rating: 4.2,
    reviews: 25,
    sales: 132,
    author_id: 'author_015',
    author_name: '林诗琪',
    image_url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop',
    tags: ["\u684c\u6e38", "\u6e38\u620f", "\u8bbe\u8ba1"],
    created_at: '2025-09-05T23:21:11.687812',
    updated_at: '2026-05-18T23:21:11.687812',
  },
  {
    id: '106',
    title: '视频脚本创作',
    description: '短视频剧本',
    content: `你是一位创意专家，请短视频剧本。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '创意',
    price: 39.9,
    rating: 4.2,
    reviews: 4,
    sales: 37,
    author_id: 'author_001',
    author_name: '张明远',
    image_url: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop',
    tags: ["\u811a\u672c", "\u89c6\u9891", "\u521b\u4f5c"],
    created_at: '2025-06-24T23:21:11.687812',
    updated_at: '2026-05-16T23:21:11.687812',
  },
  {
    id: '107',
    title: '广告创意发想',
    description: '广告创意点子',
    content: `你是一位创意专家，请广告创意点子。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '创意',
    price: 49.9,
    rating: 4.2,
    reviews: 14,
    sales: 83,
    author_id: 'author_002',
    author_name: '李思琪',
    image_url: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop',
    tags: ["\u5e7f\u544a", "\u521b\u610f", "\u53d1\u60f3"],
    created_at: '2025-10-21T23:21:11.687812',
    updated_at: '2026-05-15T23:21:11.687812',
  },
  {
    id: '108',
    title: '品牌命名助手',
    description: '品牌名称生成',
    content: `你是一位创意专家，请品牌名称生成。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '创意',
    price: 29.9,
    rating: 4.1,
    reviews: 13,
    sales: 118,
    author_id: 'author_003',
    author_name: '王晓峰',
    image_url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    tags: ["\u54c1\u724c", "\u547d\u540d", "\u8d77\u540d"],
    created_at: '2025-08-10T23:21:11.687812',
    updated_at: '2026-05-31T23:21:11.687812',
  },
  {
    id: '109',
    title: 'Slogan创作',
    description: '品牌口号生成',
    content: `你是一位创意专家，请品牌口号生成。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '创意',
    price: 29.9,
    rating: 4.5,
    reviews: 28,
    sales: 160,
    author_id: 'author_004',
    author_name: '赵雅琳',
    image_url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop',
    tags: ["Slogan", "\u53e3\u53f7", "\u54c1\u724c"],
    created_at: '2025-09-28T23:21:11.687812',
    updated_at: '2026-05-17T23:21:11.687812',
  },
  {
    id: '110',
    title: '创意写作提示',
    description: '创意写作灵感',
    content: `你是一位创意专家，请创意写作灵感。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '创意',
    price: 9.9,
    rating: 4.8,
    reviews: 32,
    sales: 165,
    author_id: 'author_005',
    author_name: '陈浩然',
    image_url: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop',
    tags: ["\u521b\u610f", "\u5199\u4f5c", "\u7075\u611f"],
    created_at: '2025-08-28T23:21:11.687812',
    updated_at: '2026-05-25T23:21:11.687812',
  },
  {
    id: '111',
    title: '面试问题预测',
    description: 'HR面试题库',
    content: `你是一位职场专家，请HR面试题库。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '职场',
    price: 19.9,
    rating: 4.7,
    reviews: 6,
    sales: 36,
    author_id: 'author_006',
    author_name: '刘思远',
    image_url: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&h=300&fit=crop',
    tags: ["\u9762\u8bd5", "\u6c42\u804c", "HR"],
    created_at: '2025-11-03T23:21:11.687812',
    updated_at: '2026-06-01T23:21:11.687812',
  },
  {
    id: '112',
    title: '工作汇报模板',
    description: '职场汇报写作',
    content: `你是一位职场专家，请职场汇报写作。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '职场',
    price: 0,
    rating: 5.0,
    reviews: 116,
    sales: 1003,
    author_id: 'author_007',
    author_name: '黄子轩',
    image_url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop',
    tags: ["\u6c47\u62a5", "\u804c\u573a", "\u5199\u4f5c"],
    created_at: '2025-10-30T23:21:11.687812',
    updated_at: '2026-05-21T23:21:11.687812',
  },
  {
    id: '113',
    title: '职场沟通技巧',
    description: '职场沟通话术',
    content: `你是一位职场专家，请职场沟通话术。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '职场',
    price: 29.9,
    rating: 3.9,
    reviews: 42,
    sales: 350,
    author_id: 'author_008',
    author_name: '周佳宁',
    image_url: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=400&h=300&fit=crop',
    tags: ["\u6c9f\u901a", "\u804c\u573a", "\u4eba\u9645"],
    created_at: '2025-08-18T23:21:11.687812',
    updated_at: '2026-05-09T23:21:11.687812',
  },
  {
    id: '114',
    title: '会议纪要模板',
    description: '会议记录范本',
    content: `你是一位职场专家，请会议记录范本。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '职场',
    price: 19.9,
    rating: 4.0,
    reviews: 18,
    sales: 155,
    author_id: 'author_009',
    author_name: '吴文博',
    image_url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400&h=300&fit=crop',
    tags: ["\u4f1a\u8bae", "\u7eaa\u8981", "\u529e\u516c"],
    created_at: '2025-10-17T23:21:11.687812',
    updated_at: '2026-05-27T23:21:11.687812',
  },
  {
    id: '115',
    title: '职场邮件写作',
    description: '专业商务邮件',
    content: `你是一位职场专家，请专业商务邮件。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '职场',
    price: 99,
    rating: 4.2,
    reviews: 14,
    sales: 78,
    author_id: 'author_010',
    author_name: '徐梦洁',
    image_url: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&h=300&fit=crop',
    tags: ["\u90ae\u4ef6", "\u804c\u573a", "\u5546\u52a1"],
    created_at: '2025-10-11T23:21:11.687812',
    updated_at: '2026-05-24T23:21:11.687812',
  },
  {
    id: '116',
    title: '项目管理模板',
    description: 'PM工作模板',
    content: `你是一位职场专家，请PM工作模板。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '职场',
    price: 99,
    rating: 4.2,
    reviews: 3,
    sales: 29,
    author_id: 'author_011',
    author_name: '孙雨晴',
    image_url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop',
    tags: ["\u9879\u76ee", "\u7ba1\u7406", "PM"],
    created_at: '2025-08-05T23:21:11.687812',
    updated_at: '2026-05-28T23:21:11.687812',
  },
  {
    id: '117',
    title: '时间管理技巧',
    description: '提高工作效率',
    content: `你是一位职场专家，请提高工作效率。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '职场',
    price: 0,
    rating: 4.7,
    reviews: 123,
    sales: 710,
    author_id: 'author_012',
    author_name: '马晓东',
    image_url: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=400&h=300&fit=crop',
    tags: ["\u65f6\u95f4", "\u6548\u7387", "\u7ba1\u7406"],
    created_at: '2025-08-09T23:21:11.687812',
    updated_at: '2026-05-14T23:21:11.687812',
  },
  {
    id: '118',
    title: '职场晋升指南',
    description: '职业发展规划',
    content: `你是一位职场专家，请职业发展规划。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '职场',
    price: 39.9,
    rating: 4.0,
    reviews: 31,
    sales: 193,
    author_id: 'author_013',
    author_name: '朱若溪',
    image_url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400&h=300&fit=crop',
    tags: ["\u664b\u5347", "\u804c\u4e1a", "\u53d1\u5c55"],
    created_at: '2025-12-05T23:21:11.687812',
    updated_at: '2026-05-17T23:21:11.687812',
  },
  {
    id: '119',
    title: '团队管理方案',
    description: '管理者必备',
    content: `你是一位职场专家，请管理者必备。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '职场',
    price: 39.9,
    rating: 4.3,
    reviews: 20,
    sales: 200,
    author_id: 'author_014',
    author_name: '胡宇航',
    image_url: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&h=300&fit=crop',
    tags: ["\u7ba1\u7406", "\u56e2\u961f", "\u9886\u5bfc"],
    created_at: '2025-08-29T23:21:11.687812',
    updated_at: '2026-05-24T23:21:11.687812',
  },
  {
    id: '120',
    title: '辞职报告模板',
    description: '优雅离职',
    content: `你是一位职场专家，请优雅离职。

请按照以下要求完成任务：
1. 分析用户需求
2. 提供专业建议
3. 生成高质量内容`,
    category: '职场',
    price: 0,
    rating: 4.2,
    reviews: 38,
    sales: 208,
    author_id: 'author_015',
    author_name: '林诗琪',
    image_url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop',
    tags: ["\u8f9e\u804c", "\u79bb\u804c", "\u804c\u573a"],
    created_at: '2025-07-05T23:21:11.687812',
    updated_at: '2026-05-19T23:21:11.687812',
  },
];

// 分类统计
export const CATEGORIES: Category[] = [
  { id: 'writing', name: '写作', emoji: '✍️', prompt_count: 45 },
  { id: 'coding', name: '编程', emoji: '💻', prompt_count: 38 },
  { id: 'image', name: '图像生成', emoji: '🎨', prompt_count: 42 },
  { id: 'marketing', name: '营销', emoji: '📊', prompt_count: 35 },
  { id: 'business', name: '商业', emoji: '💼', prompt_count: 28 },
  { id: 'education', name: '教育', emoji: '📚', prompt_count: 32 },
  { id: 'creative', name: '创意', emoji: '✨', prompt_count: 25 },
  { id: 'career', name: '职场', emoji: '💼', prompt_count: 30 },
];

// 辅助函数
export async function getPrompts(category?: string, search?: string) {
  let prompts = [...SAMPLE_PROMPTS];
  
  // 按分类筛选
  if (category) {
    prompts = prompts.filter((p) => p.category === category);
  }
  
  // 按搜索词筛选
  if (search) {
    const lowerSearch = search.toLowerCase();
    prompts = prompts.filter(
      (p) =>
        p.title.toLowerCase().includes(lowerSearch) ||
        p.description.toLowerCase().includes(lowerSearch) ||
        (p.tags && p.tags.some((tag) => tag.toLowerCase().includes(lowerSearch)))
    );
  }
  
  return prompts;
}

export async function getPromptById(id: string) {
  return SAMPLE_PROMPTS.find((p) => p.id === id);
}

export async function getPromptsByCategory(category: string) {
  return SAMPLE_PROMPTS.filter((p) => p.category === category);
}

export async function getTrendingPrompts(limit: number = 10) {
  return [...SAMPLE_PROMPTS]
    .sort((a, b) => b.sales - a.sales)
    .slice(0, limit);
}

export async function getLatestPrompts(limit: number = 10) {
  return [...SAMPLE_PROMPTS]
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .slice(0, limit);
}

export async function searchPrompts(query: string) {
  const lowerQuery = query.toLowerCase();
  return SAMPLE_PROMPTS.filter(
    (p) =>
      p.title.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      (p.tags && p.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)))
  );
}

export async function getFeaturedPrompts() {
  return getTrendingPrompts(8);
}

export async function getCategories() {
  return CATEGORIES;
}

// 获取提示词的真实评论
export function getPromptReviews(promptId: string) {
  const prompt = SAMPLE_PROMPTS.find((p) => p.id === promptId);
  if (!prompt) return [];
  
  const reviewerNames = ['李明', '王芳', '张伟', '刘洋', '陈静', '杨帆', '赵敏', '孙磊', '周杰', '吴敏', '徐洋', '马云飞', '黄晓明', '林志玲', '邓超'];
  const reviewTexts = [
    '这个提示词真的太棒了！用了一段时间，效果一直很稳定。生成的代码质量很高，省了我大量时间。强烈推荐！',
    '物超所值！之前用过其他家的提示词，这个明显更好用。说明详细，容易上手。强烈推荐给同行们！',
    '质量不错，但价格再便宜点就更好了。不过整体来说还是很值的，性价比很高。',
    '作为新手，我觉得这个提示词非常容易上手。说明文档也很详细，客服态度也很好，赞一个！',
    '这是我买过的最实用的提示词之一。已经推荐给好几个朋友了，他们都觉得很不错。',
    '效果还可以，但感觉还有提升空间。希望作者能持续更新优化，会一直支持的！',
    '用起来很顺手，生成的内容质量很高。客服态度也很好，有问必答，很专业！',
    '说实话一开始没抱太大期望，用了之后发现真的很不错。后悔没早点买！相见恨晚啊！',
    '对于我们这种小型工作室来说，这个工具太实用了。帮了大忙，大大提高了工作效率！',
    '提示词很专业，但需要一定的基础知识才能用好。建议配套推出视频教程，会更容易上手。',
  ];
  
  const reviews = [];
  for (let i = 0; i < Math.min(prompt.reviews, 8); i++) {
    reviews.push({
      name: reviewerNames[i % reviewerNames.length],
      rating: Math.min(5, Math.max(3, prompt.rating + (Math.random() * 1 - 0.5))),
      date: `2026年${((i % 12) + 1).toString().padStart(2, '0')}月${(i % 28 + 1).toString().padStart(2, '0')}日`,
      text: reviewTexts[i % reviewTexts.length],
    });
  }
  
  return reviews;
}
