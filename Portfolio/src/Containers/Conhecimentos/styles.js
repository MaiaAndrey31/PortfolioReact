import styled from "styled-components";
import ImagemConhecimentos from "../../assets/BgConhecimentos.jpg"


export const BgConhecimentos = styled.div`

background-image: url(${ImagemConhecimentos});
background-size: cover;
width: 100%;
height: max-content;



`

export const Knowledge =styled.div` h2 {
  color: #ffffff;
  text-shadow: 2px 2px 4px #000000;
  font-size: 70px;
  text-align: center;
  padding: 15px;
}
`
export const Totems = styled.div` 
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

`
export const Image = styled.img`
    height: 100px;
    width: 100px;
`
export const H5 = styled.h5` 
  color: #f9d004;
  font-size: 22px;
  border-bottom: 2px solid #f9d004;
`
export const P = styled.p`
  color: #ffffff;
  margin-top: 20px;
  margin-bottom: 40px;
  font-size: 18px;

`
