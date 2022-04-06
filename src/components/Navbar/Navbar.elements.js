import styled from 'styled-components';

export const Container = styled.div `
    width: 100%;
    height: 85px;
    background-color: #fff159; 
`;

export const Wrapper = styled.div `
    width: 100%;
    max-width: 1300px; 
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
`;

export const LogoContainer = styled.div `
    margin-left: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-family: sans-serif;
    padding-top: 1rem;

    p {
        font-weight: bold;
        color:#0A043C; 
    }

    svg {
        fill: #0A043C;
        margin-right: 0.5rem;
    }
`;

export const Menu = styled.ul `
    height: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding-top: 1rem;

    @media screen and (max-width: 968px) {
        position: absolute;
        /* top: 70px; */
        left: ${({ open }) => (open ? "0" : "-100%")}; //Import
        width: 100%;
        height: 60vh;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        transition: 0.5s all ease;
    }
`;

export const MenuItem = styled.li `
    height: 100%;

    @media screen and (max-width: 968px) {
        width: 100%;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const MenuItemLink = styled.a `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0.5rem 2.5rem;
    color: #333333;
    font-family: sans-serif;
    font-size:14px;
    font-weight: 100;
    cursor: pointer;
    transition: 0.5s all ease;
    line-height: 22px;

    &:hover {
        background-color: #fff159;
        color:#0A043C; 
        transition: 0.5s all ease;

        div {
            svg {
                fill: #0A043C;
                opacity: 80%;
            }
        }
    }

    div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
            display:none;
            fill:#0A043C;
            margin-right: 0.8rem;
        }
    }

    @media screen and (max-width: 968px) {
        width: 100%;

        div {
            width: 100%;
            justify-content: center;

            svg {
                display:flex;
            }
        }
    }

    @media screen and (max-width: 880px) {
        div {
            width: 40%;
            justify-content: center;

            svg {
                display: flex;
            }
        }
    }

    @media screen and (max-width: 500px) {
        div {
            width: 60%;
            justify-content: center;

            svg {
                display: flex;
            }
        }
    }

    @media screen and (max-width: 260px) {
        width: 100%;
        justify-content: center;

        svg {
            display: flex;
        }
    }
`;

export const MobileIcon = styled.div `
    display: none;

    @media screen and (max-width: 968px) {
        display: flex;
        align-items: center;
        cursor: pointer;

        svg {
            fill: #0A043C;
            margin: 1rem;
        }
    }
`;