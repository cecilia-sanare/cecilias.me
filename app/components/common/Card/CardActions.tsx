import { ReactNode } from 'react';
import * as styles from './CardActions.module.scss';

export type CardActionsProps = {
  children: ReactNode;
};

export function CardActions({ children }: CardActionsProps) {
  return <div className={styles.actions}>{children}</div>;
}
