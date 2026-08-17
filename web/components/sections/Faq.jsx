import Accordion from '../Accordion';
import { OpenModalButton } from '../Button';

export default function Faq() {
  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="section__head" data-sec-head>
          <span className="eyebrow">Questions</span>
          <h2 className="heading heading--h2sm">
            {'The questions\nfounders and CTOs '}
            <em>actually ask.</em>
          </h2>
        </div>
        <div className="section__body faq__grid" data-grid="faq">
          <div data-reveal>
            <div className="card faq__side-card">
              <h3>Not answered here?</h3>
              <p>Ask our AI chatbot, trained on every sales call we’ve had.</p>
              <div>
                <OpenModalButton size="sm" variant="secondary">
                  Open chat
                </OpenModalButton>
              </div>
            </div>
          </div>
          <div data-anim="faq">
            <Accordion />
          </div>
        </div>
      </div>
    </section>
  );
}
