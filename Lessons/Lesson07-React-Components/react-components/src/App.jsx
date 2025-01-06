import ListItem from './components/ListItem';
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import styles from "./CustomStyle.module.css";



function App() {
  const [value, setValue] = useState(0);
  const wasiiro = ["Nuur", "Warfaa", "Maxamuud", "Jaamac", "Fardoowso"];
  
  const Button1 = styled.button`
      background-color: red;
      border-radius: 25px;
      color: white;
      padding: 5px 20px;
  `;
  
  const Button2 = styled(Button1)`
    background-color: green;
    font-size: ${({ size }) => size}px;
  `;
  Button2.propTypes = {
    size: PropTypes.number.isRequired,
  };

  useEffect(() => {
    console.log("Component loaded");
  }, []);

  useEffect(() => {
    console.log("Component is Clicked");
  }, [value]);

  return (
    <>
    <h1 style={{fontSize:"25px"}}>Waa idin Salaamay Wasiirada Dowladda!!</h1> 
    <ul>
      {wasiiro.map((wasiiro, index) => {
        return <ListItem key={index} wasiiro={wasiiro} value={value} />;
      })}
    </ul>
    <button 
        className={styles.customButton}
        onClick ={() => setValue(value +1)}>Riix si ay u Badato!</button>
        <Button1>Styled Button</Button1>
        <Button2>Styled Button2</Button2>
    </>
  );
}

export default App


