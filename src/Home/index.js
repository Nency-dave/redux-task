import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserList } from "../api";
import Pagination from "../pagination";

const Home = () => {
  const userList = useSelector((state) => state.user.usersList);
  const isLoad = useSelector((state) => state.user.isLoading);
  const dispatch = useDispatch();

  // User is currently on this page
  const [currentPage, setCurrentPage] = useState(1);
  // No of Records to be displayed on each page
  const [recordsPerPage] = useState(10);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = userList.slice(indexOfFirstRecord, indexOfLastRecord);

  const nPages = Math.ceil(userList.length / recordsPerPage);

  useEffect(() => {
    getUserList(dispatch);
  }, []);

  return (
    <>
      {isLoad && <h1 className="text-center">Loading....</h1>}
      <div className="container mt-5 d-flex flex-wrap">
        <div className="row">
          {currentRecords &&
            currentRecords.map((user) => {
              return (
                <div className="col-4" key={user.id}>
                  <div className="card shadow mx-2 my-2 p-1 float-left ">
                    <img
                      className="card-img-top  align-self-center bg-black rounded-circle mt-3 h-25 w-25"
                      src={user.image}
                      alt=""
                    />
                    <div className="card-body text-center">
                      <p className="card-text fw-bolder mb-0">
                        {user.firstName} {user.lastName}
                      </p>
                      <p className="card-text ">{user.email}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Home;
