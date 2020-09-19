import React from 'react';
import axios from 'axios';
import { MDBBtn, MDBCollapse } from "mdbreact";
import ChartTable from './ChartTable';

class UniKonkurRankComp extends React.Component {
    constructor(props){
        super(props);
        this.state={data:[{
            branch:"sanaye",
            data:{
                labels:[],
                datasets:[
                  {
                    label:"منطقه ۱",
                    backgroundColor:"rgba(97,218,251,1)",
                    data:[]
                  },
                  {
                    label:"منطقه ۲",
                    backgroundColor:"rgba(35,133,160,1)",
                    data:[]
                  },
                  {
                    label:"منطقه ۳",
                    backgroundColor:"rgba(8,112,222,1)",
                    data:[]
                  }
                ]
            }
            
        }]
        }
    }
    componentDidMount(){
        // axios.get("")
        // .then(response => {
        //     console.log(response);
        // })
    }
    render() {
        return (
            <div className="second rank-section blue-box">
                <h1>وضعیت رتبه های کنکور</h1>
                <p className="justifytext">سمبن تسم ینبتسم نیت ینتب  نشت  نیتب نیبتنی نیبن یبنی تنیبیس م سس م سمس مسنبت مستیب  سم سیبیب یبیس بلبل بلب سبل بمسیبن مسیبن ستبصث ثفث رربربر.سمبن تسم ینبتسم نیت ینتب  نشت  نیتب نیبتنی نیبن یبنی تنیبیس م سس م سمس مسنبت مستیب  سم سیبیب یبیس بلبل بلب سبل بمسیبن مسیبن ستبصiث ثفث</p>
                <ChartTable data={this.state.data}/>
            </div>
        );
    }
}

export default UniKonkurRankComp;