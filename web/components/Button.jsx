'use client';

import Icon from './Icon';
import { useModal } from './ModalProvider';

const BADGE_SIZE = { sm: 11, md: 12, lg: 13 };

export function PrimaryButton({ children, size = 'md', onClick, ...rest }) {
  return (
    <button type="button" className={`btn btn--primary btn--${size}`} onClick={onClick} {...rest}>
      <span>{children}</span>
      <span className="btn__badge" aria-hidden="true">
        <Icon name="arrow" size={BADGE_SIZE[size]} />
      </span>
    </button>
  );
}

export function SecondaryButton({ children, size = 'md', href, onClick, ...rest }) {
  const cls = `btn btn--secondary btn--${size} btn--no-arrow`;
  if (href) {
    return (
      <a className={cls} href={href} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={cls} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}

export function OpenModalButton({ children, size = 'md', variant = 'primary' }) {
  const { open } = useModal();
  const Cmp = variant === 'primary' ? PrimaryButton : SecondaryButton;
  return (
    <Cmp size={size} onClick={open}>
      {children}
    </Cmp>
  );
}

export function CheckItem({ children, small }) {
  return (
    <li className={small ? 'check-item check-item--sm' : 'check-item'}>
      <span className="check-item__icon">
        <Icon name="check" size={15} strokeWidth={0.938} />
      </span>
      <span className="check-item__text">{children}</span>
    </li>
  );
}
