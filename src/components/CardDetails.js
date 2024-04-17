import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { delet } from "../redux/actions/Action";
import { addcards, remove } from "../redux/actions/Action";

const CardDetails = () => {
  const dtoh = useNavigate();
  const [data, setdata] = useState([]);
  //console.log(data);

  const { id } = useParams();
  //console.log(id);

  const dispatch = useDispatch();

  //add data
  const send = (s) => {
    //console.log(s);
    dispatch(addcards(s));
  };

  //delete data
  const dlt = (id) => {
    dispatch(delet(id));
    dtoh("/");
  };
  const itm_remove = (item) => {
    dispatch(remove(item));
  };

  const getdata = useSelector((state) => state.cardreducer.cards);
  //console.log(getdata);

  const compareId = () => {
    let compareData = getdata.filter((f) => {
      return f.id == id;
    });
    setdata(compareData);
  };
  useEffect(() => {
    compareId();
  }, [id]);

  return (
    <>
      <div className="container mt-3">
        <h2 className="text-center">Items card details...</h2>
        <section className="container mt-3">
          <div className="card_items">
            {data.map((d) => {
              return (
                <>
                  <div className="card_items_img">
                    <img src={d.imgdata} alt="" />
                  </div>
                  <div className="card_items_details">
                    <Table>
                      <tr>
                        <td>
                          <p>
                            <strong>Restaurant :</strong>
                            {d.rname}
                          </p>
                          <p>
                            <strong>Price Rs:</strong> {d.price}
                          </p>
                          <p>
                            <strong>Dishes :</strong>
                            {d.address}
                          </p>
                          <p>
                            <strong>Total :</strong> {d.price * d.qnty}
                          </p>
                          <div
                            className="d-flex justify-content-between mt-5 align-items-center"
                            style={{
                              width: 100,
                              cursor: "pointer",
                              background: "#ddd",
                              color: "#111",
                            }}
                          >
                            <span
                              style={{ fontSize: 25 }}
                              onClick={
                                d.qnty <= 1
                                  ? () => dlt(d.id)
                                  : () => itm_remove(d)
                              }
                            >
                              -
                            </span>
                            <span style={{ fontSize: 20 }}>{d.qnty}</span>
                            <span
                              style={{ fontSize: 25 }}
                              onClick={() => send(d)}
                            >
                              +
                            </span>
                          </div>
                        </td>
                        <td>
                          <p>
                            <strong>Rating :</strong>{" "}
                            <span
                              style={{
                                backgroundColor: "blue",
                                color: "#fff",
                                borderRadius: "5px",
                              }}
                            >
                              {d.rating} ✵
                            </span>
                          </p>
                          <p>
                            <strong>Order Review :</strong>{" "}
                            <span>{d.somedata}</span>
                          </p>
                          <p>
                            <strong>Remove :</strong>{" "}
                            <span
                              style={{
                                cursor: "pointer",
                                color: "red",
                                fontSize: 20,
                              }}
                              onClick={() => dlt(d.id)}
                            >
                              <i class="fa-solid fa-trash"></i>
                            </span>
                          </p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default CardDetails;
