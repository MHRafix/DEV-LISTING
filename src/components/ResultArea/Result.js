import React from 'react';
import './Result.css';
const Result = (props) => {
    let developers = props.developer;
//    console.log(developers);
   let {developer} = developers;
    // console.log(name);
//    for(let dev in developer){
//          console.log(dev[]);
//    }

    let totalSalary = 0;
    let name = '';
    for(let developer of developers){

        totalSalary = parseInt(totalSalary) + developer.salary;
        name = name + ' ' + developer.name + ',';
        console.log(name);
    }
    return (
        <div>
            <span className="info">Dev's : {developers.length}</span><br />
            <span className="info">Total Salary : ${totalSalary}</span><br />
            <span className="info">{name}</span>
        </div>
    );
};

export default Result;