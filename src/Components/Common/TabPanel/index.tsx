import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import React from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { setCurrentTabIndex } from '../../../Redux/rootSlice'
import { useAppSelector } from '../../../Redux/store';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tools-tabpanel-${index}`}
            aria-labelledby={`tools-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: (theme) => theme.spacing(2, 1, 1, 1), minHeight: 280 }}>
                    <>{children}</>
                </Box>
            )}
        </div>
    );
}

const a11yProps = (index: number) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

interface TabsComponentProps {
    tabs: Array<{ tabLabel: string, tabItem: React.ReactNode }>
}

export const TabsComponent: React.FC<TabsComponentProps> = ({ tabs }) => {
    const [value, setValue] = React.useState(0);

    const { currentTabIndex } = useAppSelector(state => {
        return { currentTabIndex: state.rootReducer.currentTabIndex }
    })
    const dispatch = useDispatch();

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        dispatch(setCurrentTabIndex(newValue))
    };

    return (
        <Box sx={{ width: '100%', backgroundColor: '#0e0e0e', color: 'white' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={currentTabIndex} onChange={handleChange} aria-label="">
                    {tabs.map(({ tabLabel }, i) =>
                        <Tab label={tabLabel} {...a11yProps(i)} sx={{ width: '50%', fontSize: 16, color: 'white', fontFamily: (theme) => theme.typography.body1 }} />)}
                </Tabs>
            </Box>
            {tabs.map(({ tabItem }, i) => <TabPanel value={currentTabIndex} index={i}>{tabItem}</TabPanel>)}
        </Box>
    );
}

