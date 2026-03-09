import { ArrowTopRightOnSquareIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import SectionCard from '../components/SectionCard'
import { socialMedia } from '../data/portfolioData'
import facebookLogo from '../image/facebook_logo.jfif'
import instagramLogo from '../image/instagram_logo.jfif'
import leetcodeLogo from '../image/leetcode_logo.png'
import linkedinLogo from '../image/linkedin_logo.jfif'

const socialIcons = {
  Facebook: facebookLogo,
  Instagram: instagramLogo,
  LeetCode: leetcodeLogo,
  LinkedIn: linkedinLogo
}

function SocialPage() {
  return (
    <SectionCard
      title="Social Media"
      icon={<GlobeAltIcon className="h-7 w-7 text-brand-primary dark:text-brand-dark-primary" />}
    >
      <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">
        Your social profiles are rendered as mini profile previews with cover style, profile photo, and activity summary.
      </p>

      <div className="grid gap-3 sm:grid-cols-2">
        {socialMedia.map((item) => (
          <a key={item.label} href={item.url} target="_blank" rel="noreferrer" className="social-card overflow-hidden p-0">
            <div className={`h-24 w-full bg-gradient-to-r ${item.coverStyle}`} />

            <div className="px-4 pb-4 pt-0">
              <div className="-mt-7 flex items-end justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-slate-100">{item.handle}</p>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-300">{item.label}</p>
                  </div>
                </div>
                <img
                  src={socialIcons[item.label]}
                  alt={`${item.label} logo`}
                  className="h-12 w-12 rounded-md bg-white object-cover p-1 shadow-sm"
                />
              </div>

              <h4 className="mt-3 text-base font-semibold text-brand-primary dark:text-brand-dark-accent">{item.headline}</h4>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{item.description}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {item.stats.map((stat) => (
                  <span
                    key={`${item.label}-${stat}`}
                    className="rounded-full bg-indigo-100 px-2.5 py-1 text-xs font-semibold text-brand-secondary dark:bg-slate-700 dark:text-brand-dark-accent"
                  >
                    {stat}
                  </span>
                ))}
              </div>

              <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800/70">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-600 dark:text-slate-300">Recent Preview</p>
                <ul className="mt-2 space-y-1 text-sm text-slate-700 dark:text-slate-200">
                  {item.recentActivity.map((activity) => (
                    <li key={`${item.label}-${activity}`}>• {activity}</li>
                  ))}
                </ul>
              </div>

              <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-brand-primary dark:text-brand-dark-primary">
                Open Full Profile <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </p>
            </div>
          </a>
        ))}
      </div>

    </SectionCard>
  )
}

export default SocialPage