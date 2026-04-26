import { useEffect } from 'react'

type StoryModalProps = {
  title: string
  story: string
  onClose: () => void
}

export default function StoryModal({ title, story, onClose }: StoryModalProps) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white p-6 shadow-xl"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="story-modal-title"
      >
        <div className="flex items-start justify-between gap-4">
          <h3 id="story-modal-title" className="text-xl font-semibold text-gray-900">
            {title}
          </h3>
          <button
            type="button"
            className="shrink-0 rounded-md border border-gray-200 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
            onClick={onClose}
          >
            Close
          </button>
        </div>
        <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-gray-600">{story}</p>
      </div>
    </div>
  )
}
