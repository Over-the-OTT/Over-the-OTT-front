import React, { useEffect } from "react";
import { styled, createGlobalStyle } from "styled-components";
import { TodoProvider } from "./TodoContext";
import { CalendarTable } from "../components/CalendarTable";
import { CalendarSub } from "../components/CalendarSub";

const Calendar = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<TodoProvider>
			<GlobalStyle />
			<Header />
			<CalendarTable />
			<CalendarSub />
		</TodoProvider>
	);
};

export default Calendar;
