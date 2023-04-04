import { ReactNode } from 'react'

export function RootLayout({ children }: { children: ReactNode }) {
  return <div className="h-screen w-screen bg-indigo-700">{children}</div>
}
