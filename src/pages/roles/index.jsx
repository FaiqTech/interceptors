import { Button, Col, Container, Row, Table } from "reactstrap";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import axios from "../../api/index.js";
import CustomSpinner from "../../components/spinner";
import dayjs from "dayjs";

const Roles = () => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const getData = async () => {
    setIsFetching(true);
    const data = await axios.get("/permission/roles");
    setData(data.roles);
    setIsFetching(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return isFetching ? (
    <CustomSpinner />
  ) : (
    <Container fluid className="mt-5">
      <h3>Roles ({data.length})</h3>
      <Row className="gap-4">
        <Col sm={12} md={3}>
          <Button color="success">
            <FaPlus className="d-flex" />
          </Button>
        </Col>
        <Col sm={12}>
          <Table hover responsive bordered>
            <thead>
              <tr>
                <th>NO</th>
                <th>Name</th>
                <th>Created at</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{dayjs(item.created_at).format("DD.MM.YYYY HH:mm")}</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Roles;
