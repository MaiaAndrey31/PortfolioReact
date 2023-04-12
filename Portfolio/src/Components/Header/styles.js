import styled from "styled-components";


export const NavHeader = styled.div `
    display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 35px;
  padding-right: 35px;
  padding-top: 29px;
  padding-bottom: 100px;
 
 
 
 h2{
    color: #ffffff;
    font-size: 35px;
    font-weight: 700;
    

 }
 h2 span{
    color: #f9d004;
    
 }
 ul{
    display: flex;
    align-content: space-around;
    list-style: none;
    
 }

 a {
    color: #ffffff;
  list-style: none;
  display: inline-block;
  font-size: 22px;
  margin-right: 28px;
  text-decoration: none;
 

   &:hover {
    cursor: pointer;
    color: #f9d004;
  transition: 1s;

   }
 }

 

`