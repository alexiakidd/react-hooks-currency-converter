import ListarMoedas from './listar-moedas'
import ReactDOM from 'react-dom'

describe('Teste do componente de listagem de moedas', () => {
	it('deve renderizar o componente sem erros', () => {
		const div = document.createElement('div')
		ReactDOM.render(<ListarMoedas />, div)
		ReactDOM.unmountComponentAtNode(div)
	})
})
