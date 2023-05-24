import styled from "@emotion/styled";

export const galleryLi = styled.li`
  width: 200px; 
  height: 200px;
  border-radius: 8px;
  cursor: pointer;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  }

`

export const galleryImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
