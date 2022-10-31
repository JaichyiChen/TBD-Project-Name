import React, { useState } from "react";
import "./PlaceItem.css";
import Card from "../UIElements/Card";
import Button from "../FormElements/Button";
import Modal from "../UIElements/Modal";
import Map from "../UIElements/Map";
const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const mapHandler = () => {
    setShowMap((prev) => {
      return !prev;
    });
  };
  const confirmHandler = () => {
    setShowConfirm((prev) => {
      return !prev;
    });
  };
  const confirmDeleteHandler = () => {
    //todo delete from backend
    setShowConfirm((prev) => {
      return !prev;
    });
  };
  const { id, image, title, description, address, creatorId, coordinates } =
    props;
  return (
    <>
      <Modal
        show={showMap}
        onCancel={mapHandler}
        header={address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-action"
        footer={<Button onClick={mapHandler}>Close</Button>}
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={16}></Map>
        </div>
      </Modal>
      <Modal
        header="Are you sure?"
        footerClass="place-item__modal-actions"
        footer={
          <>
            <Button inverse onClick={confirmHandler}>
              CANCEL
            </Button>
            <Button inverse onClick={confirmDeleteHandler}>
              DELETE
            </Button>
          </>
        }
        show={showConfirm}
        onCancel={confirmHandler}
      >
        <p>
          Do you want proceed and delete this place? Please note that it can't
          be undone.
        </p>
      </Modal>
      <li className="item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={image} alt={title}></img>
          </div>
          <div className="place-item__info">
            <h2>{title}</h2>
            <h3>{address}</h3>
            <p>{description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={mapHandler}>
              View on map
            </Button>
            <Button to={`/places/${props.id}`}>Edit</Button>
            <Button onClick={confirmHandler}>Delete</Button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
