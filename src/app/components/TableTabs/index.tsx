import { Tabs } from "antd";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import type { TabsProps } from "antd";



import React from 'react'

export const TableTabs = () => {
 
      const onChange = (key: string) => {
        console.log(key);
      };
    
      // table content data
      interface DataType {
        key: React.Key;
        name: string;
        ExpiryDate: string;
        Action: JSX.Element;
        email: string;
        phone: string;
        Subscriptiontype: string;
        SubscriptionLevel: string;
      }
    
      const columns: TableColumnsType<DataType> = [
        {
          title: "Company Name",
          dataIndex: "name",
        },
        {
          title: "Name",
          dataIndex: "name",
        },
        {
          title: "Email",
          dataIndex: "email",
        },
        {
          title: "Phone",
          dataIndex: "phone",
        },
        {
          title: "Subscription-type",
          dataIndex: "Subscriptiontype",
        },
        {
          title: "Subscription-Level",
          dataIndex: "SubscriptionLevel",
        },
        {
          title: "Expiry Date",
          dataIndex: "ExpiryDate",
          // sorter: (a, b) => a.Expiry - b.ExpiryDate,
        },
    
        {
          title: "Action",
          dataIndex: "Action",
          // render: (action) => action,
        },
      ];
    
      const data: DataType[] = [
        {
          key: "1",
          name: "Alex Roman",
          ExpiryDate: "4/4/18",
          Action: (
            <svg
              width="5"
              height="21"
              viewBox="0 0 5 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 10.0391C4.5 8.93449 3.60457 8.03906 2.5 8.03906C1.39543 8.03906 0.5 8.93449 0.5 10.0391C0.5 11.1436 1.39543 12.0391 2.5 12.0391C3.60457 12.0391 4.5 11.1436 4.5 10.0391Z"
                fill="#5C5F62"
              />
              <path
                d="M4.5 2.03906C4.5 0.934493 3.60457 0.0390627 2.5 0.0390627C1.39543 0.0390627 0.5 0.934493 0.5 2.03906C0.5 3.14363 1.39543 4.03906 2.5 4.03906C3.60457 4.03906 4.5 3.14363 4.5 2.03906Z"
                fill="#5C5F62"
              />
              <path
                d="M4.5 18.0391C4.5 16.9345 3.60457 16.0391 2.5 16.0391C1.39543 16.0391 0.5 16.9345 0.5 18.0391C0.5 19.1436 1.39543 20.0391 2.5 20.0391C3.60457 20.0391 4.5 19.1436 4.5 18.0391Z"
                fill="#5C5F62"
              />
            </svg>
          ),
          email: "georgia.young@example.com",
          phone: "(319) 555-0115",
          Subscriptiontype: "Yearly",
          SubscriptionLevel: "Individual",
        },
        {
          key: "2",
          name: "Alex Roman",
          ExpiryDate: "4/4/18",
          Action: (
            <svg
              width="5"
              height="21"
              viewBox="0 0 5 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 10.0391C4.5 8.93449 3.60457 8.03906 2.5 8.03906C1.39543 8.03906 0.5 8.93449 0.5 10.0391C0.5 11.1436 1.39543 12.0391 2.5 12.0391C3.60457 12.0391 4.5 11.1436 4.5 10.0391Z"
                fill="#5C5F62"
              />
              <path
                d="M4.5 2.03906C4.5 0.934493 3.60457 0.0390627 2.5 0.0390627C1.39543 0.0390627 0.5 0.934493 0.5 2.03906C0.5 3.14363 1.39543 4.03906 2.5 4.03906C3.60457 4.03906 4.5 3.14363 4.5 2.03906Z"
                fill="#5C5F62"
              />
              <path
                d="M4.5 18.0391C4.5 16.9345 3.60457 16.0391 2.5 16.0391C1.39543 16.0391 0.5 16.9345 0.5 18.0391C0.5 19.1436 1.39543 20.0391 2.5 20.0391C3.60457 20.0391 4.5 19.1436 4.5 18.0391Z"
                fill="#5C5F62"
              />
            </svg>
          ),
          email: "georgia.young@example.com",
          phone: "(319) 555-0115",
          Subscriptiontype: "Yearly",
          SubscriptionLevel: "Individual",
        },
        {
          key: "3",
          name: "Alex Roman",
          ExpiryDate: "4/4/18",
          Action: (
            <svg
              width="5"
              height="21"
              viewBox="0 0 5 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 10.0391C4.5 8.93449 3.60457 8.03906 2.5 8.03906C1.39543 8.03906 0.5 8.93449 0.5 10.0391C0.5 11.1436 1.39543 12.0391 2.5 12.0391C3.60457 12.0391 4.5 11.1436 4.5 10.0391Z"
                fill="#5C5F62"
              />
              <path
                d="M4.5 2.03906C4.5 0.934493 3.60457 0.0390627 2.5 0.0390627C1.39543 0.0390627 0.5 0.934493 0.5 2.03906C0.5 3.14363 1.39543 4.03906 2.5 4.03906C3.60457 4.03906 4.5 3.14363 4.5 2.03906Z"
                fill="#5C5F62"
              />
              <path
                d="M4.5 18.0391C4.5 16.9345 3.60457 16.0391 2.5 16.0391C1.39543 16.0391 0.5 16.9345 0.5 18.0391C0.5 19.1436 1.39543 20.0391 2.5 20.0391C3.60457 20.0391 4.5 19.1436 4.5 18.0391Z"
                fill="#5C5F62"
              />
            </svg>
          ),
          email: "georgia.young@example.com",
          phone: "(319) 555-0115",
          Subscriptiontype: "Yearly",
          SubscriptionLevel: "Individual",
        },
        {
          key: "4",
          name: "Alex Roman",
          ExpiryDate: "4/4/18",
          Action: (
            <svg
              width="5"
              height="21"
              viewBox="0 0 5 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 10.0391C4.5 8.93449 3.60457 8.03906 2.5 8.03906C1.39543 8.03906 0.5 8.93449 0.5 10.0391C0.5 11.1436 1.39543 12.0391 2.5 12.0391C3.60457 12.0391 4.5 11.1436 4.5 10.0391Z"
                fill="#5C5F62"
              />
              <path
                d="M4.5 2.03906C4.5 0.934493 3.60457 0.0390627 2.5 0.0390627C1.39543 0.0390627 0.5 0.934493 0.5 2.03906C0.5 3.14363 1.39543 4.03906 2.5 4.03906C3.60457 4.03906 4.5 3.14363 4.5 2.03906Z"
                fill="#5C5F62"
              />
              <path
                d="M4.5 18.0391C4.5 16.9345 3.60457 16.0391 2.5 16.0391C1.39543 16.0391 0.5 16.9345 0.5 18.0391C0.5 19.1436 1.39543 20.0391 2.5 20.0391C3.60457 20.0391 4.5 19.1436 4.5 18.0391Z"
                fill="#5C5F62"
              />
            </svg>
          ),
          email: "georgia.young@example.com",
          phone: "(319) 555-0115",
          Subscriptiontype: "Yearly",
          SubscriptionLevel: "Individual",
        },
        {
          key: "5",
          name: "Alex Roman",
          ExpiryDate: "4/4/18",
          Action: (
            <svg
              width="5"
              height="21"
              viewBox="0 0 5 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 10.0391C4.5 8.93449 3.60457 8.03906 2.5 8.03906C1.39543 8.03906 0.5 8.93449 0.5 10.0391C0.5 11.1436 1.39543 12.0391 2.5 12.0391C3.60457 12.0391 4.5 11.1436 4.5 10.0391Z"
                fill="#5C5F62"
              />
              <path
                d="M4.5 2.03906C4.5 0.934493 3.60457 0.0390627 2.5 0.0390627C1.39543 0.0390627 0.5 0.934493 0.5 2.03906C0.5 3.14363 1.39543 4.03906 2.5 4.03906C3.60457 4.03906 4.5 3.14363 4.5 2.03906Z"
                fill="#5C5F62"
              />
              <path
                d="M4.5 18.0391C4.5 16.9345 3.60457 16.0391 2.5 16.0391C1.39543 16.0391 0.5 16.9345 0.5 18.0391C0.5 19.1436 1.39543 20.0391 2.5 20.0391C3.60457 20.0391 4.5 19.1436 4.5 18.0391Z"
                fill="#5C5F62"
              />
            </svg>
          ),
          email: "georgia.young@example.com",
          phone: "(319) 555-0115",
          Subscriptiontype: "Yearly",
          SubscriptionLevel: "Individual",
        },
        {
          key: "6",
          name: "Alex Roman",
          ExpiryDate: "4/4/18",
          Action: (
            <svg
              width="5"
              height="21"
              viewBox="0 0 5 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 10.0391C4.5 8.93449 3.60457 8.03906 2.5 8.03906C1.39543 8.03906 0.5 8.93449 0.5 10.0391C0.5 11.1436 1.39543 12.0391 2.5 12.0391C3.60457 12.0391 4.5 11.1436 4.5 10.0391Z"
                fill="#5C5F62"
              />
              <path
                d="M4.5 2.03906C4.5 0.934493 3.60457 0.0390627 2.5 0.0390627C1.39543 0.0390627 0.5 0.934493 0.5 2.03906C0.5 3.14363 1.39543 4.03906 2.5 4.03906C3.60457 4.03906 4.5 3.14363 4.5 2.03906Z"
                fill="#5C5F62"
              />
              <path
                d="M4.5 18.0391C4.5 16.9345 3.60457 16.0391 2.5 16.0391C1.39543 16.0391 0.5 16.9345 0.5 18.0391C0.5 19.1436 1.39543 20.0391 2.5 20.0391C3.60457 20.0391 4.5 19.1436 4.5 18.0391Z"
                fill="#5C5F62"
              />
            </svg>
          ),
          email: "georgia.young@example.com",
          phone: "(319) 555-0115",
          Subscriptiontype: "Yearly",
          SubscriptionLevel: "Individual",
        },
        {
          key: "7",
          name: "Alex Roman",
          ExpiryDate: "4/4/18",
          Action: (
            <svg
              width="5"
              height="21"
              viewBox="0 0 5 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 10.0391C4.5 8.93449 3.60457 8.03906 2.5 8.03906C1.39543 8.03906 0.5 8.93449 0.5 10.0391C0.5 11.1436 1.39543 12.0391 2.5 12.0391C3.60457 12.0391 4.5 11.1436 4.5 10.0391Z"
                fill="#5C5F62"
              />
              <path
                d="M4.5 2.03906C4.5 0.934493 3.60457 0.0390627 2.5 0.0390627C1.39543 0.0390627 0.5 0.934493 0.5 2.03906C0.5 3.14363 1.39543 4.03906 2.5 4.03906C3.60457 4.03906 4.5 3.14363 4.5 2.03906Z"
                fill="#5C5F62"
              />
              <path
                d="M4.5 18.0391C4.5 16.9345 3.60457 16.0391 2.5 16.0391C1.39543 16.0391 0.5 16.9345 0.5 18.0391C0.5 19.1436 1.39543 20.0391 2.5 20.0391C3.60457 20.0391 4.5 19.1436 4.5 18.0391Z"
                fill="#5C5F62"
              />
            </svg>
          ),
          email: "georgia.young@example.com",
          phone: "(319) 555-0115",
          Subscriptiontype: "Yearly",
          SubscriptionLevel: "Individual",
        },
      ];
    
      const onChanges: TableProps<DataType>["onChange"] = (
        pagination,
        sorter,
        extra
      ) => {
        console.log("params", pagination, sorter, extra);
      };
      const items: TabsProps["items"] = [
        {
          key: "1",
          label: "Active",
          children: (
            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
              onChange={onChanges}
              rowSelection={{}}
            />
          ),
        },
        {
          key: "2",
          label: "Expired",
          children: (
            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
              onChange={onChanges}
              rowSelection={{}}
            />
          ),
        },
        {
          key: "3",
          label: "Verification Request",
          children: (
            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
              onChange={onChanges}
              rowSelection={{}}
            />
          ),
        },
        {
          key: "4",
          label: "Invited",
          children: (
            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
              onChange={onChanges}
              rowSelection={{}}
            />
          ),
        },
      ];
  return (
    //   {/* tabs and data */}
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    //   {/* tabs end  */}
  )
}
