import Link from 'next/link';
import React from 'react';
import { Button } from '../Button';

export const CMSLink = ({
  type,
  url,
  newTab,
  reference,
  label,
  appearance,
  children,
  className,
}) => {
  const href =
    type === 'reference' &&
    typeof reference?.value === 'object' &&
    reference.value.slug
      ? `/${reference.value.slug}`
      : url;

  if (!appearance) {
    const newTabProps = newTab
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {};

    if (type === 'custom') {
      return (
        <a href={url} {...newTabProps} className={className}>
          {label && label}
          {children && children}
        </a>
      );
    }

    if (href) {
      return (
        <Link href={href}>
          <a {...newTabProps} className={className}>
            {label && label}
            {children && children}
          </a>
        </Link>
      );
    }
  }

  const buttonProps = {
    newTab,
    href,
    appearance,
    label,
  };

  return <Button className={className} {...buttonProps} el="link" />;
};
