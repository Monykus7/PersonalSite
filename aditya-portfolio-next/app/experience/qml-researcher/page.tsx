import { experience } from '@/data/content'
import ArtifactPageLayout from '@/components/ArtifactPageLayout'

const qml = experience.find((e) => e.slug === 'qml-researcher')!

export default function QmlResearcherPage() {
  return (
    <ArtifactPageLayout
      category="Experience"
      title={qml.role}
      subtitle={`${qml.org} · ${qml.location}`}
      tags={[]}
      narrative={qml.narrative}
      dates={qml.dates}
      bullets={qml.bullets}
      prevHref="/projects/floradex"
      prevLabel="Floradex"
      nextHref="/experience/frc-lead"
      nextLabel="Software Lead @ Portola FRC"
    />
  )
}
