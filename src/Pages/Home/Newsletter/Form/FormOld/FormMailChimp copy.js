import { styled } from "solid-styled-components";
import Button from "../../../Universal/Button";


export default function Form2({submitted}) {
    return (
        <>
        <form target="_blank" action="https://infograafikko.us14.list-manage.com/subscribe/post" method="POST" onSubmit={submitted}>
            <input type="hidden" name="u" value="243cfca3869d7e92072a0220c" />
            <input type="hidden" name="id" value="ae1eb9d489" />
            <FieldShift class="field-shift" aria-label="Please leave the following three fields empty">
                <label for="b_name">Name: </label>
                <input type="text" name="b_name" tabindex="-1" value="" placeholder="Freddie" id="b_name" />
                <label for="b_email">Email: </label>
                <input type="email" name="b_email" tabindex="-1" value="" placeholder="youremail@gmail.com" id="b_email" />
                <label for="b_comment">Comment: </label>
                <textarea name="b_comment" tabindex="-1" placeholder="Please comment" id="b_comment"></textarea>
            </FieldShift>

            <div id="mergeTable" class="mergeTable">
                <FieldContainer class="mergeRow dojoDndItem mergeRow-email" id="mergeRow-0">
                    <Label for="MERGE0">Sähköpostiosoite <span class="req asterisk">*</span></Label>
                    <div class="field-group">
                        <Input type="email" autocapitalize="off" autocorrect="off" name="MERGE0" id="MERGE0" size="25" value="" />
                    </div>

                </FieldContainer>
                <FieldContainer class="mergeRow dojoDndItem mergeRow-text" id="mergeRow-1">
                    <Label for="MERGE1">Etunimi</Label>
                    <div class="field-group">
                        <Input type="text" name="MERGE1" id="MERGE1" size="25" value="" />
                    </div>

                </FieldContainer>
                <FieldContainer class="mergeRow dojoDndItem mergeRow-text" id="mergeRow-2">
                    <Label for="MERGE2">Sukunimi</Label>
                    <div class="field-group">
                        <Input type="text" name="MERGE2" id="MERGE2" size="25" value="" />
                    </div>

                </FieldContainer>
            </div>
            <div class="submit_container clear">
                <Button 
                    text="Tilaa uutiskirje"
                    buttonType="primary"
                />
            </div>
            <input type="hidden" name="ht" value="d4da76103e7d8b16be980a1e2168eed91c039db3:MTYzNjQ3NTIwNC4wNzYx" />
            <input type="hidden" name="mc_signupsource" value="hosted" />
        </form>
        </>
    )
}

export const FieldShift = styled("div")(
    props => `
    left: -9999px;
    position: absolute;
  `
);

export const FieldContainer = styled("div")(
    props => `
    display: flex;
    flex-direction: column;
    margin: 4px 0 16px 0;
  `
);

export const Label = styled("label")(
    props => `
    font-weight: 600;
    margin-bottom: 6px;
  `
);

export const Input = styled("input")(
    props => `
    margin-bottom: 6px;
    height: 12px;
    padding: 6px;
  `
);

