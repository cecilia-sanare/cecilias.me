import { IconType, IconBaseProps } from 'react-icons';
import { Themes } from '../../types/themes';
import classNames from 'classnames';
import * as styles from './ThemeIcon.module.scss';

export type ThemeIconProps = {
  icon: IconType;
  theme: Themes;
} & IconBaseProps;

export function ThemeIcon({ icon: Icon, theme, className, ...props }: ThemeIconProps) {
  return <Icon className={classNames(styles[theme], className)} {...props} />;
}
