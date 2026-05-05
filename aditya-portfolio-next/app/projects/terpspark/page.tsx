import { projects } from '@/data/content'
import ArtifactPageLayout from '@/components/ArtifactPageLayout'

const terpspark = projects.find((p) => p.slug === 'terpspark')!

export default function TerpSparkPage() {
  return (
    <ArtifactPageLayout
      category="Project"
      title={terpspark.title}
      subtitle={terpspark.subtitle}
      tags={terpspark.tags}
      narrative={terpspark.narrative}
      links={{ github: terpspark.github }}
      dates=""
      summary={terpspark.description}
      prevHref="/projects/relay"
      prevLabel="Relay"
      nextHref="/projects/floradex"
      nextLabel="Floradex"
    />
  )
}
