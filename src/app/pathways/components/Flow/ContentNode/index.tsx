import { Handle, type Node, type NodeProps, Position } from 'reactflow'

const handleStyle = { left: 10 }

type NodeData = {
  title: string
  link: string
}

export type CustomNode = Node<NodeData>

export default function ContentNode({ data }: NodeProps<NodeData>) {
  // const onChange = useCallback((evt) => {
  //   console.log(evt.target.value)
  // }, [])

  return (
    <>
      <Handle id="a" type="target" position={Position.Top} />
      <div
        className="flex w-48
			 flex-col rounded-md bg-gray-200 font-mono
			 sm:w-96"
      >
        <div className="h-1/6 w-full whitespace-nowrap rounded-t-md bg-blue-300 p-2 text-gray-800">
          <div className="overflow-clip overflow-ellipsis ">{data.title}</div>
        </div>
        <div className="flex flex-col">
          <div className="flex h-20 flex-row"></div>
        </div>

        {/* <div className="flex flex-row items-center gap-2 p-2">
          <label htmlFor="text">Text:</label>
          <input
            className="rounded-sm p-1 text-gray-800"
            id="text"
            name="text"
            onChange={onChange}
          />
        </div> */}
      </div>
      <Handle type="source" position={Position.Bottom} id="b" />
      <Handle type="source" position={Position.Left} id="c" />
      <Handle type="source" position={Position.Right} id="d" />
    </>
  )
}
