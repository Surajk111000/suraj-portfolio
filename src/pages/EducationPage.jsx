import { AcademicCapIcon, CheckBadgeIcon } from '@heroicons/react/24/outline'
import SectionCard from '../components/SectionCard'
import { certifications, education } from '../data/portfolioData'
import amazonLogo from '../image/amazon_logo.png'
import apsLogo from '../image/aps_logo.png'
import deeplearningLogo from '../image/Deep-Learning.AI_logo.jpg'
import dukeLogo from '../image/duke_university.jfif'
import googleLogo from '../image/google_logo.jfif'
import ibmLogo from '../image/ibm_logo.png'
import iiestLogo from '../image/iiest_logo.png'
import iitbLogo from '../image/iitb_logo.jfif'

const educationLogos = {
  aps: apsLogo,
  iiest: iiestLogo,
  iitb: iitbLogo
}

const certificationLogos = {
  amazon: amazonLogo,
  deeplearningai: deeplearningLogo,
  duke: dukeLogo,
  google: googleLogo,
  ibm: ibmLogo
}

function EducationPage() {
  return (
    <SectionCard
      title="Education"
      icon={<AcademicCapIcon className="h-7 w-7 text-brand-primary dark:text-brand-dark-primary" />}
    >
      <div className="grid gap-3">
        {education.map((item) => (
          <article
            key={item.institute}
            className="overflow-hidden rounded-xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-brand-accent hover:shadow-soft dark:border-slate-600 dark:bg-slate-800/50 dark:hover:border-brand-dark-accent"
          >
            <div className="h-1.5 w-full bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary dark:from-brand-dark-primary dark:via-brand-dark-accent dark:to-brand-dark-secondary" />
            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <img
                    src={educationLogos[item.logoKey]}
                    alt={`${item.institute} logo`}
                    className="mt-0.5 h-14 w-14 rounded-md border border-slate-200 bg-white object-contain p-1 dark:border-slate-600"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-brand-primary dark:text-brand-dark-accent">{item.institute}</h4>
                    <p className="text-slate-700 dark:text-slate-200">{item.degree}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-300">{item.duration}</p>
                  </div>
                </div>
                <span className="rounded-full bg-indigo-100 px-2.5 py-1 text-xs font-semibold text-brand-secondary dark:bg-slate-700 dark:text-brand-dark-accent">
                  Grade: {item.grade}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <h3 className="mb-3 mt-8 flex items-center gap-2 text-xl font-bold text-brand-secondary dark:text-brand-dark-secondary">
        <CheckBadgeIcon className="h-6 w-6" /> Selected Certifications
      </h3>
      <div className="grid gap-3 sm:grid-cols-2">
        {certifications.map((cert) => (
          <article
            key={`${cert.title}-${cert.issuer}`}
            className="overflow-hidden rounded-xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-brand-accent hover:shadow-soft dark:border-slate-600 dark:bg-slate-800/50 dark:hover:border-brand-dark-accent"
          >
            <div className="h-1.5 w-full bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary dark:from-brand-dark-primary dark:via-brand-dark-accent dark:to-brand-dark-secondary" />
            <div className="p-4">
              <div className="flex items-start gap-3">
                <img
                  src={certificationLogos[cert.logoKey]}
                  alt={`${cert.issuer} logo`}
                  className="h-12 w-12 rounded-md border border-slate-200 bg-white object-contain p-1 dark:border-slate-600"
                />
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{cert.title}</h4>
                  <p className="text-sm text-brand-primary dark:text-brand-dark-accent">{cert.issuer}</p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-300">Issued: {cert.issued}</p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-300">Credential: {cert.credentialId}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionCard>
  )
}

export default EducationPage