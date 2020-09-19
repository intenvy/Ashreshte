import React, { Fragment } from 'react';
import HeaderComp from './HeaderComp'
import "../css/Mainpage.css"
import About from './About'
import Footer from './Footer'

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Fragment>
                <div className="customcontainer" >
                    <div className="main-desc">
                        <h1 id="top-header">دستیار انتخاب رشته کنکور ریاضی</h1><br />
                        {/* <span className="blue-box" id="top-desc">منتخب آمار های دانشگاه های مطرح تهران</span> */}
                    </div>
                    <div className="row introduce-site">
                    
                    <div id="introduce-site-img" className="col-md-6">
                            <img src={require('./img/landing.png')} />
                    </div>
                    <div id="introduce-site-text" className="col-md-6">
                            <h2>معرفی اولیه</h2>
                            <p className="justifytext">سمبن تسم ینبتسم نیت ینتب  نشت  نیتب نیبتنی نیبن یبنی تنیبیس م سس م سمس مسنبت مستیب  سم سیبیب یبیس بلبل بلب سبل بمسیبن مسیبن ستبصث ثفث رربربر.سمبن تسم ینبتسم نیت ینتب  نشت  نیتب نیبتنی نیبن یبنی تنیبیس م سس م سمس مسنبت مستیب  سم سیبیب یبیس بلبل بلب سبل بمسیبن مسیبن ستبصث ثفث رربربر.سمبن تسم ینبتسم نیت ینتب  نشت  نیتب نیبتنی نیبن یبنی تنیبیس م سس م سمس مسنبت مستیب  سم سیبیب یبیس بلبل بلب سبل بمسیبن مسیبن ستبصث ثفث رربربر.</p>
                            <button className="blue-box"id="start-btn">شروع کنید</button>
                    </div>
                    </div>
                    
                    
                </div>
                <About />
                <Footer/>
            </Fragment>
            
        );
    }
}

export default MainPage;