import { login, getData } from "@features/userSlice";
import { useAppDispatch, useAppSelector } from "hooks";
import { Button, Container } from "react-bootstrap";
import { useEffect } from "react";

const Test = () => {
	const dispatch = useAppDispatch();
	const user = useAppSelector((state) => state.user);

	return (
		<Container>
			<h1 style={{ textAlign: "center" }}>Testing</h1>
			tampil data user = {user.data}
			<Button
				variant="primary"
				onClick={() => {
					dispatch(getData());
				}}>
				Test Ambil
			</Button>
		</Container>
	);
};

export default Test;
