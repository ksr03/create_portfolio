import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    body: 'Noto Sans JP, sans-serif',
    heading: 'Noto Sans JP, sans-serif',
  },
  styles: {
    global: {
      body: {
        margin: 0,
        padding: 0,
        backgroundColor: '#FCFCEE',
        backgroundImage: 'url("bank-note.svg")',
      },
    }
  }
});