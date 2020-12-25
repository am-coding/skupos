import { FC } from 'react';
import styled from 'styled-components';
import Navbar from '../molecules/Navbar';
import SearchInput from '../atoms/SearchInput';
import Article from '../molecules/Article';
import { article } from '../../constants';

const StyledResourcesHero = styled.div`
    background-color: rgb(78, 192, 196, 0.15);
    height: 100vh;
    .container {
        margin: 0 4%;
    }
    .flex-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .flex-item h1 {
        font-size: 2.5em;
    }
    span {
        color: #4CC3D2;
    }
    .article-div {
        display: flex;
        justify-content: space-between;
        padding: 1.5em 0;
    }
    .article-heading {
        margin-bottom: 1em;
        font-size: 1em;
    }
    .hero-img {
        width: 26em;
        height: 16em;
    }
    .article {
        margin-right: 2em;
    }
    .tag {
        display: flex;
        align-items: center;
    }
    .tag span {
        text-transform: uppercase;
        font-size: 0.5em;
        font-weight: bold;
    }
    @media (min-width: 64em) {
    .container {
        margin: 0 8%;
    }
    .article-heading {
        font-size: 1.3em;
    }
    }
    @media (min-width: 85.375em) {
    .container {
        margin: 0 12%;
    }
    .article-heading {
        font-size: 1.4em;
    }
    .hero-img {
        width: 26em;
        height: 17em;
    }
    }
    @media (min-width: 120em) {
    .container {
        margin: 0 16%;
    }
    .article-heading {
        font-size: 1.6em;
    }
    .hero-img {
        width: 32em;
        height: 18em;
    }
    }
    
`;  

const items = ['Products', 'Resources', 'Support'];


const ResourcesHero: FC = () => {
    return (
        <StyledResourcesHero>
            <Navbar 
                items={items}
             />
             <div className="container">
                <div className="flex-item">
                    <h1>The Inside <span>Skuup</span></h1>
                    <SearchInput />
                </div>
                <div className="article-div">
                    <img className="hero-img" src="/hero.png" />
                    <div className="article">
                        <h1 className="article-heading">Popular Resources</h1>
                        {article.map((item: any, index: number) => {
                            return(
                                <Article 
                                    key={index}
                                    tag={item.tag}
                                    title={item.title}
                                />
                            )
                        })}
                    </div>
                </div>
                <div className="link-div">
                    <div className="tag">
                            <img src="/icon-2.png" />
                            <span>Article</span>
                    </div>
                    <h1>COVID-19’s Impact on Convenience Stores - What to Expect 5/5</h1>
                    <p>Mauris aliquet varius nec vitae. Malesuada parturient aliquet auctor nunc eleifend suscipit viverra. Mattis facilisis viverra turpis.</p>
                </div>
             </div>
        </StyledResourcesHero>
    )
} 

export default ResourcesHero;
