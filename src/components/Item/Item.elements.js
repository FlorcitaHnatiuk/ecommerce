import styled from 'styled-components';

export const DetailBtn = styled.button `
    font-size: 16px;
    font-weight: 600;
    color: white;
    text-align: center;
    line-height: 48px;
    width: 200px;
    height: 48px;
    padding: 0 24px;
    margin-top: 0.8rem;
    background-color: #CCAFAF;
    border: none;
    border-radius: 6px;
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px;
    cursor: pointer;
`;

export const ItemContainer = styled.div `
    display: -webkit-flex;
    display: flex;
    -webkit-flex-flow: row wrap;
    flex-flow: row wrap;
    float: left;
    height: 100%;
    min-height: 1px;
    justify-content: space-between;
`;

export const Card = styled.div `
    width: 300px;
    height: 400px;
    background-color:white;
    border-radius: 6px;
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 10%), 0 -1px 2px 0 rgb(0 0 0 / 10%);
    margin: 0 0.8rem 1.6rem 0.8rem;
    flex-grow: 1;
    min-height: 100%;
    position: relative;

    &:hover{
        -webkit-box-shadow: 5px 13px 31px 3px rgba(0,0,0,0.32); 
        box-shadow: 5px 13px 31px 3px rgba(0,0,0,0.32);
    }
`;





