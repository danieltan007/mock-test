// @ts-nocheck
import { login, logout } from "@features/userSlice";
import useData from "@features/useData";
import { useAppSelector, useAppDispatch } from "../hooks";

import Head from "next/head";
import { Container, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";

const Home = () => {
	const dispatch = useAppDispatch();
	const [id, setId] = useState("");
	const router = useRouter();

	const loginUser = async (e) => {
		e.preventDefault();
		try {
			const cekUser = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/login`, {
				method: "post",
				body: JSON.stringify(id),
				redirect: "follow",
			});

			if (cekUser.status === 200) {
				dispatch(login(id));
				alert("berhasil login!");
				localStorage.setItem("login", id);
				router.push("/todo");
			} else {
				const response = await cekUser.json();
				alert(response.message);
			}
		} catch (err) {
			alert("error, please try again!");
			console.log(`error while send api : ${err.message}`);
		}
	};

	console.log("node check = ", process.env.NODE_ENV);
	return (
		<Container>
			<Head>
				<title>Mock Test</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1 style={{ textAlign: "center" }}>Welcome, please login</h1>
			<Form onSubmit={loginUser}>
				<Form.Group className="mb-3">
					<Form.Label>ID</Form.Label>
					<Form.Control
						type="number"
						placeholder="please insert your ID"
						required
						minLength={4}
						maxLength={4}
						onChange={(e) => {
							setId(e.target.value);
						}}
					/>
				</Form.Group>
				<Button type="submit" variant="primary">
					Login
				</Button>
			</Form>
		</Container>
	);
};

export default Home;
