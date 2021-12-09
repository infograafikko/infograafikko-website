import { createMemo, Show } from "solid-js";
import { useLocation, useData } from "solid-app-router";
import { styled } from "solid-styled-components";
import * as ss from '../../Universal/Universal.styled';
import SolidMarkdown from "solid-markdown";

import NotFound from '../../notFound'

function filterData(path, data){

    //parse slug from url
    const splitted = path.split("/portfolio/");
    const parsedSlug =  splitted.at(-1)

    //check if url matches
    const slugInData = data.filter(d => d.url === parsedSlug)
    return slugInData[0];
}

export default function PortfolioItems() {
    const itemData = useData();
    const location = useLocation();
    const filteredData = createMemo(() => filterData(location.pathname, itemData));
    //const match = useMatch(() => props.href);

    return(
        <Show when={filteredData()} fallback={<NotFound />}>
            <Container>
                <ss.Title>{filteredData().name}</ss.Title>
                <ss.Paragraph><SolidMarkdown children={filteredData().description} /></ss.Paragraph>
                <Show when={filteredData().link}>
                    <ss.Paragraph>Linkki: <Link href={filteredData().link} target="_blank">{filteredData().linkText}</Link></ss.Paragraph>
                </Show>
                <Show when={filteredData().img}>
                    <InfographicImage 
                        src={filteredData().img}
                    />
                </Show>
                <Show when={filteredData().pdf}>
                <iframe
                    style={{"height": "100vh", "margin-top": "20px"}}
                    src={"https://drive.google.com/viewerng/viewer?embedded=true&url=" + filteredData().pdf +  "#toolbar=0&scrollbar=0"}
                    frameBorder="0"
                    scrolling="auto"
                    width="100%"
                ></iframe>
                </Show>
            
            </Container>
            
        </Show>
    )
    
}

const Container = styled("div")(
    props => `
    padding: 16px 16px;
    max-width: 800px;
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
