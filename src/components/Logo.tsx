import clsxm from '@/lib/clsxm';

import UnstyledLink from // UnstyledLinkProps,
'@/components/links/UnstyledLink';

// import { FC } from 'react';

// type LogoProps = UnstyledLinkProps;

const Logo = ({ ...rest }) => {
  return (
    <UnstyledLink
      {...rest}
      href="/"
      className={clsxm('text-2xl font-medium', 'hover:text-color-pink')}
    >
      {'<Vibey/>'}
    </UnstyledLink>
  );
};
export default Logo;
