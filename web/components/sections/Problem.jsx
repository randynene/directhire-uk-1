export default function Problem() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid-2 problem__grid" data-grid="problem">
          <div className="problem__copy" data-reveal="stagger">
            <span className="eyebrow" style={{ color: 'var(--teal-500)' }}>
              AI ruined hiring
            </span>
            <h2 className="heading heading--h2">Its easy to get 500 applicants in a week.</h2>
            <p>
              Half of them AI-generated. Your best candidate is somewhere in that pile, and nobody on
              your team has a week to find them.
            </p>
            <p>
              Meanwhile the engineers you actually want aren’t applying to job posts at all. So we
              don’t fish that pool. We go and find people — and a senior engineer interviews them
              before you see a name.
            </p>
          </div>
          <div data-anim="grid">
            <div className="job-post-grid">
              <div className="job-post-grid__label">What a job post gets you</div>
              <div className="job-post-grid__cells" aria-hidden="true" id="job-grid" />
              <div className="job-post-grid__floaters" data-anim="floaters">
                {['Senior Backend Engineer', 'Senior Full-Stack Engineer'].map((role) => (
                  <div className="floating-profile-card" key={role}>
                    <span className="status-dot" aria-hidden="true" />
                    <div className="floating-profile-card__body">
                      <span className="floating-profile-card__role">{role}</span>
                      <span className="floating-profile-card__note">
                        Interviewed by a senior engineer
                      </span>
                    </div>
                  </div>
                ))}
                <span className="job-post-grid__caption">WHAT WE SEND</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
