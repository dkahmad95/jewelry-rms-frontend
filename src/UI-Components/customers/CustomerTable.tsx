import { GridColDef, GridDeleteIcon } from "@mui/x-data-grid";
import { CustomerInvoice } from "@/lib/interfaces/customerInvoice-Interface";
import DataTable from "@/UI-Components/sharedComponents/dataTable";
import React, { useEffect } from "react";
import { DataTableSkeleton } from "@/UI-Components/suppliers/tableSkelaton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { Button } from "../sharedComponents/button";
import {
  deleteCustomerInvoice,
  getCustomerInvoice,
} from "@/lib/apiCalls/customerinvoiceAPIs";
import { TrashIcon } from "@heroicons/react/24/outline";

const CustomerTable = () => {
  const dispatch = useDispatch();

  const customersInvoices: CustomerInvoice[] = useSelector(
    (state: RootState) => state.customerInvoice.customerInvoice
  );
  const customersInvoicesIsLoading: boolean = useSelector(
    (state: RootState) => state.customerInvoice.isFetching
  );
  const customersInvoicesError: boolean = useSelector(
    (state: RootState) => state.customerInvoice.error
  );

  const handleDelete = (id: number) => {
    deleteCustomerInvoice(dispatch, id);
  };

  useEffect(() => {
    getCustomerInvoice(dispatch)
      .then((r) => r)
      .catch(Error);
  }, [dispatch]);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 120 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "phoneNumber", headerName: "Phone Number", width: 250 },
    {
      field: "totalAmount",
      headerName: "Total Amount",

      width: 170,
      renderCell: (params) => {
        return <div className=" ">$ {params.value}</div>;
      },
    },
    {
      field: "createdDate",
      headerName: "Created Date",
      type: "string",
      width: 130,
      renderCell: (params) => {
        return (
          <div className=" ">{params.value.split("-").reverse().join("-")}</div>
        );
      },
    },

    {
      field: "viewCustomerInvoice",
      headerName: "View Invoice",
      width: 150,
      renderCell: (params) => {
        console.log(typeof params.id);
        const navigate = useNavigate();
        const handleClick = () => {
          navigate(`/receipt`);
        };

        return (
          <div className=" flex flex-row  gap-3 mt-4">
            <Button onClick={handleClick} className=" text-white h-6 ">
              View
            </Button>
            <TrashIcon
              className="w-5 text-red-600"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  if (customersInvoicesError) {
    return (
      <div className="flex justify-center items-center mt-16">
        <span className="text-red-500 text-2xl">
          Error while Fetching Customers, please try again!
        </span>
      </div>
    );
  }

  return (
    <div>
      {customersInvoicesIsLoading ? (
        <DataTableSkeleton />
      ) : (
        <DataTable columns={columns} rows={customersInvoices} />
      )}
    </div>
  );
};

export default CustomerTable;
