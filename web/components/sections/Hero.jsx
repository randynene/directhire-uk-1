import { OpenModalButton, SecondaryButton, CheckItem } from '../Button';
import AvatarPlaceholder from '../AvatarPlaceholder';
import { heroChecks, shortlist } from '@/lib/content/uk';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="hero__grid" data-grid="hero">
          <div className="hero__copy" data-hero-copy>
            <span className="eyebrow eyebrow--lg">Direct hire — United Kingdom</span>
            <h1 className="heading heading--h1">
              {'Hire United Kingdom engineers\nvetted by '}
              <em>engineers</em>
            </h1>
            <p className="hero__lead">
              Permanent hires, on your payroll. On average you interview two, and hire one. All
              candidates interviewed by our senior engineers.
            </p>
            <div className="hero__ctas">
              <OpenModalButton size="lg">Start a search</OpenModalButton>
              <SecondaryButton size="lg" href="#how">
                How it works
              </SecondaryButton>
            </div>
            <ul className="hero__checks">
              {heroChecks.map((text) => (
                <CheckItem key={text} small>
                  {text}
                </CheckItem>
              ))}
            </ul>
          </div>

          <div className="hero__shortlist" data-shortlist>
            <div className="shortlist-panel">
              <div className="shortlist-panel__head">
                <span className="eyebrow">Your shortlist</span>
                <span className="badge">2 profiles</span>
              </div>
              <div className="shortlist-panel__list">
                {shortlist.map((c) => (
                  <div className="candidate-card" key={c.role}>
                    <AvatarPlaceholder label={'REAL\nPHOTO'} size={52} />
                    <div className="candidate-card__body">
                      <h4 className="candidate-card__role">{c.role}</h4>
                      <span className="candidate-card__meta">{c.meta}</span>
                      <div className="candidate-card__skills">
                        {c.skills.map((s) => (
                          <span className="tag" key={s}>
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="candidate-card__salary">
                      <div className="candidate-card__salary-value">{c.salary}</div>
                      <div className="candidate-card__salary-note">base sought</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="shortlist-panel__foot">
                <span className="shortlist-panel__footnote">
                  Each profile ships with a written report on why they fit.
                </span>
                <span className="annotation-badge">Illustrative</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
