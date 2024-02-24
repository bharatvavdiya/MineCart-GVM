// Dashboad.js contains reports of sold products, total sales from local storage Cart item without any redux state management.

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DashBoard() {
	const navigate = useNavigate();
	const [totalSales, setTotalSales] = useState(0);
	const [totalProducts, setTotalProducts] = useState(0);

	useEffect(() => {
		const cart = JSON.parse(localStorage.getItem('cart'));
		if (cart) {
			setTotalSales(cart.total);
			setTotalProducts(cart.totalItems);
		}

	}, []);

	return (
		<div className='dashboardWrapper'>
			<div className='dashboardContainer'>
				<div className='dashboardHeader'>
					<h1>Dashboard</h1>
				</div>
				<div className='dashboardBody'>
					<div className='dashboardBodyHeader'>
						<h2>Reports</h2>
					</div>
					<div className='dashboardBodyContent'>
						<div className='dashboardBodyContentItem'>
							<div className='dashboardBodyContentItemHeader'>
								<h3>Total Sales</h3>
							</div>
							<div className='dashboardBodyContentItemBody'>
								<h4>${totalSales}</h4>
							</div>
						</div>
						<div className='dashboardBodyContentItem'>
							<div className='dashboardBodyContentItemHeader'>
								<h3>Total Products</h3>
							</div>
							<div className='dashboardBodyContentItemBody'>
								<h4>{totalProducts}</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}