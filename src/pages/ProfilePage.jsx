import { BriefcaseIcon, MapPinIcon, UserCircleIcon, SparklesIcon, CodeBracketIcon, WrenchIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import SectionCard from '../components/SectionCard'
import { experience, profile, skills } from '../data/portfolioData'
import awadhLogo from '../image/awadh_iitropar_logo.png'
import iiestLogo from '../image/iiest_logo.png'
import iitbLogo from '../image/iitb_logo.jfif'
import itspeLogo from '../image/itspe_logo.jfif'
import resumePdf from '../image/Suraj_Kumar_Software_Engineer.pdf'

const experienceLogos = {
  awadh: awadhLogo,
  iiest: iiestLogo,
  iitb: iitbLogo,
  itspe: itspeLogo
}

const roleHighlights = {
  'Associate Software Engineer': ['Python', 'SQL', 'React', 'FastAPI'],
  'Summer Intern': ['AI & CPS', 'Flutter', 'IoT', 'Android'],
  'Teaching Assistant': ['Lab Sessions', 'Evaluation', 'Mentoring'],
  'Research Intern': ['UAV Design', 'CAD Modeling', 'Research']
}

const skillIconMap = {
  code: CodeBracketIcon,
  frame: WrenchIcon,
  tool: WrenchIcon,
  people: UserGroupIcon,
  sparkle: SparklesIcon
}

function ProfilePage() {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <SectionCard
      title="Profile"
      icon={<UserCircleIcon className="h-7 w-7 text-brand-primary dark:text-brand-dark-primary" />}
    >
      <div className="grid items-center gap-5 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="m-0 text-sm font-semibold text-brand-primary dark:text-brand-dark-accent">HELLO, I AM</p>
          <h3 className="mt-1 text-4xl font-extrabold text-brand-secondary dark:text-brand-dark-text">{profile.name}</h3>
          <h4 className="m-0 text-xl font-semibold text-brand-primary dark:text-brand-dark-primary">{profile.title}</h4>
          <p className="mt-3 flex items-center gap-1 text-sm text-slate-500 dark:text-slate-300">
            <MapPinIcon className="h-4 w-4" /> {profile.location}
          </p>
          <p className="mt-3 text-base leading-7 text-slate-700 dark:text-slate-200">{profile.summary}</p>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
            <strong>Email:</strong> <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={resumePdf}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-brand-primary px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 dark:bg-brand-dark-primary"
            >
              View Resume
            </a>
            <a
              href={resumePdf}
              download="Suraj_Kumar_Software_Engineer.pdf"
              className="rounded-lg border border-brand-primary px-4 py-2 text-sm font-semibold text-brand-primary transition hover:bg-indigo-50 dark:border-brand-dark-accent dark:text-brand-dark-accent dark:hover:bg-slate-700"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          {!imageFailed ? (
            <img
              src={profile.profileImage}
              alt="Suraj Kumar profile"
              className="h-60 w-60 rounded-full border-4 border-brand-accent object-cover shadow-soft dark:border-brand-dark-accent"
              onError={() => setImageFailed(true)}
            />
          ) : (
            <div className="flex h-60 w-60 items-center justify-center rounded-full border-4 border-brand-accent bg-indigo-100 text-5xl font-bold text-brand-primary shadow-soft dark:border-brand-dark-accent dark:bg-slate-700 dark:text-brand-dark-accent">
              SK
            </div>
          )}
        </div>
      </div>

      <h3 className="mb-3 mt-8 flex items-center gap-2 text-xl font-bold text-brand-secondary dark:text-brand-dark-secondary">
        <BriefcaseIcon className="h-6 w-6" /> Professional Experience
      </h3>
      <div className="grid gap-3">
        {experience.map((item) => (
          <article
            key={`${item.role}-${item.org}`}
            className="overflow-hidden rounded-xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-brand-accent hover:shadow-soft dark:border-slate-600 dark:bg-slate-800/50 dark:hover:border-brand-dark-accent"
          >
            <div className="h-1.5 w-full bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary dark:from-brand-dark-primary dark:via-brand-dark-accent dark:to-brand-dark-secondary" />
            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <img
                    src={experienceLogos[item.logoKey]}
                    alt={`${item.org} logo`}
                    className="mt-0.5 h-14 w-14 rounded-md border border-slate-200 bg-white object-contain p-1 dark:border-slate-600"
                  />
                  <div className="min-w-0">
                    <h4 className="text-lg font-semibold text-brand-primary dark:text-brand-dark-accent">{item.role}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-300">
                      {item.org} • {item.type} • {item.duration}
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-indigo-100 px-2.5 py-1 text-xs font-semibold text-brand-secondary dark:bg-slate-700 dark:text-brand-dark-accent">
                  {item.type}
                </span>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {(roleHighlights[item.role] ?? []).map((tag) => (
                  <span
                    key={`${item.role}-${tag}`}
                    className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-slate-600 dark:bg-slate-700/50 dark:text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-3 text-slate-700 dark:text-slate-200">{item.description}</p>
            </div>
          </article>
        ))}
      </div>

      <h3 className="mb-3 mt-8 flex items-center gap-2 text-xl font-bold text-brand-secondary dark:text-brand-dark-secondary">
        <SparklesIcon className="h-6 w-6" /> Skills & Expertise
      </h3>
      <div className="grid gap-3 md:grid-cols-2">
        {skills.map((skillGroup) => {
          const IconComponent = skillIconMap[skillGroup.icon]
          return (
            <div
              key={skillGroup.category}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-brand-accent hover:shadow-soft dark:border-slate-600 dark:bg-slate-800/50 dark:hover:border-brand-dark-accent"
            >
              <div className="h-1.5 w-full bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary dark:from-brand-dark-primary dark:via-brand-dark-accent dark:to-brand-dark-secondary" />
              <div className="p-4">
                <div className="flex items-center gap-2">
                  {IconComponent && <IconComponent className="h-5 w-5 text-brand-primary dark:text-brand-dark-accent" />}
                  <h4 className="font-semibold text-brand-primary dark:text-brand-dark-accent">{skillGroup.category}</h4>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-slate-600 dark:bg-slate-700/50 dark:text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </SectionCard>
  )
}

export default ProfilePage