import styled from "@emotion/styled";

export const LoadMore = styled.button`
    display: block;
    margin: 0 auto;
    padding: 10px;
    width: 150px;
    border: 1px solid white;
    border-radius: 4px;
    background-color:rgba(102, 51, 153);
    font-size: 16px;
    color: white;
    transition: color 0.3s ease;

    &&:hover{
        color: rgba(102, 51, 153);
        border-color: rgba(102, 51, 153);
        background-color: white;
    }
`