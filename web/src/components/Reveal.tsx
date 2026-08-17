import type { ElementType, PropsWithChildren } from 'react';

interface Props {
  className?: string;
  as?: ElementType;
}

export default function Reveal({ children, className = '', as: Tag = 'div' }: PropsWithChildren<Props>) {
  const Component = Tag as ElementType;
  return (
    <Component data-reveal className={`reveal-item ${className}`}>
      {children}
    </Component>
  );
}
