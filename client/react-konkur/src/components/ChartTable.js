import React, { Component, Fragment } from 'react';
import { Line } from 'react-chartjs-2'

class ChartTable extends Component {
    constructor(state) {
        super(state);
        this.state = {
          data:this.props.data
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
                        {this.state.data.map((branch, idx) => {
                          return idx===0 ? <a class="nav-link active" id={"v-pills-"+branch.branch +"-tab"} data-toggle="pill" href={"#v-pills-"+branch.branch } role="tab" aria-controls={"v-pills-"+branch.branch } aria-selected="true">{branch.branch }</a> : <a class="nav-link " id={"v-pills-"+branch.branch +"-tab"} data-toggle="pill" href={"#v-pills-"+branch.branch } role="tab" aria-controls={"v-pills-"+branch.branch } aria-selected="true">{branch.branch }</a> ;
                          })}
                    </div>
                </div>
                <div class="col-10" id="chart-box">
                    <div class="tab-content" id="v-pills-tabContent">
                        {this.state.data.map((branch, idx) => {
                          return idx===0 ? (<div class="tab-pane fade show active" id={"v-pills-"+branch.branch } role="tabpanel" aria-labelledby={"v-pills-"+branch.branch +"-tab"}>
                          <div className="row">
                            <div className="col-4">
                            <Line options={{
                            responsive:true
                          }}
                          data={branch.data}/>
                            </div>  
                          </div>
                        </div>)
                        : 
                        (<div class="tab-pane fade" id={"v-pills-"+branch.branch } role="tabpanel" aria-labelledby={"v-pills-"+branch.branch +"-tab"}>
                        <div className="row">
                          <div className="col-4">
                          <Line options={{
                          responsive:true
                        }}
                        data={branch.data}/>
                          </div>  
                        </div>
                      </div>)})}
                  
                    </div>
                </div>
            </div>
        </Fragment>
      );    
    }
}

export default ChartTable;