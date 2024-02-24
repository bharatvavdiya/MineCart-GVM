import React, { useEffect, useState } from 'react';

export default function SalesList() {
	const [salesList, setSalesList] = useState([]);

	useEffect(() => {
		const cart = JSON.parse(localStorage.getItem('cart'));
		if (cart) {
			setSalesList(cart.cart);
		}
	}, []);

	// Group sales list by vendor
	const groupedSalesList = salesList.reduce((acc, product) => {
		const vendorName = product.vendorName;
		if (!acc[vendorName]) {
			acc[vendorName] = [];
		}
		acc[vendorName].push(product);
		return acc;
	}, {});

	return (
		<div className='dashboardWrapper'>
			<div className='dashboardContainer'>
				<div className='dashboardHeader'>
					<h1>Sales List</h1>
				</div>
				<div className='dashboardBody'>
					<div className='dashboardBodyHeader'>
						<h2>Vendor Wise Sales List</h2>
					</div>
					<hr />
					<div className='dashboardBodyContent'>
						{Object.entries(groupedSalesList).map(([vendorName, products]) => (
							<div className='vendorSalesList' key={vendorName}>
								<h3>{vendorName}</h3>
								{products.map((product, index) => (
									<div className='dashboardBodyContentItem' key={index}>
										<div className='dashboardBodyContentItemHeader'>
											<h3>{product.title}</h3>
											{/* <p>Vendor: {product.vendorName}</p> */}
										</div>
										<div className='dashboardBodyContentItemBody'>
											<h4>${product.price}</h4>
										</div>
									</div>
								))}
								<hr />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}