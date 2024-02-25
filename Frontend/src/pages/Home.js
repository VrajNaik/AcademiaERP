import React, { useEffect, useRef, useState } from 'react'
import Footer from '../component/Footer'
import axios from 'axios'
import Swal from 'sweetalert2';
import { useReactToPrint } from 'react-to-print';
import "jspdf-autotable";
import jsPDF from "jspdf";
import logo from '../images/logo.png';
import Navbar from '../component/Navbar';
import 'bootstrap/dist/css/bootstrap.css';



export default function Home() {

    const [response, setResponse] = useState({
        "salary": {
            "userId": "",
            "description": "",
            "basicPay": 0,
            "hraPay": 0,
            "otherPay": 0,
            "totalAmount": 0
        },
        "details": [
            {
                "month": "",
                "year": "",
                "amount": 0,
                "paymentId": "",
                "paymentDate": "",
                "description": ""
            }
        ]
    });
    const [loading, setLoading] = useState(false);
    const userId = window.localStorage.getItem('loggedInUser');
    // let userBody = window.localStorage.getItem('user');
    // userBody = userBody ? JSON.parse(userBody) : null;
    
    useEffect(() => {

        Swal.fire({
            title: "Login Successful!",
            text: "Click OK to Continue!",
            icon: "success"
        });

        callAPI();
    }, []);

    const callAPI = async () => { 
        await axios.post(`http://localhost:8080/api/v1/salary`,{
          "employee_id" : userId
        })
            .then((result) => {
                setResponse(result.data);
            })
            .catch((error) => {
                console.log(error);

                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Error while fetching salary history!",
                    footer: '<a href="#">Click here to logout?</a>'
                });
            })

            console.log();

    };
    const printPdf = (e, downPayId) => {
        e.preventDefault();
        const styles = {
            fontFamily: "sans-serif",
            textAlign: "center"
        };
        const colstyle = {
            width: "30%"
        };
        const tableStyle = {
            width: "100%"
        };
        
        const columnsOne = ["Fields","Value"];
        const rowsOne = [
            ["Description",response.salary.description],
            ["Basic Pay",response.salary.basicPay],
            ["HRA Pay",response.salary.hraPay],
            ["Other Allowances",response.salary.otherPay],
            ["Total Amount",response.salary.totalAmount]
        ];
        const columnsTwo = [
            "#",
            "Date of Disbursement",
            "Salary Paid",
            "Month-Year",
            "Description",
            "Payment-Id"
        ];
        const rowsTwo = response.details.filter(s => s.paymentId === downPayId).map((s, index) => {
            return [index+1, s.paymentDate, s.amount, s.month+' '+s.year, s.description, s.paymentId];
        });
        const pdf = new jsPDF("p", "pt", "a4");

        const logoWidth = 50;
        pdf.addImage(logo, 'PNG', 50, 50, logoWidth*2.5, logoWidth*2.5);

        pdf.text(250, 60, "Salary Pay Slip For the  "+rowsTwo[0][3]);
        pdf.autoTable(columnsOne, rowsOne, {
            startY: 200,
            theme: "grid",
            styles: {
                font: "times",
                halign: "center",
                cellPadding: 3.5,
                lineWidth: 0.5,
                lineColor: [0, 0, 0],
                textColor: [0, 0, 0]
            },
            headStyles: {
                textColor: [0, 0, 0],
                fontStyle: "normal",
                lineWidth: 0.5,
                lineColor: [0, 0, 0],
                fillColor: [166, 204, 247]
            },
            alternateRowStyles: {
                fillColor: [212, 212, 212],
                textColor: [0, 0, 0],
                lineWidth: 0.5,
                lineColor: [0, 0, 0]
            },
            rowStyles: {
                lineWidth: 0.5,
                lineColor: [0, 0, 0]
            },
            tableLineColor: [0, 0, 0]
        });

        pdf.autoTable(columnsTwo, rowsTwo, {
            startY: pdf.previousAutoTable.finalY + 40,
            theme: "grid",
            styles: {
                font: "times",
                halign: "center",
                cellPadding: 3.5,
                lineWidth: 0.5,
                lineColor: [0, 0, 0],
                textColor: [0, 0, 0]
            },
            headStyles: {
                textColor: [0, 0, 0],
                fontStyle: "normal",
                lineWidth: 0.5,
                lineColor: [0, 0, 0],
                fillColor: [166, 204, 247]
            },
            alternateRowStyles: {
                fillColor: [212, 212, 212],
                textColor: [0, 0, 0],
                lineWidth: 0.5,
                lineColor: [0, 0, 0]
            },
            rowStyles: {
                lineWidth: 0.5,
                lineColor: [0, 0, 0]
            },
            tableLineColor: [0, 0, 0]
        });
        pdf.save("pay-slip-"+downPayId+".pdf");
    }

    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="py-3" >
                <div className="structure-card">
                <div className="container">
    <div className="row gutters">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="card">
            <div className="card-body p-0">
              <div className="invoice-container">
                <div className="invoice-header">
                 
                
                  <div className="row gutters">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <a href="index.html" className="invoice-logo">
                        <h4>Academia - IIITB.</h4>
                      </a>
                    </div>
                   
                  </div>
                  <div className="row gutters">
                    <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                      <div className="invoice-details">
                        <div>Reciept for the Salary: </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                      <div className="invoice-details">
                
                          <div>Invoice - #</div>
                          <div>{new Date().toDateString()}</div>
                    
                      </div>													
                    </div>
                  </div>
  
                </div>
                <div className="invoice-body">

                  <div className="row gutters">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="table-responsive">

                        <table className="table custom-table m-0">
                        <thead >
                            <tr key="1">
                                <th scope="col"></th>
                                <th scope='col'></th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            <tr key="2">
                                <th scope="row">Desgination</th>
                                <td>{response.salary.description}</td>
                            </tr>
                            <tr key="3">
                                <th scope="row">Basic Pay</th>
                                <td>{response.salary.basicPay}</td>
                            </tr>
                            <tr key="4">
                                <th scope="row">HRA Pay</th>
                                <td>{response.salary.hraPay}</td>
                            </tr>
                            <tr key="5">
                                <th scope="row">Other Allowances</th>
                                <td>{response.salary.otherPay}</td>
                            </tr>
                            <tr key="6">
                                <th scope="row">Total Amount</th>
                                <td >{response.salary.totalAmount}</td>
                            </tr>
                        </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="invoice-footer">
                  International Institute Of Information Technology, Bangalore.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
    <div class="structure-card">
      <div class="bill-container ">
    


  
    <div className='bills-table'>
        <table class="table table-striped">
  <thead>
    <tr>
    <th>Number</th>
    <th>Date of Disbursement</th>
    <th>Salary Paid</th>
    <th>Month-Year</th>
    <th>Download</th>     

    </tr>
  </thead>
  <tbody>
    { response.details.map((s , index) => (
      <tr>
      <th scope="row" key="{index}">{index + 1}</th>
      <td>{s.paymentDate}</td>
      <td>{s.amount}</td>
      <td>{s.month} {s.year}</td>
      
      <td> <button type="button" className="btn btn-secondary btn-outline-light"  id="sallary-submit-btn" onClick={(e) => printPdf(e, s.paymentId)}> Download </button></td>
    </tr>
    ))}
    
  </tbody>
</table>
    </div>
    </div>
  </div>          

</div>
</div>

            <Footer />
        </div>
    )
}