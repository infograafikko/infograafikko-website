import { styled } from "solid-styled-components";
import * as s from './Universal/Universal.styled';

export default function Error({}) {
  return(
    <Container>
      <s.Title id="title" style={{"text-align": "center"}}>Pahus. Jokin meni pieleen…</s.Title>
      <s.Paragraph id="lead" style={{"text-align": "center"}}>Ehkä yritit etsiä jotakin, mitä ei ole olemassa - ainakaan vielä.</s.Paragraph>
    </Container>
  )
}

const Container = styled("div")(
  props => `
  padding: 12px 0px 12px 16px;
`
);