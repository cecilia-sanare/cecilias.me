import { Parcel, ParcelType } from './app/types/parcel';
import { Status } from './app/types/status';
import { groupBy } from './app/utils/group';
import { sortBy } from './app/utils/sort';

const _parcels: Parcel[] = [
  {
    type: ParcelType.App,
    name: 'Silvy',
    imageUrl: 'https://silvy.rains.cafe/silvy.png',
    description: 'An app for creating, sharing, and collaborating on strats for XIV',
    url: 'https://silvy.rains.cafe',
    repo: 'github:rain-cafe-xiv/silvy',
    status: Status.IN_DEVELOPMENT,
  },
  {
    type: ParcelType.App,
    name: 'Utils',
    imageUrl: 'https://raw.githubusercontent.com/rain-cafe/logos/main/utils/social-media.png',
    description: 'Local only implementation of your favorite tools.',
    url: 'https://utils.rains.cafe',
    repo: 'github:rain-cafe/utils',
    status: Status.IN_DEVELOPMENT,
  },
  {
    type: ParcelType.Framework,
    name: 'Flarie',
    imageUrl: 'https://repository-images.githubusercontent.com/659549026/891e12dd-c7f7-41d4-a689-c68ba76d1dee',
    description: 'A universal bot framework!~ 🔥',
    repo: 'github:rain-cafe/flarie',
    parcel: 'npm:@flarie/core',
    status: Status.IN_DEVELOPMENT,
  },
  {
    type: ParcelType.Framework,
    name: 'Salte Auth',
    imageUrl: 'https://repository-images.githubusercontent.com/70510237/9a5dca07-cab5-4b50-87b4-ad83f67776db',
    description: 'Authentication for the modern web!',
    repo: 'github:salte-auth/salte-auth',
    parcel: 'npm:@salte-auth/salte-auth',
    status: Status.SUNSET,
  },
  {
    type: ParcelType.Library,
    name: '@refreshly/core',
    description: 'Simply a key rotation tool!~',
    repo: 'github:rain-cafe/refreshly',
    parcel: 'npm:@refreshly/core',
    status: Status.COMPLETED,
  },
  {
    type: ParcelType.Library,
    name: '@rain-cafe/react-utils',
    description: 'Collection of react utilities curated by the Rainbow Cafe~ ❤️',
    repo: 'github:rain-cafe/react-utils',
    parcel: 'npm:@rain-cafe/react-utils',
    status: Status.COMPLETED,
  },
  {
    type: ParcelType.Library,
    name: '@rain-cafe/logger',
    description: 'A simple logger for all Rainbow Cafe Apps & Libraries',
    repo: 'github:rain-cafe/logger',
    parcel: 'npm:@rain-cafe/logger',
    status: Status.COMPLETED,
  },
  {
    type: ParcelType.Library,
    name: 'ng-currency',
    description: 'Currency with AngularJS made easy!',
    repo: 'github:salte-io/ng-currency',
    parcel: 'npm:ng-currency',
    status: Status.SUNSET,
  },
  {
    type: ParcelType.Library,
    name: 'quillie-components',
    description: 'Components for Quillie!',
    repo: 'github:salte-io/quillie-components',
    parcel: 'npm:@salte-io/quillie-components',
    status: Status.SUNSET,
  },
  {
    type: ParcelType.Library,
    name: 'salte-filter',
    description: 'Registers filter components allowing for a single input and output!',
    repo: 'github:salte-io/salte-filter',
    parcel: 'npm:salte-filter',
    status: Status.SUNSET,
  },
  {
    type: ParcelType.Library,
    name: 'salte-angular-hateoas',
    description: 'The simple way to consume HATEOAS enabled REST APIs with AngularJS',
    repo: 'github:salte-io/salte-angular-hateoas',
    parcel: 'npm:salte-angular-hateoas',
    status: Status.SUNSET,
  },
  {
    type: ParcelType.Library,
    name: 'dry-parser',
    description: 'A simple tool for parsing JavaScript objects to avoid repetition',
    repo: 'github:salte-io/dry-parser',
    parcel: 'npm:dry-parser',
    status: Status.SUNSET,
  },
];

export const parcels = sortBy(_parcels, 'status');
export const parcelsByType = groupBy(parcels, 'type');
