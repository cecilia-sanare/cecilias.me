import { Card, CardHeader, CardImage } from '../common/Card';
import { CardActions } from '../common/Card';
import { CardStatus } from '../common/Card/CardStatus';
import { Link, SourceLink } from '../common/Link';
import { BsLink45Deg } from 'react-icons/bs';
import * as styles from './ParcelCard.module.scss';
import { Parcel, isImageParcel, isPackage } from '../../types/parcel';
import classNames from 'classnames';
import { ParcelBadges } from './ParcelBadges';
import { ParcelLink } from '../common/Link/ParcelLink';

export type ParcelCardProps = {
  parcel: Parcel;
};

export function ParcelCard({ parcel }: ParcelCardProps) {
  return (
    <Card className={classNames(styles.card, styles[parcel.type])}>
      <CardHeader>
        <div className={styles.name}>
          {parcel.name}
          <ParcelBadges parcel={parcel} />
        </div>
        <CardStatus status={parcel.status} />
      </CardHeader>
      {isImageParcel(parcel) && <CardImage src={parcel.imageUrl} />}
      <div className={styles.description}>{parcel.description}</div>
      <CardActions>
        {parcel.url && <Link icon={BsLink45Deg} src={parcel.url} />}
        {isPackage(parcel) && <ParcelLink parcel={parcel.parcel} />}
        <SourceLink repo={parcel.repo} />
      </CardActions>
    </Card>
  );
}
