import { PlayIcon } from '../Icon';

export default function Explainer() {
  return (
    <section id="how" className="section">
      <div className="container">
        <div className="section__head" data-sec-head>
          <span className="eyebrow">90 seconds</span>
          <h2 className="heading heading--h2">
            How direct hire works, from <em>Seb</em>
          </h2>
          <p className="section__lead">
            Our CEO on what you get, what it costs, and why we only send two.
          </p>
        </div>
        <div className="section__body">
          <div data-anim="video" style={{ clipPath: 'inset(0 0 0 0)' }}>
            <div className="video-placeholder">
              <div className="video-placeholder__annotation">
                <span className="annotation-badge">Video slot — to film</span>
              </div>
              <div className="video-placeholder__center">
                <button type="button" className="play-button" aria-label="Play video">
                  <PlayIcon />
                </button>
                <span className="video-placeholder__caption">
                  {'REAL VIDEO STILL GOES HERE\n(same framing as the homepage explainer)'}
                </span>
              </div>
              <div className="video-placeholder__id">
                <span className="video-placeholder__name">Seb Hall</span>
                <span className="video-placeholder__role">Cloud Employee · CEO &amp; Co-Founder</span>
              </div>
            </div>
          </div>
          <div className="explainer__foot" data-reveal>
            <span>Seb Hall, CEO &amp; Co-Founder · 90-second explainer</span>
            <a href="#process">Prefer to read? The three stages →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
