import { Table } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../hooks";
import useData from "@features/useData";
import Button from "react-bootstrap/Button";
import { useCallback, useState } from "react";
import { fetchUserTodo, login } from "@features/userSlice";
import EditTodo from "./editTodo";

const ListData = () => {
	const dispatch = useAppDispatch();
	const getData = useData();
	const userData = useAppSelector((state) => {
		return state.user;
	});

	const [todoName, setTodoName] = useState("");

	const doingTodo = async (id) => {
		try {
			const res = await fetch(
				`${process.env.NEXT_PUBLIC_SERVER}/todo/doingTodo`,
				{
					method: "POST",
					body: JSON.stringify({ todoId: id }),
				}
			);

			if (res.status === 200) {
				alert("berhasil doing todo");
				dispatch(fetchUserTodo());
			} else {
				alert("gagal doing todo! silahkan coba lagi");
			}
		} catch (err) {
			alert("gagal doing todo! silahkan coba lagi");
			console.log("error doing todo : ", err.message);
		}
	};

	const deleteTodo = async (id) => {
		try {
			const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/todo/todos`, {
				method: "DELETE",
				body: JSON.stringify({ todoId: id }),
			});

			if (res.status === 200) {
				alert("berhasil delete todo");
				dispatch(fetchUserTodo());
			} else {
				alert("gagal delete todo! silahkan coba lagi");
			}
		} catch (err) {
			alert("gagal delete todo! silahkan coba lagi");
			console.log("error delete data : ", err.message);
		}
	};

	let no = 0;
	return (
		<>
			<h2 style={{ textAlign: "center" }}>Todo Lists</h2>
			<br />
			<Table bordered striped>
				<thead>
					<tr>
						<th>No</th>
						<th>Todo</th>
						<th>Status</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{userData.data?.map((data) => {
						{
							no++;
						}
						return (
							<tr key={data.id}>
								<td>{no}</td>
								<td>
									<input
										type="text"
										value={data.name}
										min={3}
										required
										onChange={(e) => {
											setTodoName(e.target.value);
										}}
									/>
								</td>
								<td>{data.status}</td>
								<td>
									<EditTodo todoId={data.id} todo={data.name} />
									<br />
									<br />
									<Button
										variant="danger"
										onClick={() => {
											deleteTodo(data.id);
										}}>
										Delete
									</Button>{" "}
									<br /> <br />
									<Button
										variant="success"
										onClick={() => {
											doingTodo(data.id);
										}}>
										Doing Todo
									</Button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</>
	);
};

export default ListData;
