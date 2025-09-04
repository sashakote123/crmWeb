import { Box, Typography } from '@mui/material';

interface Props {
  statusCode: 'p1' | 'p2' | 'p3' | 't1' | 't2' | 't3' | 't4' | 't5';
}

const statusConfig = {
  p1: {
    backgroundColor: 'rgba(0, 182, 155, 0.2)',
    color: '#00b69b',
    text: 'Идея',
  },
  p2: {
    backgroundColor: 'rgba(24, 134, 229, 0.2)',
    color: '#1886e5',
    text: 'Разработка',
  },
  p3: {
    backgroundColor: 'rgba(243, 117, 13, 0.2)',
    color: '#f3750d',
    text: 'Готово',
  },
  t1: {
    backgroundColor: 'rgba(0, 182, 155, 0.6)',
    color: 'rgba(0, 182, 155, 1)',
    text: 'Черновик',
  },
  t2: {
    backgroundColor: 'rgba(24, 134, 229, 0.6);',
    color: 'rgba(24, 134, 229, 1);',
    text: 'В очереди',
  },
  t3: {
    backgroundColor: 'rgba(243, 117, 13, 0.6)',
    color: 'rgba(243, 117, 13, 1)',
    text: 'В процессе',
  },
  t4: {
    backgroundColor: 'rgba(212, 86, 253, 0.6)',
    color: 'rgba(212, 86, 253, 1)',
    text: 'Тестирование',
  },
  t5: {
    backgroundColor: 'rgba(108, 255, 96, 0.6)',
    color: 'rgba(108, 255, 96, 1)',
    text: 'Готово',
  },
} as const;

const StatusBlock: React.FC<Props> = ({ statusCode }) => {
  const config = statusConfig[statusCode];

  return (
    <Box
      sx={{
        padding: '5px 12px',
        height: '28px',
        backgroundColor: config.backgroundColor,
        borderRadius: '4px',
        textAlign: 'center',
      }}
    >
      <Typography fontSize={12} fontWeight={400} lineHeight={'150%'} sx={{ color: config.color }}>
        {config.text}
      </Typography>
    </Box>
  );
};
export default StatusBlock;
