import { useContext } from "react";

import { useQuery } from "react-query";
import { AuthContext } from "../../Context/authProvider"
import { Link } from "react-router-dom";


const Orders = () => {
    const {user} = useContext(AuthContext);
    const url = `http://localhost:5000/orders2?email=${user?.email}`
    const {data: order = []} = useQuery({
        queryKey:['order',user?.email],
        queryFn:async() => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    return (

       <section style={{
        backgroundColor:'darkcyan',
        padding:10
       }}>
         <div>
         <h3 className="text-3xl text-warning pera-link">My Cart</h3>

         <div className="overflow-x-auto mt-8">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>product</th>
        <th>Date</th>
        <th>Price</th>
        {/* <th>Payment</th> */}
      </tr>
    </thead>
    <tbody>
    {
        order.map((odr,i) => <tr>
            <th>{i+1}</th>
            <td>
                {odr.customer}
            </td>
            <td>
                {odr.servicename}
            </td>
            <td>
                {odr.price}
            </td>
            {/* <td>
                {book.slot}
            </td> */}
            {/* <td>
                {
                    odr.price && !odr.paid &&
                    <Link to={`/dashboard/payment/${order._id}`}>
                    <button className="btn  btn-primary">Pay</button>
                    </Link>
                }
            </td> */}
        </tr>)
    }
      
    </tbody>
  </table>
</div>
        </div>
       </section>
    )
}
export default Orders;