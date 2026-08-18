'use client';

import { useState } from 'react';
import AvatarPlaceholder from './AvatarPlaceholder';
import { reportTabs, reportScores } from '@/lib/content/uk';

export default function ReportCard() {
  const [active, setActive] = useState(reportTabs[0]);

  return (
    <div className="report-card">
      <div className="report-card__head">
        <AvatarPlaceholder label={'REAL\nPHOTO'} size={42} radius="var(--radius-sm)" />
        <div className="report-card__meta">
          <span className="report-card__name">Senior Backend Engineer</span>
          <span className="report-card__detail">London · 9 yrs · Go, Postgres, AWS</span>
        </div>
        <button type="button" className="report-card__action">
          Open report →
        </button>
      </div>
      <div className="report-card__tabs">
        <div className="tabs" role="tablist" data-tabs>
          {reportTabs.map((t) => (
            <button
              type="button"
              className="tab"
              role="tab"
              aria-selected={active === t}
              data-tab={t}
              key={t}
              onClick={() => setActive(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      <div className="report-card__body">
        {reportScores.map((s) => (
          <div className={s.caution ? 'score-row score-row--caution' : 'score-row'} key={s.label}>
            <span className="score-row__label">{s.label}</span>
            <div
              className={s.caution ? 'progress progress--caution' : 'progress'}
              role="progressbar"
              aria-valuenow={s.value}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={s.label}
            >
              <div style={{ width: `${s.value}%` }} />
            </div>
            <span className="score-row__verdict">{s.verdict}</span>
          </div>
        ))}
        <div className="callout">
          Worth knowing: front-end work is four years back. Fine for a backend-weighted role — a
          stretch if you need full-stack from week one.
        </div>
      </div>
    </div>
  );
}
