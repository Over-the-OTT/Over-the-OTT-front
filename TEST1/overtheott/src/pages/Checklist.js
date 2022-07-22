import React, { useEffect } from "react";
import { styled, createGlobalStyle } from "styled-components";
import { TodoProvider } from "./TodoContext";
import Header from "../components/Header";
import ChecklistSearchInput from "../components/ChecklistSearchInput";
import ChecklistTemplate from "../components/ChecklistTemplate";
import ChecklistList from "../components/ChecklistList";
import ChecklistDoneList from "../components/ChecklistDoneList";

const GlobalStyle = createGlobalStyle`
  body {
  background: #e9ecef;
  }
`;

const Checklist = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<TodoProvider>
			<GlobalStyle />
			<Header />
			<ChecklistSearchInput />
			<ChecklistTemplate>
				<ChecklistList />
			</ChecklistTemplate>
			<ChecklistTemplate>
				<ChecklistDoneList />
			</ChecklistTemplate>
		</TodoProvider>
	);
};

export default Checklist;
