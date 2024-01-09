import { ReactNode } from 'react';
import * as styles from './Tooltip.module.scss';
import { Themes } from '../../types/themes';
import classNames from 'classnames';

export type TooltipProps = {
  theme?: Themes;
  children: ReactNode;
  tooltip: string;
};

export function Tooltip({ children, tooltip, theme }: TooltipProps) {
  return (
    <div className={classNames(styles.container, styles[theme])}>
      {children}
      <div className={styles.tooltip}>{tooltip}</div>
    </div>
  );
}
