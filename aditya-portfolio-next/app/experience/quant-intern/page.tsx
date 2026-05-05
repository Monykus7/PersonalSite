import { experience } from '@/data/content'
import ArtifactPageLayout from '@/components/ArtifactPageLayout'

const quant = experience.find((e) => e.slug === 'quant-intern')!

export default function QuantInternPage() {
  return (
    <ArtifactPageLayout
      category="Experience"
      title={quant.role}
      subtitle={`${quant.org} · ${quant.location}`}
      tags={[]}
      narrative={quant.narrative}
      dates={quant.dates}
      bullets={quant.bullets}
      prevHref="/experience/frc-lead"
      prevLabel="Software Lead @ Portola FRC"
      nextHref="/projects/relay"
      nextLabel="Relay"
    />
  )
}
