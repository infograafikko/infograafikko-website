import { createMemo, Show } from "solid-js";
import { useLocation, useData } from "solid-app-router";
import { styled } from "solid-styled-components";
import * as ss from '../../Universal/Universal.styled';
import SolidMarkdown from "solid-markdown";

import NotFound from '../../notFound'

function filterData(path, data){

    //parse slug from url
    const splitted = path.split("/blogi/");
    const parsedSlug =  splitted.at(-1)

    //check if url matches
    const slugInData = data.filter(d => d.url === parsedSlug)
    return slugInData[0];
}

const RenderParagraphs = ({paragraphs}) => {
    return (
        <For each={paragraphs}>{p => {
            return (
                <ss.Paragraph>
                    <SolidMarkdown children={p} />
                </ss.Paragraph>
            )            
       }}</For>
    )
}

export default function PortfolioItems() {
    const itemData = useData();
    const location = useLocation();
    const filteredData = createMemo(() => filterData(location.pathname, itemData));

    const content = filteredData().content.split("\n")
    
    return(
        <Show when={filteredData()} fallback={<NotFound />}>
            <Container>
                <ss.Title>{filteredData().title}</ss.Title>
                <ss.Paragraph style={{"font-size": "20px"}}><SolidMarkdown children={filteredData().lead} /></ss.Paragraph>
                <CoverImg src={filteredData().coverImg} />
                <RenderParagraphs paragraphs={content} />
            
            </Container>
            
        </Show>
    )
    
}

const Container = styled("div")(
    props => `
    padding: 16px 16px;
    max-width: 650px;
    margin: auto;
  `
);

const Link = styled("a")(
    props => `
    font-weight: 700;
    text-decoration: underline;
    color: black;
  `
);

const InfographicImage = styled("img")(
    props => `
    display: block;
    margin: 20px auto;
    width: 100%;
  `
);

const CoverImg = styled("img")(
    props => `
    margin: 0px;
    width: 100%;
    height: auto;
  `
);