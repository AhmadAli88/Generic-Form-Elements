import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

function GenericPagination({
  currentPage = 1,           // The current active page
  totalPages = 10,           // Total number of pages
  onPageChange = () => {},   // Function to handle page changes
  showFirst = true,          // Whether to show the "First" button
  showLast = true,           // Whether to show the "Last" button
  showPrev = true,           // Whether to show the "Previous" button
  showNext = true,           // Whether to show the "Next" button
  showEllipsis = true,       // Whether to show ellipsis when there are many pages
  disabledPages = [],        // Array of page numbers to be disabled
  className = '',            // Custom class names for the Pagination component
  style = {},                // Custom styles for the Pagination component
}) {
  const handlePageChange = (pageNumber) => {
    if (!disabledPages.includes(pageNumber)) {
      onPageChange(pageNumber);
    }
  };

  const renderPageItems = () => {
    const items = [];

    // Render individual page numbers
    for (let i = 1; i <= totalPages; i++) {
      items.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          disabled={disabledPages.includes(i)}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </Pagination.Item>
      );
    }

    return items;
  };

  return (
    <Pagination className={className} style={style}>
      {showFirst && <Pagination.First onClick={() => handlePageChange(1)} />}
      {showPrev && (
        <Pagination.Prev
          onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)}
          disabled={currentPage === 1}
        />
      )}
      {showEllipsis && currentPage > 2 && <Pagination.Ellipsis />}
      
      {renderPageItems()}

      {showEllipsis && currentPage < totalPages - 1 && <Pagination.Ellipsis />}
      {showNext && (
        <Pagination.Next
          onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : totalPages)}
          disabled={currentPage === totalPages}
        />
      )}
      {showLast && <Pagination.Last onClick={() => handlePageChange(totalPages)} />}
    </Pagination>
  );
}

export default GenericPagination;
