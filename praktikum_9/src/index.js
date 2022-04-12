import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Test from './Test';
import reportWebVitals from './reportWebVitals';
import { render } from '@testing-library/react';
import HelloComponent from './Component/HelloComponent';
import BlogPost from "./Container/BlogPost/BlogPost";
import Mahasiswa from "./Container/Tugas/Mahasiswa"


// ReactDOM.render(<Mahasiswa/> ,document.getElementById('content'));
ReactDOM.render(<BlogPost/> ,document.getElementById('content'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// }