import { useEffect, useState } from "react";
import "./ConsultarDespesas.sass";
import Table from "react-bootstrap/Table";

const ConsultarDespesas = () => {
  const [entradas, setEntradas] = useState([]);
  const [despesas, setDespesas] = useState([]);

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
  console.log(entradas, despesas);
  return (
    <div>
      <div className="entradas">
        <h2>Entradas</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Descrição</th>
              <th>Data</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {entradas &&
              entradas.map((entrada, i) => (
                <tr key={i}>
                  <td>{entrada.tipo}</td>
                  <td>{entrada.desc}</td>
                  <td>{entrada.data}</td>
                  <td>R$ {entrada.valor}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>

      <div className="saidas">
        <h2>Despesas</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Descrição</th>
              <th>Data</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {despesas &&
              despesas.map((despesa, i) => (
                <tr key={i}>
                  <td>{despesa.tipo}</td>
                  <td>{despesa.desc}</td>
                  <td>{despesa.data}</td>
                  <td>R$ {despesa.valor}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ConsultarDespesas;
