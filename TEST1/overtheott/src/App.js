import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { TodoProvider } from "./TodoContext";

import Calendar from "./pages/Calendar";
import Checklist from "./pages/Checklist";
import ChecklistSearch from "./pages/ChecklistSearch";
import Calculator from "./pages/Calculator";
import CalculatorData from "./pages/CalculatorData";

function App() {
	return (
		<TodoProvider>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/calendar" element={<Calendar />} />
					<Route path="/checklist" element={<Checklist />} />
					<Route path="/checklist/search" element={<ChecklistSearch />} />
					<Route path="/calculator" element={<Calculator />} />
					<Route path="/calculator/data" element={<CalculatorData />} />
				</Routes>
			</BrowserRouter>
		</TodoProvider>
	);
}

const GlobalStyle = createGlobalStyle`
  * {
    background: gray;
  }
`;

export default App;
