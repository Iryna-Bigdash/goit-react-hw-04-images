import styled from "@emotion/styled";

export const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(102, 51, 153, 0.7);
`
export const ModalContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 70%;
    width: 70%;
    border-radius: 4px;

`
export const ModalImg = styled.img`
    display: block;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const CloseBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: transparent;
  color: white;
  padding:5px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`