import { Box, Typography } from '@mui/material';

interface Props {
  statusCode: number;
}

const StatusBlock: React.FC<Props> = ({ statusCode }) => {
  return (
    <Box
      sx={{
        padding: '5px 12px',
        height: '28px',
        backgroundColor: `${statusCode === 0 ? 'rgba(0, 182, 155, 0.2)' : statusCode === 1 ? 'rgba(24, 134, 229, 0.2)' : 'rgba(243, 117, 13, 0.2)'}`,
        borderRadius: '4px',
        textAlign: 'center',
      }}
    >
      <Typography
        fontSize={12}
        fontWeight={400}
        lineHeight={'150%'}
        sx={{ color: `${statusCode === 0 ? '#00b69b' : statusCode === 1 ? '#1886e5' : '#f3750d'}` }}
      >
        {statusCode === 0 ? 'Идея' : statusCode === 1 ? 'Разработка' : 'Готово'}
      </Typography>
    </Box>
  );
};
export default StatusBlock;
