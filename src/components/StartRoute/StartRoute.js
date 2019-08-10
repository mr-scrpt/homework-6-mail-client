import {Redirect} from "react-router-dom";
import {withAuth} from "../../context/Auth";
import React from "react";


const StartRoute = ({isAuthorized})=>{

  return (
    <Redirect to={ isAuthorized ? '/app' : '/login'}/>
  )
};

export default withAuth(StartRoute);