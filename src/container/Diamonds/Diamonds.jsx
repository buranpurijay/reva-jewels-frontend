import React, { useEffect, useState } from "react";
import { SubHeading } from "../../components";
import axios from "axios";
import { DataGrid, GridPagination, GridToolbar } from "@mui/x-data-grid";

const Diamonds = () => {
  const [diamondsData, setDiamondsData] = useState([]);
  const [page, setPage] = useState(1);
  const pageSize = 50; // Number of rows per page
  const totalRows = 8000; // Total number of rows in the dataset

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = () => {
    const offset = (page - 1) * pageSize;

    // Make an API call to fetch data for the current page
    axios
      .get(`https://reva-jewels-backend-service.onrender.com/diamonds?_start=${offset}&_limit=${pageSize}`)
      .then((response) => {
        setDiamondsData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching diamonds data:", error);
      });
  };
  const handlePageChange = (params) => {
    setPage(params.page);
  };

  const columns = [
    { field: "sr", headerName: "Sr", width: 100 },
    { field: "stoneNo", headerName: "Stone No", width: 150 },
    { field: "lab", headerName: "Lab", width: 100 },
    { field: "reportNo", headerName: "Report No", width: 150 },
    { field: "shape", headerName: "Shape", width: 120 },
    { field: "carats", headerName: "Carats", width: 120 },
    { field: "color", headerName: "Color", width: 120 },
    { field: "clarity", headerName: "Clarity", width: 120 },
    { field: "cut", headerName: "Cut", width: 120 },
    { field: "polish", headerName: "Polish", width: 120 },
    { field: "sym", headerName: "Sym", width: 120 },
    { field: "flour", headerName: "Flour", width: 120 },
    { field: "rap", headerName: "Rap", width: 120 },
    { field: "value", headerName: "Value", width: 120 },
    { field: "disc", headerName: "Disc", width: 120 },
    { field: "priceCt", headerName: "Price/Ct", width: 120 },
    { field: "amount", headerName: "Amount", width: 120 },
    { field: "location", headerName: "Location", width: 120 },
    { field: "milky", headerName: "Milky", width: 120 },
    { field: "shade", headerName: "Shade", width: 120 },
    { field: "ratio", headerName: "Ratio", width: 120 },
    { field: "length", headerName: "Length", width: 120 },
    { field: "width", headerName: "Width", width: 120 },
    { field: "depth", headerName: "Depth", width: 120 },
    { field: "table", headerName: "Table", width: 120 },
    { field: "depth1", headerName: "Depth_1", width: 120 },
    { field: "crownAngle", headerName: "Crown Angle", width: 120 },
    { field: "crownHeight", headerName: "Crown Height", width: 120 },
    { field: "pav_angle", headerName: "Pav Angle", width: 120 },
    { field: "pavHeight", headerName: "Pav Height", width: 120 },
    { field: "whiteTable", headerName: "White Table", width: 120 },
    { field: "whiteSide", headerName: "White Side", width: 120 },
    { field: "tableBlack", headerName: "Table Black", width: 120 },
    { field: "sideBlack", headerName: "Side Black", width: 120 },
    { field: "tableOpen", headerName: "Table Open", width: 120 },
    { field: "pavOpen", headerName: "Pav Open", width: 120 },
    { field: "crownOpen", headerName: "Crown Open", width: 120 },
    { field: "girdle", headerName: "Girdle", width: 120 },
    { field: "girdleDesc", headerName: "Girdle Desc", width: 120 },
    { field: "culet", headerName: "Culet", width: 120 },
    { field: "keyToSymbols", headerName: "Key to Symbols", width: 120 },
    { field: "imageLink", headerName: "Image Link", width: 120 },
    { field: "imageLink_2", headerName: "Image Link 2", width: 120 },
    { field: "id", headerName: "ID", width: 120 },
  ];
  console.log("Diamonds :: ", diamondsData);

  return (
    <div  id="diamonds">
      <div>
        <SubHeading title="Diamonds" />
        <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
          Diamonds1
        </h1>
        <div className="app__wrapper-content" style={{ color: "white" }}>
          <div style={{ height: 600, width: "100%" }}>
            <DataGrid
              rows={diamondsData}
              columns={columns}
              pageSize={pageSize}
              pagination
              components={{
                Pagination: GridPagination,
                Toolbar: GridToolbar
              }}
              paginationMode="server"
              rowCount={totalRows}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diamonds;
