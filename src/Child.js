import React from 'react'

export default () => {
  // 验证渲染时，一定要有值
  console.log(window.userName)
  return (
    <div style={{width: '100px', height: '100px', background: 'red'}}>
      <label>child</label>
    </div>
  )
}
