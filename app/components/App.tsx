import { Header } from './Header';
import { ParcelCard } from './parcels/ParcelCard';
import * as styles from './App.module.scss';
import { App } from '../types/app';
import { parcelsByType } from '../../parcels';
import { ParcelType } from '../types/parcel';
import { Typography } from './common/Typography';

const APP_PARCELS = parcelsByType[ParcelType.App];
const FRAMEWORK_PARCELS = parcelsByType[ParcelType.Framework];
const LIBRARY_PARCELS = parcelsByType[ParcelType.Library];

export function App() {
  return (
    <div className={styles.app}>
      <Header>Hiya! I'm Ceci!</Header>
      {APP_PARCELS.length > 0 && (
        <>
          <Typography>Apps</Typography>
          <div className={styles.apps}>
            {APP_PARCELS.map((parcel, index) => (
              <ParcelCard key={index} parcel={parcel} />
            ))}
          </div>
        </>
      )}
      {FRAMEWORK_PARCELS.length > 0 && (
        <>
          <Typography>Frameworks</Typography>
          <div className={styles.apps}>
            {FRAMEWORK_PARCELS.map((parcel, index) => (
              <ParcelCard key={index} parcel={parcel} />
            ))}
          </div>
        </>
      )}
      {LIBRARY_PARCELS.length > 0 && (
        <>
          <Typography>Libraries</Typography>
          <div className={styles.libraries}>
            {LIBRARY_PARCELS.map((parcel, index) => (
              <ParcelCard key={index} parcel={parcel} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
