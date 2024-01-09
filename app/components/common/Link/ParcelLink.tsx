import { Link } from './Link';
import { IconType } from 'react-icons';
import { FaNpm } from 'react-icons/fa';
import { useReadOnlyCachedState } from '../../../hooks/use-cached-state';
import { PARCEL_LINKS } from '../../../utils/parcel';
import * as styles from './ParcelLink.module.scss';
import { ParcelDist } from '../../../types/parcel';

const ParcelIcons: Record<string, IconType> = {
  npm: FaNpm,
};

export type ParcelLinkProps = {
  parcel: string;
};

export function ParcelLink({ parcel }: ParcelLinkProps) {
  const [type, icon, url] = useReadOnlyCachedState(() => {
    const [type, slug] = parcel.split(':') as [ParcelDist, string];

    const links = PARCEL_LINKS[type];

    return [type, ParcelIcons[type], links.url(slug)];
  }, [parcel]);

  return <Link className={styles[type]} icon={icon} src={url} />;
}
