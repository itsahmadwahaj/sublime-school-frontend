import React, { useState, useRef } from "react";
import { Checkbox, Button, Divider } from "antd";
import { useReactToPrint } from "react-to-print";
import ComponentToPrint from "./StudentListDocunment";

const CheckboxGroup = Checkbox.Group;

const StudentList = (props) => {
  const { data, columns } = props;
  const [dataColumns, setDataColumns] = useState([]);
  const [checkAll, setCheckAll] = useState(false);
  const [indeterminate, setIndeterminate] = useState(true);
  const options = ["Roll No", "Name", "Father Name", "Phone No"];
  const defaultCheckedList = ["Roll No", "Name"];
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const componentRef = useRef();

  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? options : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  const onChange = (e) => {
    setCheckedList(e);
    setIndeterminate(!!e.length && e.length < options.length);
    setCheckAll(e.length === options.length);
  };

  const printDocument = useReactToPrint({
    content: () => componentRef.current,
  });

  const handlePrintDocument = () => {
    let dataCol = [];
    columns.map((col) => {
      if (checkedList.includes(col.title)) {
        dataCol.push(col);
      }
    });
    // console.log("Data Columns: ", dataCol);
    setDataColumns(dataCol);
    console.log("dataColumns: ", dataCol);
    printDocument();
  };

  return (
    <>
      <Checkbox
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        Check all
      </Checkbox>
      <Divider />
      <CheckboxGroup
        options={options}
        value={checkedList}
        onChange={onChange}
      />
      {/* {console.log("Checked: ", checkedList)} */}
      <br />
      <br />
      <br />
      <div>
        <Button
          type="primary"
          htmlType="submit"
          style={{ marginRight: "8px" }}
          onClick={handlePrintDocument}
        >
          Print
        </Button>
        <div style={{ display: "none" }}>
          <ComponentToPrint
            data={data}
            columns={dataColumns}
            ref={componentRef}
          />
        </div>
      </div>
    </>
  );
};

export default StudentList;

// const options = [
//   { label: "Roll No", value: "rollNo" },
//   { label: "Name", value: "name" },
//   { label: "Father Name", value: "fatherName" },
//   { label: "Phone No", value: "phoneNo1" },
// ];
