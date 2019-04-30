import React from 'react'
import {Route} from "react-router-dom";
import Child from "./Child";

export default ({match}) => {
  return (
    <div style={{width: '400px', height: '400px', background: '#ddd'}}>
      <label>parent</label>
      <Route path={match.path + '/child'} component={Child}/>
    </div>
  )
}
