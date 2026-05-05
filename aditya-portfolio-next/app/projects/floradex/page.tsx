import { projects } from '@/data/content'
import ArtifactPageLayout from '@/components/ArtifactPageLayout'

const floradex = projects.find((p) => p.slug === 'floradex')!

export default function FloradexPage() {
  return (
    <ArtifactPageLayout
      category="Project"
      title={floradex.title}
      subtitle={floradex.subtitle}
      tags={floradex.tags}
      narrative={floradex.narrative}
      links={{ github: floradex.github }}
      dates=""
      summary={floradex.description}
      prevHref="/projects/terpspark"
      prevLabel="TerpSpark"
      nextHref="/experience/qml-researcher"
      nextLabel="QML Research @ UMD FIRE"
    />
  )
}
