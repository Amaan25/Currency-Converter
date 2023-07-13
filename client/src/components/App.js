import '../styles/App.css';
import Footer from './Footer';
import Main from './Main';
import Navbar from './Navbar';
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import ExchangeRate from './ExchangeRate';

 
const options = [
  {
    label: "USD",value: "USD"
  },
  
  {
    label: "INR",value: "INR"
  },
  
  {
    label: "DZD",value: "DZD"
  },
  
  {
    label: "AUD",value: "AUD"
  },
  
  {
    label: "BHD",value: "BHD"
  },
  {
    label: "VEF",value: "VEF"
  },
  {
    label: "BWP",value: "BWP"
  },
  {
    label: "BRL",value: "BRL"
  },
  {
    label: "BND",value: "BND"
  },
  {
    label: "CAD",value: "CAD"
  },
  {
    label: "CNP",value: "CNP"
  },
  {
    label: "COP",value: "COP"
  },
  {
    label: "CZK",value: "CZK"
  },
  {
    label: "DKK",value: "DKK"
  },
  {
    label: "HUF",value: "HUF"
  },
  {
    label: "IDR",value: "IDR"
  },
  {
    label: "IRR",value: "IRR"
  },
  {
    label: "JPY",value: "JPY"
  },
  {
    label: "KZT",value: "KZT"
  },
  {
    label: "KRW",value: "KRW"
  },
  
]

 

const yearOpt = [
{ label: "2022",value: "2022" },
{ label: "2021",value: "2021" },
{ label: "2020",value: "2020" },
{ label: "2019",value: "2019" },
{ label: "2018",value: "2018" },
{ label: "2017",value: "2017" },
{ label: "2016",value: "2016" },
{ label: "2015",value: "2015" },
{ label: "2014",value: "2014" },
{ label: "2013",value: "2013" },
{ label: "2012",value: "2012" },
];



const router=createBrowserRouter([
  {path:'/',
   element:<Main/>
  },
  {
    path:'/exchange',
    element:<ExchangeRate options={options} yearOpt={yearOpt}/>
  }

]);

function App() {

  


  return (
    <>
    <Navbar/>
    <RouterProvider router={router} />
    <Footer/>
    </>
  );
}

export default App;
