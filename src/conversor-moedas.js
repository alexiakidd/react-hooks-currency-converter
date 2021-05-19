import { useState } from 'react'

import './conversor-moedas.css'
import {
	Container,
	Button,
	Form,
	Col,
	Spinner,
	Alert,
	Modal,
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import ListarMoedas from './listar-moedas'
import { Jumbotron } from 'react-bootstrap'

function ConversorMoedas() {
	const [valor, setValor] = useState('1')
	const [moedaDe, setMoedaDe] = useState('BRL')
	const [moedaPara, setMoedaPara] = useState('USD')

	function handleValor(event) {
		setValor(event.target.value.replace(/\D/g, ''))
	}

	function handleMoedaDe(event) {
		setMoedaDe(event.target.value.replace(/\D/g, ''))
	}

	function handleMoedaPara(event) {
		setMoedaPara(event.target.value)
	}

	return (
		<div>
			<h1>Conversor moedas</h1>
			<Alert variant="danger" show={false}>
				Erro obtendo dados de conversão, tente novavemte.
			</Alert>
			<Jumbotron>
				<Form>
					<Form.Row>
						<Col sm="3">
							<Form.Control
								placeholder="0"
								value={valor}
								onChange={handleValor}
								required
							/>
						</Col>
						<Col sm="3">
							<Form.Control
								as="select"
								value={moedaDe}
								onChange={handleMoedaDe}>
								<ListarMoedas />
							</Form.Control>
						</Col>
						<Col
							sm="1"
							className="text-center"
							style={{
								paddingTop: '5px',
							}}>
							<FontAwesomeIcon icon={faAngleDoubleRight} />
						</Col>
						<Col sm="3">
							<Form.Control
								as="select"
								value={moedaPara}
								onChange={handleMoedaPara}>
								<ListarMoedas />
							</Form.Control>
						</Col>
						<Col sm="2">
							<Button variant="success" type="submit">
								<Spinner animation="border" size="sm" />
								Converter
							</Button>
						</Col>
					</Form.Row>
				</Form>

				<Modal show={false}>
					<Modal.Header closeButton>
						<Modal.Title>Conversão</Modal.Title>
					</Modal.Header>

					<Modal.Body>Resultado da conversão aqui...</Modal.Body>
					<Modal.Footer>
						<Button variant="success">Nova conversão</Button>
					</Modal.Footer>
				</Modal>
			</Jumbotron>
		</div>
	)
}

export default ConversorMoedas
