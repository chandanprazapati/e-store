import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { delet } from "../redux/actions/Action";

const Header = () => {
  const getdata = useSelector((state) => state.cardreducer.cards);
  //console.log(getdata);
  const [price, setprice] = useState(0);
  //console.log(price);

  const dispatch = useDispatch();

  const dlt = (id) => {
    dispatch(delet(id));
  };

  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const total = () => {
    let price = 0;
    getdata.map((tot, k) => {
      return (price = tot.price * tot.qnty + price);
    });
    setprice(price);
  };
  useEffect(() => {
    total();
  }, [total]);
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: 60 }}>
        <Container>
          <NavLink className="text-decoration-none text-light" to="/">
            <img
              src="./amazone.jpg"
              alt=""
              width="80px"
              height="50px"
              className="logo"
            />
          </NavLink>
          <Badge
            badgeContent={getdata.length}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              class="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: 25, cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {getdata.length ? (
            <div
              className="card_details"
              style={{ width: "24rem", padding: 10 }}
            >
              <Table>
                <thead style={{ borderBottom: "5px" }}>
                  <tr>
                    <th>Photo</th>
                    <th>Restaurant Name</th>
                  </tr>
                </thead>
                <tbody>
                  {getdata.map((s) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <NavLink
                              to={`/CardDetails/${s.id}`}
                              onClick={handleClose}
                            >
                              <img
                                src={s.imgdata}
                                alt=""
                                style={{ width: "5rem", height: "5rem" }}
                              />
                            </NavLink>
                          </td>
                          <td>
                            <p>{s.rname}</p>
                            <p>Price: RS {s.price}</p>
                            <p>Quantity: {s.qnty}</p>
                            <p onClick={() => dlt(s.id)}>
                              <i
                                class="fa-solid fa-trash smalltrash"
                                style={{
                                  color: "red",
                                  fontSize: 20,
                                  cursor: "pointer",
                                }}
                              ></i>
                            </p>
                          </td>
                          <td>
                            <i
                              onClick={() => dlt(s.id)}
                              class="fa-solid fa-trash largetrash"
                              style={{
                                color: "red",
                                fontSize: 20,
                                cursor: "pointer",
                              }}
                            ></i>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
                <p>Total RS: {price}</p>
              </Table>
            </div>
          ) : (
            <div
              className="card_details d-flex justify-content-center align-items-center"
              style={{
                position: "relative",
                cursor: "pointer",
                width: "20rem",
                padding: 10,
              }}
            >
              <i
                class="fas fa-close smallclose"
                onClick={handleClose}
                style={{
                  position: "absolute",
                  top: 2,
                  right: 4,
                  cursor: "pointer",
                  fontSize: 18,
                }}
              ></i>
              <p style={{ fontSize: "22px" }}>Your card is EmpTy</p>
              <img
                src="./cart.gif"
                alt=""
                className="emptycart_img"
                style={{ width: "5rem", padding: 10 }}
              />
            </div>
          )}
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;
