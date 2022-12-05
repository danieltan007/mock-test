import Head from "next/head";
import { Container, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";

import { login } from "@features/userSlice";
import useData from "@features/useData";

export default function Home() {
	const dispatch = useDispatch();
	const [id, setId] = useState("");
	const router = useRouter();

	const isUser = useData();
	console.log("🚀 ~ file: index.tsx:17 ~ Home ~ isUser", isUser);

	const login = async (e: any) => {
		e.preventDefault();
		try {
			const login = await fetch("http:localhost/api/login", {
				method: "post",
				body: JSON.stringify(id),
				redirect: "follow",
			});

			if (login.status === 200) {
				dispatch(login());
				localStorage.setItem("login", id);
				router.push("/todo");
			} else {
				const response = await login.json();
				alert(response.message);
			}
		} catch (err: any) {
			alert("error, please try again!");
			console.log("error while send api : " + err.message);
		}
	};
	return (
		<Container>
			<Head>
				<title>Mock Test</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1 style={{ textAlign: "center" }}>Welcome, please login</h1>
			<Form onSubmit={login}>
				<Form.Group className="mb-3">
					<Form.Label>ID</Form.Label>
					<Form.Control type="text" placeholder="please insert your ID" />
				</Form.Group>
				<Button variant="primary">Login</Button>
			</Form>
		</Container>
	);
}
