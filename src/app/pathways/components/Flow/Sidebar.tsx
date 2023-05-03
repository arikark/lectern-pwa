'use client'

import { type DragEvent } from 'react'

const onDragStart = (event: DragEvent, nodeType: string) => {
  event.dataTransfer.setData('application/reactflow', nodeType)
  event.dataTransfer.effectAllowed = 'move'
}

const Sidebar = () => {
  return (
    <aside className="w-1/5 bg-sky-200 p-2">
      <div
        onDragStart={(event: DragEvent) => onDragStart(event, 'contentNode')}
        onDragEnd={console.log}
        draggable
        className="flex
        w-full
        flex-col
			 items-center
       rounded-md
        bg-gray-200
			font-mono"
      >
        course
      </div>
    </aside>
  )
}

export default Sidebar
