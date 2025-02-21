import React from 'react'

const Card = (props) => {
    return (
        <div>
            <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="card mx-4 my-3" style={{ width: '18rem' }}>
                    <img src={props.imagen} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.parrafo}</p>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card
