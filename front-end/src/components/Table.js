/* import React, { Component } from 'react';

function Table {
  render() {
    const { expenses } = this.props;
    return (
      <div className="div-table">
        <table className="table">
          <thead>
            <tr className="table-head">
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map(
              ({
                id,
                description,
                tag,
                method,
                value,
                exchangeRates,
                currency,
              }) => (
                <tr key={ id } className="div-tr">
                  <td>{description}</td>
                  <td>{tag}</td>
                  <td>{method}</td>
                  <td>{Number(value).toFixed(2)}</td>
                  <td>
                    {exchangeRates[currency].name.split('/')[0]}
                  </td>
                  <td>
                    {Number(exchangeRates[currency].ask).toFixed(2)}
                  </td>
                  <td>
                    {(Number(value) * Number(exchangeRates[currency].ask)).toFixed(2)}
                  </td>
                  <td>Real</td>
                  <td>
                    <button
                      data-testid="edit-btn"
                      className="create"
                      type="button"
                      onClick={ () => this.handleEdit(id, {
                        id, value, description, currency, method, tag, exchangeRates }) }
                    >
                      <ion-icon name="create" />
                    </button>
                    <button
                      data-testid="delete-btn"
                      className="trash"
                      type="button"
                      onClick={ () => this.handleDelete(id) }
                    >
                      <ion-icon name="trash" />
                    </button>
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table; */
