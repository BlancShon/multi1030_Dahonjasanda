import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import StockList from '../stocklist';
import InsertStock from '../insertstock/insertstock'
import NewsPage from '../news/newspage';
import WordList from '../wordlist/wordlist';

export default function LabTabs({ list, slist }) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', flexDirection: 'column', alignItems: 'center', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Tab label="자산" value="1" sx={{ flex: 1, fontSize: '1.5rem', textAlign: 'center' }}/>
            <Tab label="매매 일지" value="2" sx={{ flex: 1, fontSize: '1.5rem', textAlign: 'center' }}/>
            <Tab label="뉴스" value="3" sx={{ flex: 1, fontSize: '1.5rem', textAlign: 'center' }}/>
            <Tab label="경제용어" value="4" sx={{ flex: 1, fontSize: '1.5rem', textAlign: 'center' }}/>
          </TabList>
        </Box>
        <Box sx={{ width: '100%' }}>
            <TabPanel value="1">
              <Box>
                <StockList list={list}/>
              </Box>
            </TabPanel>
            <TabPanel value="2">
              <Box>
                <InsertStock slist={slist}/>
              </Box>
            </TabPanel >
            <TabPanel value="3">
              <Box>
                <NewsPage />
              </Box>
            </TabPanel>
            <TabPanel value="4">
              <Box>
                <WordList />
              </Box>
            </TabPanel>
        </Box>
      </TabContext>
    </Box>
  );
}