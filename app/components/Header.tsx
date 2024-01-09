import * as styles from './Header.module.scss';
import image from '../../images/favicon-96.png';
import { ReactNode } from 'react';
import { Typography, TypographyTypes } from './common/Typography';

export type HeaderProps = {
  children: ReactNode;
};

export function Header({ children }: HeaderProps) {
  return (
    <Typography type={TypographyTypes.H1}>
      <div>{children}</div>
      <img className={styles.icon} src={image} />
    </Typography>
  );
}
