import { render, fireEvent } from '@testing-library/react'
import ConversorMoedas from './conversor-moedas'
import ReactDOM from 'react-dom'
import axiosMock from 'axios'

describe('Teste do componente de conversao de moedas', () => {
	it('deve renderizar o componente sem erros', () => {
		const div = document.createElement('div')
		ReactDOM.render(<ConversorMoedas />, div)
		ReactDOM.unmountComponentAtNode(div)
	})

	it('deve simular uma conversao de moedas', async () => {
		const { findByTestId, getByTestId } = render(<ConversorMoedas />)
		axiosMock.get.mockResolvedValueOnce({
			data: { success: true, rates: { BRL: 6.474136, USD: 1.219361 } },
		})

		fireEvent.click(getByTestId('btn-converter'))
		const modal = await findByTestId('modal')
		expect(axiosMock.get).toHaveBeenCalledTimes(1)
		expect(modal).toHaveTextContent('1 BRL = 0.19 USD')
	})
})
