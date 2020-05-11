import React from "react";
import ContactForm from "./components/Form/Form";
import Images from "./components/Images/Images";
import Footer from "./components/Footer/Footer";

const App = props => {
  return (
    <React.Fragment>
      <ContactForm onSubmit={props.onSubmit}/>
      <Images {...props}/>
      <Footer />
    </React.Fragment>
  );
};

export default App;