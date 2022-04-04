import styled from 'styled-components';

export const Counter = styled.div `
    text-align: center;
`;

export const Button = styled.button `
    text-align: center;
    background-color: #3483fa;
    color: #fff;
    padding: 0.5rem;
    width: 40px;
    height: 40px;
    border-radius: 30%;
    border-style: none;
    margin: 40px;
`;

export const Quantity = styled.p `
    text-align: center;
`;

export const AddToCart = styled.button `
    font-size: 16px;
    font-weight: 600;
    color: white;
    text-align: center;
    line-height: 48px;
    width: 280px;
    height: 48px;
    padding: 0 24px;
    background-color: #4189e6;
    border: none;
    border-radius: 6px;
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px;
    cursor: pointer;

    &:hover{
        background-color: #2968c8;
    }
`;
