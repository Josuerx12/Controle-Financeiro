import { useEffect, useState } from "react";
import "./ConsultarDespesas.sass";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
const ConsultarDespesas = () => {
  const [entradas, setEntradas] = useState([]);
  const [despesas, setDespesas] = useState([]);

  //Filtro de entradas
  const [descEntrada, setDescEntrada] = useState("");
  const [tipoEntrada, setTipoEntrada] = useState("");
  const [dataEntrada, setDataEntrada] = useState("");
  const [valorEntrada, setValorEntrada] = useState("");
  //filtro de saidas
  const [descDespesa, setDescDespesa] = useState("");
  const [tipoDespesa, setTipoDespesa] = useState("");
  const [dataDespesa, setDataDespesa] = useState("");
  const [valorDespesa, setValorDespesa] = useState("");

  useEffect(() => {
    const entradasFromLocalStorage = JSON.parse(
      localStorage.getItem("Entrada")
    );
    const despesasFromLocalStorage = JSON.parse(
      localStorage.getItem("Despesas")
    );
    setEntradas(entradasFromLocalStorage);
    setDespesas(despesasFromLocalStorage);
  }, []);
  const filteredEntradas = entradas
    .filter(
      (f) =>
        !descEntrada ||
        f.desc.toLowerCase().includes(descEntrada.toLocaleLowerCase())
    )
    .filter(
      (f) =>
        !tipoEntrada ||
        f.tipo.toLocaleLowerCase().includes(tipoEntrada.toLowerCase())
    )
    .filter(
      (f) =>
        !dataEntrada ||
        f.data.toLocaleLowerCase().includes(dataEntrada.toLocaleLowerCase())
    )
    .filter(
      (f) =>
        !valorEntrada ||
        f.valor.toLocaleLowerCase().includes(valorEntrada.toLocaleLowerCase())
    );
  const filteredDespesas = despesas
    .filter(
      (f) =>
        !descDespesa ||
        f.desc.toLocaleLowerCase().includes(descDespesa.toLowerCase)
    )
    .filter(
      (f) =>
        !tipoDespesa ||
        f.tipo.toLocaleLowerCase().includes(tipoDespesa.toLocaleLowerCase)
    )
    .filter(
      (f) =>
        !dataEntrada ||
        f.data.toLowerCase().includes(dataDespesa.toLocaleLowerCase)
    )
    .filter(
      (f) => !valorDespesa || f.valor.toLocaleLowerCase().includes(valorDespesa)
    );

  const deleteEntrada = (i) => {
    const copiaEntradas = [...filteredDespesas];
    copiaEntradas.splice(i, 1);
    setEntradas(copiaEntradas);
    localStorage.setItem("Entrada", JSON.stringify(copiaEntradas));
  };
  const deleteDespesa = (i) => {
    const copiaDespesas = [...filteredDespesas];
    copiaDespesas.splice(i, 1);
    setDespesas(copiaDespesas);
    localStorage.setItem("Despesas", JSON.stringify(copiaDespesas));
  };
  return (
    <div>
      <div className="entradas">
        <h2>Entradas</h2>
        <Container>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formGroupText">
                <Form.Label>Descrição</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Ex.: Pagamento quinzenal."
                  value={descEntrada}
                  onChange={(e) => setDescEntrada(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formGroupSelect">
                <Form.Label>Selecione um tipo:</Form.Label>
                <Form.Select
                  required
                  onChange={(e) => setTipoEntrada(e.target.value)}
                  value={tipoEntrada}
                >
                  <option value="">Selecione uma opção:</option>
                  <option value="Salario">Salário</option>
                  <option value="Vale-alimentacao">Vale-Alimentação</option>
                  <option value="Vale-refeicao">Vale-Refeição</option>
                  <option value="Vale-transporte">Vale-Transporte</option>
                  <option value="outros">Outros</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md="9">
              <Form.Group className="mb-3" controlId="formGroupDate">
                <Form.Label>Ensira uma data:</Form.Label>
                <Form.Control
                  type="date"
                  value={dataEntrada}
                  onChange={(e) => setDataEntrada(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formGroupNumber">
                <Form.Label>Valor:</Form.Label>
                <Form.Control
                  onChange={(e) => setValorEntrada(e.target.value)}
                  value={valorEntrada}
                  type="number"
                  placeholder="Ex.: 1313.00"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
        </Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Descrição</th>
              <th>Data</th>
              <th>Valor</th>
              <th style={{ textAlign: "center" }}>Ação</th>
            </tr>
          </thead>
          <tbody>
            {entradas === [] &&
              filteredEntradas.map((entrada, i) => (
                <tr key={i}>
                  <td>{entrada.tipo}</td>
                  <td>{entrada.desc}</td>
                  <td>{entrada.data}</td>
                  <td>R$ {entrada.valor}</td>
                  <td className="del">
                    <Button onClick={() => deleteEntrada(i)} variant="danger">
                      Del
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>

      <div className="saidas">
        <h2>Despesas</h2>
        <Container>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formGroupText">
                <Form.Label>Descrição</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Ex.: Parcela do financiamento."
                  value={descDespesa}
                  onChange={(e) => setDescDespesa(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formGroupSelect">
                <Form.Label>Selecione um tipo:</Form.Label>
                <Form.Select
                  required
                  onChange={(e) => setTipoDespesa(e.target.value)}
                  value={tipoDespesa}
                >
                  <option value="">Selecione uma opção:</option>
                  <option value="Financiamento">Financiamento</option>
                  <option value="Alimentacao">Alimentação</option>
                  <option value="Contas">luz, Agua, Internet</option>
                  <option value="Lazer">Lazer</option>
                  <option value="outros">Outros</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md="9">
              <Form.Group className="mb-3" controlId="formGroupDate">
                <Form.Label>Ensira uma data:</Form.Label>
                <Form.Control
                  type="date"
                  onChange={(e) => setDataDespesa(e.target.value)}
                  value={dataDespesa}
                  placeholder="Ex.: 1313.00"
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formGroupNumber">
                <Form.Label>Valor:</Form.Label>
                <Form.Control
                  type="number"
                  onChange={(e) => setValorDespesa(e.target.value)}
                  value={valorDespesa}
                  placeholder="Ex.: 1313.00"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
        </Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Descrição</th>
              <th>Data</th>
              <th>Valor</th>
              <th style={{ textAlign: "center" }}>Ação</th>
            </tr>
          </thead>
          <tbody>
            {despesas === [] &&
              filteredDespesas.map((despesa, i) => (
                <tr key={i}>
                  <td>{despesa.tipo}</td>
                  <td>{despesa.desc}</td>
                  <td>{despesa.data}</td>
                  <td>R$ {despesa.valor}</td>
                  <td className="del">
                    <Button variant="danger" onClick={() => deleteDespesa(i)}>
                      Del
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ConsultarDespesas;
