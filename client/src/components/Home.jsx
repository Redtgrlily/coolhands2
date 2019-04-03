import React from 'react';

// TODO - add proptypes

const Home = props => {
	if (props.user) {
		return (
			// outer most div
			<div>
				<div className="Home">
					<h1> Cool Hands Couriers </h1>
					{/* <h1> Brutal Boss </h1>
					<p>Current User:</p>
					<code>
						{JSON.stringify(props)}

					</code> */}
				</div>

				<section className="grid">
					<h2 className="">TEAM</h2>

					<div className="row">
						<div className="col-md-6 col-lg-4">
							<div className="teamMate">
								<img className="teamMatePic" src={require("../images/team_dawn.jpeg")} alt="Greg thumbnail"></img> Dawn
								<p>Authentication, testing, wire-framing</p>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="teamMate">
								<img className="teamMatePic" src={require("../images/team_sam.jpeg")} alt="Sam thumbnail"></img> Sam
								<p>Project management, React/front-end, Comment page</p>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="teamMate">
								<img className="teamMatePic" src={require("../images/team_greg.jpeg")} alt="Greg thumbnail"></img> Greg
								<p>Mongo DB/Server</p>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-md-6 col-lg-4">
							<div className="teamMate">
								<img className="teamMatePic" src={require("../images/team_jess.jpg")} alt="Jess thumbnail"></img> Jess
								<p>React/front-end: Welcome page</p>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="teamMate">
								<img className="teamMatePic" src={require("../images/team_ryan.jpeg")} alt="Ryan thumbnail"></img> Ryan
								<p>Report page (graph) (with dummy data for now)</p>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="teamMate">
								<img className="teamMatePic" src={require("../images/team_tony.jpeg")} alt="Tony thumbnail"></img> Tony
								<p>Mongo DB/Server</p>
							</div>
						</div>
					</div>
				</section>


				<footer className="staticFooter font-small blue">
					<div className="footer-copyright py-3 text-center">
						© 2019 Copyright:
       				 <a>  Cool Hands Couriers </a>
					</div>
				</footer>



			</div>
			// end of outer most div


		)
	} else {
		return (
			<div>
				<div className="Home">
					<h1> Cool Hands Couriers </h1>
				</div>
				<div className="loggedOut">
					<h1> WELCOME to Cool Hands Couriers </h1>
					<br />
					{/* <h1> you are logged out </h1> */}
					{/* box links  */}
					<section className="boxes">

						<div className="row">
							<div className="col-md-6 col-lg-4">
								<div className="learnBox">
									<a><p>Document Delivery</p></a>
								</div>
							</div>
							<div className="col-md-6 col-lg-4">
								<div className="teachBox">
									<a ><p>Pickups</p></a>

								</div>
							</div>
							<div className="col-md-6 col-lg-4">
								<div className="feelingsBox">
									<a ><p>Unique requests</p></a>

								</div>
							</div>
						</div>
					</section>
				</div>
				<footer className="absoluteFooter font-small blue">
					<div className="footer-copyright py-3 text-center">
						© 2019 Copyright:
       				 <a> Cool Hands Couriers </a>
					</div>
				</footer>
			</div>
			// <div className="Home">
			// 	<p>Current User:</p>
			// 	<code>
			// 		{JSON.stringify(props)}
			// 	</code>
			// </div>

		)
	}
}

export default Home
