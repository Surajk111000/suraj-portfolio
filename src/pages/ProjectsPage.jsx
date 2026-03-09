import { CodeBracketSquareIcon, FolderIcon, LinkIcon } from '@heroicons/react/24/outline'
import SectionCard from '../components/SectionCard'
import { projectProfiles, projects } from '../data/portfolioData'
import awadhLogo from '../image/awadh_iitropar_logo.png'
import drdoLogo from '../image/drdo_logo.png'
import githubLogo from '../image/github_logo.png'
import kaggleLogo from '../image/kaggle_logo.png'
import nacdecLogo from '../image/nacdec_logo.png'

const projectLogos = {
  awadh: awadhLogo,
  drdo: drdoLogo,
  github: githubLogo,
  kaggle: kaggleLogo,
  nacdec: nacdecLogo
}

function ProjectsPage() {
  return (
    <SectionCard
      title="Projects"
      icon={<FolderIcon className="h-7 w-7 text-brand-primary dark:text-brand-dark-primary" />}
    >
      <h3 className="mb-3 text-xl font-bold text-brand-secondary dark:text-brand-dark-secondary">Project Profiles</h3>
      <div className="grid gap-3 sm:grid-cols-2">
        {projectProfiles.map((item) => (
          <a
            key={item.label}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="overflow-hidden rounded-xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-brand-accent hover:shadow-soft dark:border-slate-600 dark:bg-slate-800/60 dark:hover:border-brand-dark-accent"
          >
            <div className="h-1.5 w-full bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary dark:from-brand-dark-primary dark:via-brand-dark-accent dark:to-brand-dark-secondary" />
            <div className="p-4">
              <div className="flex items-start gap-3">
                <img
                  src={projectLogos[item.logoKey]}
                  alt={`${item.label} logo`}
                  className="h-14 w-14 rounded-md border border-slate-200 bg-white object-contain p-1 dark:border-slate-600"
                />
                <div>
                  <h4 className="flex items-center gap-2 text-lg font-semibold text-brand-primary dark:text-brand-dark-accent">
                    <LinkIcon className="h-5 w-5" /> {item.label}
                  </h4>
                  <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">{item.description}</p>
                </div>
              </div>
              <p className="mt-3 break-all text-sm text-slate-500 dark:text-slate-300">{item.url}</p>
            </div>
          </a>
        ))}
      </div>

      <h3 className="mb-3 mt-8 flex items-center gap-2 text-xl font-bold text-brand-secondary dark:text-brand-dark-secondary">
        <CodeBracketSquareIcon className="h-6 w-6" /> College Projects
      </h3>
      <div className="grid gap-3">
        {projects.map((project) => (
          <article
            key={project.name}
            className="overflow-hidden rounded-xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-brand-accent hover:shadow-soft dark:border-slate-600 dark:bg-slate-800/50 dark:hover:border-brand-dark-accent"
          >
            <div className="h-1.5 w-full bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary dark:from-brand-dark-primary dark:via-brand-dark-accent dark:to-brand-dark-secondary" />
            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <img
                    src={projectLogos[project.logoKey]}
                    alt={`${project.name} logo`}
                    className="h-14 w-14 rounded-md border border-slate-200 bg-white object-contain p-1 dark:border-slate-600"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-brand-primary dark:text-brand-dark-accent">{project.name}</h4>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">{project.projectType}</p>
                  </div>
                </div>
                <span className="rounded-full bg-indigo-100 px-2.5 py-1 text-xs font-semibold text-brand-secondary dark:bg-slate-700 dark:text-brand-dark-accent">
                  Project
                </span>
              </div>
              <p className="mt-3 text-slate-700 dark:text-slate-200">{project.details}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionCard>
  )
}

export default ProjectsPage