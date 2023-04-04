import { type ReactNode } from 'react'

import '~/styles/globals.css'

export function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <title>Lectern</title>
        <meta name="description" content="Your upskilling pathway" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div className="h-screen w-screen bg-gray-100">{children}</div>
      </body>
    </html>
  )
}

// export default api.withTRPC(RootLayout)
export default RootLayout
