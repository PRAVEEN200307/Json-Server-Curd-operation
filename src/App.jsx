import { useEffect, useState } from "react";
import "./assets/Input.css";
import axios from "axios";
import NavbarComponent from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonComponent from "./Components/ButtonComponent";
import TableComponent from "./Components/TableComponent";
import MyVerticallyCenteredModal from "./Components/MyVerticallyCenteredModal";
import React from "react";
import Pagination from "./Components/Pagination";
import { paginate } from "./Common/utlliti";
import { filter } from "lodash";


function App() {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [updateData, setUpdateData] = useState({});

  // Handle the pagination with state
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setpagesize] = useState(5);

// *******************************************************************************

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await axios.get("http://localhost:3004/product");
    setData(response.data);
  }

  const handleDelect = async (delectId) => {
    const response = await axios.delete(
      `http://localhost:3004/product/${delectId}`
    );

    const filterData = data.filter((val) => {
      return val.id !== response.data.id;
    });

    setData(filterData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    let values = [...formData].map((data) => {
      return data[1];
    });

    const [title, brand, category, price, images] = values;
    const response = {
      id: `${data.length + 1}`,
      title,
      brand,
      category,
      price,
      images: [images],
    };

    const getData = async () => {
      const urlData = await axios.post(
        "http://localhost:3004/product",
        response
      );
      const renderdata = [...data];
      renderdata.push(urlData.data);

      setData(renderdata);
    };

    getData();

    setModalShow(false);
  };

  const handleUpdate = (updateIndex) => {
    const info = data[updateIndex];
    setUpdateData(info);
    setModalShow(true);
  };

  const OfftenUpdate = (e) => {
    e.preventDefault();
    console.log("clicked");

    const formData = new FormData(e.target);
    let values = [...formData].map((data) => {
      return data[1];
    });

    const [title, brand, category, price, images] = values;
    const response = {
      title,
      brand,
      category,
      price,
      images: [images],
    };

    const getSet = async () => {
      const urlData = await axios.put(
        `http://localhost:3004/product/${updateData.id}`,
        response
      );
    };

    getSet();
    setUpdateData({});

    async function getData() {
      const response = await axios.get("http://localhost:3004/product");
      setData(response.data);
    }

    getData();

    setModalShow(false);
  };

  const handlePagination = (page) => {
    setCurrentPage(page);
  };

  const filterData =paginate(data,currentPage,pageSize);
  // setData(filterData)

  return (
    <>
      <div className="container">
        <NavbarComponent />
        <h1 className=" text-2xl  text-pretty text-center mt-5">Products</h1>
        <div className=" flex gap-2">
          <div>
            <ButtonComponent
              variant={"primary"}
              buttonText={"Create User"}
              toggleModule={() => setModalShow(true)}
            />
            <MyVerticallyCenteredModal
              show={modalShow}
              submit={(e) => handleSubmit(e)}
              onHide={() => {
                setModalShow(false), setUpdateData({});
              }}
              useobj={updateData}
              updateSubmit={(e) => OfftenUpdate(e)}
            />
          </div>
        </div>
        <div>
          <TableComponent
            data={filterData}
            delect={(delectId) => handleDelect(delectId)}
            update={(updateIndex) => handleUpdate(updateIndex)}
          />
        </div>

        <div className=" mt-5">
          <Pagination
            itemCount={data.length}
            event={handlePagination}
            currentPage={currentPage}
            pageSize={pageSize}
          />
        </div>
      </div>
    </>
  );
}

export default App;
