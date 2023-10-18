import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    body: 'Raleway, Noto Sans JP, sans-serif',
    heading: 'Noto Sans JP, sans-serif',
  },
  styles: {
    global: {
      body: {
        margin: 0,
        padding: 0,
        backgroundColor: '#F2F2F2',
        backgroundImage: 'url("bank-note.svg")',
      },
    }
  }
});