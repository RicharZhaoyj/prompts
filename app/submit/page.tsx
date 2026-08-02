import { Metadata } from 'next'
import SubmitClient from './submit-client'

export const metadata: Metadata = {
  title: '提交AI提示词/技能 - PromptMarket | 开始赚钱',
  description: '提交您的AI提示词或AI技能到PromptMarket，分享您的AI专业知识，开始赚钱。支持ChatGPT提示词、TRAE技能、Claude Code技能、Cursor技能等。',
  keywords: '提交提示词,提交AI技能,TRAE技能上传,Claude技能,卖提示词赚钱,AI创作者,SKILL.md',
  openGraph: {
    title: '提交AI提示词/技能 - PromptMarket',
    description: '提交您的AI提示词或AI技能(SKILL.md)，分享您的专业知识，开始赚钱。',
    type: 'website',
    url: 'https://prompts.link.cn/submit',
    siteName: 'PromptMarket',
  },
  alternates: {
    canonical: 'https://prompts.link.cn/submit',
  },
}

export default function SubmitPage() {
  return <SubmitClient />
}