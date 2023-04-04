'use client'

import { useCallback } from 'react'
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  type DefaultEdgeOptions,
  type Edge,
  type FitViewOptions,
  type Node,
  type OnConnect,
  useEdgesState,
  useNodesState,
} from 'reactflow'
import { useRouter } from 'next/router'

import 'reactflow/dist/style.css'
import ContentNode from './ContentNode'

const nodeTypes = { textUpdater: ContentNode }

const nodeContent = [
  {
    type: 'course',
    title: 'Colt Steele Web Bootcamp',
    link: 'www.udemy.com',
  },
  {
    type: 'course',
    title: 'Colt Steele Typescript',
    link: 'www.udemy.com',
  },
  {
    type: 'course',
    title: 'Colt Steele Web React',
    link: 'www.udemy.com',
  },
  {
    type: 'course',
    title: 'Frontend Masters Intermediate React',
    link: 'www.udemy.com',
  },
  {
    type: 'course',
    title: 'Epic React Testing',
    link: 'www.udemy.com',
  },
  {
    type: 'course',
    title: 'Cloud Practitioner Bootcamp',
    link: 'www.udemy.com',
  },
]

const initialNodes: Node[] = nodeContent.map(({ title, link }, i) => {
  return {
    id: i.toString(),
    type: 'textUpdater',
    data: { title, link },
    position: { x: 5, y: 150 * i },
  }
})

const initialEdges: Edge[] = nodeContent.map((data, i) => {
  const id = `e${i}-${i + 1}`
  const source = i.toString()
  const target = (i + 1).toString()
  return {
    id,
    source,
    target,
  }
})

const fitViewOptions: FitViewOptions = {
  padding: 0.2,
}

const defaultEdgeOptions: DefaultEdgeOptions = {
  animated: false,
}

export default function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node[]>(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge[]>(initialEdges)

  // const onNodesChange: OnNodesChange = useCallback(
  //   (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
  //   [setNodes]
  // )
  // const onEdgesChange: OnEdgesChange = useCallback(
  //   (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
  //   [setEdges]
  // )
  const onConnect: OnConnect = useCallback(
    (connection) =>
      setEdges((eds) => addEdge({ ...connection, animated: true }, eds)),
    [setEdges]
  )

  return (
    <div className="h-screen w-screen bg-purple-200">
      <ReactFlow
        nodeTypes={nodeTypes}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        panOnScroll
        fitView
        fitViewOptions={fitViewOptions}
        defaultEdgeOptions={defaultEdgeOptions}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  )
}
