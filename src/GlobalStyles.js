import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3 {
    color: ${(props) => props.theme.textColor};
  }

  .desktop-icon {
    width: 60px;
    height: 60px;
    margin: 10px;
    transition: transform 0.3s ease;
  }

  .desktop-icon:hover {
    transform: scale(1.2);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
  }

  .desktop {
    display: flex;
    flex-wrap: wrap;
  }

  .icon-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
  }

  .taskbar {
    background-color: ${(props) => props.theme.taskbarColor};
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
  }

  .start-button {
    background-color: ${(props) => props.theme.accentColor};
    color: #fff;
    border-radius: 5px;
    padding: 5px 20px;
    cursor: pointer;
  }

  .start-button:hover {
    background-color: #1a6bb3;
  }

  .taskbar-icons {
    display: flex;
    gap: 15px;
  }

  .taskbar-icons .icon {
    color: #fff;
    cursor: pointer;
  }

  .window {
    background-color: ${(props) => props.theme.windowBackground};
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
    padding: 20px;
    position: relative;
  }

  .window-header {
    background-color: #222;
    padding: 10px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px 10px 0 0;
  }

  .window-buttons {
    display: flex;
    gap: 5px;
  }

  .window-buttons .button {
    background-color: #f00;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    cursor: pointer;
  }

  .window-buttons .button:hover {
    opacity: 0.7;
  }

  .context-menu {
    background-color: #444;
    border-radius: 8px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.6);
    color: #fff;
    position: absolute;
    padding: 10px;
  }

  .context-menu-item {
    padding: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .context-menu-item:hover {
    background-color: #555;
  }

  @keyframes slideIn {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .window {
    animation: slideIn 0.5s ease-out;
  }
`;

export default GlobalStyles;
