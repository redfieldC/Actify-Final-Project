import React from "react";
import { useSelector } from "react-redux";
import { selectTableData } from "../features/tableSlice";
import { useState } from "react";
import "./tableStyle.css"; // Corrected CSS import
import Form from "./Form";
import * as XLSX from "xlsx";
const Table = () => {
  const tableData = useSelector(selectTableData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: "",
    direction: "ascending",
  });
  const [visibleColumns, setVisibleColumns] = useState({
    id: true,
    name: true,
    age: true,
    job: true
  })

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...tableData].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });

  const filteredData = sortedData.filter((row) => {
    const searchLower = searchTerm.toLowerCase(); // Convert search term to lower case
    return (
      row.id.toString().toLowerCase().includes(searchLower) ||
      row.name.toLowerCase().includes(searchLower) || // Convert name to lower case
      row.age.toString().toLowerCase().includes(searchLower) || // Convert age to lower case
      row.job.toLowerCase().includes(searchLower) // Convert job to lower case
    );
  });


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleDownloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Filtered Data");
    XLSX.writeFile(workbook, "Filtered_Employee_Data.xlsx");
  };

  const toggleColumn = (column) => {
    setVisibleColumns((prev) => ({
      ...prev,
      [column]: !prev[column],
    }))
  }

  return (
    <div className="container-with-sidebar">
      <div className="sidebar">
        <h2>Sidebar</h2>
        <div className="sidebar-item">
          <a href="#link1">Link 1</a>
        </div>
        <div className="sidebar-item">
          <a href="#link2">Link 2</a>
        </div>
        <div className="sidebar-item">
          <a href="#link3">Link 3</a>
        </div>
        <div className="sidebar-item">
          <a href="#link4">Link 4</a>
        </div>
      </div>
      <div className="entire-container">
        <div className="employeeHeader">
          <h1>Employee Data</h1>
          <div className="excelDownloadContainer">
            <button
              className="downloadExcelButton"
              onClick={handleDownloadExcel}
            >
              Download Excel
            </button>
          </div>
        </div>
        <Form />
        <div className="search-container">
          <input
            type="text"
            placeholder="Search employee..."
            value={searchTerm}
            onChange={handleSearch}
            style={{}}
          />
        </div>

        <div className="column-visibility-container">
          <label htmlFor="">
            <input type="checkbox" checked={visibleColumns.id}  onChange={()=>toggleColumn('id')}/>ID
          </label>
          <label htmlFor="">
            <input type="checkbox" checked={visibleColumns.name}  onChange={()=>toggleColumn('name')}/>Name
          </label>
          <label htmlFor="">
            <input type="checkbox" checked={visibleColumns.age}  onChange={()=>toggleColumn('age')}/>Age
           </label>
           <label htmlFor="">
            <input type="checkbox" checked={visibleColumns.job}  onChange={()=>toggleColumn('job')}/>Job
           </label>

           <table className="tableData">
          <thead>
            <tr>
              {visibleColumns.id && (
                <th
                  onClick={() => handleSort("id")}
                  className={
                    sortConfig.key === "id"
                      ? sortConfig.direction === "ascending"
                        ? "sort-ascending"
                        : "sort-descending"
                      : ""
                  }
                >
                  ID
                </th>
              )}
              {visibleColumns.name && (
                <th
                  onClick={() => handleSort("name")}
                  className={
                    sortConfig.key === "name"
                      ? sortConfig.direction === "ascending"
                        ? "sort-ascending"
                        : "sort-descending"
                      : ""
                  }
                >
                  Name
                </th>
              )}
              {visibleColumns.age && (
                <th
                  onClick={() => handleSort("age")}
                  className={
                    sortConfig.key === "age"
                      ? sortConfig.direction === "ascending"
                        ? "sort-ascending"
                        : "sort-descending"
                      : ""
                  }
                >
                  Age
                </th>
              )}
              {visibleColumns.job && (
                <th
                  onClick={() => handleSort("job")}
                  className={
                    sortConfig.key === "job"
                      ? sortConfig.direction === "ascending"
                        ? "sort-ascending"
                        : "sort-descending"
                      : ""
                  }
                >
                  Job
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((row) => (
                <tr key={row.id}>
                  {visibleColumns.id && <td>{row.id}</td>}
                  {visibleColumns.name && <td>{row.name}</td>}
                  {visibleColumns.age && <td>{row.age}</td>}
                  {visibleColumns.job && <td>{row.job}</td>}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={{ textAlign: "center" }}>
                  No result found
                </td>
              </tr>
            )}
          </tbody>
        </table>
        </div>

        <div className="previousNext-container">
          <button
            className="previousButton"
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span style={{ margin: "0 10px" }}>
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="nextButton"
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
