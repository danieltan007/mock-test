import { Table } from "react-bootstrap";

const ListData = () => {
	return (
		<>
			<h2 style={{ textAlign: "center" }}>Todo Lists</h2>
			<br />
			<Table>
				<tr>
					<th>No</th>
					<th>Todo</th>
					<th>Status</th>
					<th>Action</th>
				</tr>
				<tr>
					<td></td>
				</tr>
			</Table>
		</>
	);
};

export default ListData;
