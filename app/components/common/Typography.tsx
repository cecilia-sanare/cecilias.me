import { ReactNode } from 'react';
import * as styles from './Typography.module.scss';
import classNames from 'classnames';

export enum TypographyTypes {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
}

export type TypographyProps = {
  type?: TypographyTypes;
  children: ReactNode;
};

export function Typography({ type: Type = TypographyTypes.H2, children }: TypographyProps) {
  return <Type className={classNames(styles.typography, styles[Type])}>{children}</Type>;
}
