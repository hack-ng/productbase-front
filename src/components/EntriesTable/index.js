import React from "react";

import { Table } from "reactstrap";

import moment from "moment";

class EntriesTable extends React.Component {
  render() {
    return (
      <Table className="align-items-center table-flush" responsive>
        <thead className="thead-light">
          <tr>
            <th scope="col">Author</th>
            <th scope="col">Products count</th>
            <th scope="col">Status</th>
            <th scope="col">Date Created</th>
          </tr>
        </thead>
        <tbody>
          {this.props.entries.map(entry => {
            return (
              <tr key={entry.id}>
                <td>{entry.author}</td>
                <td>{entry.products_count}</td>
                <td>{entry.status}</td>
                <td>
                  {moment(entry.created).format("YYYY-MM-DD HH:mm")}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

export default EntriesTable;
