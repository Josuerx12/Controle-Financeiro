import { useState } from "react";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { MdOutlineArrowBackIos } from "react-icons/md";
import "./CriarDespesa.sass";

//Classe de criaçao de nova entrada ou despesa

class Financa {
  constructor(desc, tipo, data, valor) {
    this.desc = desc;
    this.tipo = tipo;
    this.data = data;
    this.valor = valor;
  }
}

const CriarDespesa = () => {
  // const data = new Date();
  // const today = data.getDate;
  // const month = data.getMonth;
  // const year = data.getFullYear;

  const [seletor, setSeletor] = useState("");
  //Entrada states
  const [descEntrada, setDescEntrada] = useState("");
  const [tipoEntrada, setTipoEntrada] = useState("");
  const [dataEntrada, setDataEntrada] = useState("");
  const [valorEntrada, setValorEntrada] = useState("");

  //Saida states
  const [descDespesa, setDescDespesa] = useState("");
  const [tipoDespesa, setTipoDespesa] = useState("");
  const [dataDespesa, setDataDespesa] = useState("");
  const [valorDespesa, setValorDespesa] = useState("");

  //função

  //envio dos dados de entrada
  const handleEntradaSubmitData = (e) => {
    e.preventDefault();
    const entradaLocalData = JSON.parse(
      localStorage.getItem("Entrada") || "[]"
    );
    const novaEntrada = new Financa(
      descEntrada,
      tipoEntrada,
      dataEntrada,
      valorEntrada
    );
    entradaLocalData.push(novaEntrada);
    localStorage.setItem("Entrada", JSON.stringify(entradaLocalData));

    setSeletor("");
    setDataEntrada("");
    setTipoEntrada("");
    setDescEntrada("");
    setValorEntrada("");

    window.alert("Entrada cadastrada com sucesso!!!");
  };

  //envio dos dados de despesas para o banco de dados

  const handleDespesaSubmitData = (e) => {
    e.preventDefault();
    const despesaLocalData = JSON.parse(
      localStorage.getItem("Despesas") || "[]"
    );
    const novaDespesa = new Financa(
      descDespesa,
      tipoDespesa,
      dataDespesa,
      valorDespesa
    );
    despesaLocalData.push(novaDespesa);
    localStorage.setItem("Despesas", JSON.stringify(despesaLocalData));

    setSeletor("");
    setDescDespesa("");
    setDataDespesa("");
    setTipoDespesa("");
    setValorDespesa("");
    alert("Despesa cadastrada com sucesso!!!");
  };

  return (
    <div className="criardespesa">
      {/* Seleção de entrada ou saida */}
      {seletor === "" && (
        <>
          <Form>
            <h3>Seleção de cadastro:</h3>
            <Form.Select onChange={(e) => setSeletor(e.target.value)}>
              <option value="">Selecione uma opção:</option>
              <option value="entrada">Entrada</option>
              <option value="saida">Despesa</option>
            </Form.Select>
          </Form>
        </>
      )}
      {/* Seção de cadastro de entrada */}
      {seletor === "entrada" && (
        <>
          <Form onSubmit={(e) => handleEntradaSubmitData(e)}>
            <div className="titulo">
              <h3>Cadastrar entrada</h3>
              <i onClick={() => setSeletor("")}>
                <MdOutlineArrowBackIos />
              </i>
            </div>
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

            <Form.Group className="mb-3" controlId="formGroupDate">
              <Form.Label>Ensira uma data:</Form.Label>
              <Form.Control
                type="date"
                value={dataEntrada}
                onChange={(e) => setDataEntrada(e.target.value)}
                required
              />
            </Form.Group>

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
            <Button variant="primary" type="submit" size="lg">
              Cadastrar Entrada
            </Button>
          </Form>
        </>
      )}
      {seletor === "saida" && (
        <>
          <Form onSubmit={(e) => handleDespesaSubmitData(e)}>
            <div className="titulo">
              <h3>Cadastrar Despesa</h3>
              <i onClick={() => setSeletor("")}>
                <MdOutlineArrowBackIos />
              </i>
            </div>
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

            <Form.Group className="mb-3" controlId="formGroupSelect">
              <Form.Label>Selecione um tipo:</Form.Label>
              <Form.Select
                required
                onChange={(e) => setTipoDespesa(e.target.value)}
                value={tipoDespesa}
              >
                <option value="">Selecione uma opção:</option>
                <option value="financiamento">Financiamento</option>
                <option value="alimentacao">Alimentação</option>
                <option value="contas">luz, Agua, Internet</option>
                <option value="lazer">Lazer</option>
                <option value="outros">Outros</option>
              </Form.Select>
            </Form.Group>

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
            <Button variant="primary" type="submit" size="lg">
              Cadastrar despesa
            </Button>
          </Form>
        </>
      )}
    </div>
  );
};

export default CriarDespesa;
