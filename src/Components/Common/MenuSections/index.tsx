import { useAppSelector } from "../../../Redux/store";
import About from "../Navigation/About";
import RoadMap from "../Navigation/Roadmap";
import FAQ from "../Navigation/FAQ";
import Team from "../Navigation/Team";
import { Sections } from "../Navigation/Headings";
import React, { MutableRefObject } from "react";
import { MenuSectionContainer } from "../MenuSectionContainer";
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";
import { Theme } from "@mui/material/styles";
import { Typography } from "@mui/material";


interface IMenuSections {
    container?: MutableRefObject<HTMLDivElement | null>;
    containerTitleHeight?: number
};

export const MenuSections: React.FC<IMenuSections> = ({ container, containerTitleHeight = 0 }) => {

    const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

    const { section } = useAppSelector(state => {
        return { section: state.rootReducer.section }
    });

    if (isDesktop) {
        switch (section) {
            case Sections.About:
                return <About />;
            case Sections.RoadMap:
                return <RoadMap />;
            case Sections.Team:
                return <Team />;
            case Sections.Faq:
                return <FAQ />;
            default:
                return <></>;
        }
    } else {
        switch (section) {
            case Sections.About:
                return <>
                    <Typography variant={'h4'} textAlign={'center'} sx={{ paddingTop: 2, marginBottom: 2, color: 'white' }}>
                        About
                    </Typography>
                    <MenuSectionContainer>
                        <About />
                    </MenuSectionContainer>
                </>
            case Sections.RoadMap:
                return <>
                    <Typography variant={'h4'} textAlign={'center'} sx={{ paddingTop: 2, marginBottom: 2, color: 'white' }}>
                        RoadMap
                    </Typography>
                    <MenuSectionContainer>
                        <RoadMap />
                    </MenuSectionContainer>
                </>
            case Sections.Team:
                return <>
                    <Typography variant={'h4'} textAlign={'center'} sx={{ paddingTop: 2, marginBottom: 2, color: 'white' }}>
                        Team
                    </Typography>
                    <MenuSectionContainer>
                        <Team />
                    </MenuSectionContainer>
                </>
            case Sections.Faq:
                return <>
                    <Typography variant={'h4'} textAlign={'center'} sx={{ paddingTop: 2, marginBottom: 2, color: 'white' }}>
                        FAQ
                    </Typography>
                    <MenuSectionContainer>
                        <FAQ />
                    </MenuSectionContainer>
                </>
            default:
                return <></>;
        }
    }
}