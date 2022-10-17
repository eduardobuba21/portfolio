import { ReactNode } from 'react';
// components
import { m } from 'framer-motion';
import { MotionContainer, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

interface Props {
  children: ReactNode;
}

// ----------------------------------------------------------------------

export default function PageTransition({ children }: Props) {
  return (
    <MotionContainer>
      <m.div variants={varFade().in}>{children}</m.div>
    </MotionContainer>
  );
}
