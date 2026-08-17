import Icon from '../Icon';
import { features } from '@/lib/content/uk';

export default function Differentiators() {
  return (
    <section className="section">
      <div className="container">
        <div className="section__head" data-sec-head>
          <span className="eyebrow">Engineers should hire engineers</span>
          <h2 className="heading heading--h2">
            We do what a recruiter <em>can’t</em> do
          </h2>
          <p className="section__lead">
            We’ve been vetting senior engineers for companies for over ten years. This is the proven
            process.
          </p>
        </div>
        <div className="section__body features__grid" data-anim="features" data-grid="feature">
          {features.map((f) => (
            <div className="card feature-card" key={f.title}>
              <span className="icon-tile">
                <Icon name={f.icon} size={18} />
              </span>
              <div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
