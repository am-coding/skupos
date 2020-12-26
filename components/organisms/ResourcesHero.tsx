import { FC } from 'react';
import styled from 'styled-components';
import Navbar from '../molecules/Navbar';
import SearchInput from '../atoms/SearchInput';
import Article from '../molecules/Article';
import { article } from '../../constants';
import Form from '../molecules/Form';

const StyledResourcesHero = styled.div`
    background-color: rgb(78, 192, 196, 0.15);
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
        /* display: flex; */
        /* justify-content: space-between;
        padding: 1.5em 0; */
    }
    .article-heading {
        margin-bottom: 1em;
        font-size: 1em;
    }
    .hero-img {
        width: 24em;
        height: 16em;
        padding-bottom: 1em;
    }
    .article {
        margin-right: 2em;
        padding-bottom: 1em;
    }
    .article-tag {
        display: flex;
        align-items: center;
        margin-bottom: -0.5em;
    }
    .article-tag span {
        text-transform: uppercase;
        font-size: 0.5em;
        font-weight: bold;
    }
    .article-tag img {
        margin-right: 0.4em;
    }
    .hero-3 {
        /* display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 6%; */
    }
    .link-div h1 {
        font-size: 1.2em;
        line-height: 1em; 
        margin-bottom: -0.5em;
    }
    .link-div p {
        font-size: 0.7em;
      
    }
    .parent {
        display: flex;
        justify-content: space-between;
    }
    @media (min-width: 64em) {
    .container {
        margin: 0 10%;
    }
    .article-heading {
        font-size: 1.3em;
    }
    }
    @media (min-width: 85.375em) {
    .container {
        margin: 0 6%;
    }
    .article-heading {
        font-size: 1.4em;
    }
    .hero-img {
        width: 24em;
        height: 17em;
    }
    }
    @media (min-width: 120em) {
    .container {
        margin: 0 10%;
    }
    .article-heading {
        font-size: 1.6em;
    }
    .hero-img {
        width: 32em;
        height: 18em;
    }
    }
    @media only screen and (max-width: 37.5em) {
        .container {
            margin: 0 4%;
        }
        .flex-item {
            flex-direction: column;
            margin-bottom: 1em;
        }
        .flex-item h1 {
            font-size: 2.1em;
        }
        .article-heading {
            text-align: center;
        }
        .hero-img {
            width: 100%;
            height: auto;
        }
        .article-tag img {
            margin-right: 0.4em;
        }
        .article-tag img {
            width: 0.6em;
        }
        .parent {
            flex-direction: column;
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
                <div className="parent">
                    <div className="article-div">
                        <img className="hero-img" src="/hero.png" />
                        <div className="link-div">
                            <div className="article-tag">
                                    <img src="/icon-2.png" />
                                    <span>Article</span>
                            </div>
                            <h1>COVID-19’s Impact on Convenience <br /> Stores - What to Expect 5/5</h1>
                            <p>Mauris aliquet varius nec vitae. Malesuada parturient aliquet auctor <br /> nunc eleifend suscipit viverra. Mattis facilisis viverra turpis.</p>
                        </div>
                    </div>
                    <div className="hero-3">
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
                        <Form />
                    </div>
                </div>
             </div>
        </StyledResourcesHero>
    )
} 

export default ResourcesHero;
