import {
  AcademicCapIcon,
  ChartBarIcon,
  CpuChipIcon,
  SparklesIcon,
  TrophyIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'
import SectionCard from '../components/SectionCard'
import { achievements, leadership } from '../data/portfolioData'
import aeromodellingLogo from '../image/aeromodelling_iies.png'
import amazonLogo from '../image/amazon_logo.png'
import deeplearningLogo from '../image/Deep-Learning.AI_logo.jpg'
import dukeLogo from '../image/duke_university.jfif'
import googleLogo from '../image/google_logo.jfif'
import h13Logo from '../image/h13_iitb_logo.jfif'
import iitbLogo from '../image/iitb_logo.jfif'
import iscpLogo from '../image/iscp_iitb_logo.jfif'
import nacdecLogo from '../image/nacdec_logo.png'
import reflexobetaLogo from '../image/reflexobeta_iiest_logo.png'

const porLogos = {
  aeromodelling: aeromodellingLogo,
  h13: h13Logo,
  iitb: iitbLogo,
  iscp: iscpLogo,
  reflexobeta: reflexobetaLogo
}

const achievementLogos = {
  amazon: amazonLogo,
  deeplearningai: deeplearningLogo,
  duke: dukeLogo,
  google: googleLogo,
  nacdec: nacdecLogo
}

const achievementIcons = {
  academic: AcademicCapIcon,
  chart: ChartBarIcon,
  chip: CpuChipIcon,
  sparkle: SparklesIcon,
  trophy: TrophyIcon
}

function AchievementsPage() {
  return (
    <SectionCard
      title="Achievements & Competitions"
      icon={<TrophyIcon className="h-7 w-7 text-brand-primary dark:text-brand-dark-primary" />}
    >
      <div className="grid gap-3">
        {achievements.map((achievement) => (
          (() => {
            const AchievementIcon = achievementIcons[achievement.iconKey] ?? TrophyIcon
            return (
              <article
                key={achievement.title}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-brand-accent hover:shadow-soft dark:border-slate-600 dark:bg-slate-800/50 dark:hover:border-brand-dark-accent"
              >
                <div className="h-1.5 w-full bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary dark:from-brand-dark-primary dark:via-brand-dark-accent dark:to-brand-dark-secondary" />
                <div className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <img
                        src={achievementLogos[achievement.logoKey]}
                        alt={`${achievement.issuer} logo`}
                        className="h-14 w-14 rounded-md border border-slate-200 bg-white object-contain p-1 dark:border-slate-600"
                      />
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{achievement.title}</h4>
                        <p className="text-sm text-brand-primary dark:text-brand-dark-accent">{achievement.issuer}</p>
                      </div>
                    </div>
                    <AchievementIcon className="h-6 w-6 shrink-0 text-brand-primary dark:text-brand-dark-accent" />
                  </div>
                </div>
              </article>
            )
          })()
        ))}
      </div>

      <h3 className="mb-3 mt-8 flex items-center gap-2 text-xl font-bold text-brand-secondary dark:text-brand-dark-secondary">
        <UserGroupIcon className="h-6 w-6" /> Leadership & Responsibilities
      </h3>
      <div className="grid gap-3">
        {leadership.map((item) => (
          <article
            key={`${item.title}-${item.org}`}
            className="overflow-hidden rounded-xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-brand-accent hover:shadow-soft dark:border-slate-600 dark:bg-slate-800/50 dark:hover:border-brand-dark-accent"
          >
            <div className="h-1.5 w-full bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary dark:from-brand-dark-primary dark:via-brand-dark-accent dark:to-brand-dark-secondary" />
            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <img
                    src={porLogos[item.logoKey]}
                    alt={`${item.org} logo`}
                    className="h-14 w-14 rounded-md border border-slate-200 bg-white object-contain p-1 dark:border-slate-600"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-brand-primary dark:text-brand-dark-accent">{item.title}</h4>
                    <p className="text-slate-700 dark:text-slate-200">{item.org}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-300">{item.duration}</p>
                  </div>
                </div>
                <span className="rounded-full bg-indigo-100 px-2.5 py-1 text-xs font-semibold text-brand-secondary dark:bg-slate-700 dark:text-brand-dark-accent">
                  {item.type}
                </span>
              </div>

              <ul className="mt-3 space-y-1 text-sm text-slate-700 dark:text-slate-200">
                {item.points.map((point) => (
                  <li key={`${item.title}-${point}`}>• {point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </SectionCard>
  )
}

export default AchievementsPage