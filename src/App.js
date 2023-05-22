import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import FormValidations from "./components/FormValidations";
import EditUser from "./components/EditUser";

function App() {
  return (
    <BrowserRouter>
    <ToastContainer></ToastContainer>
    
      <Switch>
        <Route exact path="/" component={Page1} />
        <Route exact path="/Page2" component={Page2} />
        <Route exact path="/FormValidations" component={FormValidations}/>
        <Route exact path="/EditUser" component={EditUser}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
