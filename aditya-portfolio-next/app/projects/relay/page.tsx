import { projects } from '@/data/content'
import ArtifactPageLayout from '@/components/ArtifactPageLayout'

const relay = projects.find((p) => p.slug === 'relay')!

export default function RelayPage() {
  return (
    <ArtifactPageLayout
      category="Project"
      title={relay.title}
      subtitle={relay.subtitle}
      tags={relay.tags}
      narrative={relay.narrative}
      links={{ github: relay.github }}
      dates=""
      summary={relay.description}
      prevHref="/experience/quant-intern"
      prevLabel="LumiCharge Intern"
      nextHref="/projects/terpspark"
      nextLabel="TerpSpark"
    />
  )
}
