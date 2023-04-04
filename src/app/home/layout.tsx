import { type ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="h-full w-screen">
      <div className="h-1/6 w-full rounded-b-md bg-fuchsia-600"></div>
      {children}
    </div>
  )
}
