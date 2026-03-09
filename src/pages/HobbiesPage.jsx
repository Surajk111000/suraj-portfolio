import {
  BoltIcon,
  ChartBarIcon,
  CodeBracketIcon,
  CpuChipIcon,
  HeartIcon,
  SparklesIcon,
  TrophyIcon,
  WrenchIcon
} from '@heroicons/react/24/outline'
import SectionCard from '../components/SectionCard'
import { hobbies } from '../data/portfolioData'

const hobbyIconMap = {
  'Data analysis and visualization': ChartBarIcon,
  'Building web apps with React': CodeBracketIcon,
  'Machine learning exploration': CpuChipIcon,
  'Aeromodelling and UAV concepts': SparklesIcon,
  'Technical competitions and mentorship': TrophyIcon,
  'FastAPI backend development': WrenchIcon,
  'PySpark and Databricks': CpuChipIcon,
  Dance: SparklesIcon,
  Swimming: BoltIcon,
  Gym: HeartIcon
}

function HobbiesPage() {
  return (
    <SectionCard
      title="Hobbies"
      icon={<SparklesIcon className="h-7 w-7 text-brand-primary dark:text-brand-dark-primary" />}
    >
      <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">
        Personal interests and learning activities that keep me creative, analytical, and hands-on.
      </p>

      <div className="grid gap-3 sm:grid-cols-2">
        {hobbies.map((hobby) => (
          (() => {
            const HobbyIcon = hobbyIconMap[hobby] ?? SparklesIcon
            return (
          <article
            key={hobby}
            className="overflow-hidden rounded-xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-brand-accent hover:shadow-soft dark:border-slate-600 dark:bg-slate-800/50 dark:hover:border-brand-dark-accent"
          >
            <div className="h-1.5 w-full bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary dark:from-brand-dark-primary dark:via-brand-dark-accent dark:to-brand-dark-secondary" />
            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{hobby}</p>
                <HobbyIcon className="h-5 w-5 shrink-0 text-brand-primary dark:text-brand-dark-accent" />
              </div>
              <span className="mt-3 inline-flex rounded-full bg-indigo-100 px-2.5 py-1 text-xs font-semibold text-brand-secondary dark:bg-slate-700 dark:text-brand-dark-accent">
                Personal Interest
              </span>
            </div>
          </article>
            )
          })()
        ))}
      </div>
    </SectionCard>
  )
}

export default HobbiesPage