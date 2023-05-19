
import { useState , useContext} from "react";
import { createContext } from "react";
const ModalContext = createContext();
export const ModalState = (props) => {
  const [show, setShow] = useState(false);
  const [mode,setmode]=useState("winner")
  const showmodal = () => setShow(true);
  const hidemodal = () => setShow(false);
  return (
    <ModalContext.Provider
      value={{
        mode,
        setmode,
        show,
        showmodal,
        hidemodal,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};
export const useModelContext =()=>{
  return useContext(ModalContext);
  }
  
  
  