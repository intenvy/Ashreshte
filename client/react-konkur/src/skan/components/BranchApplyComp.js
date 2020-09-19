import React from 'react';
import BranchApplyChart from './BranchApplyChart';
class BranchApplyComp extends React.Component {
    constructor(props){
        super(props);
        this.state={data:[
        {
            university:"sharif",
            data:{
                labels:[1,2,4,5,6],
                datasets:[
                  {
                    label:"sharif",
                    backgroundColor:"rgba(97,218,251,1)",
                    data:[]
                  }
                ]
            }
            
        },
        {
            university:"elmos",
            data:{
                labels:[1,2,4,5,6],
                datasets:[
                  {
                    label:"elmos",
                    backgroundColor:"rgba(97,218,251,1)",
                    data:[]
                  }
                ]
            }
            
        }]
        }
    }
    componentWillMount(){

    }
    render() {
        return (
            <div className="third apply-section ">
                <h2>وضعیت اپلای رشته</h2>
                <p className="justifytext">سمبن تسم ینبتسم نیت ینتب  نشت  نیتب نیبتنی نیبن یبنی تنیبیس م سس م سمس مسنبت مستیب  سم سیبیب یبیس بلبل بلب سبل بمسیبن مسیبن ستبصث ثفث رربربر.سمبن تسم ینبتسم نیت ینتب  نشت  نیتب نیبتنی نیبن یبنی تنیبیس م سس م سمس مسنبت مستیب  سم سیبیب یبیس بلبل بلب سبل بمسیبن مسیبن ستبصث ثفث</p>
                <BranchApplyChart data={this.state.data}/>
            </div>
        );
    }
}

export default BranchApplyComp;