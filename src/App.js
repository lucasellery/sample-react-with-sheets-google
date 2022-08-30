import "./styles.css";
import "semantic-ui-css/semantic.min.css";
import { Button, Form, Container, Header } from "semantic-ui-react";
import { useState } from "react";
import axios from "axios";

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [salary, setSalary] = useState("");
  const [hobby, setHobby] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const fields = { name, age, salary, hobby };

    axios
      .post(
        "https://sheet.best/api/sheets/84c26ea5-5521-4fd7-9dd6-e0a3876e952d",
        fields
      )
      .then((response) => {
        console.log(response);
      });
  }

  return (
    <Container fluid className="containers">
      <Header className="header" as="h2">
        React w/ Google Sheets!
      </Header>

      <Form className="form" onSubmit={handleSubmit}>
        <Form.Field>
          <label>Name</label>
          <input
            placeholder="Jot your name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Age</label>
          <input
            type="number"
            placeholder="Jot your age"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Salary</label>
          <input
            type="number"
            placeholder="Jot your salary"
            name="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Hobby</label>
          <input
            placeholder="Jot your hobby"
            type="text"
            name="hobby"
            value={hobby}
            onChange={(e) => setHobby(e.target.value)}
          />
        </Form.Field>

        <Button color="green" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
