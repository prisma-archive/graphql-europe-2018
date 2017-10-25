import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import rem from 'utils/rem'
import { mobile } from 'utils/media'
import { textGrey } from 'utils/colors'
import { BaseButton } from 'components/Button'
import { Mail } from 'components/Icons'

const Newsletter = () => (
  <Wrapper>

    <Texts>
      <Heading>Don't want to miss out?</Heading>
      <Title>Sign up for our newletter</Title>
    </Texts>

    <NewletterFormContainer />

  </Wrapper>
)

export default Newsletter

class NewletterForm extends PureComponent {
  state = {
    email: '',
    loading: false,
    done: false,
    error: null,
  }

  renderMsg() {
    const { error, done } = this.state

    if (!!error) {
      return <Msg>{error}</Msg>
    } else if (done) {
      return <Msg type="success"><Mail /> Subscribed!</Msg>
    }

    return null
  }

  render() {
    const { loading, email } = this.state

    return (
      <Form onSubmit={this.submitted}>
        <Field>
          <InputWrapper>
            <Label htmlFor="nl-email">Email</Label>
            <Input
              id="nl-email"
              placeholder="Add your email"
              value={email}
              onChange={this.emailChanged}
            />
          </InputWrapper>
          <Button>Sign up{loading && ' ...'}</Button>
        </Field>

        {this.renderMsg()}
      </Form>
    )
  }

  emailChanged = e => {
    this.setState({ email: e.target.value })
  }

  submitted = async e => {
    e.preventDefault()
    const { email } = this.state
    const { addSubscriber } = this.props

    if (email.trim() === '' || !email.includes('@') || !email.includes('.')) {
      // It's not an email
      this.setState({ error: 'Enter your email!' })
      return false
    }

    // Let's do this!
    this.setState({ loading: true, error: null })

    try {
      const res = await addSubscriber(email)
      console.log(res)
      this.setState({ loading: false, done: true })
    } catch (e) {
      console.log(e)
      this.setState({ loading: false, error: 'Looks like you have subscribed before!' })
    }

    return false
  }
}

const AddSubscriber = gql`mutation ($email: String!) {
  createSubscriber(email: $email) {
    id
    email
  }
}`

// Attach the mutatation triggerer
const NewletterFormContainer = graphql(AddSubscriber, {
  props: ({ mutate }) => ({
    addSubscriber: (email) => mutate({ variables: { email } }),
  }),
})(NewletterForm)

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

const Msg = styled.p`
  display: inline-block;
  padding: ${rem(2)} ${rem(10)};
  margin: ${rem(8)} 0 0 0;
  font-size: ${rem(16)};
  border-radius: ${rem(5)};
  background: #f1f1f1;
  color: ${textGrey};

  path {
    fill: ${textGrey};
  }

  svg {
    display: inline-block;
    margin-right: ${rem(5)};
    vertical-align: ${rem(-2)};
    height: ${rem(15)};
    width: auto;
    opacity: 0.7;
  }

  ${p => p.type === 'success' && css`
    color: green;

    path {
      fill: green;
    }
  `}
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
