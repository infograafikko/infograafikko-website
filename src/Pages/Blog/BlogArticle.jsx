import { createMemo, Show, Suspense } from "solid-js";
import { useLocation, useData } from "solid-app-router";
import { styled } from "solid-styled-components";
import * as h from '../Home/Home.styled';

import * as ss from '../Universal/Universal.styled';
import SolidMarkdown from "solid-markdown";

import { sizes } from '../../lib/screenSizes.js'
import { filterDataBasedOnUrl } from '../../lib/filterDataBasedOnUrl.js'

import NotFound from '../notFound'
import Newsletter from '../Home/Newsletter/Newsletter'

function formatMarkdown(markdownAsString, imgDir){
    //always links to new tab
    let formattedMarkdown = markdownAsString.split('<a').join('<a target="_blank"');
    //format blog image dir
    formattedMarkdown = formattedMarkdown.split('<img src="').join('<img src="' + imgDir);
    return formattedMarkdown
}

export default function PortfolioItems() {
    const itemData = useData();

    
    const location = useLocation();
    const filteredData = createMemo(() => filterDataBasedOnUrl(location.pathname, itemData, "/blogi/"));

    const content = formatMarkdown(filteredData().content, filteredData().imgDir)
    
    return(
        <Show when={typeof filteredData() == 'object'} fallback={<NotFound />}>
            <Container id="blogArticle">
                <BlogContent>
                    <HeaderContainer>
                        <ss.Title>{filteredData().title}</ss.Title>
                        <ss.Paragraph style={{"font-size": "24px"}}><SolidMarkdown children={filteredData().lead} /></ss.Paragraph>
                        <CoverImg src={new URL(filteredData().imgDir + filteredData().coverImg, import.meta.url).href} />
                    </HeaderContainer>

                    <ContentContainer innerHTML={content} />
                </BlogContent>
            </Container>
            <h.AnimatedContainer
                background1="#fccade"
                background2="#f7b76d"
            >
                <Newsletter 
                title="Lataa ilmainen infografiikka ja tiedon visualisointi -opas"
                paragraph="Saat ilmaisen oppaan tiedon esittämiseen, kun tilaat uutiskirjeeni."
                paragraph2="Opit oppaan avulla kolme avaintaitoa tiedon parempaan esittämiseen. Tilaamalla oppaan saat myös uutiskirjeeni. Uutiskirjeessä annan vinkkejä infografiikan esittämiseen ja tiedon visualisointiin."
                />
            </h.AnimatedContainer>

        </Show>
    )

    
}

const ContentContainer = styled("div")(
    props => `
    font-size: 20px;
    line-height: 1.5;


    & p {

    }

    & h2 {
        font-weight: 700;
    }

    & h3 {
        font-size: 30px;
        font-weight: 800;
    }

    & h4 {
        font-size: 26px;
        font-weight: 800;
    }

    & h5 {
        font-size: 22px;
        font-weight: 800;
    }
    
    & a {
        font-weight: 700;
        text-decoration: underline;
        color: black;
    }

    & img {
        display: block;
        margin: 20px auto;
        max-width: 100%;
        width: auto;
    }
  `
);

const BlogContent = styled("div")(
    props => `
    max-width: 680px;
    padding: 16px 32px;
    margin: auto;
    background-color: white;


 `
);

const HeaderContainer = styled("div")(
    props => `

 `
);

const Container = styled("div")(
    props => `
    padding: 16px 16px;
    background-color: #F1F2F4;

    @media only screen and (max-width: ${sizes.m}) {
        
        padding: 0px 0px;
    }
  `
);

const CoverImg = styled("img")(
    props => `
    margin: 0px;
    width: 100%;
    height: auto;

  `
);