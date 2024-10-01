import { Box, Grid, Typography, Divider } from '@mui/material';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import StarRateIcon from '@mui/icons-material/StarRate';

const FeatureBar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: '50px',
        padding: '10px 20px',
        maxWidth: '100%',
        overflowX: 'auto',
      }}
    >
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        {/* Premium Quality Products */}
        <Grid item>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ShieldOutlinedIcon sx={{ color: 'red', marginRight: '8px' }} />
            <Typography variant="body1">Premium Quality Products</Typography>
          </Box>
        </Grid>

        <Divider orientation="vertical" flexItem sx={{ mx: 2, borderColor: 'red' }} />

        {/* Free Delivery */}
        <Grid item>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LocalShippingOutlinedIcon sx={{ color: 'red', marginRight: '8px' }} />
            <Typography variant="body1">Free Delivery In Pakistan</Typography>
          </Box>
        </Grid>

        <Divider orientation="vertical" flexItem sx={{ mx: 2, borderColor: 'red' }} />

        {/* 7 Days Exchange or Return */}
        <Grid item>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LoopOutlinedIcon sx={{ color: 'red', marginRight: '8px' }} />
            <Typography variant="body1">7 Days Exchange or Return</Typography>
          </Box>
        </Grid>

        <Divider orientation="vertical" flexItem sx={{ mx: 2, borderColor: 'red' }} />

        {/* Reviews */}
        <Grid item>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {[...Array(4)].map((_, index) => (
              <StarRateIcon key={index} sx={{ color: '#ffcc00', marginRight: '2px' }} />
            ))}
            <StarRateIcon sx={{ color: '#ffcc00', marginRight: '2px', opacity: 0.7 }} />
            <Typography variant="body1" sx={{ marginLeft: '8px' }}>
              12K+ Reviews
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeatureBar;
