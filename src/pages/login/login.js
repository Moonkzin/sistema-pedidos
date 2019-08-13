import React, { useContext } from 'react'
import styled from 'styled-components'
import { Button, Grid } from '@material-ui/core'
import { AuthContext } from 'contexts/auth'
import { ReactComponent as MainLogo } from 'images/logo-react-zzaria.svg'

function Login () {
  const { login } = useContext(AuthContext)

  return (
    <Container>
      <Grid container justify='center' spacing={7}>
        <Grid item>
          <Logo />
        </Grid>

        <Grid item xs={12} container justify='center'>
          <GitHubButton onClick={login}>
            Entrar com GitHub
          </GitHubButton>
        </Grid>
      </Grid>
    </Container>
  )
}

const Container = styled.div`
  padding: ${({ theme }) => theme.spacing(3)}px;
`

const Logo = styled(MainLogo)`
  width: 100%;
`

const GitHubButton = styled(Button).attrs({
  variant: 'contained',
  fullWidth: true
})`
  && {
    max-width: 480px;
    font-size: ${({ theme }) => theme.typography.h5.fontSize};
    padding: ${({ theme }) => theme.spacing(2)}px;
    text-transform: none;
  }
`

export default Login
