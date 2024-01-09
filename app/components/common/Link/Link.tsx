import * as styles from './Link.module.scss';
import { IconType } from 'react-icons';
import classnames from 'classnames';

export type LinkProps = {
  icon: IconType;
  src: string;
  className?: string;
};

export function Link({ className, src, icon: Icon }: LinkProps) {
  return (
    <a className={classnames(styles.link, className)} href={src} target="_blank">
      <Icon className={styles.icon} size={30} />
    </a>
  );
}
