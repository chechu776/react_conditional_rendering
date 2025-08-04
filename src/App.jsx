import UserGreeting from "./UserGreeting.jsx";
import Onchange from "./Onchange.jsx";
import Colorpicker from "./Colorpicker.jsx";
import ToDoList from "./ToDoList.jsx";
import DigitalClock from "./DigitalClock.jsx";
import { ThemeProvider } from "./Themecontext.jsx";
import Home from './Home';
import { nameContext,Child1,Child2 } from "./Context.jsx";


function App() {
  //usergeetings

  // return (
  //     <>
  //       <UserGreeting isLoggedIn={true} username="shamsudheen"/>
  //     </>
  // );

  //onchange

  // return(
  //   <Onchange/>
  // )

  //colorpicker

  // return(
  //   <Colorpicker/>
  // )

  // ToDoList

  // return(
  //   <ToDoList/>
  // )

  //digital clock

  // return(
  //   <DigitalClock/>
  // )

  // return (
  //   <ThemeProvider>
  //     <Home />
  //   </ThemeProvider>
  // )

  return(
    <>
      <nameContext.Provider value={"nadhil"} >
        <Child1></Child1>
        <Child2></Child2>
      </nameContext.Provider>
    </>
  )


}

export default App
