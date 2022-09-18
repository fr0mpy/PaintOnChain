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
import { Spacer } from "../Spacer";
import { Typography } from "@mui/material";


interface IMenuSections {
    container?: MutableRefObject<HTMLDivElement | null>;
    containerTitleHeight?: number
};

export const MenuSections: React.FC<IMenuSections> = ({ container, containerTitleHeight = 0 }) => {
    const aboutSectionRef = React.useRef<HTMLSpanElement | null>(null);
    const roadMapSectionRef = React.useRef<HTMLSpanElement | null>(null);
    const teamSectionRef = React.useRef<HTMLSpanElement | null>(null);
    const faqSectionRef = React.useRef<HTMLSpanElement | null>(null);

    const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

    const { section } = useAppSelector(state => {
        return { section: state.rootReducer.section }
    });

    React.useEffect(() => {
        switch (section) {
            case Sections.RoadMap:
                roadMapSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                break;
            case Sections.Team:
                teamSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                break;
            case Sections.Faq:
                faqSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                break;
            default:
                aboutSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [section])

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
        return <>
            <Typography variant={'h4'} textAlign={'center'} sx={{ paddingTop: 2, color: 'white' }} ref={aboutSectionRef}>
                About
            </Typography>
            <Spacer vertical spacing={2} style={{ width: '100%' }} />
            <MenuSectionContainer>
                <About />
            </MenuSectionContainer>
            <Spacer vertical spacing={2} style={{ width: '100%' }} />
            <Typography variant={'h4'} textAlign={'center'} sx={{ paddingTop: 2, color: 'white' }} ref={roadMapSectionRef}>
                RoadMap
            </Typography>
            <Spacer vertical spacing={2} style={{ width: '100%' }} />
            <MenuSectionContainer>
                <RoadMap />
            </MenuSectionContainer>
            <Spacer vertical spacing={2} style={{ width: '100%' }} />
            <Typography variant={'h4'} textAlign={'center'} sx={{ paddingTop: 2, color: 'white' }} ref={teamSectionRef}>
                Team
            </Typography>
            <Spacer vertical spacing={2} style={{ width: '100%' }} />
            <MenuSectionContainer>
                <Team />
            </MenuSectionContainer>
            <Spacer vertical spacing={2} style={{ width: '100%' }} />
            <Typography variant={'h4'} textAlign={'center'} sx={{ paddingTop: 2, color: 'white' }} ref={faqSectionRef}>
                FAQ
            </Typography>
            <Spacer vertical spacing={2} style={{ width: '100%' }} />
            <MenuSectionContainer>
                <FAQ />
            </MenuSectionContainer>
            <Spacer vertical spacing={2} style={{ width: '100%' }} />
        </>
    }
}