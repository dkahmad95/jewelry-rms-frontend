"use client";

import React, { useEffect } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { getOneSupplier } from "@/lib/apiCalls/supplierAPIs";
import Breadcrumbs from "@/UI-Components/sharedComponents/breadcrumbs";
import { Button } from "@/UI-Components/sharedComponents/button";
import { SupplierInfoSkeleton } from "@/UI-Components/suppliers/supplierIdPage/supplierInfoSkelaton";
import SupplierInfo from "@/UI-Components/suppliers/supplierIdPage/supplierInfo";
import SupplierTables from "@/UI-Components/suppliers/supplierIdPage/supplierTables";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Supplier } from "@/lib/interfaces/suppliers-interface";

const SingleSupplier = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const supplierId: number = parseInt(location.pathname.split("/")[2]);
  const dispatch = useDispatch();
  const supplier: Supplier = useSelector(
    (state: RootState) => state.supplier.oneSupplier
  );
  const supplierIsFetching: boolean = useSelector(
    (state: RootState) => state.supplier.oneSupplierIsFetching
  );
  const supplierIsError: boolean = useSelector(
    (state: RootState) => state.supplier.oneSupplierError
  );
  console.log("supplierIsError", supplierIsError);
  console.log("supplier", supplier);
  useEffect(() => {
    getOneSupplier(dispatch, supplierId).then();
  }, [dispatch]);
  if (supplierIsError) {
    navigate("/notFound");
  }
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Suppliers", href: "/suppliersList", active: false },
          {
            label: "Supplier Page",
            href: `/singleSupplier/${supplierId}`,
            active: true,
          },
        ]}
      />
      <div className="flex flex-col w-full items-center justify-between gap-y-2 md:flex-row my-3 ">
        <div className="flex w-full items-center justify-center gap-x-3 md:justify-end">
          <Link to={`/newSupplierTransaction/${supplierId}`}>
            <Button className="bg-blue-600 text-white">
              Transaction <PlusIcon className="h-5 ml-4" />
            </Button>
          </Link>
          <Link to={`/newSupplierPayment/${supplierId}`}>
            <Button className="bg-blue-600 text-white">
              Payment <PlusIcon className="h-5 ml-4" />
            </Button>
          </Link>
        </div>
      </div>
      <div>
        {supplierIsFetching ? (
          <SupplierInfoSkeleton />
        ) : (
          <SupplierInfo
            supplier={supplier}
            supplierId={supplierId}
            pathname={location.pathname}
          />
        )}
      </div>

      <div className="my-8">
        <SupplierTables />
      </div>
    </main>
  );
};

export default SingleSupplier;
