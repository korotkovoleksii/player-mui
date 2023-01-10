import { Switch } from '@mui/material';
import { styled } from '@mui/material/styles';
import { colors } from '../../styles/variables';

const CustomSwitch = styled(Switch)(({ theme }) => ({
  width: 176,
  height: 42,
  padding: 0,

  '& .MuiSwitch-switchBase': {
    padding: 0,
    transition: 'all 0.5s',

    '& .MuiSwitch-input': {
      zIndex: 3,
    },
    '& .MuiSwitch-thumb': {
      width: 88,
      height: 42,
      borderRadius: 51,
      color: colors.light.thumb,
      boxShadow: theme.shadows[0],
    },

    '&.Mui-checked': {
      transform: 'translateX(88px)',
      '& + .MuiSwitch-track': {
        backgroundColor: colors.dark.track,
      },
      '& .MuiSwitch-thumb': {
        backgroundColor: colors.dark.thumb,
      },
    },

    '& + .MuiSwitch-track': {
      borderRadius: 51,
      backgroundColor: colors.light.track,
    },
  },
  '&:before, &:after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 6,
  },
  '&:before': {
    content: "'Light'",
    backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 22 22"><path fill="${encodeURIComponent(
      colors.leftLabelSwitch
    )}" d="M11 8C12.65 8 14 9.35 14 11C14 12.65 12.65 14 11 14C9.35 14 8 12.65 8 11C8 9.35 9.35 8 11 8ZM11 6C8.24 6 6 8.24 6 11C6 13.76 8.24 16 11 16C13.76 16 16 13.76 16 11C16 8.24 13.76 6 11 6ZM1 12H3C3.55 12 4 11.55 4 11C4 10.45 3.55 10 3 10H1C0.45 10 0 10.45 0 11C0 11.55 0.45 12 1 12ZM19 12H21C21.55 12 22 11.55 22 11C22 10.45 21.55 10 21 10H19C18.45 10 18 10.45 18 11C18 11.55 18.45 12 19 12ZM10 1V3C10 3.55 10.45 4 11 4C11.55 4 12 3.55 12 3V1C12 0.45 11.55 0 11 0C10.45 0 10 0.45 10 1ZM10 19V21C10 21.55 10.45 22 11 22C11.55 22 12 21.55 12 21V19C12 18.45 11.55 18 11 18C10.45 18 10 18.45 10 19ZM4.99 3.58C4.6 3.19 3.96 3.19 3.58 3.58C3.19 3.97 3.19 4.61 3.58 4.99L4.64 6.05C5.03 6.44 5.67 6.44 6.05 6.05C6.43 5.66 6.44 5.02 6.05 4.64L4.99 3.58ZM17.36 15.95C16.97 15.56 16.33 15.56 15.95 15.95C15.56 16.34 15.56 16.98 15.95 17.36L17.01 18.42C17.4 18.81 18.04 18.81 18.42 18.42C18.81 18.03 18.81 17.39 18.42 17.01L17.36 15.95ZM18.42 4.99C18.81 4.6 18.81 3.96 18.42 3.58C18.03 3.19 17.39 3.19 17.01 3.58L15.95 4.64C15.56 5.03 15.56 5.67 15.95 6.05C16.34 6.43 16.98 6.44 17.36 6.05L18.42 4.99ZM6.05 17.36C6.44 16.97 6.44 16.33 6.05 15.95C5.66 15.56 5.02 15.56 4.64 15.95L3.58 17.01C3.19 17.4 3.19 18.04 3.58 18.42C3.97 18.8 4.61 18.81 4.99 18.42L6.05 17.36Z"/></svg>')`,
    color: colors.leftLabelSwitch,
    backgroundRepeat: 'no-repeat',
    paddingLeft: 29,
    left: 13,
    pointerEvents: 'none',
  },
  '&:after': {
    color: colors.rightLabelSwitch,
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 22 22"><path fill="${encodeURIComponent(
      colors.rightLabelSwitch
    )}" d="M6.37 2.51C6.19 3.15 6.1 3.82 6.1 4.5C6.1 8.58 9.42 11.9 13.5 11.9C14.18 11.9 14.85 11.81 15.49 11.63C14.45 14.19 11.93 16 9 16C5.14 16 2 12.86 2 9C2 6.07 3.81 3.55 6.37 2.51ZM9 0C4.03 0 0 4.03 0 9C0 13.97 4.03 18 9 18C13.97 18 18 13.97 18 9C18 8.54 17.96 8.08 17.9 7.64C16.92 9.01 15.32 9.9 13.5 9.9C10.52 9.9 8.1 7.48 8.1 4.5C8.1 2.69 8.99 1.08 10.36 0.0999999C9.92 0.0399999 9.46 0 9 0Z"/></svg>')`,
    content: "'Dark'",
    right: 13,
    paddingLeft: 28,
    pointerEvents: 'none',
  },
}));
export default CustomSwitch;
