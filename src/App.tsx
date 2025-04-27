import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button'
import { defaultTheme } from './components/styles/default'
import { GlobalStyle } from './components/styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Button variant="primary">Primary</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button>Empty</Button>
    </ThemeProvider>
  )
}
