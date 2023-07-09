import React from "react";
import CardProductHorizontalList from "../../components/CardProductHorizontal/CardProductHorizontalList";
import CardTotal from "@/components/CardTotal/CardTotal";
function SalePage() {
  return (
    <div className="flex m-4 gap-2">
      <div className="w-1/2 overflow-y-auto">
        <CardProductHorizontalList />
      </div>
      <div className="w-1/2">
        <CardTotal />
      </div>
    </div>
  );
}

export default SalePage;
