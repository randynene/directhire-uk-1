import { deriskItems } from '@/lib/content/uk';

export default function DeriskBand() {
  return (
    <div className="derisk-wrap" data-anim="derisk">
      <div className="derisk-band">
        <div className="derisk-band__inner">
          {deriskItems.map((text) => (
            <span className="derisk-band__item" key={text}>
              <span className="status-dot" aria-hidden="true" />
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
