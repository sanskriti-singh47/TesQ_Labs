import "../App.css";
import Header from "./Header";
import {HomePage} from './HomePage';
import {About} from './About';
import {Contact} from './Contact';
import {Career} from './Career';
import {Product} from './Product';
import {Footer} from './Footer';
import Route from "react-router/Route";
import Switch from "react-router/Switch";
import {withRouter} from "react-router";

function App() {
    return (
        <>
            <Header/>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/about" component={About}/>
                <Route path="/product" component={Product}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/career" component={Career}/>
            </Switch>
            <Footer/>
        </>
    );
}

export default withRouter(App);
