import React from "react";
//import { MDBBtn, MDBCollapse } from "mdbreact";

class About extends React.Component {
	render() {
		return (
			<div className="aboutsecond rank-section blue-box">
				<h1>ما کی ایم؟</h1>
				<p className="justifytext">
					سمبن تسم ینبتسم نیت ینتب نشت نیتب نیبتنی نیبن یبنی تنیبیس م سس م سمس
					مسنبت مستیب سم سیبیب یبیس بلبل بلب سبل بمسیبن مسیبن ستبصث ثفث
					رربربر.سمبن تسم ینبتسم نیت ینتب نشت نیتب نیبتنی نیبن یبنی تنیبیس م سس
					م سمس مسنبت مستیب سم سیبیب یبیس بلبل بلب سبل بمسیبن مسیبن ستبصث ثفث
				</p>
				<div className="row">
					<div className="person col-md-4">
						<img src={require("./img/alex.jpg")} className="aboutimg" />
						<h5 className="aboutname">محمدرضا اسکندری</h5>
						<p className="aboutrole">برنامه نویس و طراح سایت</p>
					</div>
					<div className="person col-md-4">
						<img src={require("./img/alex.jpg")} className="aboutimg" />
						<h5 className="aboutname">محمدرضا اسکندری</h5>
						<p className="aboutrole">برنامه نویس و طراح سایت</p>
					</div>
					<div className="person col-md-4">
						<img src={require("./img/alex.jpg")} className="aboutimg" />
						<h5 className="aboutname">محمدرضا اسکندری</h5>
						<p className="aboutrole">برنامه نویس و طراح سایت</p>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
