import { AppBar, Toolbar, Typography, Button, Box, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

export const Header = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const isOnUploadPage = router.pathname.includes('upload');
  const base = process.env.PUBLIC_URL || '';
  const home = base + '/';
  const upload = base + '/upload';
  return (
    <AppBar position="static" color="transparent" sx={{ marginBottom: 4 }}>
      <Toolbar>
        <Link href={home} color="inherit" underline="none">
          <Typography variant="h6" component="div">
            <Box
              sx={{
                verticalAlign: 'middle',
                paddingRight: '10px',
                width: '40px',
                height: '40px',
              }}
              component="img"
              height="40"
              alt=""
              src="Exabeam-logo-emblem-green-010522.svg.svg"
            />
             Exabeam Internal Secret Sharing Tool (EISST)
          </Typography>
        </Link>
        <Box
          sx={{
            marginLeft: 'auto',
          }}
        >
          <Button
            component={Link}
            href={isOnUploadPage ? home : upload}
            variant="contained"
            color="primary"
          >
            {isOnUploadPage ? t('header.buttonHome') : t('header.buttonUpload')}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
