import { type ReactNode } from 'react'
import Sidebar from './Sidebar'

export function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex-row">
      <Sidebar />
      {children}
    </div>
  )
}

// export default api.withTRPC(RootLayout)
export default RootLayout
