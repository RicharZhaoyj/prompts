import { Metadata } from 'next'
import SubmitClient from './submit-client'

export const metadata: Metadata = {
  title: '提交AI提示词 - PromptMarket | 开始赚钱',
  description: '提交您的AI提示词到PromptMarket，分享您的AI专业知识，开始赚钱。支持ChatGPT、Midjourney等提示词。',
  keywords: '提交提示词, 提示词卖家, 卖提示词赚钱, AI创作者',
  openGraph: {
    title: '提交AI提示词 - PromptMarket',
    description: '提交您的AI提示词，分享您的专业知识，开始赚钱。',
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