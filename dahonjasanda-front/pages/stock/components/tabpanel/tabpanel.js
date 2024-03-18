import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import StockList from '../stocklist';
import InsertStock from '../insertstock/insertstock'
import NewsPage from '../news/newspage';

export default function LabTabs({ list, slist }) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="자산" value="1" sx={{ width: '50%' }}/>
            <Tab label="매매 일지" value="2" sx={{ width: '50%' }}/>
            <Tab label="뉴스" value="3" sx={{ width: '50%' }}/>
          </TabList>
        </Box>
        <Box>
            <TabPanel value="1">
              <Box sx={{ width: '100%' }}>
                <StockList list={list}/>
              </Box>
            </TabPanel>
            <TabPanel value="2">
              <Box>
                <InsertStock slist={slist}/>
              </Box>
            </TabPanel>
            <TabPanel value="3">
              <Box>
                <NewsPage />
              </Box>

            </TabPanel>
        </Box>
      </TabContext>
    </Box>
  );
}