import { CheckItem } from '../Button';
import { pricingRows, pricingChecks } from '@/lib/content/uk';

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="section__head" data-sec-head>
          <span className="eyebrow">Pricing</span>
          <h2 className="heading heading--h2">
            One fee. <em>Published.</em>
          </h2>
          <p className="section__lead">
            Most agencies won’t tell you the number until they’ve pitched you. Here it is.
          </p>
        </div>
        <div className="section__body pricing__grid" data-grid="pricing">
          <div data-anim="pricing">
            <div className="card card--lg card--strong card--pad-lg pricing-card">
              <div className="pricing-card__head">
                <span className="pricing-card__headline">25%</span>
                <span className="pricing-card__subhead">of first-year base salary</span>
              </div>
              <div className="pricing-card__rows">
                {pricingRows.map((r) => (
                  <div
                    className={r.emphasis ? 'price-row price-row--emphasis' : 'price-row'}
                    key={r.label}
                  >
                    <span>{r.label}</span>
                    <span>{r.value}</span>
                  </div>
                ))}
              </div>
              <p className="pricing-card__foot">
                Base salary only — we don’t take a percentage of bonus, equity or signing. If you
                don’t hire anyone, the $3,000 is all you’ve spent.
              </p>
            </div>
          </div>
          <div className="pricing__copy" data-reveal="stagger">
            <h3>Why we ask for $3,000 up front</h3>
            <p>
              Because contingent recruiters get paid only if they place someone — so they run twenty
              searches at once, send volume, and go quiet on the ones that look hard.
            </p>
            <ul className="pricing__checks">
              {pricingChecks.map((text) => (
                <CheckItem key={text}>{text}</CheckItem>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
