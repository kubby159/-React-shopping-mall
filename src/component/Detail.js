import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Detail(props) {
  // 아래 id는 /:id 자리에 사용자가 입력한 값이 옴
  let { id } = useParams(); //{사용자가 입력한 URL파라미터들}
  let navigate = useNavigate();
  let findShoes = props.shoes.find((shoes) => {
    return shoes.id == id;
  });
  return (
    <div className="container">
      {/* {props.shoes.map((shoese) => {
        if (shoese.id === parseInt(id)) {
          return (
            <div className="row">
              <div className="col-md-6">
                <img
                  src="https://codingapple1.github.io/shop/shoes1.jpg"
                  width="100%"
                  alt="shoes1"
                />
              </div>
              <div className="col-md-6 mt-4">
                <h4 className="pt-5">{props.shoes[id].title}</h4>
                <p>{props.shoes[id].content}</p>
                <p>{props.shoes[id].price}</p>
                <button className="btn btn-danger">주문하기</button>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  뒤로가기
                </button>
              </div>
            </div>
          );
        }
      })} */}
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
            alt="shoes1"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{findShoes.title}</h4>
          <p>{findShoes.content}</p>
          <p>{findShoes.price}</p>
          <button className="btn btn-danger">주문하기</button>
          <button
            className="btn btn-danger"
            onClick={() => {
              navigate("/");
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
