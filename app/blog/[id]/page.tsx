import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

const blogPosts = {
  '10-chatgpt-tips': {
    title: '10个ChatGPT提示词技巧，让AI帮你事半功倍',
    date: '2026-06-01',
    category: 'ChatGPT',
    readTime: '5分钟',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    content: `
## 引言

ChatGPT已经成为很多人工作中不可或缺的工具，但你真的发挥出它的全部潜力了吗？

在这篇文章中，我将分享10个经过验证的ChatGPT提示词技巧，让你的工作效率翻倍！

## 1. 给AI设定角色

### 为什么有效？

当你让AI扮演特定角色时，它会从那个角色的角度思考，输出更专业、更贴合场景的内容。

### 示例提示词

\`\`\`
作为有15年经验的资深产品经理，请帮我分析这个用户反馈，给出3个优先级最高的改进建议。

用户反馈：[粘贴你的用户反馈]
\`\`\`

### 常用角色模板

- 资深文案编辑
- 数据分析师
- 编程导师
- 法律顾问（仅供参考）
- 职业规划顾问

## 2. 使用思维链让AI解释推理

### 为什么有效？

让AI一步步解释它的思考过程，不仅能让你理解答案，还能帮助发现潜在的问题。

### 示例提示词

\`\`\`
请帮我制定一个月度营销计划。

要求：
1. 先分析目标受众和市场环境
2. 然后列出3个可选方案，分析各自优缺点
3. 最后给出推荐方案和执行步骤

请一步步解释你的思考过程。
\`\`\`

## 3. 指定输出格式

### 为什么有效？

明确的格式要求能让AI的输出更结构化，方便你直接使用。

### 示例提示词

\`\`\`
请分析以下销售数据，并以Markdown表格形式输出：

数据：[粘贴数据]

表格应包含：
- 产品名称
- 销量
- 环比增长
- 建议

用中文回答。
\`\`\`

## 4. 提供正反示例

### 为什么有效？

示例能让AI更准确地理解你的期望，特别是在创意写作或风格模仿时。

### 示例提示词

\`\`\`
请帮我写3个产品标题，风格如下：

✅ 好的示例：
- "这款水杯让你每天都爱上喝水"
- "告别熬夜肌！这款面膜效果绝了"

❌ 不好的示例：
- "优质水杯，质量保证"
- "面膜新品上市"

产品：无线蓝牙耳机
目标受众：20-30岁的学生和上班族
\`\`\`

## 5. 要求AI多轮优化

### 为什么有效？

第一版输出往往不够完美，通过多轮对话可以不断优化。

### 提示词流程

\`\`\`
第1轮：
"请帮我写一篇公司年会的开场白"

第2轮：
"不错，但能不能更幽默一些？加几个关于今年工作的小梗"

第3轮：
"很好！再帮我加一段感谢员工的内容，控制在100字以内"
\`\`\`

## 6. 让AI自我审视

### 为什么有效？

让AI批判自己的输出，能发现问题并改进质量。

### 示例提示词

\`\`\`
这是我写的一封邮件，请帮我：
1. 先修改得更专业、更清晰
2. 然后分析你的修改，说明为什么这样改更好
3. 最后给出3个不同风格的版本（正式/友好/简洁）

邮件内容：
[粘贴你的邮件]
\`\`\`

## 7. 使用分隔符区分内容

### 为什么有效？

当提示词包含多部分信息时，分隔符能帮助AI更好地理解结构。

### 示例提示词

\`\`\`
=== 任务 ===
写一篇产品软文

=== 产品信息 ===
名称：智能扫地机器人
特点：激光导航、自动集尘、静音模式
价格：2999元

=== 要求 ===
- 目标受众：忙碌的上班族
- 风格：亲切、真实
- 字数：800字
- 不要太像广告

现在开始写：
\`\`\`

## 8. 限定AI的回答范围

### 为什么有效？

避免AI输出过多不相关的内容，让回答更聚焦。

### 示例提示词

\`\`\`
请帮我解释"机器学习"这个概念，要求：
- 用通俗易懂的语言
- 不要超过300字
- 不要使用任何数学公式
- 用一个生活中的例子来说明
\`\`\`

## 9. 让AI生成多个版本

### 为什么有效？

一次获得多个选择，你可以挑选最合适的，或者组合使用。

### 示例提示词

\`\`\`
请帮我想5个不同风格的公众号文章标题，主题是"如何用AI提升工作效率"：

1. 干货型
2. 悬念型
3. 数字型
4. 共鸣型
5. 反常识型

每个标题不超过25字。
\`\`\`

## 10. 建立你的提示词库

### 为什么有效？

把常用的提示词保存下来，下次可以直接使用或微调。

### 如何建立

1. 记录每次效果好的提示词
2. 按使用场景分类
3. 定期更新和优化
4. 在PromptMarket上发现更多优质提示词

### 提示词库分类建议

- 文案写作
- 邮件模板
- 代码辅助
- 学习辅导
- 决策辅助

## 实际应用场景

### 场景1：写周报

\`\`\`
作为我的同事，了解我们团队本周的工作：
- 完成了A功能开发
- 修复了3个bug
- 进行了用户调研

请帮我写一份周报，要求：
1. 结构清晰
2. 数据驱动
3. 突出成果
4. 500字以内
\`\`\`

### 场景2：翻译

\`\`\`
请帮我把这段英文翻译成中文，要求：
1. 符合中文表达习惯，不要生硬直译
2. 保持原文的专业语气
3. 技术术语保持一致
4. 标出你不确定的地方

[粘贴英文内容]
\`\`\`

## 常见错误避免

1. ❌ 不要问太模糊的问题
2. ❌ 不要一次让AI做太多事情
3. ❌ 不要完全相信AI的事实性回答（需要验证）
4. ❌ 不要在提示词中泄露敏感信息

## 总结

这10个技巧总结下来就是：
1. 设定角色
2. 要求思维链
3. 指定格式
4. 提供示例
5. 多轮优化
6. 自我审视
7. 使用分隔符
8. 限定范围
9. 多版本生成
10. 建立提示词库

记住，ChatGPT就像一个超级助手，你越会用它，它就越好用！

## 下一步

想要更多现成的高质量提示词？来PromptMarket看看，我们已经为你准备好了！
    `,
  },
  'midjourney-prompt-guide': {
    title: 'Midjourney提示词完整指南：从入门到精通',
    date: '2024-01-10',
    category: 'Midjourney',
    readTime: '8分钟',
    image: 'https://images.unsplash.com/photo-1675271591211-126ad94e496d?w=800',
    content: `
## 引言

很多朋友问我怎么用Midjourney画出好看的图——其实关键就是提示词！

在这篇文章中，我将深入介绍Midjourney提示词的结构、风格参数和高级技巧，帮你创造令人惊艳的AI艺术作品。

## Midjourney提示词基础

### 提示词的基本结构

\`\`\`
[主体描述] + [风格] + [光线] + [画质] + [参数]
\`\`\`

### 示例提示词

\`\`\`
一个可爱的小女孩在花园里吹泡泡，宫崎骏动画风格，温暖的午后阳光，8K超高清，细节丰富 --ar 3:2 --stylize 500
\`\`\`

## 核心元素详解

### 1. 主体描述

主体描述是你想要画的内容，越具体越好。

**好的示例：**
\`\`\`
一个戴着圆框眼镜的老奶奶坐在窗边的摇椅上，手里捧着一本旧书
\`\`\`

**更好的示例：**
\`\`\`
一个戴着圆框眼镜的70岁老奶奶坐在靠窗的木质摇椅上，穿着针织衫，手里捧着一本泛黄的旧书，阳光洒在她身上，背景是窗外的秋日庭院
\`\`\`

### 2. 风格选择

Midjourney支持多种艺术风格，你可以混合使用。

**常用风格：**
- anime（动漫风格）
- photorealistic（写实照片风格）
- oil painting（油画风格）
- watercolor（水彩风格）
- cyberpunk（赛博朋克）
- Studio Ghibli（吉卜力风格）

**风格示例：**
\`\`\`
一幅山水画，传统中国水墨风格，留白意境，远山云雾缭绕 --ar 16:9
\`\`\`

### 3. 光线设置

光线对画面氛围影响很大。

**常用光线词汇：**
- golden hour（黄金时刻）
- soft lighting（柔和光线）
- dramatic lighting（戏剧性光线）
- backlit（逆光）
- cinematic lighting（电影光）

**光线示例：**
\`\`\`
城市夜景，霓虹灯，赛博朋克风格，雨滴反射，镜头光晕，电影光 --ar 21:9
\`\`\`

### 4. 画质和细节

告诉AI你想要什么样的画质。

**常用词汇：**
- 8K
- ultra detailed（超细节）
- highly detailed（高细节）
- sharp focus（锐焦）
- cinematic composition（电影构图）

## 高级参数

### 常用参数

\`\`\`
--ar 16:9       # 宽高比
--stylize 500    # 风格化程度
--q 2           # 质量
--seed 12345    # 随机种子
\`\`\`

### 宽高比

\`\`\`
--ar 1:1      # 正方形
--ar 16:9     # 横向（适合电脑屏幕）
--ar 9:16     # 纵向（适合手机）
--ar 21:9     # 超宽（电影感）
--ar 4:5      # 适合Instagram
\`\`\`

## 实用模板

### 风景模板

\`\`\`
史诗风景摄影，[地点描述]，黄金时刻，戏剧性天空，[天气描述]，国家地理风格，获奖摄影，8K，超详细 --ar 16:9 --stylize 750
\`\`\`

### 人物肖像模板

\`\`\`
专业人像摄影，[人物描述]，电影光，景深，85mm镜头，f/1.8，锐焦 --ar 3:4 --stylize 250
\`\`\`

### 产品设计模板

\`\`\`
产品摄影，[产品描述]，柔和工作室光，白色背景，广告风格，高清，专业灯光 --ar 4:5 --q 2
\`\`\`

## 进阶技巧

### 混合风格

你可以混合多种风格：

\`\`\`
一位宇航员漂浮在宇宙中，背景是彩色星云，Studio Ghibli风格与赛博朋克风格混合，霓虹配色 --ar 21:9
\`\`\`

### 使用参考图片

如果有参考图片，可以放在提示词开头：

\`\`\`
[图片URL] 同样风格，但改成[新场景描述]
\`\`\`

### 权重控制

用::语法调整元素权重：

\`\`\`
猫::2 狗::1 花园背景
\`\`\`

## 实用建议

1. 从小的修改开始，逐步调整
2. 保存你喜欢的提示词模板
3. 多次尝试，AI每次都有新惊喜
4. 加入社区，分享学习

## 总结

Midjourney提示词的核心是：
1. 清晰描述主体
2. 选择合适风格
3. 设置光线和氛围
4. 调整参数和画质
5. 多尝试，多积累

想要更多高质量提示词模板？来PromptMarket看看，我们精选了很多优秀的Midjourney提示词！
    `,
  },
  'prompt-engineering-best-practices': {
    title: '提示词工程最佳实践：如何写出高质量的AI提示词',
    date: '2026-05-20',
    category: '教程',
    readTime: '6分钟',
    image: 'https://images.unsplash.com/photo-1684163549237-41611c81a324?w=800',
    content: `
## 引言

在人工智能快速发展的今天，你可能经常听到"提示词"这个词。但是，什么是AI提示词？为什么它对使用AI工具如此重要？

在这篇文章中，我们将深入探讨提示词工程的核心原则，包括清晰性、具体性、格式规范等，让你的AI输出更可控。

## 什么是AI提示词？

简单来说，AI提示词是你向AI模型发出的指令或问题。它是你与AI沟通的桥梁。

## 提示词的基本形式

提示词可以是：
- 一个简单的问题
- 一个复杂的指令
- 一个创意请求
- 一个任务指令

## 提示词工程的核心原则

### 原则1：清晰明确

不要让AI猜测你的意图。用具体的描述代替模糊的词语。

**❌ 不好的示例：**
\`\`\`
写个文案
\`\`\`

**✅ 好的示例：**
\`\`\`
作为资深社交媒体文案专家，为一款新的环保水杯写3个不同风格的Instagram标题：
1. 幽默风趣型
2. 情感共鸣型
3. 专业权威型

目标受众：25-35岁的都市白领，关注环保和生活品质。每个标题不超过20字。
\`\`\`

### 原则2：提供上下文

告诉AI你是谁、你需要什么、为什么需要。

**为什么上下文很重要？**

AI模型就像一个超级聪明但需要明确指令的助手。你给的指令越清晰、越详细，它的输出就越符合你的期望。

### 原则3：指定格式

告诉AI你想要的输出格式：列表、段落、表格、代码等。

**常用格式要求：**
- Markdown表格
- 要点列表（带编号）
- JSON格式
- 代码块
- 思维导图结构

### 原则4：设定角色

让AI扮演特定角色可以显著提升输出质量。

**常用角色：**
- 资深文案编辑
- 数据分析师
- 编程导师
- 法律顾问（仅供参考）
- 职业规划顾问

### 原则5：给出示例

如果可能，提供1-2个你期望的输出示例。

**示例的威力：**

\`\`\`
请帮我写3个产品标题，风格如下：

✅ 好的示例：
- "这款水杯让你每天都爱上喝水"
- "告别熬夜肌！这款面膜效果绝了"

❌ 不好的示例：
- "优质水杯，质量保证"
- "面膜新品上市"
\`\`\`

## 实际应用案例

### 案例1：程序员的效率提升

**场景：** 需要写一个Python函数来处理CSV数据

**提示词：**
\`\`\`
作为有10年经验的Python高级工程师，请帮我写一个函数：
- 输入：CSV文件路径
- 输出：处理后的数据字典
- 功能：删除空行，转换日期格式，计算总和

要求：
1. 包含完整的错误处理
2. 添加详细的注释
3. 提供使用示例
4. 遵循PEP 8规范
\`\`\`

### 案例2：学生的学习助手

**场景：** 准备数学考试

**提示词：**
\`\`\`
作为耐心的数学老师，请帮我：
1. 总结二次函数的5个核心知识点
2. 给出3道典型例题（从易到难）
3. 每道题提供详细的解题步骤
4. 最后给一个学习计划建议

用通俗易懂的语言，适合高中生理解。
\`\`\`

## 如何开始提升你的提示词技能？

1. 从模仿开始：看别人的好提示词，学习他们的结构
2. 多尝试：同一个需求用不同的提示词试试看
3. 记录效果：记下哪些提示词效果好，为什么
4. 迭代优化：根据AI的输出不断调整你的提示词

## PromptMarket的价值

这就是为什么我们创建了PromptMarket——让每个人都能访问高质量、经过验证的提示词。

- 节省时间：不用从零开始摸索
- 保证质量：所有提示词都经过验证
- 持续更新：不断有新的提示词加入
- 社区分享：学习其他高手的思路

## 总结

AI提示词是你与AI沟通的关键。花时间学习如何写好提示词，就像学会使用一件超级强大的工具。

记住：AI的输出质量，很大程度上取决于你的输入质量。

开始探索PromptMarket，发现更多优质提示词，让AI真正成为你的得力助手！
    `,
  },
}

interface PageProps {
  params: { id: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = blogPosts[params.id as keyof typeof blogPosts]
  if (!post) {
    return {
      title: '文章未找到 - PromptMarket',
    }
  }
  const canonical = `https://prompts.link.cn/blog/${params.id}`
  return {
    title: post.title,
    description: post.content.slice(0, 150),
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${post.title} | PromptMarket`,
      description: post.content.slice(0, 150),
      url: canonical,
      type: 'article',
      images: [post.image],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | PromptMarket`,
      description: post.content.slice(0, 150),
      images: [post.image],
    },
  }
}

export default function BlogPostPage({ params }: PageProps) {
  const post = blogPosts[params.id as keyof typeof blogPosts]
  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="w-4 h-4" />
            返回博客
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg max-w-none">
            {post.content.split('\n').map((line, index) => {
              if (line.trim().startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-bold mt-10 mb-4">{line.slice(3)}</h2>
              } else if (line.trim().startsWith('### ')) {
                return <h3 key={index} className="text-xl font-semibold mt-8 mb-3">{line.slice(4)}</h3>
              } else if (line.trim().startsWith('```')) {
                return null
              } else if (line.trim() === '') {
                return <br key={index} />
              } else if (line.trim().startsWith('**') && line.trim().endsWith('**')) {
                return <strong key={index}>{line.slice(2, -2)}</strong>
              } else if (line.trim().startsWith('- ') || line.trim().startsWith('• ')) {
                return (
                  <li key={index} className="ml-4 my-1">
                    {line.trim().startsWith('- ') ? line.slice(2) : line.slice(2)}
                  </li>
                )
              } else if (line.trim().match(/^\d+\. /)) {
                return (
                  <li key={index} className="ml-4 my-1 list-decimal">
                    {line.trim().replace(/^\d+\. /, '')}
                  </li>
                )
              } else {
                return <p key={index} className="my-4">{line}</p>
              }
            })}
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">喜欢这篇文章吗？</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            探索更多高质量AI提示词，提升你的工作效率
          </p>
          <Link
            href="/prompts"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90"
          >
            浏览提示词库
          </Link>
        </div>
      </section>
    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((id) => ({
    id,
  }))
}
