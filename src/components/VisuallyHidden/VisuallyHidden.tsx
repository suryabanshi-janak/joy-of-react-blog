import clsx from 'clsx';

import styles from './VisuallyHidden.module.css';

interface VisuallyHiddenProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: React.ElementType;
}
export default function VisuallyHidden({
  as: Element = 'span',
  children,
  className,
  ...delegated
}: VisuallyHiddenProps) {
  return (
    <Element className={clsx(styles.wrapper, className)} {...delegated}>
      {children}
    </Element>
  );
}
