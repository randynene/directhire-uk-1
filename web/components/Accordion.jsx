'use client';

import { useState } from 'react';
import Icon from './Icon';
import { faqItems } from '@/lib/content/uk';

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="accordion" data-accordion>
      {faqItems.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div className="accordion-item" data-open={isOpen} key={item.q}>
            <button
              type="button"
              className="accordion-item__trigger"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
            >
              <span className="accordion-item__index">{String(i + 1).padStart(2, '0')}</span>
              <span className="accordion-item__question">{item.q}</span>
              <span className="accordion-item__icon" data-icon-plus>
                <Icon name={isOpen ? 'minus' : 'plus'} size={18} strokeWidth={0.938} />
              </span>
            </button>
            <div className="accordion-item__panel">{item.a}</div>
          </div>
        );
      })}
    </div>
  );
}
