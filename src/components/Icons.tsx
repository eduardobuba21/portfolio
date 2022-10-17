// mui
import { SvgIcon, SvgIconProps } from '@mui/material';
import PublicRounded from '@mui/icons-material/PublicRounded';
import SchoolRounded from '@mui/icons-material/SchoolRounded';
import FlashOnRounded from '@mui/icons-material/FlashOnRounded';
import ArrowRightRounded from '@mui/icons-material/ArrowRightRounded';
import MailOutlineRounded from '@mui/icons-material/MailOutlineRounded';
import BusinessCenterRounded from '@mui/icons-material/BusinessCenterRounded';
import KeyboardBackspaceRounded from '@mui/icons-material/KeyboardBackspaceRounded';
// assets
import { ReactComponent as Github } from 'src/assets/github.svg';
import { ReactComponent as Linkedin } from 'src/assets/linkedin.svg';
import { ReactComponent as Instagram } from 'src/assets/instagram.svg';

// ----------------------------------------------------------------------

export const ListItemIcon = ArrowRightRounded;
export const BackIcon = KeyboardBackspaceRounded;

// about
export const SchoolIcon = SchoolRounded;
export const ExperienceIcon = FlashOnRounded;
export const BusinessIcon = BusinessCenterRounded;

// projects
export const WebIcon = PublicRounded;

// social
export const MailIcon = MailOutlineRounded;
export function GithubIcon({ ...props }: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <Github />
    </SvgIcon>
  );
}
export function LinkedinIcon({ ...props }: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <Linkedin />
    </SvgIcon>
  );
}
export function InstagramIcon({ ...props }: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <Instagram />
    </SvgIcon>
  );
}
