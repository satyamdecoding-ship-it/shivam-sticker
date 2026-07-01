
"use client";

import { useState } from "react";

const rates = {
  SPL: {
    Visor: 2,
    Tail: 4,
    Panel: 8,
  },
  "HF DLX": {
    Visor: 4,
    Tail: 7,
    Panel: 10,
  },
  Pulsar: {
    Visor: 8,
    Tail: 16,
    Panel: 20,
  },
  Shine: {
    Visor: 8,
    Tail: 12,
    Panel: 14,
  },
};

type ProductName = keyof typeof rates;
type ProductType = "Visor" | "Tail" | "Panel";

interface Row {
  productName: string;
  productType: string;
  quantity: number;
}

export default function OrderPage() {

const placeorder = async()=>{
  try {
    alert("Your order is placed successfully")
  } catch (error) {
    console.log("error")
  }
}

  const [rows, setRows] = useState<Row[]>([
    {
      productName: "",
      productType: "",
      quantity: 0,
    },
  ]);

  const updateRow = (
    index: number,
    field: keyof Row,
    value: string | number
  ) => {
    const updatedRows = [...rows];
    updatedRows[index] = {
      ...updatedRows[index],
      [field]: value,
    };
    setRows(updatedRows);
  };

  const addNewRow = () => {
    setRows([
      ...rows,
      {
        productName: "",
        productType: "",
        quantity: 0,
      },
    ]);
  };

  const getRate = (row: Row) => {
    if (!row.productName || !row.productType) return 0;

    return (
      rates[row.productName as ProductName]?.[
        row.productType as ProductType
      ] || 0
    );
  };

  const getTotal = (row: Row) => {
    return getRate(row) * row.quantity;
  };

  const grandTotal = rows.reduce(
    (sum, row) => sum + getTotal(row),
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6">
          Product Order Form
        </h1>

        <div className="overflow-x-auto">
          <div className="min-w-[1200px]">
            {/* Header */}
            <div className="grid grid-cols-7 gap-3 font-semibold mb-3 text-gray-700">
              <div>No.</div>
              <div>Product Name</div>
              <div>Product Type</div>
              <div>Quantity</div>
              <div>Rate</div>
              <div>Total</div>
              <div>Action</div>
            </div>

            {/* Rows */}
            {rows.map((row, index) => {
              const rate = getRate(row);
              const total = getTotal(row);

              return (
                <div
                  key={index}
                  className="grid grid-cols-7 gap-3 mb-4"
                >
                  <input
                    value={index + 1}
                    readOnly
                    className="border rounded-lg px-3 py-2 bg-gray-100"
                  />

                  <select
                    value={row.productName}
                    onChange={(e) =>
                      updateRow(
                        index,
                        "productName",
                        e.target.value
                      )
                    }
                    className="border rounded-lg px-3 py-2"
                  >
                    <option value="">
                      Select Product
                    </option>
                    <option value="SPL">SPL</option>
                    <option value="HF DLX">
                      HF DLX
                    </option>
                    <option value="Pulsar">
                      Pulsar
                    </option>
                    <option value="Shine">
                      Shine
                    </option>
                  </select>

                  <select
                    value={row.productType}
                    onChange={(e) =>
                      updateRow(
                        index,
                        "productType",
                        e.target.value
                      )
                    }
                    className="border rounded-lg px-3 py-2"
                  >
                    <option value="">
                      Select Type
                    </option>
                    <option value="Visor">
                      Visor
                    </option>
                    <option value="Tail">
                      Tail
                    </option>
                    <option value="Panel">
                      Panel
                    </option>
                  </select>

                  <input
                    type="number"
                    min="0"
                    value={row.quantity || ""}
                    onChange={(e) =>
                      updateRow(
                        index,
                        "quantity",
                        Number(e.target.value)
                      )
                    }
                    placeholder="Qty"
                    className="border rounded-lg px-3 py-2"
                  />

                  <input
                    value={rate}
                    readOnly
                    className="border rounded-lg px-3 py-2 bg-gray-100"
                  />

                  <input
                    value={total}
                    readOnly
                    className="border rounded-lg px-3 py-2 bg-gray-100"
                  />

                  <button
                    onClick={addNewRow}
                    className="bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800"
                  >
                    Next Line
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Grand Total */}
        <div className="sticky bottom-0 mt-8 bg-white border-t pt-4">
          <div className="flex justify-end items-center gap-4">
            <span className="text-xl font-bold">
              Grand Total
            </span>

            <input
              value={`₹ ${grandTotal}`}
              readOnly
              className="border rounded-lg px-4 py-3 w-56 text-lg font-bold bg-green-50"
            />
            <button onClick={placeorder}
            className="bg-black text-white px-10 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition duration-300 shadow-lg"
            
            >Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}




