import PathwayCard, { PathwayCardProps } from './components/PathwayCard'

export type PageProps = {
  params?: { pathId: string }
}

const pathways: PathwayCardProps[] = [
  {
    title: 'Javascript',
    description: 'Zero to hero',
    slug: '1',
  },
  {
    title: 'Javascript',
    description: 'Zero to hero',
    slug: '2',
  },
  {
    title: 'Javascript',
    description: 'Zero to hero',
    slug: '3',
  },
  {
    title: 'Javascript',
    description: 'Zero to hero',
    slug: '4',
  },
  {
    title: 'Javascript',
    description: 'Zero to hero',
    slug: '5',
  },
]

export default function Page({ params }: PageProps) {
  return (
    <div className="p-4">
      <div className="grid grid-flow-row gap-3 whitespace-nowrap">
        {pathways.map((pathway) => (
          <PathwayCard {...pathway} key={pathway.slug} />
        ))}
      </div>
    </div>
  )
}
