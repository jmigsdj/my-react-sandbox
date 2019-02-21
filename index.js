function MyInfo(){
  return(
    <div className="info">
      <h1>Miguel De Jesus</h1>
      <p>Software Engineer</p>
      <ul>
        <li>Japan</li>
        <li>Singapore</li>
        <li>Philippines</li>
      </ul>
    </div>
  )
}

ReactDOM.render(
  <MyInfo />,
  document.getElementById('root')
);