import react, { useState } from 'react';
import { Modal } from 'react-bootstrap';

export default function Pizza({ pizza }) {
    const [quantity, setquantity] = useState(1)
    const [varient, setvarient] = useState('small')
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div style={{ margin: '80px' }} className='shadow-lg p-3 mb-5 bg-white rounded">Larger shadow'>
            <div onClick={handleShow}>
                <h1>{pizza.name}</h1>
                <img src={pizza.image} className="img-fluid" style={{ height: "200px", width: "200px" }} />
            </div>
            <div className="flex-container">
                <div className='w=100 m=1'>
                    <p>Variants</p>
                    <select className='form-control' value={varient} onChange={(e) => { setvarient(e.target.value) }}>
                        {pizza.variants.map(variant => {
                            return <option value={variant}>{variant}</option>
                        })}
                    </select>
                </div>

                <div classsName='w=100 m=1' >
                    <p>Quantity</p>
                    <select className='form-control' value={quantity} onChange={(e) => { setquantity(e.target.value) }}>
                        {[...Array(10).keys()].map((x, i) => {
                            return <option value={i + 1}>{i + 1}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className="flex-container">
                <div className="m=1 w=100">
                    <h1 className='mt-4'>Price: {pizza.prices[0][varient] * quantity} BDT/-</h1>
                </div>
                <div className="m=1 w=100">
                    <button className="btn">Add To Cart</button>

                </div>
            </div>
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{pizza.name}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <img src={pizza.image}  className="img-fluid" style={{height:'400px'}}/>
                        <p>{pizza.description}</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <button className='btn' onClick={handleClose}> CLOSE </button>
                    </Modal.Footer>
                </Modal>
            </div>

        </div>
    );
}