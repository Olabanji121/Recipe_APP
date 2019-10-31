import React from 'react';
import loadImg from '../images/forkfood.gif'

const spinner = () => {
    return (
			<>
				<div className="container">
					
						<img
							className="text-center"
							src={loadImg}
							alt="loading...."
							style={{
								width: "500px",
								
								paddingTop: "50px"
							}}
						/>
					
				</div>
			</>
		);
}

export default spinner
