import useData from "@features/useData";
import { fetchUserTodo } from "@features/userSlice";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../hooks";

const AddTodo = () => {
	const [todos, setTodos] = useState("");
	const cekData = useAppSelector((state) => {
		return state.user;
	});
	// const cekData = useData();
	const dispatch = useAppDispatch();

	const tambahTodo = async (e) => {
		e.preventDefault();
		try {
			const kirimData = await fetch(
				`${process.env.NEXT_PUBLIC_SERVER}/todo/todos`,
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ todo: todos, id: cekData.id }),
				}
			);

			if (kirimData.status === 200) {
				alert("Berhasil tambah todo!");
				dispatch(fetchUserTodo());
			} else {
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
							setTodos(e.target.value);
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
