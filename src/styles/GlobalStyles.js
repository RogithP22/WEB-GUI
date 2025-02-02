import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Root level variables for theme customization */
  :root {
    /* Backgrounds */
    --desktop-bg: ${({ theme }) => theme.desktopBg};
    --window-bg: ${({ theme }) => theme.windowBg};
    --taskbar-bg: ${({ theme }) => theme.desktopBg};
    --notification-bg: ${({ theme }) => theme.windowBg};

    /* Window Elements */
    --window-border: ${({ theme }) => theme.windowBorder};
    --window-title-active: ${({ theme }) => theme.windowTitleActive};
    --window-title-inactive: ${({ theme }) => theme.windowTitleInactive};
    --taskbar-button-bg: ${({ theme }) => theme.windowBg};
    --taskbar-button-active: rgba(255, 255, 255, 0.2);
    
    /* Text and Icons */
    --text-color: ${({ theme }) => theme.textColor};
    --notification-text: ${({ theme }) => theme.textColor};
    --icon-bg: rgba(255, 255, 255, 0.2);

    /* Button Styles */
    --button-bg: ${({ theme }) => theme.buttonBg};
    --button-border: ${({ theme }) => theme.windowBorder};

    /* Hover Effects */
    --dark-hover: #333;
    --dark-text-hover: #fff;

    --light-hover: #ddd;
    --light-text-hover: #000;

    --classic-hover: #c4a484;
    --classic-text-hover: #fff;

    --pastel-hover: #f3d3e7;
    --pastel-text-hover: #5c2a5d;

    --pink-hover: #ffb6c1;
    --pink-text-hover: #6a1b4d;
  }

  /* Basic reset and box model */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Body styles */
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    overflow: hidden;
    background-color: var(--desktop-bg);
    color: var(--text-color);
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  /* Mobile screen adjustments */
  @media (max-width: 600px) {
    body {
      font-size: 14px;
    }
  }

  /* Touch screen adjustments */
  @media (pointer: coarse) {
    body {
      -webkit-tap-highlight-color: transparent;
    }
  }
`;

export default GlobalStyles;
