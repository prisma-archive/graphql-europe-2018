import styled, { css } from 'styled-components'

import rem from 'utils/rem'
import { mobile } from 'utils/media'
import { BaseButton } from 'components/Button'

const Newsletter = () => (
  <Wrapper>

    <Texts>
      <Heading>Don't want to miss out?</Heading>
      <Title>Sign up for our newletter</Title>
    </Texts>

    <Form>
      <Field>
        <InputWrapper>
          <Label htmlFor="nl-email">Email</Label>
          <Input id="nl-email" placeholder="Add your email" />
        </InputWrapper>
        <Button>Sign up</Button>
      </Field>
    </Form>

  </Wrapper>
)

export default Newsletter

const Wrapper = styled.section`
  height: ${rem(161)};
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  ${mobile(css`
    height: auto;
    padding: ${rem(45)} 0;
  `)}
`

const Texts = styled.div`
  flex: 0 auto;

  ${mobile(css`
    flex: 1 auto;
  `)}
`

const Heading = styled.p`
  margin: 0;
  font-size: ${rem(25)};
  font-weight: 800;
`

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: ${rem(18)};
  color: #9b9b9b;
`

const Form = styled.form`
  flex: 1 auto;
  text-align: right;
  margin-left: ${rem(20)};

  ${mobile(css`
    margin-left: 0;
    margin-top: ${rem(20)};
  `)}
`

const Field = styled.div`
  justify-content: flex-end;
  align-items: stretch;
  display: flex;
  flex-wrap: wrap;
`

const Button = BaseButton.extend`
  border-radius: 0 ${rem(5)} ${rem(5)} 0;

  &:active {
    transform: scale(1);
  }

  ${mobile(css`
    padding-left: ${rem(15)};
    padding-right: ${rem(15)};
  `)}
`

const InputWrapper = styled.div`
  flex: 1 1;
  width: 100%;
  max-width: ${rem(320)};

  ${mobile(css`
    max-width: 100%;
    height: ${rem(45)};
  `)}
`

const Input = styled.input`
  display: block;
  background: none;
  outline: none;
  font-size: ${rem(16)};

  width: 100%;
  height: 100%;
  padding-left: ${rem(16)};

  border-radius: ${rem(5)} 0 0 ${rem(5)};
  border: 1px solid #cacaca;
  border-right: none;

  ::placeholder {
    color: #aaacaa;
  }

  &:focus {
    border-color: #aaa;
    background: #fafafa;
  }
`

const Label = styled.label`
  width: 1px;
  height: 1px;
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  position: absolute;
`
