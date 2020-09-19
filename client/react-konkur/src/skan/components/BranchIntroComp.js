import React from 'react';
import "../css/Branchpage.css"
class BranchIntroComp extends React.Component {
    render() {
        return (
            <div className="first" >
                <h1 id="top-header-branch" dir="rtl">معرفی رشته مهندسی صنایع</h1>
                <div id="introduce-branch">
                    <div className="row introduce-site">
                    
                    <div id="introduce-site-img" className="col-md-6">
                            <img src={require('./img/student.png')} />
                    </div>
                    <div id="introduce-site-text" className="col-md-6">
                            <h2>معرفی اولیه</h2>
                            <p className="justifytext">سمبن تسم ینبتسم نیت ینتب  نشت  نیتب نیبتنی نیبن یبنی تنیبیس م سس م سمس مسنبت مستیب  سم سیبیب یبیس بلبل بلب سبل بمسیبن مسیبن ستبصث ثفث رربربر.سمبن تسم ینبتسم نیت ینتب  نشت  نیتب نیبتنی نیبن یبنی تنیبیس م سس م سمس مسنبت مستیب  سم سیبیب یبیس بلبل بلب سبل بمسیبن مسیبن ستبصث ثفث رربربر.سمبن تسم ینبتسم نیت ینتب  نشت  نیتب نیبتنی نیبن یبنی تنیبیس م سس م سمس مسنبت مستیب  سم سیبیب یبیس بلبل بلب سبل بمسیبن مسیبن ستبصث ثفث رربربر.</p>
                            <button className="blue-box"id="start-btn">شروع کنید</button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BranchIntroComp;