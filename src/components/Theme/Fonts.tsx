import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      /* HKGrotesk regular */
      @font-face {
        font-family: "HKGrotesk";
        src: url("/fonts/HKGrotesk/HKGrotesk-Regular.woff2") format("woff2"),
          url("/fonts/HKGrotesk/HKGrotesk-Regular.woff") format("woff");
        font-weight: 400;
        font-style: normal;
        font-display: swap;
      }
      
      /* HKGrotesk italic */
      @font-face {
        font-family: "HKGrotesk";
        src: url("/fonts/HKGrotesk/HKGrotesk-Italic.woff2") format("woff2"),
          url("/fonts/HKGrotesk/HKGrotesk-Italic.woff") format("woff");
        font-weight: 400;
        font-style: italic;
        font-display: swap;
      }

      /* HKGrotesk semi-bold */
      @font-face {
        font-family: "HKGrotesk";
        src: url("/fonts/HKGrotesk/HKGrotesk-SemiBold.woff2") format("woff2"),
          url("/fonts/HKGrotesk/HKGrotesk-SemiBold.woff") format("woff");
        font-weight: 600;
        font-style: normal;
        font-display: swap;
      }

      /* HKGrotesk semi-bold italic */
      @font-face {
        font-family: "HKGrotesk";
        src: url("/fonts/HKGrotesk/HKGrotesk-SemiBoldItalic.woff2") format("woff2"),
          url("/fonts/HKGrotesk/HKGrotesk-SemiBoldItalic.woff") format("woff");
        font-weight: 600;
        font-style: italic;
        font-display: swap;
      }

      /* HKGrotesk bold */
      @font-face {
        font-family: "HKGrotesk";
        src: url("/fonts/HKGrotesk/HKGrotesk-Bold.woff2") format("woff2"),
          url("/fonts/HKGrotesk/HKGrotesk-Bold.woff") format("woff");
        font-weight: 700;
        font-style: normal;
        font-display: swap;
      }

      /* HKGrotesk bold italic */
      @font-face {
        font-family: "HKGrotesk";
        src: url("/fonts/HKGrotesk/HKGrotesk-BoldItalic.woff2") format("woff2"),
          url("/fonts/HKGrotesk/HKGrotesk-BoldItalic.woff") format("woff");
        font-weight: 700;
        font-style: italic;
        font-display: swap;
      }

      /* Juana semi-bold */
      @font-face {
        font-family: "Juana";
        src: url("/fonts/JuanaSemiBold/font.woff2") format("woff2"),
          url("/fonts/JuanaSemiBold/font.woff") format("woff");
        font-weight: 400;
        font-display: swap;
      }

      /* Juana bold */
      @font-face {
        font-family: "Juana";
        src: url("/fonts/JuanaBold/font.woff2") format("woff2"),
          url("/fonts/JuanaBold/font.woff") format("woff");
        font-weight: 600;
        font-display: swap;
      }
    `}
  />
)

export default Fonts
