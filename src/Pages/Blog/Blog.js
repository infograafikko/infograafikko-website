import { styled } from "solid-styled-components";
import * as ss from '../Universal/Universal.styled';
import { useData, Link } from "solid-app-router";

const RenderBlogItems = ({blogItems}) => {
    return (
        <BlogsContainer>
            <For each={blogItems}>{blog => {
                return(
                    <BlogContainer>
                        <Link href={"/blogi/" + blog.url}>
                            <CoverImg 
                                src={blog.coverImg}
                            />
                            <BlogTitle>{blog.title}</BlogTitle>
                            <BlogLead>{blog.lead}</BlogLead>
                        </Link>
                    </BlogContainer>
                )
            }}</For>      
        </BlogsContainer>
    )
}

export default function Blog(){
    const blogList = useData();

    return(
        <Container>
            <ContentContainer>
                <ss.Title>Blogi</ss.Title>
                <RenderBlogItems
                    blogItems={blogList}
                />
            </ContentContainer>
        </Container>
    )
}

const Container = styled("div")(
    props => `
    background-color: #F1F2F4;
  `
);

const ContentContainer = styled("div")(
    props => `
    padding: 16px 16px;
    max-width: 600px;
    margin: auto;
    background-color: #F1F2F4
  `
);


const ImgContainer = styled("div")(
    props => `
    
  `
);


const BlogsContainer = styled("div")(
    props => `
    margin: 24px 0;
    `
);

const BlogContainer = styled("div")(
    props => `
    display: flex;
    justify-content: center;
    background-color: white;
    margin-bottom: 32px;
    & a {
        text-decoration: none;
        font-family: 'Palanquin';
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

const BlogTitle = styled("h3")(
    props => `
    color: black;
    font-family: "Palanquin", sans-serif;
    font-weight: 700;
    font-size: 24px;
    text-decoration: none;
    margin: 6px 16px 16px 16px;
    text-align: left;
    line-height: 1.2;
  `
);

const BlogLead = styled("p")(
    props => `
    color: black;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 18px;
    margin: 6px 16px 16px 16px;
    text-align: left;
    line-height: 1.45;
  `
);