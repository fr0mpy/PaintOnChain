import { Theme, useMediaQuery } from "@mui/material";
import React from "react";

interface IScreenSizes {
    lg: boolean;
    md: boolean;
    sm: boolean;
}
export const useScreenSizes = (): IScreenSizes => ({
    lg: useMediaQuery((theme: Theme) => theme.breakpoints.up('lg')),
    md: useMediaQuery((theme: Theme) => theme.breakpoints.between('sm', 'lg')),
    sm: useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
});