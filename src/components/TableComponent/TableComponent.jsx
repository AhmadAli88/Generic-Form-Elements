import React from "react";
import GenericTable from "../../custom/components/Tables/GenericTables";

const TableComponent = () => {
  const columns = ["#", "First Name", "Last Name", "Username"];

  const data = [
    [
      { content: "1" },
      { content: "Mark" },
      { content: "Otto" },
      { content: "@mdo" },
    ],
    [
      { content: "2" },
      { content: "Jacob" },
      { content: "Thornton" },
      { content: "@fat" },
    ],
    [
      { content: "3" },
      { content: "Larry the Bird", colSpan: 2 }, // This cell spans two columns
      { content: "@twitter" },
    ],
  ];

  return (
    <div>
      <GenericTable
        columns={columns}
        data={data}
        striped={true}
        bordered={true}
        hover={true}
      />
    </div>
  );
};

export default TableComponent;
