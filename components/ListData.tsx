import { Table } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../hooks";
import useData from "@features/useData";

const ListData = () => {
	const dispatch = useAppDispatch();
	const userData = useData();
	return (
		<>
			<h2 style={{ textAlign: "center" }}>Todo Lists</h2>
			<br />
			<Table>
				<thead>
					<tr>
						<th>No</th>
						<th>Todo</th>
						<th>Status</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td></td>
					</tr>
				</tbody>
			</Table>
		</>
	);
};

export default ListData;
