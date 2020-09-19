import React from 'react';
import { MDBBtn, MDBCollapse } from "mdbreact";
import AreaBaseChart from './AreaBaseChart';

class BranchKonkurRankComp extends React.Component {
    constructor(props){
        super(props);
        this.state={data:[
            {
                area:"1",
                data:{
                    labels:[91,92,93,94],
                    datasets:[
                    {
                        label:"1",
                        backgroundColor:"rgba(97,218,251,1)",
                        data:[10,12,4,5]
                    }
                    ]
                }
                
            },
            {
                area:"2",
                data:{
                    labels:[91,92,93,94],
                    datasets:[
                    {
                        label:"2",
                        backgroundColor:"rgba(97,218,251,1)",
                        data:[21,15,16,18]
                    }
                    ]
                }
                
            },
            {
                area:"3",
                data:{
                    labels:[91,92,93,94],
                    datasets:[
                    {
                        label:"3",
                        backgroundColor:"rgba(97,218,251,1)",
                        data:[17,14,13,15]
                    }
                    ]
                }
                
            }
        ]}
    }
    render() {
        return (
            <div className="second rank-section blue-box">
                <h1>وضعیت رتبه های کنکور</h1>
                <p className="justifytext">سمبن تسم ینبتسم نیت ینتب  نشت  نیتب نیبتنی نیبن یبنی تنیبیس م سس م سمس مسنبت مستیب  سم سیبیب یبیس بلبل بلب سبل بمسیبن مسیبن ستبصث ثفث رربربر.سمبن تسم ینبتسم نیت ینتب  نشت  نیتب نیبتنی نیبن یبنی تنیبیس م سس م سمس مسنبت مستیب  سم سیبیب یبیس بلبل بلب سبل بمسیبن مسیبن ستبصث ثفث</p>
                <AreaBaseChart data={this.state.data} />
            </div>
        );
    }
}

export default BranchKonkurRankComp;