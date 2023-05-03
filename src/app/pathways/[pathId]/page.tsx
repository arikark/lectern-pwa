import Flow from '../components/Flow'

export type PageProps = {
  params?: { pathId: string }
}

export default function Page({ params }: PageProps) {
  console.log(params)

  return <Flow />
}
