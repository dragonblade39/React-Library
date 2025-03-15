import React, { useState } from "react";
import { Button } from "react-ui-library";
import { Typography } from "react-ui-library";
import { Input } from "react-ui-library";
import { Table } from "react-ui-library";
import { ListBox } from "react-ui-library";
import { Header, Footer, Sidebar, MainContent } from "react-ui-library";

const App = () => {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const data = [
    { id: 1, name: "Alice", age: 25, country: "USA" },
    { id: 2, name: "Bob", age: 30, country: "UK" },
    { id: 3, name: "Charlie", age: 22, country: "Canada" },
  ];

  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Name", accessor: "name" },
    { header: "Age", accessor: "age" },
    { header: "Country", accessor: "country" },
  ];

  const handleHorizontalSelection = (selected) => {
    console.log("✅ Selected:", selected);
  };

  const handleVerticalSelection = (selected) => {
    console.log("✅ Selected:", selected);
  };

  return (
    <div>
      <div
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <div>
          <Header>My Application</Header>
        </div>
        <div style={{ display: "flex", flex: 1, marginTop: "0px" }}>
          <Sidebar>
            <p>Dashboard</p>
            <p>Settings</p>
            <p>Profile</p>
          </Sidebar>
          <MainContent>
            <h2>Button</h2>
            <div>
              <Button
                label="Click Me"
                onClick={() => alert("Button Clicked!")}
              />
            </div>
            <div>
              <div>
                <h2>Headings</h2>
                <Typography size="large" weight="bold" color="#ff5722">
                  Bold Large Heading
                </Typography>
              </div>
              <div>
                <Typography size="medium" weight="semibold" color="#2196f3">
                  Semi Bold Medium Text
                </Typography>
              </div>
              <div>
                {" "}
                <Typography size="small" weight="light" color="#4caf50">
                  Light Small Caption
                </Typography>
              </div>
            </div>
            <div style={{ padding: "20px", maxWidth: "500px" }}>
              <h2>Input Library</h2>

              <Input
                type="text"
                label="Text Input"
                placeholder="Enter text"
                value={text}
                size="large"
                width="400px"
                height="60px"
                onChange={(e) => setText(e.target.value)}
              />

              <Input
                type="email"
                label="Email Input"
                placeholder="Enter email"
                value={email}
                size="medium"
                width="300px"
                height="45px"
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                type="number"
                label="Number Input"
                placeholder="Enter number"
                value={number}
                size="small"
                width="200px"
                height="35px"
                onChange={(e) =>
                  setNumber(e.target.value ? Number(e.target.value) : "")
                }
              />

              <Input
                type="checkbox"
                label="Accept Terms"
                checked={checkbox}
                size="medium"
                onChange={(e) => setCheckbox(e.target.checked)}
              />

              <Input
                type="textarea"
                label="Comments"
                placeholder="Write your comment..."
                size="large"
                width="500px"
                height="80px"
              />

              <Input
                type="select"
                label="Choose Option"
                options={["Option 1", "Option 2", "Option 3"]}
                size="medium"
                width="250px"
                height="50px"
              />
            </div>
            <div style={{ padding: "20px" }}>
              <Typography size="large" weight="bold" color="red">
                Table
              </Typography>
              <Table
                data={data}
                columns={columns}
                sortColumn="name"
                sortDirection="asc"
                width="50%"
              />
            </div>
            <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
              <h2>Listbox</h2>
              <ListBox
                options={["Male", "Female", "Other"]}
                onSelect={handleVerticalSelection}
                defaultSelected="Male"
                layout="vertical"
              />
            </div>
            <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
              <ListBox
                options={["Credit Card", "PayPal", "UPI"]}
                onSelect={handleHorizontalSelection}
                defaultSelected="PayPal"
                layout="horizontal"
              />
            </div>
          </MainContent>
        </div>
        <Footer>© 2025 My Application</Footer>
      </div>
    </div>
  );
};

export default App;
