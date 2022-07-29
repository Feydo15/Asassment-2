  import React from "react";

function List(props) {

  const { list, deleteItem} = props;;
  console.log('props :>> ', props);
  return (
    <div  style={{ display: list.length > 0 ? "block" : "none" }}>
      <h2>Name List</h2>
      <table className="table table-striped">
        <thead>
          <tr styles={{width: '20%'}}>
            <th styles={{width: '20%'}}>First Name</th>
            <th styles={{width: '20%'}}>Last Name</th>
            <th styles={{width: '20%'}}>Delete</th>
          </tr>
        </thead>
        <tbody>
          
          {list && list.map((item) => {
              return (
              <tr key={item.id}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{<span className="btn btn-danger btn-md"
                 onClick={() => deleteItem(item.id)}>
                &times;</span>}</td>
              </tr>
              );
          })}
          
        </tbody>
      </table>
    </div>
  );
}

export default List;
