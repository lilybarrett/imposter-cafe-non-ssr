const routes = () => (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
        </ul>
  
        <hr/>
  
        <Route exact path="/" component={Home}/>
        <Route path="/menu" component={Menu}/>
      </div>
    </Router>
  );

  export default routes;