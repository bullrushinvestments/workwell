import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WorkWell',
  description: 'WorkWell is an integrated platform that combines mental health resources with personalized financial planning tools designed specifically for remote workers and small businesses.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">WorkWell</h1>
      <p className="mt-4 text-lg">WorkWell is an integrated platform that combines mental health resources with personalized financial planning tools designed specifically for remote workers and small businesses.</p>
    </main>
  )
}
