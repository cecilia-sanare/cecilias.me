import classNames from 'classnames';
import * as styles from './CardImage.module.scss';

export type CardImageProps = {
  aspectRatio?: string;
  className?: string;
  src: string;
};

export function CardImage({ aspectRatio, className, src }: CardImageProps) {
  return (
    <div className={classNames(styles.container, className)}>
      <div
        className={styles.image}
        style={{
          aspectRatio: aspectRatio ?? '2/1',
          backgroundImage: `url(${src})`,
        }}
      />
    </div>
  );
}
