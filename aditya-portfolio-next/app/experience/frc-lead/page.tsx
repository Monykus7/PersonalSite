import { experience } from '@/data/content'
import ArtifactPageLayout from '@/components/ArtifactPageLayout'

const frc = experience.find((e) => e.slug === 'frc-lead')!

export default function FrcLeadPage() {
  return (
    <ArtifactPageLayout
      category="Experience"
      title={frc.role}
      subtitle={`${frc.org} · ${frc.location}`}
      tags={[]}
      narrative={frc.narrative}
      dates={frc.dates}
      bullets={frc.bullets}
      prevHref="/experience/qml-researcher"
      prevLabel="QML Research @ UMD FIRE"
      nextHref="/experience/quant-intern"
      nextLabel="LumiCharge Intern"
    />
  )
}
