import React, {setState, useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import API from "../routes/api";
import Cart from "./cart"

class StateList extends React.Component{
    

    constructor(props){
        super(props)
        this.props = props;
    }

    state = {
        states: []
    }

    componentWillMount(){
        API.allStates()
            .then(res => {
                this.setState({
                    states: res.data
                });
            })
            .catch(err => {
                console.log(err)
            });
    }

    handleStateChange = (event) => {
        Cart.stateLocation = event.target.value
        Cart.saveCart();
        window.location.reload(false);
    };
    

    StateModal = () => {
        const [show, setShow] = useState(Cart.stateLocation ? false : true);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        return (
          <>
            <Button variant="primary" onClick={handleShow}>
                State Select - {Cart.stateLocation}
            </Button>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Select your state</Modal.Title>
              </Modal.Header>
              <Modal.Body>

                {this.state.states.length ? (
                    <select onChange={this.handleStateChange}>
                        <option selected="true" disabled="disabled">Select State</option>
                        {this.state.states.map((storeObj,index) => {
                            return (
                                <option value={storeObj.name} key={index}>{storeObj}</option>
                            );
                        })}
                    </select>
                ) : (
                    <>
                        {/* ERROR LOG HERE */}
                    </>
                )}

              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                  Save
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      }
    
    render() {
        return (
            <div className="states-list">

                <this.StateModal />

            </div>
        )
    }
}
  
export default StateList
