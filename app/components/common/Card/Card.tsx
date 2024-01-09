import { ReactNode } from 'react';
import * as styles from './Card.module.scss';
import classNames from 'classnames';

export type CardProps = {
  className?: string;
  children?: ReactNode;
};

export function Card({ className, children }: CardProps) {
  return <div className={classNames(styles.card, className)}>{children}</div>;
}
