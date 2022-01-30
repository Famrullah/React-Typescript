import { render } from 'react-dom'
import { App } from '../App'
import { MemoryRouter } from 'react-router-dom'
import { createMemoryHistory } from 'history'

it('correct main route', () => {
  const root = document.createElement('div')
  const history = createMemoryHistory()
  document.body.appendChild(root)
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>,
    root
  )

  expect(history.location.pathname).toBe('/')
})
