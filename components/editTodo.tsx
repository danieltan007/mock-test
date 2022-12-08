// @ts-nocheck
import { Form, Modal } from "react-bootstrap";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { useAppDispatch } from "../hooks";
import { fetchUserTodo } from "@features/userSlice";

const EditTodo = ({ todoId, todos }) => {
	const [show, setShow] = useState(false);
	const [todo, setTodo] = useState("");
	const dispatch = useAppDispatch();
	const editTodo = async (id) => {
		try {
			const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/todo/todos`, {
				method: "PUT",
				body: JSON.stringify({ todo: todo, todoId: id }),
			});

			if (res.status === 200) {
				alert("berhasil update todo");
				dispatch(fetchUserTodo());
			} else {
				alert("gagal update todo! silahkan coba lagi");
			}
		} catch (err) {
			alert("gagal update todo! silahkan coba lagi");
			console.log("error edit data : ", err.message);
		}
	};

	const modalClose = () => setShow(false);
	const modalShow = () => setShow(true);
	return (
		<>
			<Button variant="primary" onClick={modalShow}>
				Update
			</Button>

			<Modal show={show} onHide={modalClose}>
				<Modal.Header closeButton>
					<Modal.Title>Update Todo</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3">
							<Form.Label>Update Todo</Form.Label>
							<br />
							<Form.Control
								type="text"
								placeholder="insert new todo"
								defaultValue={todos}
								required
								min={3}
								onChange={(e) => {
									setTodo(e.target.value);
								}}
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={modalClose}>
						Close
					</Button>
					<Button
						variant="primary"
						onClick={() => {
							editTodo(todoId);
							modalClose();
						}}>
						Update Todo
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default EditTodo;
