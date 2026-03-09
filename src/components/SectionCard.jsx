function SectionCard({ title, children, icon, id }) {
  return (
    <section id={id} className="section-card">
      <h2 className="section-title">
        {icon}
        {title}
      </h2>
      <div>{children}</div>
    </section>
  )
}

export default SectionCard