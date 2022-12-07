import { Table } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../hooks";
import useData from "@features/useData";

const ListData = () => {
	const dispatch = useAppDispatch();
	const userData = useData();
	let no = 1;
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
					{userData.map((data) => {
						return (
							<tr key={data.id}>
								<td>{no}</td>
								<td>{data.todo}</td>
								<td>{}</td>
								<td>{no}</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</>
	);
};

export default ListData;
