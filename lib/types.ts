export type Prompt = {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  /** 商品类型：普通提示词(prompt) 或 AI技能(skill) */
  type?: 'prompt' | 'skill';
  /** Skill专用：适用平台 (Trae/Claude/Cursor) */
  skill_platform?: 'Trae' | 'Claude' | 'Cursor' | string;
  /** Skill专用：SKILL.md 原文内容（上传的markdown） */
  skill_md?: string;
  price: number;
  rating: number;
  reviews: number;
  sales: number;
  author_id: string;
  author_name: string;
  image_url?: string;
  tags?: string[];
  created_at: string;
  updated_at: string;
};

export type Category = {
  id: string;
  name: string;
  emoji: string;
  prompt_count: number;
};

export type User = {
  id: string;
  email: string;
  name: string;
  avatar_url?: string;
};
