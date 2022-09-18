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
					margin: { xs: 1, sm: 2 },
					backgroundColor: (theme) => theme.palette.primary.main,
					width: '700px',
					height: 700,
					border: (theme) => `solid ${theme.spacing(.5)} ${theme.palette.primary.dark}`,
					borderRadius: 1.5
				}
			}}
		>
			<DialogTitle sx={{ backgroundColor: 'black' }} >
				<Grid container justifyContent={'center'}>
					<div style={{ height: 'fit-content' }} ref={containerTitleRef}>
						<IconButton
							aria-label="close"
							onClick={handleClose}
							sx={{
								position: 'absolute',
								right: 8,
								top: 8,
								color: 'white'
							}}
						>
							<CloseIcon />
						</IconButton>
					</div>
					<Grid container justifyContent={'center'} sx={{ width: '80%' }}>
						<Headings />
					</Grid>
				</Grid>
			</DialogTitle>
			<DialogContent dividers sx={{ backgroundColor: (theme) => theme.palette.primary.light, paddingTop: 0 }} ref={containerRef}>
				<Grid container justifyContent={'center'}>
					<MenuSections container={containerRef} containerTitleHeight={containerTitleRef.current?.clientHeight} />
				</Grid>
				<Grid container justifyContent={'center'}>
					<IconButton onClick={handleScrollToTop}>
						<ArrowUpwardIcon fontSize={'large'} sx={{ color: 'white' }} />
					</IconButton>
				</Grid>
			</DialogContent>
			<Grid container justifyContent={'center'} alignItems={'center'} sx={{ minHeight: 54, backgroundColor: 'black' }}>
				<SocialLinks />
			</Grid>
		</Dialog>
	)
}