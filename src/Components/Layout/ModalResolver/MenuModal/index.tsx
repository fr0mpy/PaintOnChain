import Dialog from "@mui/material/Dialog/Dialog";
import DialogContent from "@mui/material/DialogContent/DialogContent";
import DialogTitle from "@mui/material/DialogTitle/DialogTitle";
import IconButton from "@mui/material/IconButton/IconButton";
import { setModalType } from "../../../../Redux/rootSlice";
import { useDispatch } from "react-redux";
import CloseIcon from '@mui/icons-material/Close';
import Grid from "@mui/material/Grid/Grid";
import { Headings } from "../../../Common/Navigation/Headings";
import { MenuSections } from "../../../Common/MenuSections";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import React from "react";
import { SocialLinks } from "../../../Common/SocialLinks";
import { Typography } from "@mui/material";

export const MenuModal = () => {
	const dispatch = useDispatch();
	const containerRef = React.useRef<HTMLDivElement | null>(null);
	const containerTitleRef = React.useRef<HTMLDivElement | null>(null);

	const handleClose = () => dispatch(setModalType(undefined));
	const handleScrollToTop = () => containerRef.current?.scrollTo({ behavior: 'smooth', top: 0 });

	return (
		<Dialog
			onClose={handleClose}
			open
			PaperProps={{
				sx: {
					maxHeight: '100%',
					maxWidth: '100%',
					margin: 0,
					backgroundColor: (theme) => theme.palette.primary.main,
					borderRadius: 0
				}
			}}
		>
			<DialogTitle sx={{ padding: 0, backgroundColor: (theme) => theme.palette.primary.light }} ref={containerTitleRef}>
				<Grid container sx={{ padding: 1 }}>
					<Typography variant={'h4'} textAlign={'center'} sx={{
						color: 'white',
						flex: 1,
						marginLeft: 4
					}}>
						PAINT ON CHAIN
					</Typography>
					<IconButton
						aria-label="close"
						onClick={handleClose}
						sx={{ padding: 0 }}
					>
						<CloseIcon fontSize={'large'} sx={{ color: (theme) => theme.palette.primary.dark }} />
					</IconButton>
					<Grid container justifyContent={'center'} sx={{ color: 'white' }}>
						<Headings />
					</Grid>
				</Grid>
			</DialogTitle>
			<DialogContent dividers sx={{ backgroundColor: (theme) => theme.palette.primary.dark, paddingTop: 0 }} ref={containerRef}>
				<Grid container justifyContent={'center'}>
					<MenuSections container={containerRef} containerTitleHeight={containerTitleRef.current?.clientHeight} />
				</Grid>
				<Grid container justifyContent={'center'}>
					<IconButton onClick={handleScrollToTop}>
						<ArrowUpwardIcon fontSize={'large'} sx={{ color: 'white' }} />
					</IconButton>
				</Grid>
			</DialogContent>
			<Grid container justifyContent={'center'} alignItems={'center'} sx={{ minHeight: 54, backgroundColor: (theme) => theme.palette.primary.light }}>
				<SocialLinks />
			</Grid>
		</Dialog >
	)
}