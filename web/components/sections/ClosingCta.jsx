import { OpenModalButton } from '../Button';

export default function ClosingCta() {
  return (
    <section className="closing">
      <div className="container">
        <div className="closing__inner">
          <div data-anim="cta-heading" style={{ width: '100%' }}>
            <h2 className="heading heading--display heading--center">
              Two engineers. One hire. <em>Both interviewed by engineers.</em>
            </h2>
          </div>
          <div className="closing__copy" data-reveal="stagger">
            <p>Tell us the role. A senior engineer will scope it with you before we search.</p>
            <div className="closing__ctas">
              <OpenModalButton size="lg">Start a search</OpenModalButton>
              <OpenModalButton size="lg" variant="secondary">
                Book a call
              </OpenModalButton>
            </div>
            <span className="closing__fineprint">
              $3,000 to start, credited to the fee · 6-month replacement guarantee
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
