import React, { useState } from 'react'
import { useGroupStore } from '../store/useGroupStore'
import { X } from 'lucide-react'
import { ImageModal } from './ImageModal'


export default function GroupChatHeader() {
    const { selectedGroup, setSelectedGroup } = useGroupStore()
    const [selectImage, setSelectedImage]= useState(null)

  return (
    <div className="p-2.5 border-b border-base-300">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="avatar">
          <div className="size-10 rounded-full relative">
            <img src={selectedGroup.image || "/avatar.png"} alt={selectedGroup.name} onClick={() => setSelectedImage(selectedGroup.image)} />
          </div>
        </div>

        {/* User info */}
        <div>
          <h3 className="font-medium">{selectedGroup.name}</h3>
          <p className="text-sm text-base-content/70">
            Group
          </p>
        </div>
      </div>

      <button onClick={() => setSelectedGroup(null)}>
        <X />
      </button>
    </div>
    <ImageModal
    imageUrl={selectImage}
    isOpen={!!selectImage}
    onClose={() => setSelectedImage(null)}
    />
  </div>
  )
}
