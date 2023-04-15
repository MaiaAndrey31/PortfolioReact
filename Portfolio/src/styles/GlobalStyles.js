import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
    font-family: "Josefin Sans", sans-serif;
}
::-webkit-scrollbar {
    width: 10px;
    cursor: pointer;
  }
  
  ::-webkit-scrollbar-track {
    background-color: #000000;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #f9d004;
    border-radius: 20px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background-color: #ffeb84;
  }
`