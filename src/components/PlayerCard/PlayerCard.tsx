import { useState, useContext } from 'react';
import {
  Typography,
  Slider,
  IconButton,
  Container,
  Stack,
  Box,
} from '@mui/material';
import CustomSwitch from '../CustomSwitch/CustomSwitch';
import { useTheme } from '@mui/material/styles';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { AlbumImage } from './styles';
import { Controls } from '../Controls/Controls';
import { ColorModeContext } from '../App/App';
import { colors } from '../../styles/variables';

const PlayerCard = () => {
  const aa = useContext(ColorModeContext);
  const duration = 260; // seconds
  const theme = useTheme();
  const [position, setPosition] = useState(0);
  const [isLiked, setLiked] = useState<boolean | null>(null);

  const formatDuration = (value: number) => {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Box
          sx={{
            mt: 7,
            width: '402px',
          }}>
          <Stack alignItems={'center'}>
            <CustomSwitch
              sx={{
                mb: 5,
              }}
              onClick={aa.toggleColorMode}
            />
            <AlbumImage src="https://via.ritzau.dk/data/images/00180/311cc18f-3372-4bbd-b50f-d4a253bfb755-w_960.jpg" />
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={5}
              sx={{
                mt: 4,
              }}>
              <IconButton
                color="secondary"
                component="label"
                onClick={() => {
                  setLiked(isLiked === false ? null : false);
                }}>
                {isLiked === false ? (
                  <ThumbDownIcon />
                ) : (
                  <ThumbDownOffAltIcon />
                )}
              </IconButton>
              <Typography variant="h6" component="h5" color="secondary">
                Maniac
              </Typography>
              <IconButton
                color="secondary"
                component="label"
                onClick={() => {
                  setLiked(isLiked ? null : true);
                }}>
                {isLiked === true ? <ThumbUpIcon /> : <ThumbUpOffAltIcon />}
              </IconButton>
            </Stack>
            <Typography
              variant="subtitle1"
              component="span"
              sx={{
                mb: '23px',
                color:
                  theme.palette.mode === 'light'
                    ? colors.light.colorOfAuthor
                    : colors.dark.colorOfAuthor,
              }}>
              Michael Sambello
            </Typography>
            <Slider
              aria-label="Custom marks"
              defaultValue={20}
              value={position}
              min={0}
              step={1}
              max={duration}
              onChange={(_, value: number | number[]) => {
                if (!Array.isArray(value)) {
                  setPosition(value);
                }
              }}
              sx={{
                color:
                  theme.palette.mode === 'dark'
                    ? colors.dark.slider
                    : colors.light.slider,
              }}
            />
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              mt: '5px',
            }}>
            <Typography variant="body2" color="secondary">
              {formatDuration(position)}
            </Typography>
            <Typography variant="body2" color="secondary">
              {formatDuration(duration)}
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            mt: '25px',
            width: '430px',
          }}>
          <Controls />
        </Box>
      </Box>
    </Container>
  );
};

export default PlayerCard;
