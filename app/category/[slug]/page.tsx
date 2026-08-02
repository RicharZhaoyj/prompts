import Link from 'next/link'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowLeft, TrendingUp, Star, CheckCircle2, Sparkles, Zap } from 'lucide-react'
import { getPromptsByCategory, getCategories, CATEGORIES, getTrendingPrompts } from '@/lib/prompts'
import { StructuredData } from '@/app/components/structured-data'

type Props = { params: { slug: string } }

// 每个分类的专属SEO内容（避免重复内容惩罚，每个分类独特）
const CATEGORY_SEO: Record<string, {
  title: string
  description: string
  keywords: string
  ogTitle: string
  ogDesc: string
  introTitle: string
  introH2: string
  introPara: string[]
  tipsTitle: string
  tips: { title: string; desc: string }[]
  faqs: { q: string; a: string }[]
  useCases: { name: string; desc: string; example: string }[]
}> = {
  writing: {
    title: '写作提示词大全2026 | ChatGPT/ Claude 文案写作Prompt模板免费',
    description: '精选45+高质量AI写作提示词模板：小红书爆款文案、公众号文章、SEO优化软文、短视频脚本、广告创意、简历求职信、论文开题报告、小说写作、营销文案等。覆盖所有主流AI写作工具，一键复制即用。',
    keywords: '写作提示词, ChatGPT写作, 文案写作Prompt, AI写作, 小红书文案, 公众号写作, 短视频脚本, 营销文案, SEO软文, 论文写作提示词, 小说写作AI, 简历优化Prompt',
    ogTitle: '45+ AI写作提示词模板（免费）| ChatGPT文案助手',
    ogDesc: '涵盖小红书爆款、公众号、短视频脚本、营销软文、论文等全场景写作提示词，复制即用，秒出专业文案！',
    introTitle: 'AI写作提示词全场景模板库',
    introH2: '为什么用好写作提示词能让AI输出质量提升 300%？',
    introPara: [
      '很多人抱怨「ChatGPT写的文案太通用、像机器写的」，核心原因是提示词没给对。一个专业的写作提示词需要同时指定：角色身份（资深文案/高考阅卷老师/爆款作者）、目标受众（年龄、兴趣、痛点）、文体风格（小红书种草风/公众号深度风/官方案例风）、输出结构（标题+钩子+分段+CTA）、字数限制、避免事项（不要用太官方的词/避免 clichés）。',
      '本页收录的45+写作提示词，均经过真实场景验证：每条都在爆款账号产出过10W+阅读或客户验收通过，不是凭空编的模板。按场景分类整理，找到对应需求→点击复制→粘贴到ChatGPT/Claude/文心一言，即可得到能直接使用的专业级文案。',
      '如果你经常需要写：社交媒体内容、企业推广文案、个人求职材料、学术论文框架、创意故事——直接套用这里的模板，平均节省 80% 的写作时间。',
    ],
    tipsTitle: '写出高质量AI文案的5个黄金法则',
    tips: [
      { title: '明确角色身份', desc: '不说「写一篇文案」，要说「你是服务过100+美妆品牌的资深美妆文案，请写一篇……」' },
      { title: '给出参考范例', desc: '如果有满意的旧文案或竞品案例，附在提示词中让AI学习风格，质量骤升。' },
      { title: '拆分输出步骤', desc: '让AI先产出3个标题供你选→选中后再写正文→最后润色，比一次性出全文质量更高。' },
      { title: '指定「不要写什么」', desc: '写小红书文案时加一句「不要用太书面的官话，不要加总结性结尾」，效果立竿见影。' },
      { title: '给数据和素材', desc: '把产品卖点、用户评价、活动信息喂给AI，不要让AI瞎编，避免文案失实。' },
    ],
    faqs: [
      { q: 'AI写作提示词可以用在哪些工具上？', a: '本页所有提示词均兼容ChatGPT/GPT-4/GPT-5、Claude 3 Opus/Sonnet、文心一言4.0、通义千问、Kimi等所有主流大语言模型。Midjourney绘画提示词请前往「图像生成」分类。' },
      { q: '为什么复制后AI输出的结果和示例不一样？', a: '大模型存在温度采样（temperature）随机性，相同提示词每次输出略有差异是正常的。如需稳定风格，可在提示词末尾加上「请严格按以下风格输出，不要自行发挥」，或调低模型 temperature 参数到 0.3-0.5。' },
      { q: '如何让写小红书文案更爆款？', a: '推荐使用本页「小红书爆款标题+正文」模板，3个关键细节：① 标题必须加emoji但不超过3个；② 首句用「谁懂啊！」「终于有人说清楚了」等钩子；③ 结尾一定要有CTA（评论扣1领取/关注看更多）。提示词里把这3点写进去，爆款概率翻倍。' },
    ],
    useCases: [
      { name: '新媒体运营每日内容生产', desc: '每天需要发5个平台10条内容？用对应平台提示词模板，1分钟出1条初稿，人工微调即可。', example: '运营小王每天产出20条文案的时间从4小时降到30分钟。' },
      { name: '中小企业官网SEO优化', desc: '没有专业文案？批量生成产品详情页、博客文章、落地页长文，收录后持续带来免费搜索流量。', example: '某电商官网用AI生成50篇SEO文章，月均搜索流量增长240%。' },
      { name: '求职面试材料准备', desc: '简历、求职信、自我介绍、面试问答，针对目标岗位定制化生成，通过率显著提升。', example: '应届生小李用简历优化Prompt，面试邀约从每周2个涨到每周8个。' },
    ],
  },
  coding: {
    title: '编程提示词2026 | ChatGPT/ Claude 代码生成Prompt - 程序员必备',
    description: '38+精选编程AI提示词：代码生成、代码重构、Bug调试、单元测试、代码审查、算法解释、SQL查询、正则表达式、API接口设计、架构评审。支持Python/JS/TS/Go/Java/Rust全栈。',
    keywords: '编程提示词, AI编程, ChatGPT写代码, 代码生成, Bug调试Prompt, 代码重构, 单元测试AI, SQL优化, 正则表达式生成, 程序员AI助手',
    ogTitle: '38+ 程序员AI提示词｜写代码+调Bug+重构一键搞定',
    ogDesc: '从代码生成、Bug定位到架构评审全覆盖，让AI成为你的高级开发搭档。',
    introTitle: '编程开发全流程AI提示词',
    introH2: '把AI从「代码片段生成器」升级为「资深Tech Lead搭档」',
    introPara: [
      '普通程序员用AI只做「写一个函数」，但高手会用AI完成：需求拆解→技术选型→代码实现→单测→Code Review→性能优化→文档编写 的全流程。关键在于提示词要带上下文：项目结构、历史代码、技术栈约束、性能指标要求。',
      '本页38+提示词按开发阶段分类整理：需求期（PRD转技术方案）、编码期（T大语言模型DD写代码）、调试期（报错分析）、优化期（性能/安全/重构）、交付期（测试/文档）。配合IDE的Cursor/Trae/Cline等AI编程工具，平均开发效率提升2-3倍。',
      '最重要的原则：不要让AI猜。把报错日志、相关代码片段、输入输出样例、你尝试过但失败的方法，全部给AI，诊断准确率会从40%飙升到90%+。',
    ],
    tipsTitle: '高效使用AI编程的6个最佳实践',
    tips: [
      { title: '总是提供上下文', desc: '粘贴相关代码、项目目录结构、技术栈版本号、报错完整堆栈，不要只截1行报错。' },
      { title: '让AI先分析再写代码', desc: '先问「这个问题有哪几种实现方案？各有什么权衡？」再让它编码，避免踩坑。' },
      { title: '分小步迭代', desc: '一次只改一个函数/一个模块，验证通过再继续，不要让AI一次重构整个项目。' },
      { title: '一定要跑测试', desc: 'AI生成的代码一定要跑单测、边缘用例、类型检查。永远不要不经测试直接合入。' },
      { title: '使用「橡皮鸭调试」技巧', desc: '把报错和你已有的分析写给AI，即使你完全没思路，也能帮助AI快速定位。' },
      { title: '指定编码规范', desc: '提示词里说清楚「符合ESLint规则、函数名用驼峰、注释写JSDoc」，减少返工。' },
    ],
    faqs: [
      { q: 'AI生成的代码安全吗？可以直接上生产吗？', a: '绝对不可以直接上生产！AI生成的代码必须经过：① 编译/类型检查通过 ② 完整单测覆盖 ③ 人工Code Review（重点看安全漏洞：注入、越权、敏感信息泄露） ④ 灰度验证。AI是你的副手，最终责任人永远是你。' },
      { q: '编程提示词在Cursor/Trae IDE中如何使用效果最好？', a: '推荐配合 @ 符号引用文件上下文：@某个文件、@某段代码，配合自然语言描述需求。不要让AI自己猜项目结构，用规则文件（如 .cursorrules、TRAE Skill）把项目编码规范、技术栈写清楚，一致性会非常高。' },
      { q: '复杂业务逻辑（如支付、权限）能用AI写吗？', a: '可以写框架和样板代码，但核心业务逻辑必须手写+充分测试。建议做法：让AI写接口定义、DTO、单测骨架，核心流程自己写，辅助代码（参数校验、日志、错误处理）交给AI。' },
    ],
    useCases: [
      { name: '全栈独立开发者快速交付项目', desc: '从前端页面到后端API，配合提示词模板+Cursor，单人一周可交付一个中等复杂度SaaS MVP。', example: '独立开发者小陈用AI编程提示词，把产品从想法到上线的周期从2个月压到2周。' },
      { name: '遗留代码重构与迁移', desc: '老项目技术升级（如jQuery→React、Python2→3），用重构提示词批量迁移，风险和成本大幅下降。', example: '某团队用AI把10万行Python 2代码迁移到3，只用了3周（原计划3个月）。' },
      { name: '面试刷题与算法学习', desc: '遇到不会的算法题？不要直接看答案：先让AI「一步步分析」，再模仿思路自己写一遍，学习效率翻倍。', example: '应届毕业生小林用提示词+2个月训练，拿到大厂SP Offer。' },
    ],
  },
  image: {
    title: 'AI绘画提示词2026 | Midjourney/Flux/SDXL 图像生成Prompt大全',
    description: '42+精选AI图像生成提示词：Midjourney V7人像/场景/产品摄影、Flux写实插画、Stable Diffusion国潮/二次元/3D渲染、Logo设计、电商主图、社交媒体海报。附中文对照+参数设置指南。',
    keywords: 'AI绘画提示词, Midjourney提示词, Flux提示词, Stable Diffusion提示词, 图像生成Prompt, AI插画, 电商主图Prompt, Logo设计AI, 人像摄影AI, 二次元绘图',
    ogTitle: '42+ AI绘画提示词｜Midjourney/Flux/SD 一键出大片',
    ogDesc: '人像、产品、场景、插画、电商全场景模板，附参数设置和中英文对照。',
    introTitle: 'AI绘画全场景提示词模板库',
    introH2: '同样是给AI画画，为什么有人出大片有人出车祸？3个关键区别',
    introPara: [
      '第1个区别：主体描述不是名词堆砌，而是「镜头语言+光线+构图+材质+情绪」的组合。比如只写「美女」AI随机出图，但写「人像摄影，索尼A7R5 85mm f/1.4镜头，自然窗边侧光，柔和电影调色，浅景深，背景虚化，亚洲25岁女性，微笑表情，皮肤自然纹理，真实毛孔细节」——专业度直接拉满。',
      '第2个区别：风格词一定要具体。不说「卡通风格」，要说「吉卜力工作室手绘风格+赛璐璐上色+温暖水彩背景」。不说「高级感」，要说「Apple官网产品摄影风格+纯白背景+柔和顶光+45度侧补光+HDR高动态范围」。',
      '第3个区别：善用参数。Midjourney调 --ar（比例）、--stylize（艺术化程度）、--chaos（多样性）；Flux调 guidance_scale 和步数；SD调采样器+CFG。同一个主体，参数调对了效果差10倍。',
    ],
    tipsTitle: 'AI出大片的5个实战技巧',
    tips: [
      { title: '英文关键词效果>中文', desc: '所有主流绘画模型用英文语料训练，中文理解不稳定。建议用英文主体+风格词，中文可作为补充描述。' },
      { title: '建立你自己的「风格词库」', desc: '每次看到喜欢的图，把它的提示词拆解收藏：风格流派、艺术家名字、摄影器材参数、调色风格……积累多了你就是AI绘画高手。' },
      { title: '不要忽略负向提示词', desc: 'Midjourney加--no，SD加Negative Prompt：blurry, low quality, ugly, deformed, extra fingers, watermark, text，质量立刻升级。' },
      { title: '善用参考图', desc: '上传一张参考图（风格/构图/人物参考），把URL放在提示词最前面，AI出图的一致性和可控性大大提高。' },
      { title: '先出小图再高清修复', desc: '先用低参数快速出4~10张草图挑满意的，再用高清修复（Midjourney Upscale、SD hires fix）出4K大图，省时间又省钱。' },
    ],
    faqs: [
      { q: 'Midjourney、Flux、Stable Diffusion该选哪个？', a: 'Midjourney V7：出图最快最惊艳，适合创意插画、艺术概念图，但版权归属模糊，不能自定义训练。Flux（Schnell/Dev）：新出开源模型，写实能力强，可跑本地，适合生成真实感强的人像产品图。SDXL + 各种Lora：最灵活可控，适合需要大量出同风格图的商业场景（电商、游戏）。' },
      { q: 'AI生成的图片可以商用吗？有版权风险吗？', a: '法律上仍处于灰色地带，但通用原则：① 不要用明显有版权的风格（迪士尼皮克斯、知名艺术家个人风格）生成竞品图；② 人物照片要用不存在的虚拟人脸，避免肖像权；③ 品牌Logo和商业视觉要用原创提示词，不要参考他人现有设计。④ 建议关键视觉部分一定要人工修改调整，降低风险。' },
      { q: '为什么同样的提示词我出的图比别人差？', a: '3个隐藏变量：① 模型版本（Midjourney V7和V5差别很大）；② 你有没有用参考图（--sref、--cref、风格参考）；③ 有没有用种子（--seed固定随机数）。把这3项对齐，出图质量基本一致。' },
    ],
    useCases: [
      { name: '电商商家批量主图', desc: '不用租棚请模特，用产品图+参考模特姿势生成大量主图A/B测试，点击率平均提升30%。', example: '某服饰商家用AI主图替换实拍，月省模特+棚拍费2万元，点击率不降反升。' },
      { name: '设计师灵感+提案', desc: '甲方还没开口？先丢10张AI生成的氛围概念图让他选方向，提案通过率翻倍。', example: '设计工作室用AI概念图+2次微调，客户提案通过率从40%到90%。' },
      { name: '自媒体封面/配图', desc: '每篇文章/每条视频定制1张专属封面，风格统一+点击吸引，长期运营品牌感大大增强。', example: '小红书博主用专属AI封面模板，笔记平均点击率从6%涨到12%。' },
    ],
  },
  marketing: {
    title: '营销提示词2026 | 品牌推广/内容营销/增长黑客AI Prompt模板',
    description: '35+营销场景AI提示词：用户画像、品牌定位、USP提炼、内容营销选题、SEO关键词研究、社媒运营日历、活动策划、裂变增长、转化文案、数据分析报告。适合市场部、运营、独立创业者。',
    keywords: '营销提示词, 品牌营销, 内容营销, 增长黑客, SEO关键词, 社媒运营, 活动策划, 转化文案, 用户画像, USP提炼, AI营销助手',
    ogTitle: '35+ 营销AI提示词｜从定位到增长全链路模板',
    ogDesc: '市场人必备：品牌定位/内容选题/SEO/社媒/活动/裂变/数据分析全场景。',
    introTitle: '营销人专属AI提示词全链路模板',
    introH2: '让AI做你的市场智囊：从「不知道做什么」到「知道为什么这么做」',
    introPara: [
      '很多营销人用AI只做「写文案」一件事，太浪费了。AI真正的价值是：帮你用1小时做出过去需要1周的市场研究和策略推导——用户画像、竞品分析、定位推导、内容矩阵、投放方案、增长实验。',
      '不要一上来就让AI写文案。正确的使用顺序是：① 让AI帮你做用户访谈大纲→收集真实用户声音；② 让AI从用户原话里提炼痛点、需求、心智模型；③ 基于这些产出品牌定位、USP、内容选题；④ 最后才是写具体文案。这个顺序走下来，AI输出的文案精准度提高3倍以上。',
      '本页35+提示词按营销漏斗分类：品牌认知层→用户拉新层→转化留存层→数据分析层，每个环节都有可直接套用的专业级模板。',
    ],
    tipsTitle: '营销AI高效落地的5个关键',
    tips: [
      { title: '先做数据收集再让AI分析', desc: '把行业报告、竞品文案、用户评论、客服聊天记录导入AI，再让它做归纳分析，结论质量远高于凭空让AI「假设」。' },
      { title: '强制要求结构化输出', desc: '不要写「帮我做营销方案」，要写「输出格式：目标→策略→执行→指标→预算→风险→备选方案，每部分不少于X点」。' },
      { title: '让AI扮演「挑剔的用户」', desc: '生成营销文案后，追加一句「现在你是我们最挑剔的目标客户，请逐条驳斥这个文案的每一个卖点」，反推文案漏洞。' },
      { title: 'A/B测试思维', desc: '让AI同时产出3个版本（保守型/激进型/情感型），跑A/B测试看数据，不要凭主观选最好的那个。' },
      { title: '持续迭代Prompt', desc: '把每次效果好的提示词保存下来，标注：什么场景下有效、产出质量评价、适用/不适用条件，形成个人知识库。' },
    ],
    faqs: [
      { q: 'AI做的营销方案可以直接用吗？', a: '方向可以用，细节必须调。AI的优势在于覆盖面广、速度快、能列出所有你没想到的选项；但劣势是不知道你的真实数据（预算、团队、历史ROI、公司政治）。一定要把你的约束条件加进去，再做人工筛选判断。' },
      { q: '怎么让AI帮我做竞品分析？', a: '给AI提供：① 你自己的产品信息 ② 3-5家主要竞品的官网/公众号/社媒内容 ③ 行业报告数据。然后让它输出：竞品定位对比矩阵、各家内容策略梳理、差异化机会点，注意一定让它先列「事实」再做「分析」，避免编造。' },
      { q: 'AI写的文案为什么总是很「营销味」，不够真实？', a: '3个调整：① 提示词加「像朋友聊天一样说话，不要用形容词堆砌，只说具体事实和利益点」；② 给它3篇你觉得写得好的真实爆款文案作为风格参考；③ 生成后再给AI一轮指令：「重写，删除所有没有信息增量的形容词和套话」。' },
    ],
    useCases: [
      { name: '初创公司从0到1品牌冷启动', desc: '没有市场团队？用AI完成品牌定位→内容矩阵→前1000个用户获取方案，省钱又高效。', example: '某SaaS创业团队用AI营销Prompt，3个月时间完成品牌0到1冷启动，获取首2000个注册用户。' },
      { name: '独立站/电商增长运营', desc: '每周自动出：内容选题、EDM邮件文案、Google Ads变体、社媒活动策划，只需要一个人执行。', example: '跨境独立站运营+AI提示词，1人顶3人团队，ROI从1:1.8提升到1:3.5。' },
      { name: '甲方市场部降本增效', desc: '把重复性工作（周报、月报、内容选题、竞品监测）交给AI，团队聚焦高价值策略和创意。', example: '某品牌市场部把周报撰写时间从6小时降到20分钟，每月多出2天做策略。' },
    ],
  },
  business: {
    title: '商业提示词2026 | 创业/商业计划书/项目管理AI Prompt',
    description: '28+精选商业场景AI提示词：创业项目评估、BP商业计划书撰写、行业研究、竞品分析、OKR制定、会议纪要、项目管理SOP、商业模式设计、融资路演、投资人问答。适合创始人、产品经理、项目经理。',
    keywords: '商业提示词, 商业计划书, 创业AI, 行业研究, OKR制定, 项目管理, 会议纪要, 商业模式, 融资路演, 竞品分析',
    ogTitle: '28+ 商业AI提示词｜创业/项目/管理一站式模板',
    ogDesc: '创始人、产品经理、项目经理必备：BP、OKR、竞品、会议全场景。',
    introTitle: '商业人士专属AI提示词库',
    introH2: '让AI成为你的商业顾问：从idea验证到项目落地全流程支持',
    introPara: [
      '创业者每天要做几百个决策，但真正能帮你出主意的人很少。AI可以成为你的「永远有空的商业顾问」——只要提示词对，它能挑战你的假设、找出漏洞、补全你没想到的可能性。',
      '关键是不要让AI「拍马屁」。一定要在提示词里加：「请你扮演我最严厉的天使投资人，毫不客气地指出我这个方案的每一个漏洞，按严重程度排序，每条给出反驳依据」——这样出来的分析才有价值。',
      '本页28+商业提示词覆盖：创业启动（BP+评估+竞品）、日常管理（OKR+会议+SOP）、项目推进（拆解+风险+复盘）、融资发展（路演+尽调+估值）。每个提示词都参考了一线VC和咨询公司的工作方法论。',
    ],
    tipsTitle: '商业决策用AI的5个正确姿势',
    tips: [
      { title: '让AI扮演反对者', desc: '不要让AI说好听的，让它当魔鬼代言人。永远让AI「反驳你的方案」而不是「支持你的方案」。' },
      { title: '要求它引用真实数据', desc: '涉及市场规模、增长率、趋势的数据，让AI注明「数据来源」和「可信度评估」，避免编造。' },
      { title: '先拆解再求解', desc: '大问题（如「我这个项目能成吗」）AI答不好。拆成：市场够不够大→我有没有优势→商业模式跑得通吗→风险我担不担得起，逐个击破。' },
      { title: '强制输出表格和矩阵', desc: '让AI用SWOT矩阵、竞品对比表、成本收益分析表输出，比大段文字更方便做决策。' },
      { title: '多模型交叉验证', desc: '重要决策，同一个问题分别问GPT-5、Claude、Kimi，看它们的共识和分歧，综合判断。' },
    ],
    faqs: [
      { q: 'AI能帮我写融资BP吗？会不会很模板化？', a: 'AI能写BP框架和90%的文字，但「核心故事」一定要你自己写。使用方法：先让AI输出BP的标准结构→每个部分你先写200字核心内容→让AI扩写+润色+找数据支撑。重要：财务预测、团队介绍、你做过什么验证，绝对不要让AI编，一定要真实。' },
      { q: '我是新手管理者，怎么用AI快速上手？', a: '先从会议纪要和任务拆解开始。① 每次会议录音转文字后让AI出「3段式纪要：结论+行动项+后续跟进」；② 每周工作：让AI把你的大目标拆解为具体的周任务+验收标准。坚持2个月，管理能力肉眼可见升级。' },
      { q: 'AI做的行业研究可信吗？', a: '可信但不可全信。AI能帮你快速做行业全景扫描和信息聚合，但关键数据（总规模、增速、头部玩家占比）一定要交叉验证（去看券商研报、上市公司财报、行业协会数据）。把AI当「信息搜集助手」+「归纳整理者」，不要当唯一信息源。' },
    ],
    useCases: [
      { name: '早期创业者快速打磨BP', desc: '想法→BP终稿，用提示词+2-3轮打磨，一周完成原本需要1个月的BP撰写+修改。', example: '创业者小张用AI BP模板，1周出终稿，拿到种子轮TS。' },
      { name: '产品经理日常工作', desc: '需求文档PRD、用户故事、竞品拆解、OKR复盘——让AI做你的助理，专心做产品决策。', example: '资深PM把PRD初稿时间从3天缩到半天，多出来的时间全给用户访谈和数据分析。' },
      { name: '管理者降本提效', desc: '会议纪要、周报、月报、SOP文档、新人入职手册，AI一键生成不烧脑。', example: '某15人团队管理文档工作时间下降60%，员工满意度显著上升。' },
    ],
  },
  education: {
    title: '教育学习提示词2026 | 高效学习/备考/家教AI Prompt模板',
    description: '32+精选教育场景AI提示词：语言学习（英语/日语/雅思）、考试备考（考研/公考/考证）、记忆背诵、论文开题、作业辅导、儿童启蒙、思维导图、知识讲解（费曼学习法）、学习计划制定。',
    keywords: '教育提示词, 学习AI, 英语学习Prompt, 考研备考, 费曼学习法, 思维导图生成, 论文开题, 雅思写作模板, 语言交换AI, 儿童启蒙',
    ogTitle: '32+ 学习AI提示词｜费曼法+记忆法+备考模板',
    ogDesc: '语言、考试、论文、记忆、启蒙全覆盖：让你的AI成为私人家教。',
    introTitle: '学习教育全场景AI提示词库',
    introH2: 'AI时代的正确学习方法：不是让AI替你学，是让AI教你怎么学',
    introPara: [
      '很多学生用AI作弊（直接让AI写作业），短期拿高分长期害自己。正确的用法是：把AI当「苏格拉底式老师」——它不直接给答案，而是不断向你提问、帮你找到知识盲区、用你听懂的话讲明白复杂概念。',
      '费曼学习法提示词是本页最受欢迎的系列：你选一个知识点，AI让你「用一句话讲给10岁小孩听」，你说了之后它挑出你讲错和讲不清楚的地方，再让你修正——经过2-3轮你对概念的理解直接到「能教别人」的程度。',
      '本页提示词按学习类型分类：语言学习、考试备考、记忆背诵、论文科研、儿童启蒙、通用学习法。不管你是学生、职场人充电、家长辅导娃，都能找到对应场景的专业模板。',
    ],
    tipsTitle: '用AI高效学习的6个黄金法则',
    tips: [
      { title: '不要直接要答案', desc: '替换「这个题怎么做」→「这道题考什么知识点？给我类似例题和解题思路，我自己解」，学习效果翻3倍。' },
      { title: '用「费曼学习法」套AI', desc: '万能句式：「你现在是一个10岁小孩，请你XX，然后用你自己的话再讲一遍」，让AI帮你检查理解漏洞。' },
      { title: '间隔重复+AI出题', desc: '学完一个知识点：「请根据刚才讲的XX，出5道选择题+3道简答题+2道应用题，难度从浅到深」，做完再让AI批改+讲解。' },
      { title: '语言学习：角色扮演', desc: '想学商务英语写作？→「你是一家硅谷公司的CEO，我是你的市场总监，请用英语和我讨论下周发布会的准备工作，纠正我每一个语法和表达不地道的地方」。' },
      { title: '考试前：让AI出模拟卷', desc: '指定考点、题型分布、难度系数，让AI出题+附详细讲解，自己掐时间做完再对答案。' },
      { title: '论文：AI做导师不是代写', desc: '正确用法：让AI帮你找研究空白→列文献→定框架→指出论证漏洞→润色语言。绝对不要让AI写正文。' },
    ],
    faqs: [
      { q: '用AI学习英语有什么特别好的方法？', a: '推荐3个：① 角色扮演对话（指定场景+难度+纠正模式）；② 「双语对照精读」：让AI把英语文章逐段翻译+标注生词+语法难点讲解；③ 写作：写一篇作文→让AI先打分（按雅思/托福标准）→指出5个最大问题→给1篇7分范文+对比差异。' },
      { q: '孩子能用AI学习吗？家长怎么控制？', a: '可以用，但一定要家长陪同+明确规则：① 低年级（小学）：只让AI当「讲故事的人」和「十万个为什么回答者」，绝对不要用来抄作业；② 高年级：教孩子「费曼学习法」的正确用法；③ 定期查看AI使用记录。本页「儿童启蒙」分类的提示词都是经过设计适合孩子的。' },
      { q: '考研/考证，AI能帮我做什么？', a: '三件事效率最高：① 把几百页教材→让AI提炼成思维导图+重点标注；② 刷题时做不出来→让AI讲解考点（不是给答案）；③ 最后冲刺：让AI帮你做「薄弱知识点诊断」+针对性出题强化。注意：政治主观题、专业课论述题一定自己写，AI只做润色。' },
    ],
    useCases: [
      { name: '考研备考时间压缩', desc: '把厚厚的参考书让AI提炼+分章节出题，备考效率提升一倍，尤其适合考数学和专业课。', example: '二战考生用AI提示词+2个月冲刺，数学从90分提到130+，成功上岸。' },
      { name: '职场人充电学新技能', desc: '每天只有1小时学习时间？让AI给你定制「15分钟/天21天掌握XX技能」的微学习计划+每日验收题。', example: '产品经理用21天微学习计划+AI验收，成功转行数据分析岗位。' },
      { name: '家长辅导孩子不鸡飞狗跳', desc: '娃问「为什么」你答不上？让AI用娃听懂的话解释+扩展3个相关小知识+一个动手小实验。', example: '小学家长用AI启蒙提示词，每天和娃做1个科学小实验，孩子对自然科学兴趣大增。' },
    ],
  },
  creative: {
    title: '创意提示词2026 | 广告创意/短视频脚本/故事小说AI Prompt',
    description: '25+精选创意场景AI提示词：广告创意idea脑暴、短视频脚本（抖音/快手/视频号）、故事小说写作、剧本杀剧本、品牌slogan、海报创意、播客选题、游戏世界观设计、歌词创作、脱口秀段子。',
    keywords: '创意提示词, 广告创意, 短视频脚本, AI写小说, 剧本杀, slogan生成, 播客选题, 游戏世界观, 脱口秀段子, 品牌创意',
    ogTitle: '25+ 创意AI提示词｜短视频/故事/广告/剧本一键灵感',
    ogDesc: '再也不缺灵感：短视频脚本、小说剧情、广告创意、游戏世界观全场景。',
    introTitle: '创意灵感永不枯竭AI提示词库',
    introH2: '卡壳写不出来？AI不是替代你创意，而是给你10个方向让你挑',
    introPara: [
      '创意工作者最常见的焦虑是「今天没灵感」。但真正的高手都知道：灵感不是等出来的，是用脑暴法「推」出来的。AI最擅长的就是这个——给它一个模糊方向，它能从各个你没想到的角度输出创意草稿。',
      '使用创意提示词3步法：① 让AI「脑暴20个idea」（不要质量先求数量）；② 你圈出3个最有感觉的，让AI「每个扩写成2个版本」；③ 最后选中1个，让AI「打磨到专业级」。经过这个流程，AI的创意+你的审美，产出就是大师级。',
      '本页25+创意提示词按类型分类：短视频内容、广告营销、文学创作、娱乐内容、品牌设计。每个提示词附带多种变体，保证每次产出不同。',
    ],
    tipsTitle: 'AI创意高质量输出的5个技巧',
    tips: [
      { title: '指定创意参考系', desc: '不说「写个视频脚本」，要说「抖音美食探店类，参考账号@特别乌啦啦的风格，开场10秒要有反差钩子，时长50-60秒」。' },
      { title: '先求数量再挑质量', desc: '脑暴阶段永远要20个不要5个。很多最好的idea是第12-18个才出现的，前10个往往是套路。' },
      { title: '「混搭」创意永远有效', desc: '让AI把两个不相关元素混搭：「把寿司和悬疑电影结合，出一个餐厅广告创意」，往往出奇效。' },
      { title: '给AI看你满意的案例', desc: '粘贴3条你觉得写得好的同类型创意，让AI「分析这3个案例的共同结构和特点，然后用同样的结构写10个我的主题」。' },
      { title: '加「反转」和「限制」', desc: '创意太平淡？追加：「加一个意想不到的反转结尾」或者「全程不能用XX词」，限制越多创意越有趣。' },
    ],
    faqs: [
      { q: 'AI写的短视频脚本会不会和别人撞车？', a: '直接用AI第一版输出会撞，因为AI的训练数据都是公开内容。但只要你在流程第2步「加入你自己的品牌元素/个人经历/真实故事」，再让AI改写，就完全是你的专属脚本了。' },
      { q: '写长文（中篇小说/剧本杀）AI能驾驭吗？', a: '结构和大纲AI能帮你写得非常漂亮，章节内容建议一章一章写+你自己调整前后衔接。核心技巧：写每章前把「已发生剧情大纲+本章目标+人物状态」喂给AI，保证前后人物一致、伏笔都能收回来。' },
      { q: '广告公司可以直接用AI创意吗？', a: '可以作为「内部脑暴工具」——用AI出50个创意草稿，创意总监们再挑20个做内部评审，最后出3个给客户。用这个流程提案数量和通过率都翻倍。但最终交付客户的版本一定要人工创意+打磨。' },
    ],
    useCases: [
      { name: '短视频博主日更', desc: '每天不知道拍什么？用AI出1周7天选题+脚本+标题+封面文字，只需要拍+剪。', example: '美食博主用AI脚本模板，保持日更3个月，粉丝从1000涨到12万。' },
      { name: '广告公司提案', desc: '1小时出3个方向的脑暴创意+30个idea+3个完整脚本，客户提案弹药充足。', example: '某广告公司用AI辅助创意脑暴，比稿中标率从15%提升到40%。' },
      { name: '网文作者缓解卡文', desc: '卡剧情？让AI做剧情推演：给出5种后续走向+各自的爽点/虐点分析，帮你找到最合适的那一个。', example: '签约作者卡文时用AI剧情推演，月更从15万字提升到30万字，读者催更少。' },
    ],
  },
  career: {
    title: '职场提示词2026 | 简历优化/面试/汇报/沟通AI Prompt',
    description: '30+精选职场场景AI提示词：简历优化+ATS适配、自我介绍、面试问答（行为面试+技术面+压力面）、周报月报、工作汇报PPT大纲、跨部门沟通邮件、向上管理、加薪谈判、离职交接、Office办公。',
    keywords: '职场提示词, 简历优化, 面试AI, 工作汇报, 向上管理, 加薪谈判, 周报月报, 邮件写作, Office技巧, 职业生涯',
    ogTitle: '30+ 职场AI提示词｜简历/面试/汇报/晋升全场景',
    ogDesc: '从求职到晋升：简历、面试、周报、沟通、加薪一站式模板。',
    introTitle: '职场进阶全场景AI提示词库',
    introH2: '把AI变成你的职场私人教练：不说套话，每一步都给你可直接用的模板',
    introPara: [
      '职场人最缺的不是能力，是「不知道正确姿势是什么」。简历怎么写才能过ATS？面试怎么回答「你最大的缺点是什么」？周报怎么写让老板记住你的功劳？跨部门撕逼邮件怎么写既专业又占理？这些问题，AI都有标准答案。',
      '最关键的使用原则是：不要泛泛地问「怎么写好周报」，要给AI上下文——你做了什么事、项目背景、遇到了什么困难、怎么解决的、结果是什么数据、你想突出自己哪方面能力。这样AI给你的才是「你的周报」，不是任何人都能用的模板。',
      '本页30+提示词按职业阶段分类：求职阶段（简历+笔试+面试）、日常工作（周报+邮件+PPT）、进阶管理（向上管理+跨部门+团队）、关键节点（加薪+跳槽+离职）。覆盖所有你会遇到的重要场景。',
    ],
    tipsTitle: 'AI帮你升职加薪的5个正确用法',
    tips: [
      { title: '写简历：永远给原始信息+让AI优化', desc: '不要让AI编经历。把你做过的事按「动作+项目+结果+数据」写成流水账，再让AI按STAR法则优化+匹配岗位JD关键词+ATS适配。' },
      { title: '面试准备：AI当模拟面试官', desc: '把目标公司/岗位JD喂给AI，让它模拟真实面试：行为面+技术面+压力面，每道题回答后AI给你打分+改进建议，比自己瞎练高效10倍。' },
      { title: '周报汇报：3段式+量化', desc: '让AI严格按「核心成果（3条，必须量化）+进行中工作+下周计划」输出，不要写流水账，老板只看结果。' },
      { title: '向上管理邮件：先共情+再说事+给选项', desc: '写任何向老板汇报问题的邮件前，让AI帮你调整语气：「帮我把这段话改得更有解决方案导向，不要像抱怨，先说理解，再说3个选项及各自优劣，以及我建议选哪个」。' },
      { title: '加薪谈判：不要裸聊', desc: '让AI帮你做3件事：① 市场薪资报告定位 ② 你的贡献量化清单 ③ 3轮谈判脚本（第1轮怎么开口+对方压价怎么回应+最终Accept/Reject阈值）。' },
    ],
    faqs: [
      { q: 'AI优化的简历会不会被HR看出来？会不会算作弊？', a: '不算作弊。简历优化的行业标准服务一直存在（比如简历代写），AI只是把这个服务民主化了。关键红线：经历绝对真实（只优化表达不编造），面试问你简历上写的每一个点你都能详细讲出来。你要是做不到，说明AI加的东西你不该加。' },
      { q: '跨部门沟通遇到「甩锅侠」，AI能帮我写邮件吗？', a: '当然。告诉AI前因后果+对方甩了什么锅+你有什么证据（聊天记录截图/邮件/文档），然后让它写一封「事实清楚+不带情绪+责任界定明确+有下一步行动建议」的邮件。关键原则：邮件永远只写事实和方案，不写情绪和指责。' },
      { q: '想跳槽但不敢裸辞，AI能帮我做什么？', a: '4件事：① 每周花2小时让AI帮你做市场扫描（同岗位JD变化+技能趋势+薪资变化）；② 悄悄优化好简历+面试脚本；③ 让AI帮你做「跳槽准备Checklist」（作品集/项目复盘/推荐人/离职交接计划）；④ 拿到offer后让AI帮你做薪资谈判+离职沟通脚本。' },
    ],
    useCases: [
      { name: '应届生求职季冲刺', desc: '1个月投100份简历=100个定制版本+10个公司的模拟面试，用AI批量做。', example: '往届求职失败者用AI简历定制+模拟面试，3个月拿3个满意offer。' },
      { name: '中层管理者向上汇报', desc: '季度汇报/年度汇报写出来总感觉没亮点？让AI帮你加故事线+数据可视化建议+高管视角包装。', example: '某部门经理年度汇报经过AI包装+2轮打磨，从被骂3小时变成被点名表扬。' },
      { name: '准备跳槽/加薪谈判', desc: '薪资谈判最忌讳现场发挥，用AI提前准备3轮脚本，每一种情况都有预案。', example: '某工程师拿着AI脚本谈加薪，从加10%谈到加25%+签字费。' },
    ],
  },
}

// 根据分类名获取CATEGORY_SEO的key
function getSeoKey(categoryName: string): string | null {
  const map: Record<string, string> = {
    '写作': 'writing',
    '编程': 'coding',
    '图像生成': 'image',
    '营销': 'marketing',
    '商业': 'business',
    '教育': 'education',
    '创意': 'creative',
    '职场': 'career',
  }
  return map[categoryName] || null
}

export async function generateStaticParams() {
  const cats = await getCategories()
  return cats.map((c) => ({ slug: c.name }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cats = await getCategories()
  const cat = cats.find((c) => c.name === decodeURIComponent(params.slug))
  if (!cat) return {}

  const seoKey = getSeoKey(cat.name)
  const seo = seoKey ? CATEGORY_SEO[seoKey] : null

  return {
    title: seo?.title || `${cat.name}AI提示词 - PromptMarket`,
    description: seo?.description || `精选${cat.prompt_count}+${cat.name}类AI提示词模板，覆盖ChatGPT、Midjourney、Claude等工具场景，一键复制即用。`,
    keywords: seo?.keywords || `${cat.name}提示词, AI${cat.name}, ${cat.name}Prompt, ${cat.name}模板`,
    alternates: {
      canonical: `https://prompts.link.cn/category/${encodeURIComponent(cat.name)}`,
    },
    openGraph: {
      title: seo?.ogTitle || `${cat.name}类AI提示词模板库 | PromptMarket`,
      description: seo?.ogDesc || `${cat.prompt_count}+精选${cat.name}提示词，复制即用！`,
      type: 'website',
      url: `https://prompts.link.cn/category/${encodeURIComponent(cat.name)}`,
      locale: 'zh_CN',
      siteName: 'PromptMarket - AI提示词免费库',
      images: [{ url: 'https://prompts.link.cn/og-image.png', width: 1200, height: 630, alt: `${cat.name}AI提示词` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo?.ogTitle || `${cat.name}类AI提示词模板库`,
      description: seo?.ogDesc || `${cat.prompt_count}+精选${cat.name}提示词`,
      images: ['https://prompts.link.cn/og-image.png'],
    },
  }
}

export default async function CategoryPage({ params }: Props) {
  const cats = await getCategories()
  const categoryName = decodeURIComponent(params.slug)
  const cat = cats.find((c) => c.name === categoryName)
  if (!cat) notFound()

  const seoKey = getSeoKey(categoryName)
  const seo = seoKey ? CATEGORY_SEO[seoKey] : null
  const prompts = await getPromptsByCategory(categoryName)
  const trending = await getTrendingPrompts(6)
  const allCats = await getCategories()

  // CollectionPage + FAQPage Schema
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: seo?.title || `${categoryName}AI提示词`,
    description: seo?.description || `${categoryName}类提示词模板集合`,
    url: `https://prompts.link.cn/category/${encodeURIComponent(categoryName)}`,
    numberOfItems: prompts.length,
  }

  const faqSchema = seo && seo.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: seo.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  } : null

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <StructuredData type="collection" data={collectionSchema as any} />
      {faqSchema && <StructuredData type="faq" data={faqSchema as any} />}

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <nav className="flex items-center text-sm text-gray-500 flex-wrap gap-x-2 gap-y-1">
          <Link href="/" className="hover:text-purple-600 transition">首页</Link>
          <span>/</span>
          <Link href="/prompts" className="hover:text-purple-600 transition">全部提示词</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{cat.emoji} {cat.name}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 text-purple-700 px-4 py-1.5 text-sm font-medium mb-4">
              {cat.emoji} {cat.name}类 · 共 {prompts.length} 条精选提示词
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              {seo?.introTitle || `${cat.name}AI提示词精选模板库`}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
              {seo?.description?.slice(0, 120) || `${prompts.length}条${cat.name}场景AI提示词，覆盖ChatGPT、Claude、Midjourney等工具，专业验证过，一键复制直接用。`}
            </p>
            {/* CTA Bar */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#list" className="inline-flex items-center gap-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 font-semibold shadow-lg shadow-purple-200 transition">
                <Zap className="w-5 h-5" /> 立即浏览模板
              </a>
              <Link href="/submit" className="inline-flex items-center gap-2 rounded-xl bg-white border border-gray-200 hover:border-purple-300 hover:bg-purple-50 text-gray-800 px-6 py-3 font-semibold transition">
                <Sparkles className="w-5 h-5 text-purple-500" /> 提交我的{cat.name}提示词
              </Link>
            </div>
            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
              <div className="rounded-2xl bg-white p-4 shadow-sm border border-gray-100">
                <div className="text-2xl md:text-3xl font-black text-purple-600">{prompts.length}+</div>
                <div className="text-sm text-gray-500 mt-1">精选模板</div>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm border border-gray-100">
                <div className="text-2xl md:text-3xl font-black text-purple-600">100%</div>
                <div className="text-sm text-gray-500 mt-1">免费使用</div>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm border border-gray-100">
                <div className="text-2xl md:text-3xl font-black text-purple-600">1点击</div>
                <div className="text-sm text-gray-500 mt-1">复制即用</div>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm border border-gray-100">
                <div className="text-2xl md:text-3xl font-black text-purple-600">全平台</div>
                <div className="text-sm text-gray-500 mt-1">工具兼容</div>
              </div>
            </div>
          </div>

          {/* Quick Nav: 其他分类跳转 */}
          <aside className="w-full md:w-64 shrink-0">
            <div className="sticky top-6 rounded-2xl bg-white border border-gray-100 shadow-sm p-5">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">浏览其他分类</h3>
              <div className="flex flex-col gap-1.5">
                {allCats.map((c) => (
                  <Link
                    key={c.id}
                    href={`/category/${encodeURIComponent(c.name)}`}
                    className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm transition ${
                      c.name === categoryName
                        ? 'bg-purple-50 text-purple-700 font-semibold'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span>{c.emoji} {c.name}</span>
                    <span className="text-xs text-gray-400">{c.prompt_count}</span>
                  </Link>
                ))}
                <Link
                  href="/skills"
                  className="mt-2 flex items-center justify-between rounded-lg px-3 py-2 text-sm bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 hover:from-purple-100 hover:to-pink-100 transition font-medium"
                >
                  <span>🤖 AI技能专区</span>
                  <span className="text-xs">NEW</span>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* SEO长文内容（核心：避免和其他分类重复） */}
      {seo && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <article className="lg:col-span-2 prose prose-purple max-w-none bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {seo.introH2}
              </h2>
              {seo.introPara.map((p, i) => (
                <p key={i} className="text-gray-700 leading-8 mb-4 text-base md:text-[17px]">{p}</p>
              ))}

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-10 mb-5 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-purple-500" /> {seo.tipsTitle}
              </h3>
              <div className="space-y-3 not-prose">
                {seo.tips.map((t, i) => (
                  <div key={i} className="flex gap-3 rounded-xl p-4 bg-gradient-to-r from-purple-50/60 to-white border border-purple-100">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{t.title}</div>
                      <div className="text-sm text-gray-600 mt-1 leading-6">{t.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-10 mb-5 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-purple-500" /> 实战案例 & 效果
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose">
                {seo.useCases.map((u, i) => (
                  <div key={i} className="rounded-xl border border-gray-200 bg-white p-4 hover:shadow-md hover:border-purple-200 transition">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <div className="font-semibold text-gray-900 text-sm">{u.name}</div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2 leading-6">{u.desc}</p>
                    <p className="text-xs text-purple-600 font-medium bg-purple-50 rounded-md px-2 py-1 inline-block">
                      💡 {u.example}
                    </p>
                  </div>
                ))}
              </div>

              {seo.faqs && seo.faqs.length > 0 && (
                <>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-10 mb-5 flex items-center gap-2">
                    <Star className="w-6 h-6 text-purple-500" /> 常见问题 FAQ
                  </h3>
                  <div className="space-y-3 not-prose">
                    {seo.faqs.map((f, i) => (
                      <details key={i} className="group rounded-xl border border-gray-200 bg-white p-5 open:bg-purple-50/30 open:border-purple-200 transition">
                        <summary className="cursor-pointer font-semibold text-gray-900 list-none flex items-center justify-between gap-3">
                          <span>Q{i + 1}. {f.q}</span>
                          <span className="text-purple-500 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                        </summary>
                        <p className="mt-3 text-gray-700 leading-7 text-[15px]">{f.a}</p>
                      </details>
                    ))}
                  </div>
                </>
              )}
            </article>

            {/* 侧栏：热门提示词+CTA */}
            <aside className="space-y-6">
              <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-5">
                <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-orange-500" /> 全站热门TOP6
                </h3>
                <div className="space-y-3">
                  {trending.map((p, i) => (
                    <Link
                      key={p.id}
                      href={`/prompt/${p.id}`}
                      className="flex items-start gap-3 rounded-lg p-2 hover:bg-purple-50 transition group"
                    >
                      <div className={`shrink-0 w-7 h-7 rounded-md flex items-center justify-center text-sm font-bold ${
                        i < 3 ? 'bg-gradient-to-br from-orange-400 to-pink-500 text-white' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {i + 1}
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-medium text-gray-900 group-hover:text-purple-700 line-clamp-2">
                          {p.title.replace(/\[(Trae Skill|.*?)\]\s*/g, '')}
                        </div>
                        <div className="text-xs text-gray-400 mt-0.5">
                          {p.category} · {p.sales} 人使用
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-700 p-6 text-white">
                <div className="text-lg font-bold mb-2">找不到合适的提示词？</div>
                <p className="text-sm text-purple-200 mb-4 leading-6">
                  试试提交你的需求，我们的团队会帮你定制专属{categoryName}提示词，或者分享你的原创模板获得曝光。
                </p>
                <div className="flex flex-col gap-2">
                  <Link href="/submit" className="bg-white text-purple-700 hover:bg-purple-50 rounded-lg px-4 py-2.5 text-sm font-semibold text-center transition">
                    ✍️ 提交我自己的
                  </Link>
                  <Link href="/blog" className="border border-white/30 text-white hover:bg-white/10 rounded-lg px-4 py-2.5 text-sm font-medium text-center transition">
                    📚 看提示词教程
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </section>
      )}

      {/* Prompt列表 */}
      <section id="list" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{cat.emoji} {cat.name}提示词模板</h2>
            <p className="text-gray-500 mt-1">共 {prompts.length} 条 · 已验证可用 · 复制即用</p>
          </div>
          <Link
            href="/prompts"
            className="inline-flex items-center gap-1 text-sm text-purple-600 hover:text-purple-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4" /> 查看全部分类
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {prompts.map((p) => (
            <Link
              key={p.id}
              href={`/prompt/${p.id}`}
              className="group rounded-2xl bg-white border border-gray-100 p-5 hover:shadow-xl hover:-translate-y-1 hover:border-purple-200 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-purple-50 text-purple-700">
                  {p.type === 'skill' ? '🤖 AI技能' : p.category}
                </span>
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" /> {p.rating}
                </div>
              </div>
              <h3 className="font-bold text-gray-900 group-hover:text-purple-700 transition mb-2 line-clamp-2 leading-snug">
                {p.title}
              </h3>
              <p className="text-sm text-gray-500 line-clamp-3 leading-6 mb-4">{p.description}</p>
              <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                <span className="text-xs text-gray-400">{p.sales} 人已复制</span>
                <span className="text-xs font-semibold text-purple-600 group-hover:translate-x-1 transition-transform">
                  查看详情 →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
