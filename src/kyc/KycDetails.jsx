import { useEffect, useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "./kyc.css";

const api_url = "http://localhost:4000";

const KycDetails = () => {
  const [kycData, setKycData] = useState([]);
  // const [isloading, setisloading] = useState(false);
  // const [selectedRowData, setSelectedRowData] = useState(null);
  const navigate = useNavigate();

  // const togglePopup = () => setPopupOpen(!isPopupOpen);

  const onEditClick = async (selectedRowData) => {
    // setisloading(true);
    try {
      const response = await fetch(`${api_url}/showKyc/${selectedRowData._id}`);

      if (!response.ok) {
        throw new Error("Error fetching PDF");
      }
      // setisloading(false);
      const pdfBlob = await response.blob();

      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(pdfBlob);
      link.download = `kycData_${selectedRowData._id}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading PDF:", error);
      // setisloading(false);
    }
  };

  useEffect(() => {
    fetch(`${api_url}/showKyc`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setKycData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Name",
      },
      {
        accessorKey: "email",
        header: "Email",
      },
      {
        accessorKey: "phoneNumber",
        header: "Phone No",
      },
      {
        accessorKey: "CreatedAt",
        header: "Date",
        accessorFn: (row) => new Date(row.createdAt).toLocaleString(),
      },
      {
        accessorKey: "Action",
        header: "Kyc Details",
        accessorFn: (rowData) => (
          <button
            // disabled={isloading}
            className="btn btn-primary"
            onClick={() => {
              onEditClick(rowData);
            }}
          >
            Download PDF
          </button>
        ),
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: kycData,
    enableColumnFilters: false,
    enableDensityToggle: false,
    enableFullScreenToggle: false,
    enableColumnActions: false,
    enableHiding: false,
    paginationDisplayMode: "pages",
    muiTablePaperProps: {
      elevation: 0,
    },
    globalFilterFn: "contains",
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              KYC Details
            </Typography>
            <button onClick={() => handleLogout()} className="btn-primary">
              Logout
            </button>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="table-button-container">
        <div className="user-table-container">
          <MaterialReactTable table={table} />
        </div>
      </div>
  
    </div>
  );
};

export default KycDetails;
