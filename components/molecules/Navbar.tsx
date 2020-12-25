import { FC } from 'react';
import Button from '../atoms/Button';
import Link from 'next/link'
import { colors } from '../../constants';
import styled from 'styled-components';

interface navItemsProps {
    items: string[],
}

const StyledNavbar = styled.div`
    height: 6rem;
    background-color:rgb(78, 192, 196, 0.15);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    li {
        list-style: none;
        text-align: center;
        font-weight: 600;
    }
    p {
        margin-right: 2rem;
        font-weight: 600;
    }
    .nav-items {
        display: flex;
        justify-content: flex-start;
        margin-left: 1rem;
        align-items: center;
    }
    .logo {
        display: grid;
        justify-content: center;
        align-items: center;
    }
    .btn-div {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 3rem;
    }
    .nav-items li {
        margin-right: 5rem;
    }
    .nav-items li:last-child {
        margin-right: 0;
    }
`

const Navbar: FC<navItemsProps> = ({items}) => {

    const navItems = items.map((item: string, index: number) => {
        return <li key={index}><Link href={item}>{item}</Link></li>
    })

    return (
        <StyledNavbar>
            <div className="nav-items">
                {navItems}
            </div>
            <div className="logo">
                <img src="/Group.png" alt="logo" width="110px" height="auto" />
            </div>
            <div className="btn-div">
               <p><Link href="/">Log in</Link></p>
                <Button 
                    title="Get started"
                    bgColor={colors.skGreen}
                    txtColor={colors.white}
                    border="none"
                />
            </div>
        </StyledNavbar>    
    )
} 

export default Navbar;
