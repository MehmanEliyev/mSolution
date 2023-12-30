import React, { useState } from "react";
import {useEffect} from 'react';
import axios from 'axios';

//? ----------- Material UI components --------------------

import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

//? ------------------- CSS --------------------
import "../CSS/pages/addInvoice.css";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Invoice = () => {
    const columns = [
        {
          field: "id",
          headerName: "ID",
          width: 90,
        },
        {
          field: "username",
          headerName: "İstifadəçi adı",
          width: 130,
          editable: true,
        },
        {
          field: "eInvoiceAmount",
          headerName: "E-Qaimə-Faktura məbləği",
          width: 210,
          editable: true,
        },
        {
          field: "eInvoiceStatus",
          headerName: "Qaimə statusu",
          type: "number",
          width: 130,
          editable: true,
        },
        {
          field: "paymentStatus",
          headerName: "Ödəniş statusu",
          type: "number",
          width: 130,
          editable: true,
        },
        {
          field: "serverFeeAmount",
          headerName: "Server xidmət haqqı (AZN)",
          type: "number",
          width: 220,
          editable: true,
        },
        {
          field: "driverBankAccountFeeAmount",
          headerName: "Bank hesabı üzrə (VÖEN-li)",
          type: "number",
          width: 220,
          editable: true,
        },
        {
          field: "driverCardFeeAmount",
          headerName: "Avtomatik kart üzrə (VÖEN-siz)",
          type: "number",
          width: 240,
          editable: true,
        },
        {
          field: "fleetBankAccountFeeAmount",
          headerName: "Bank hesabı üzrə (VÖEN-li)",
          type: "number",
          width: 220,
          editable: true,
        },
        {
          field: "fleetCardFeeAmount",
          headerName: "Avtomatik kart üzrə (VÖEN-siz)",
          type: "number",
          width: 240,
          editable: true,
        },
        {
          field: "additionalFeeAmount",
          headerName: "Xidmət haqqı (AZN)",
          type: "number",
          width: 160,
          editable: true,
        },
        {
          field: "additionalFeeDescription",
          headerName: "Təsviri",
          type: "number",
          width: 60,
          editable: true,
        },
      ];
    
      const [invoiceData, setInvoiceData] = useState;
    
      const fetchData = async () => {
        let response = await axios(`${BASE_URL}/get-data`);
        setInvoiceData(response)
      }
    
      useEffect(()=>{
        fetchData();
      },)
    
      return (
        <div className="invoice">
          <div className="bg bg-white">
            <div className="main">
              <Box sx={{ height: 400, width: "100%" }}>
                <DataGrid
                  rows={invoiceData}
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: 5,
                      },
                    },
                  }}
                  pageSizeOptions={[5]}
                  checkboxSelection
                  disableRowSelectionOnClick
                />
              </Box>
            </div>
          </div>
        </div>
      );
    };

export default Invoice
