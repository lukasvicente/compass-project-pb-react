import React from "react";
import { ThemeProvider } from "styled-components";

interface IPropsTheme {
  children: React.ReactNode,
};

const theme = {
  palette: {
    primary: {
      main: "#212121",
      light: "#212121d1",
      dark: "#000000",
      contrastText: "#fff",
    },
    secondary: {
      main: "#FF2D04",
      light: "#C13216",
      dark: "#C13216",
      contrastText: "#fff",
    },
    error:{
      main: '#E96F6F'
    },
    success:{
      main: '#6ECF95'
    }
  }
}

const Theme = ({ children  }  : IPropsTheme ) => {

  return(
    <ThemeProvider theme={theme}> {children} </ThemeProvider>
  )
}

export default Theme;