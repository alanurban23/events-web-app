import React from 'react';
import { Box, Typography } from '../../material-ui';

interface TabPanelProps {
  children: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps): JSX.Element => {
  const { children, value, index } = props;

  return (
    <div
      data-testid='TabPanel'
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component='span'>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default TabPanel;
