import { useState, useCallback } from "react";
import { Button, Form } from "react-bootstrap";

const AddTodo = ({ setIsFetching }) => {
	const [todos, setTodos] = useState({});

	const tambahTodo = async (e) => {
		e.preventDefault();
		try {
			const login = localStorage.getItem("login");

			const kirimData = await fetch("http://localhost:3000/api/todo/todos", {
				method: "POST",
				body: JSON.stringify(todos, login),
			});

			console.log("todos : ", todos);

			if (kirimData.status === 200) {
				setIsFetching(true);
				alert("Berhasil tambah todo!");
			} else {
				setIsFetching(false);
				alert("Gagal tambah todo, silahkan coba lagi!");
			}
		} catch (err) {
			alert("Gagal tambah todo, silahkan coba lagi!");
			console.log("errror tambah todo : ", err.message);
		}
	};

	return (
		<>
			<h2 style={{ textAlign: "center" }}>Add Todo</h2>
			<Form onSubmit={tambahTodo}>
				<Form.Group>
					<Form.Label>Todo</Form.Label>
					<Form.Control
						type="text"
						required
						maxLength={50}
						minLength={3}
						placeholder={"input your todo"}
						onChange={(e) => {
							setTodos({ ...todos, todo: e.target.value });
						}}
					/>
				</Form.Group>
				<br />
				<Button variant="success" type="submit">
					Add Todo
				</Button>
			</Form>
		</>
	);
};

export default AddTodo;