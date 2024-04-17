import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import CardsData from "./CardsData";
import { addcards } from "../redux/actions/Action";
import "./style.css";

const Cards = () => {
  const [data, setdata] = useState(CardsData);
  //console.log(data);

  const dispatch = useDispatch();

  const send = (s) => {
    //console.log(s);
    dispatch(addcards(s));
  };

  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Add Your card to remind you</h2>
        <div className="row mt-3 justify-content-center align-item-center">
          {data.map((e, id) => {
            return (
              <>
                <Card
                  style={{ width: "22rem", border: "none" }}
                  className="mx-2 mt-2 card_style"
                >
                  <Card.Img
                    variant="top"
                    src={e.imgdata}
                    style={{ height: "18rem", marginTop: "15px" }}
                  />
                  <Card.Body>
                    <Card.Title>{e.rname}</Card.Title>
                    <Card.Text>Price-RS: {e.price}</Card.Text>
                    <div className="button_div d-flex justify-content-center">
                      <Button
                        variant="success"
                        onClick={() => send(e)}
                        className="col-lg-12"
                      >
                        Add To Card
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cards;
