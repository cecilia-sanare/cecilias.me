import { App } from '../../types/app';
import { Card, CardHeader, CardImage } from '../common/Card';
import { CardActions } from '../common/Card';
import { CardStatus } from '../common/Card/CardStatus';
import { Link, SourceLink } from '../common/Link';
import { BsLink45Deg } from 'react-icons/bs';
import * as styles from './AppCard.module.scss';

export type AppCardProps = {
  app: App;
};

export function AppCard({ app }: AppCardProps) {
  return (
    <Card className={styles.card}>
      <CardHeader>
        {app.name}
        <CardStatus status={app.status} />
      </CardHeader>
      <CardImage src={app.image} />
      <div>{app.description}</div>
      <CardActions>
        <SourceLink repo={app.repo} />
        {app.url && <Link icon={BsLink45Deg} src={app.url} />}
      </CardActions>
    </Card>
  );
}
