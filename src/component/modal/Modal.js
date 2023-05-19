import Win from "./Win";
import Restart from "./Restart";
import { useModelContext } from "../../context/ModalState";
const Modal = () => {
  const moelcontext = useModelContext();

  return (
    <>
      {moelcontext.show && (
        <div className="modal">
          <div className="modal__content">
            <div className="container">
            {moelcontext.mode === 'winner' && <Win/>}
            {moelcontext.mode === 'Restart' && <Restart/>}
           
            </div>
          </div>
        </div>
      )}
   
    </>
  );
};

export default Modal;
