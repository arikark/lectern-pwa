'use client'

import { useRouter } from 'next/router'

import { type PageProps } from '.next/types/app/layout'
import Flow from '~/app/[pathId]/Flow'

export default function Page({ params }: PageProps) {
  console.log(params)
  return (
    <div className="flex h-screen w-full flex-col">
      <Flow />
    </div>
  )
}
