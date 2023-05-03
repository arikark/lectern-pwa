'use client'

import { type DragEvent, useState } from 'react'
import ReactFlow, {
  addEdge,
  type Connection,
  Controls,
  type DefaultEdgeOptions,
  type Edge,
  type FitViewOptions,
  type Node,
  type NodeOrigin,
  type ReactFlowInstance,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
} from 'reactflow'

import 'reactflow/dist/style.css'
import ContentNode from './ContentNode'
import Sidebar from './Sidebar'

const nodeContent = [
  {
    type: 'contentNode',
    title: 'Colt Steele Web Bootcamp',
    link: 'www.udemy.com',
    label: 'default',
  },
  {
    type: 'contentNode',
    title: 'Colt Steele Typescript',
    link: 'www.udemy.com',
    label: 'default',
  },
  {
    type: 'contentNode',
    title: 'Colt Steele Web React',
    link: 'www.udemy.com',
    label: 'default',
  },
  {
    type: 'contentNode',
    title: 'Frontend Masters Intermediate React',
    link: 'www.udemy.com',
    label: 'default',
  },
  {
    type: 'contentNode',
    title: 'Epic React Testing',
    link: 'www.udemy.com',
    label: 'default',
  },
  {
    type: 'contentNode',
    title: 'Cloud Practitioner Bootcamp',
    link: 'www.udemy.com',
    label: 'default',
  },
]

const initialNodes: Node[] = nodeContent.map(
  ({ title, link, label, type }, i) => {
    return {
      id: i.toString(),
      type,
      data: { title, link, label },
      position: { x: 5, y: 150 * i },
    }
  }
)

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

const onDragOver = (event: DragEvent) => {
  event.preventDefault()
  event.dataTransfer.dropEffect = 'move'
}

let id = 0
const getId = () => `dndnode_${id++}`

const nodeOrigin: NodeOrigin = [0.5, 0.5]

const nodeTypes = { contentNode: ContentNode }
const fitViewOptions: FitViewOptions = {
  padding: 0.2,
}
const defaultEdgeOptions: DefaultEdgeOptions = {
  animated: false,
}

const DnDFlow = () => {
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance>()
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = (params: Connection | Edge) =>
    setEdges((eds) => addEdge(params, eds))
  const onInit = (rfi: ReactFlowInstance) => setReactFlowInstance(rfi)

  const onDrop = (event: DragEvent) => {
    event.preventDefault()

    if (reactFlowInstance) {
      const type = event.dataTransfer.getData('application/reactflow')
      const position = reactFlowInstance.project({
        x: event.clientX,
        y: event.clientY - 40,
      })
      const newNode: Node = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      }

      setNodes((nds) => nds.concat(newNode))
    }
  }

  return (
    <div className="flex-column flex h-screen w-screen">
      <ReactFlowProvider>
        <div className="h-screen w-screen flex-grow">
          <ReactFlow
            nodeTypes={nodeTypes}
            nodes={nodes}
            edges={edges}
            onEdgesChange={onEdgesChange}
            onNodesChange={onNodesChange}
            onConnect={onConnect}
            onInit={onInit}
            onDrop={onDrop}
            onDragOver={onDragOver}
            nodeOrigin={nodeOrigin}
            panOnScroll
            fitView
            fitViewOptions={fitViewOptions}
            defaultEdgeOptions={defaultEdgeOptions}
          >
            <Controls />
          </ReactFlow>
        </div>
        <Sidebar />
      </ReactFlowProvider>
    </div>
  )
}

export default DnDFlow
