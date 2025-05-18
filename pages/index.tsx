// pages/index.tsx
import Head from 'next/head';
import Detector from '@/components/Detector';

export default function Home() {
  return (
    <>
      <Head>
        <title>GPT Plagiarism Checker | MirrorAI</title>
        <meta name="description" content="Detect AI-generated content using MirrorAI." />
        <meta name="keywords" content="AI detector, GPT checker, ChatGPT plagiarism, AI content checker" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-8">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">MirrorAI - GPT & AI Plagiarism Checker</h1>
        <Detector />
      </main>
    </>
  );
}
