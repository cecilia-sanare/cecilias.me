import { Coverage, Github, Npm } from '@uiw/react-shields';
import { useReadOnlyCachedState } from '../../hooks/use-cached-state';
import { AppParcel, FrameworkParcel, LibraryParcel, ParcelDist, isPackage } from '../../types/parcel';
import * as styles from './ParcelBadges.module.scss';
import { Sources } from '../../types/source';

export type ParcelBadgesProps = {
  parcel: AppParcel | LibraryParcel | FrameworkParcel;
};

export function ParcelBadges({ parcel }: ParcelBadgesProps) {
  const [type, user, repo] = useReadOnlyCachedState(() => {
    const [type, slug] = parcel.repo.split(':') as [Sources, string];
    const [user, repo] = slug.split('/');

    return [type, user, repo];
  }, [parcel]);

  if (isPackage(parcel)) {
    const [, scope, packageName] = useReadOnlyCachedState(() => {
      const [type, slug] = parcel.parcel.split(':') as [ParcelDist, string];
      const [scope, packageName] = slug.split('/');

      if (packageName) {
        return [type, scope, packageName];
      }

      return [type, null, scope];
    }, [parcel]);

    return (
      <div className={styles.badges}>
        <Github user={user} repo={repo}>
          <Github.Social type="stars" />
        </Github>
        <Npm.Version scope={scope} packageName={packageName} />
        <Npm.Downloads scope={scope} packageName={packageName} />
      </div>
    );
  }

  return (
    <div className={styles.badges}>
      <Github user={user} repo={repo}>
        <Github.Social type="stars" />
      </Github>
      <Coverage.Coverages type={type} user={user} repo={repo} />
    </div>
  );
}
