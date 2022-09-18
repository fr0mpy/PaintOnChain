import { Theme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";

interface ITabletSectionContainer {
    children: React.ReactNode;
}

export const MenuSectionContainer: React.FC<ITabletSectionContainer> = ({ children }) => {

    return (
        <div style={{
            backgroundColor: '#e579b9',
            border: 'solid 5px rgb(160, 84, 129)',
            color: 'white',
            borderRadius: '5px',
            height: 'fit-content',
            overflowY: 'auto',
            width: '85%',
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            padding: '16px'
        }}>
            {children}
        </div>
    )
}
