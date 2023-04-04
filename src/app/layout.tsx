import { type ReactNode } from 'react'
import Head from 'next/head'

import '~/styles/globals.css'
import { api } from '~/utils/api'

export function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <title>Lectern</title>
        <meta name="description" content="Your upskilling pathway" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div className="h-screen w-screen">{children}</div>
      </body>
    </html>
  )
}

// export default api.withTRPC(RootLayout)
export default RootLayout
