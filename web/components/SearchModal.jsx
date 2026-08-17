'use client';

import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';
import { CheckItem } from './Button';
import { modal } from '@/lib/content/uk';

export default function SearchModal({ onClose }) {
  const [sent, setSent] = useState(false);
  const firstField = useRef(null);

  useEffect(() => {
    if (firstField.current) firstField.current.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      className="modal-scrim"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <h2 className="modal__title" id="modal-title">
          {sent ? modal.sentTitle : modal.title}
        </h2>

        {sent ? (
          <div className="modal__body">
            <ul style={{ margin: 0, padding: 0, display: 'grid', gap: '11px' }}>
              {modal.sentChecks.map((text) => (
                <CheckItem key={text}>{text}</CheckItem>
              ))}
            </ul>
          </div>
        ) : (
          <div className="modal__body">
            <span>{modal.lead}</span>
            <div className="field">
              <label className="field__label" htmlFor="dh-email">
                Work email
              </label>
              <input
                ref={firstField}
                className="form-control"
                id="dh-email"
                type="email"
                placeholder="you@company.com"
              />
            </div>
            <div className="field">
              <label className="field__label" htmlFor="dh-level">
                Seniority
              </label>
              <div className="select-wrap">
                <select className="form-control" id="dh-level" defaultValue="">
                  <option value="">Choose one</option>
                  <option>Mid</option>
                  <option>Senior</option>
                  <option>Staff</option>
                  <option>Principal</option>
                </select>
                <span className="select-wrap__chevron" aria-hidden="true" />
              </div>
            </div>
            <div className="field">
              <label className="field__label" htmlFor="dh-role">
                The role
              </label>
              <textarea
                className="form-control"
                id="dh-role"
                rows={3}
                placeholder={modal.rolePlaceholder}
              />
              <span className="field__hint">
                Stack, first project, and what good looks like in month three.
              </span>
            </div>
            <label className="checkbox">
              <input type="checkbox" id="dh-updates" defaultChecked />
              <span className="checkbox__box">
                <Icon name="check" size={12} strokeWidth={1.173} />
              </span>
              <span className="checkbox__label">Send me weekly updates, news or not</span>
            </label>
          </div>
        )}

        <div className="modal__footer">
          {sent ? (
            <button type="button" className="btn btn--primary btn--sm btn--no-arrow" onClick={onClose}>
              Close
            </button>
          ) : (
            <>
              <button type="button" className="btn btn--primary btn--sm" onClick={() => setSent(true)}>
                <span>Send the brief</span>
                <span className="btn__badge" aria-hidden="true">
                  <Icon name="arrow" size={11} strokeWidth={0.961} />
                </span>
              </button>
              <button
                type="button"
                className="btn btn--secondary btn--sm btn--no-arrow"
                onClick={onClose}
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
