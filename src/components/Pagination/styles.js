import { FormatAlignJustify } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import { display } from '@mui/system';

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: '30px 2px',
  },
  pageNumber: {
    margin: '0 20px !important',
    color: theme.palette.text.primary,
  },
}));
