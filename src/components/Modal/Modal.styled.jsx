import styled from "@emotion/styled";

export const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(102, 51, 153, 0.7)
`
export const ModalContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-height: 70%;
    max-width: 70%;
    width: 100%;
    padding: 50px;
    border-radius: 3px;

`
export const ModalImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
`

export const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: transparent;
  color: #f9ecf9;
  border: none;
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;
`