import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { login, logout } from "@features/userSlice";
import { Col, Container, Form, Row } from "react-bootstrap";

import ListData from "@components/ListData";
import Button from "react-bootstrap/Button";

const Todos = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const logout = (e: any) => {
		e.preventDefault();
		localStorage.removeItem("id");
		dispatch(logout());
		router.push("/");
	};

	return (
		<Container>
			<Row md={2} xs={1}>
				<Col>
					<h2 style={{ textAlign: "center" }}>Add Todo</h2>
					<Form>
						<Form.Group>
							<Form.Label>Todo</Form.Label>
							<Form.Control
								type="text"
								required
								maxLength={50}
								minLength={3}
								placeholder={"input your todo"}
							/>
						</Form.Group>
						<br />
						<Button variant="success" type="submit">
							Add Todo
						</Button>
					</Form>
				</Col>
				<Col>
					<Container>
						<ListData />
					</Container>
				</Col>
			</Row>
		</Container>
	);
};

export default Todos;
