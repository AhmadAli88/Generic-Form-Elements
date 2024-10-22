import React from "react";
import { useState } from "react";
import GenericPagination from "../../custom/components/Pagination/GenericPagination";

const PaginationComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Example: 20 pages in total

  const handlePageChange = (pageNumber) => {
    console.log(`Page changed to: ${pageNumber}`);
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      <h2>Custom Pagination Example</h2>

      {/* Reusable Pagination Component */}
      <GenericPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        showEllipsis={true}
        showFirst={true}
        showLast={true}
        showPrev={true}
        showNext={true}
        disabledPages={[10, 15]} // Example: Disable page 10 and 15
        className="my-custom-pagination"
        style={{ marginBottom: "20px" }}
      />
    </div>
  );
};

export default PaginationComponent;
