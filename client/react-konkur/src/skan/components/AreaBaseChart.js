import React, { Component, Fragment } from 'react';
import { Line } from 'react-chartjs-2'

class AreaBaseChart extends Component {
    constructor(state) {
        super(state);
        this.state = {
          data:this.props.data.data
          // data: {
          //   labels:["1", "2", "3", "4", "5"],
          //   datasets:[
          //     {
          //       label:"video",
          //       backgroundColor:"rgb(49 97 205)",
          //       data:[4, 5, 1, 10, 32, 2, 12]
          //     },
          //     {
          //       label:"subsc",
          //       backgroundColor:"rgba(0, 255, 0, 0.75)",
          //       data:[14, 15, 21, 0, 12, 2, 12]
          //     }
          //   ]
          // }
        };
        
    }
    
    render() {
        return (
        <Fragment>
            <div class="row chart-table-row" >
                <div class="col-2" id="chart-table" dir="rtl">
                    <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a class="nav-link active" id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-1" aria-selected="true">1</a>
                        <a class="nav-link" id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-2" aria-selected="false">2</a>
                        <a class="nav-link" id="v-pills-3-tab" data-toggle="pill" href="#v-pills-3" role="tab" aria-controls="v-pills-3" aria-selected="false">3</a>
                    </div>
                </div>
                <div class="col-10" id="chart-box">
                    <div class="tab-content" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-1-tab">
                            <div className="row">
                            <div className="col-4">
                            <Line options={{
                            responsive:true
                            }}
                            data={this.state.data}/>
                            </div>  
                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-2-tab">...</div>
                        <div class="tab-pane fade" id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-3-tab">...</div>
                        
                    </div>
                </div>
            </div>
        </Fragment>
        );

        
    }
}

export default AreaBaseChart;