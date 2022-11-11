import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllItems } from '../../actions/itemActions';
import Error from '../Error';
import Loading from '../Loading';

export default function ItemList() {

  const dispatch = useDispatch();

  const { items, error, loading } = useSelector(
    (state) => state.getAllItemsReducer
  );

  useEffect(() => {
    dispatch(getAllItems());
    console.log(items)
  }, []);


  return (
    <div className='justify-content-start'>

        {loading ? (
          <Loading />
        ) : error ? (
          <Error error="Something went wrong" />
        ) : (
          <Table striped bordered hover>
            <thead>
              <th>Item Name</th>
              <th>Image</th>
              <th>Price </th>
              <th>Categories</th>
              <th>Action</th>
            </thead>
            <tbody>
              {items.map(item =>
                <tr>
                  <td>
                    {item.name}
                  </td>
                  <td>
                    <img src={item.image} style={{height: "60px", width: "60px" }} alt="img" />
                  </td>
                  <td>
                    {item.price}
                  </td>
                  <td>
                    {item.category.map(cat=>{return cat+" "})}
                  </td>
                  <td>
                  <i class="fa fa-pen-to-square"></i>
                  &nbsp;
                  <i
                    className="fa fa-trash"
                  ></i>
                  </td>
                </tr>
                )}
            </tbody>
          </Table>

        )}
        <div className='w-100 text-start'>
        <Link to={"/admin"} className='btn btn-danger mx-5' >Back</Link>
        </div>
    </div>
  )
}
