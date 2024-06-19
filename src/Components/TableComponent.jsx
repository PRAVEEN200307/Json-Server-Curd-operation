import ButtonComponent from "./ButtonComponent";

const TableComponent = ({ data,delect,toggleModule,update }) => {

  

  return (
    <table className="table mt-5 ">
      <thead>
        <tr>
          <th>ID</th> 
          <th>Name</th>
          <th>Brand</th>
          <th>Category</th>
          <th>Price</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((val,index) => (
          <tr key={val.id}>
            <td>{val.id}</td>
            <td>{val.title}</td>
            <td>{val.brand}</td>
            <td>{val.category}</td>
            <td>{val.price}</td>
            <td>
              <img src={val.images[0]} alt="Product Image"  width={140}/>
              
            </td>
            <td className=" space-x-2">
              <ButtonComponent variant={'success'}  buttonText={'update'} onClick={(updateIndex)=>update(index)}   />
              <ButtonComponent variant={'danger'}  buttonText={'delect'} onClick={(delectId)=>delect(val.id)  } />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;


