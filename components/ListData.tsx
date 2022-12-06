import { Table } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../hooks";
import useData from "@features/useData";

const ListData = () => {
	const dispatch = useAppDispatch();
	const userData = useData();
	console.log("🚀 ~ file: listData.tsx:8 ~ ListData ~ userData", userData);

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
