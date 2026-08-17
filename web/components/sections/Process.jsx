import AvatarPlaceholder from '../AvatarPlaceholder';
import ReportCard from '../ReportCard';
import { stages, codeLines, funnelRows } from '@/lib/content/uk';

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container">
        <div className="section__head" data-sec-head>
          <span className="eyebrow">Our process</span>
          <h2 className="heading heading--h2">
            Three stages. No <em>guessing.</em>
          </h2>
          <p className="section__lead">
            We define the role, we find and vet, you decide. That’s the whole thing.
          </p>
        </div>
        <div className="section__body process__stack">
          <div className="process__stages" data-anim="stages" data-grid="stages">
            {stages.map((s) => (
              <div className="card card--pad-0 stage-card" key={s.number}>
                <div className="stage-card__body">
                  <span className="stage-card__number">{s.number}</span>
                  <h3 className="stage-card__title">{s.title}</h3>
                  <p className="stage-card__text">{s.text}</p>
                </div>
                <div className="stage-card__note">
                  <span>{s.note}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="process__split process__split--stage2" data-grid="stage2">
            <div className="process__media" data-anim="codepanel" data-stage2-media>
              <div className="code-panel">
                <div className="code-panel__chrome">
                  <span className="code-panel__dots">
                    <span className="status-dot status-dot--muted" />
                    <span className="status-dot status-dot--muted" />
                    <span className="status-dot status-dot--muted" />
                  </span>
                  <span className="code-panel__label">pair-session · your stack</span>
                  <span className="code-panel__live">
                    <span className="status-dot status-dot--live" />
                    <span>LIVE</span>
                  </span>
                </div>
                <div className="code-panel__grid">
                  <pre className="code-panel__pre" id="code-lines">
                    {codeLines.map((line, i) => (
                      <div data-code-line key={i}>
                        {line}
                      </div>
                    ))}
                  </pre>
                  <div className="code-panel__rail">
                    <div className="code-panel__rail-tile">
                      <AvatarPlaceholder label={'REAL PHOTO\nsenior engineer'} />
                      <span className="code-panel__rail-label">CE engineer</span>
                    </div>
                    <div className="code-panel__rail-tile">
                      <AvatarPlaceholder label={'REAL PHOTO\ncandidate'} />
                      <span className="code-panel__rail-label">Candidate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="process__copy" data-reveal="stagger">
              <span className="process__kicker">Stage 02, in practice</span>
              <h3>A person watching them think</h3>
              <p>
                Live pair programming on a real problem from a stack like yours. Not an algorithm
                puzzle, not a recorded assessment, not a take-home they can hand to an AI.
              </p>
              <p>
                The question that matters isn’t whether the code runs. It’s why they made that choice
                — and you can’t fake the answer to a follow-up.
              </p>
            </div>
          </div>

          <div className="process__split process__split--stage3" data-grid="stage3">
            <div className="process__copy" data-reveal="stagger">
              <span className="process__kicker">Stage 03, in practice</span>
              <h3>The report you get on both</h3>
              <p>
                Coding score, interview verdict, work history, and the parts where they’re a stretch.
                You see what our engineer saw.
              </p>
              <p>A candidate with no weaknesses listed just means nobody looked properly.</p>
            </div>
            <div data-anim="report">
              <ReportCard />
            </div>
          </div>

          <div data-anim="funnel">
            <div className="card funnel-table">
              <span className="funnel-table__label">The funnel, in numbers</span>
              <div className="funnel-table__rows" role="table">
                {funnelRows.map((r) => (
                  <div
                    className={r.final ? 'funnel-row funnel-row--final' : 'funnel-row'}
                    role="row"
                    key={r.label}
                  >
                    <span className="funnel-row__label">{r.label}</span>
                    <div
                      className={r.final ? 'progress progress--accent' : 'progress'}
                      role="progressbar"
                      aria-valuenow={r.value}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={r.label}
                    >
                      <div style={{ width: `${r.value}%` }} />
                    </div>
                    <span className="funnel-row__value">{r.display}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
