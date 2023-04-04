import Flow from '../Flow'

export type PageProps = {
  params?: { pathId: string }
}

export default function Page({ params }: PageProps) {
  console.log(params)
  return (
    <div className="flex h-screen w-full flex-col">
      <Flow />
    </div>
  )
}
