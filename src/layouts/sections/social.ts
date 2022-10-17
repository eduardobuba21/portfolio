// router
import { PATHS_SOCIAL } from 'src/routes/paths';
// components
import { GithubIcon, InstagramIcon, LinkedinIcon, MailIcon } from 'src/components/Icons';

// ----------------------------------------------------------------------

const SOCIAL = [
  {
    id: 'github',
    link: PATHS_SOCIAL.github,
    Icon: GithubIcon,
  },
  {
    id: 'instagram',
    link: PATHS_SOCIAL.instagram,
    Icon: InstagramIcon,
  },
  {
    id: 'linkedin',
    link: PATHS_SOCIAL.linkedin,
    Icon: LinkedinIcon,
  },
  //
  {
    id: 'mail',
    link: PATHS_SOCIAL.mail,
    Icon: MailIcon,
  },
];

// ----------------------------------------------------------------------

export { SOCIAL };
