'use client'

import { ChangeEvent, useState } from 'react'

export function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null)
  const [typeMedia, setTypeMedia] = useState<string | null>(null)

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target

    if (!files) {
      return false
    }

    const previewUrl = URL.createObjectURL(files[0])

    setTypeMedia(files[0].type)
    setPreview(previewUrl)
  }
  return (
    <>
      <input
        onChange={onFileSelected}
        type="file"
        id="midia"
        accept="image/*,video/*"
        className="invisible h-0 w-0"
      />
      {preview && typeMedia?.includes('image') && (
        // eslint-disable-next-line
        <img
          src={preview}
          alt="Preview da midia selecionada"
          className="aspect-video w-full rounded-lg object-cover"
        />
      )}
      {preview && typeMedia?.includes('video') && (
        <video
          src={preview}
          controls={false}
          muted
          autoPlay
          className="aspect-video w-full rounded-lg object-cover"
        />
      )}
    </>
  )
}
