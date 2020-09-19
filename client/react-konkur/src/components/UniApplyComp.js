import React from 'react';
import ChartTable from './ChartTable';
class UniApplyComp extends React.Component {
    constructor(props){
        super(props);
        this.state={data:[{
            branch:"",
            data:{
                labels:[],
                datasets:[
                  {
                    label:"درصد اپلای نسبت به کل",
                    backgroundColor:"rgba(97,218,251,1)",
                    data:[]
                  }
                ]
            }
            
        }]
        }
    }
    
    render() {
        return (
            <div className="third apply-section ">
                <div id="main-desc">
                    <h2>وضعیت اپلای رشته</h2>
                    <p className="justifytext">سمبن تسم ینبتسم نیت ینتب  نشت  نیتب نیبتنی نیبن یبنی تنیبیس م سس م سمس مسنبت مستیب  سم سیبیب یبیس بلبل بلب سبل بمسیبن مسیبن ستبصث ثفث رربربر.سمبن تسم ینبتسم نیت ینتب  نشت  نیتب نیبتنی نیبن یبنی تنیبیس م سس م سمس مسنبت مستیب  سم سیبیب یبیس بلبل بلب سبل بمسیبن مسیبن ستبصث ثفث</p>
                    <ChartTable data={this.state.data}/>
                </div>
            </div>
        );
    }
}

export default UniApplyComp;