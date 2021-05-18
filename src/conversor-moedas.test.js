import { render, screen } from '@testing-library/react'
import ConversorMoedas from './conversor-moedas'
import ReactDOM from 'react-dom'

it('deve renderizar o componente sem erros', () => {
	const div = document.createElement('div')
	ReactDOM.render(<ConversorMoedas />, div)
	ReactDOM.unmountComponentAtNode(div)

	// const linkElement = screen.getByText(/Conversor moedas/i)
	// expect(linkElement).toBeInTheDocument()
})
