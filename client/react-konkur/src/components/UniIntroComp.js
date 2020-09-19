import React from 'react';
class BranchIntroComp extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }
    render() {
        return (
            <div className="first" >
                <div className="row introduce-site">
                    
                    <div id="introduce-site-img" className="col-md-6">
                            <img src={require('./img/university.png')} />
                    </div>
                    <div id="introduce-site-text" className="col-md-6">
                        <h2 id="top-header-branch" dir="rtl"><img id="unilogo" src={require('./img/sharif.png')}/> دانشگاه صنعتی شریف</h2>
                            <p className="justifytext">سمبن تسم ینبتسم نیت ینتب  نشت  نیتب نیبتنی نیبن یبنی تنیبیس م سس م سمس مسنبت مستیب  سم سیبیب یبیس بلبل بلب سبل بمسیبن مسیبن ستبصث ثفث رربربر.سمبن تسم ینبتسم نیت ینتب  نشت  نیتب نیبتنی نیبن یبنی تنیبیس م سس م سمس مسنبت مستیب  سم سیبیب یبیس بلبل بلب سبل بمسیبن مسیبن ستبصث ثفث رربربر.سمبن تسم ینبتسم نیت ینتب  نشت  نیتب نیبتنی نیبن یبنی تنیبیس م سس م سمس مسنبت مستیب  سم سیبیب یبیس بلبل بلب سبل بمسیبن مسیبن ستبصث ثفث رربربر.</p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default BranchIntroComp;