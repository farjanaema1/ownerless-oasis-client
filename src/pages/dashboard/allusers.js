import { useEffect, useState } from "react";
import { useQuery } from "react-query";

const AllUsers = () => {
    // const {data: users = [],refetch} = useQuery({
    //     queryKey:['users'],
    //    queryFn: async() => {
    //     const res = await fetch('allUsers.json');
    //     const data = await res.json();
    //     return data;
    //    }
    // })
    const[allUsers,setAllUsers] = useState([]);
   
   

    useEffect( () => {
       
        
         fetch('allUsers.json')
        .then(res => res.json())
        .then(data => setAllUsers(data))
    });
    // const handleMakeAdmin = id => {
    //   fetch(`http://localhost:5000/users2/admin/${id}`,{
    //     method:'PUT'
    //   })
    //   .then(res => res.json())
    //   .then( data => {
    //     console.log(data);
    //     if( data.modifiedCount > 0) {
    //       toast.success('make admin successful');
    //       refetch();
    //     }
    //   })

    
    return (
        <div style={{
          padding:10,
          backgroundColor:'darkslategray'
        }}>
            <h3 className="text-3xl font-bold text-white mb-8">All Users</h3>

  <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Add Admin</th>
        {/* <th>Delete</th> */}
      </tr>
    </thead>
    <tbody>
      
      { 
      allUsers.map( (user,i) => <tr>



        <th>{i+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        {/* <td> { user?.role !=='admin' && <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-xs btn-primary">Make Admin</button>}</td> */}
        {/* <td><button className="btn btn-xs">Delete</button></td>
       */}
      </tr> )
      
      
      
      }
     
    </tbody>
  </table>
</div>
        </div>
    )
}

export default AllUsers;