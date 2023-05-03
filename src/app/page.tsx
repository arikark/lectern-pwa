'use client'

import { useEffect } from 'react'

export type PageProps = {
  params?: { pathId: string }
}

export default function Page({ params }: PageProps) {
  console.log(params)

  let title = null
  let text = null
  let url = null

  useEffect(() => {
    window.addEventListener('DOMContentLoaded', () => {
      const parsedUrl = new URL(window.location.pathname)
      title = parsedUrl.searchParams.get('title')
      text = parsedUrl.searchParams.get('text')
      url = parsedUrl.searchParams.get('url')
    })
  }, [])

  return (
    <div className="flex h-screen w-full flex-col">
      hi
      <div>{title}</div>
      <div>{text}</div>
      <div>{url}</div>
      {/* <Flow /> */}
    </div>
  )
}
