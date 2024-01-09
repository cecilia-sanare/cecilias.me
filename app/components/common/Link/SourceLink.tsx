import { Link } from './Link';
import { IconType } from 'react-icons';
import { FaBitbucket, FaGithub, FaGitlab } from 'react-icons/fa';
import { useReadOnlyCachedState } from '../../../hooks/use-cached-state';
import { SourceFormatters } from '../../../utils/source';
import * as styles from './SourceLink.module.scss';

const SourceIcons: Record<string, IconType> = {
  bitbucket: FaBitbucket,
  github: FaGithub,
  gitlab: FaGitlab,
};

export type SourceLinkProps = {
  repo: string;
};

export function SourceLink({ repo }: SourceLinkProps) {
  const [type, icon, url] = useReadOnlyCachedState(() => {
    const [type, slug] = repo.split(':');

    return [type, SourceIcons[type], SourceFormatters[type](slug)];
  }, [repo]);

  return <Link className={styles[type]} icon={icon} src={url} />;
}
