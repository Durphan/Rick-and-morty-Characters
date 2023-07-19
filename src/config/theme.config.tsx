import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import * as React from "react"

type ThemeProp = {
    children: JSX.Element|JSX.Element[]
};

export enum themePallete {
    BG = "#27374D",
    main="#DDE6ED",
    FONT_GLOBAL="`Roboto`",
    ERROR_MAIN ="#f44336",
    BG_ERROR_MAIN = "rgba(244,67,54,0,1)"
}

const Theme = createTheme({
    palette:{
        mode:"dark",
        background:{
            default: themePallete.BG,

        },
        primary:{
            main: themePallete.main
        }
    },
    typography:{
        fontFamily:themePallete.FONT_GLOBAL
    },
    components:{
        MuiButton:{
            defaultProps:{
                style:{
                    textTransform:"none",
                    boxShadow:"none",
                    borderRadius:"1.5em"
                }
            }
        },
       MuiAlert:{
        defaultProps:{
            style:{
                borderRadius:"0.8em",
                fontSize:"1em",
            },
        },
        styleOverrides:{
            standardError:{
                border:`1px solid ${themePallete.ERROR_MAIN}`,
                background:`${themePallete.BG_ERROR_MAIN}`
            },
        },
       },
    },
});


export const ThemeConfig: React.FC<ThemeProp> = ({children}) => {
    return(
        <ThemeProvider theme={Theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    )

}