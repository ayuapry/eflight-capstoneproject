import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRoutes = () => {
  const token = localStorage.getItem("token");
  // let auth = {'token':false}
  return(
    token ? <Outlet/> : <Navigate to="/"/>
  )
}

// import React from "react";
// import { Outlet, Redirect, Route, Routes } from "react-router-dom";

// export const PrivateRoutes = ({ component: Component, ...rest }) => {
//   const token = localStorage.getItem("token");

//   return (
//     <Routes>
//     <Route
//       {...rest}
//       render={(props) => {
//         if (token !== null) {
//           return <Component />;
//         } else {
//           return (
//             <Outlet to={{ pathname: "", state: { from: props.location } }} />
//           );
//         }
//       }}
//     />
//     </Routes>
//   );
// }

// export default PrivateRoutes;