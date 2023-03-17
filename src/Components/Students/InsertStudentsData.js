import React, { useState, useEffect, useRef } from "react";
import { Row, Input, Button, Form } from "antd";
import { Select, DatePicker, message, Radio, Popconfirm } from "antd";
import ClassNoData from "../../redux/constants/classNoConstants";
import SystemConstants from "../../redux/constants/systemConstants";
import {
  insertStudentsData,
  editStudentData,
  deleteStudentData
} from "../../redux/actions/student-actions";

export default function InsertStudentsData({
  filters,
  addStudentRecord,
  type,
  initialValues,
  editStudentRecord,
  setEditModal,
  deleteStudentRecord
}) {
  const formRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const showPopconfirm = () => {
    setOpen(true);
  };
  const handleOk = async () => {
    setConfirmLoading(true);
    const data = await deleteStudentData({ _id: initialValues._id });
    if (data?.data?.status === "success") {
      console.log(data?.data);
      deleteStudentRecord(initialValues._id);
      message.success("Student Updated");
      setOpen(false);
      setConfirmLoading(false);
      setEditModal(false);
    } else {
      message.error(data);
      setConfirmLoading(false);
    }
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const layout = {
    wrapperCol: {
      span: 22
    }
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 }
  };
  const dataInsertion = async values => {
    const data = await insertStudentsData(values);
    if (data?.data?.status === "success") {
      addStudentRecord(data?.data);

      message.success("Student Added");
    } else {
      message.error(data);
    }
  };
  const dataUpdation = async values => {
    console.log("In data updation", values);
    const data = await editStudentData({ ...values, _id: initialValues._id });
    if (data?.data?.status === "success") {
      console.log(data?.data);
      editStudentRecord(data?.data);
      message.success("Student Updated");
      setEditModal(false);
    } else {
      message.error(data);
    }
  };
  const finishFunction = values => {
    if (type === "Insert") dataInsertion(values);
    if (type === "Edit") dataUpdation(values);
  };
  const onFinish = values => {
    finishFunction(values);
  };

  const onReset = () => {
    formRef.resetFields();
  };
  const onFinishFailed = errorInfo => {
    message.error("Failed:", errorInfo);
  };
  return (
    <div>
      <Row gutter={16} justify="center">
        <h2>{type} Data</h2>
      </Row>
      <Form
        {...layout}
        name="basic"
        ref={formRef}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        justify="center"
        initialValues={initialValues}
        preserve={false}
      >
        <Form.Item
          label=""
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your Name!"
            }
          ]}
          style={{ display: "inline-block", width: "calc(50%)" }}
        >
          <Input name="name" placeholder="Student Name" />
        </Form.Item>

        <Form.Item
          label=""
          name="fatherName"
          rules={[
            {
              required: true,
              message: "Please input Father's Name!"
            }
          ]}
          style={{ display: "inline-block", width: "calc(50%)" }}
        >
          <Input name="fatherName" placeholder="Father Name" />
        </Form.Item>
        <Form.Item
          label=""
          name="phoneNo1"
          rules={[
            {
              required: true,
              message: "Please input your Contact!"
            }
          ]}
          style={{ display: "inline-block", width: "calc(50%)" }}
        >
          <Input name="phoneNo1" placeholder="Contact # 1" />
        </Form.Item>
        <Form.Item
          label=""
          name="phoneNo2"
          rules={[
            {
              required: false,
              message: "Please input your Contact No!"
            }
          ]}
          style={{ display: "inline-block", width: "calc(50%)" }}
        >
          <Input name="phoneNo2" placeholder="Contact # 2" />
        </Form.Item>
        <Form.Item
          label=""
          name="rollNo"
          rules={[
            {
              required: true,
              message: "Please input Roll No!"
            }
          ]}
          style={{ display: "inline-block", width: "calc(50%)" }}
        >
          <Input name="rollNo" placeholder="Roll No" />
        </Form.Item>
        <Form.Item
          name={["classNo"]}
          style={{ display: "inline-block", width: "calc(50%)" }}
          rules={[{ required: true, message: "Class is required" }]}
        >
          <Select placeholder="Class No" disabled={type === "Edit"}>
            {ClassNoData.map((data, index) => (
              <Select.Option key={data.label} value={data.value}>
                {data.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label=""
          name={["fee", "annualFee"]}
          rules={[
            {
              required: true,
              message: "Please input Annual Fee!"
            }
          ]}
          style={{ display: "inline-block", width: "calc(50%)" }}
        >
          <Input placeholder="Annual Fee" type="number" />
        </Form.Item>
        <Form.Item
          label=""
          name={["fee", "schoolFee"]}
          rules={[
            {
              required: true,
              message: "Please input School Fee!"
            }
          ]}
          style={{ display: "inline-block", width: "calc(50%)" }}
        >
          <Input placeholder="School Fee" type="number" />
        </Form.Item>
        <Form.Item
          label=""
          name={["fee", "syllabusFee"]}
          rules={[
            {
              required: true,
              message: "Please input Syllabus Fee!"
            }
          ]}
          style={{ display: "inline-block", width: "calc(50%)" }}
        >
          <Input placeholder="Syllabus Fee" type="number" />
        </Form.Item>
        <Form.Item
          label=""
          name={["fee", "registrationFee"]}
          rules={[
            {
              required: true,
              message: "Please input Registration Fee!"
            }
          ]}
          style={{ display: "inline-block", width: "calc(50%)" }}
        >
          <Input placeholder="Registration Fee" type="number" />
        </Form.Item>
        <Form.Item
          label=""
          name="dubata"
          rules={[
            {
              required: true,
              message: "Please input Dubata"
            }
          ]}
          style={{ display: "inline-block", width: "calc(50%)" }}
        >
          <Input name="dubata" placeholder="Dubata" />
        </Form.Item>
        <Form.Item
          label=""
          name="batch"
          rules={[
            {
              required: true,
              message: "Please input Batch No!"
            }
          ]}
          style={{ display: "inline-block", width: "calc(50%)" }}
        >
          <Input name="batch" placeholder="Batch" />
        </Form.Item>
        <Form.Item label="Enroll IN:" name="enrolledIn">
          <Radio.Group disabled={type === "Edit"}>
            {SystemConstants.map((data, index) => (
              <Radio key={data.label} value={data.value}>
                {data.label}
              </Radio>
            ))}
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="admissionDate"
          style={{ display: "inline-block", width: "calc(50%)" }}
        >
          <DatePicker placeholder="Admission Date" />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginRight: "8px" }}
          >
            Submit
          </Button>
          {type === "Insert" && (
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
          )}
          {type === "Edit" && (
            <Popconfirm
              title="Are you sure you want to delete?"
              description="Student data deletion"
              open={open}
              onConfirm={handleOk}
              okButtonProps={{
                loading: confirmLoading
              }}
              onCancel={handleCancel}
            >
              <Button type="danger" onClick={showPopconfirm}>
                Delete
              </Button>
            </Popconfirm>
          )}
        </Form.Item>
      </Form>
    </div>
  );
}
