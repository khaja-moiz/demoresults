import React from 'react';
import PrintButton from '../ui/PrintButton';
import ScrollToTop from "react-scroll-to-top";

const MultiResults = ({ query }) => {
    const exam_co=Object.keys(query[0]['Results'])[0]
    return (
        
        <div key="Results" className="m-2 text-[45%] sm:text-[60%] md:text-[80%] lg:text-[100%]">
            {query.map((Result) =>
                <div key={Result['DETAILS']['NAME']}>
                    <table className="w-[100%]" key="Heading">
                        <tbody key="heading_tbody">
                            <tr>
                                <th>{Object.keys(Result['Results'])[0]} Results</th>
                            </tr>
                        </tbody>
                    </table>

                    <table className="w-[100%]" key="Details">
                        <tbody key="Details_tbody">
                            <tr>
                                {
                                    Object.keys(Result['DETAILS']).map((value, index) => { return <><th>{value}</th><th>{Result['DETAILS'][value]}</th></> })
                                }
                            </tr>
                        </tbody>
                    </table>

                    <table key="Result">
                        <tbody key="Result_tbody">
                            <tr>
                                <th>SUBJECT_NAME</th>
                                <th>SUBJECT_CODE</th>
                                <th>INTERNAL</th>
                                <th>EXTERNAL</th>
                                <th>Total</th>
                                <th>GRADE</th>
                                <th>CREDITS</th>
                            </tr>
                            {
                                Object.keys(Result['Results']).map(function (exam_code) {
                                    return (
                                        Object.keys(Result['Results'][exam_code]).map(function (subject_code) {
                                            if (subject_code != 'CGPA' & subject_code!='total' & subject_code!='credits') {
                                                return <><tr>
                                                    <th>{Result['Results'][exam_code][subject_code]['subject_name']}</th>
                                                    <th>{Result['Results'][exam_code][subject_code]['subject_code']}</th>
                                                    <th>{Result['Results'][exam_code][subject_code]['subject_internal']}</th>
                                                    <th>{Result['Results'][exam_code][subject_code]['subject_external']}</th>
                                                    <th>{Result['Results'][exam_code][subject_code]['subject_total']}</th>
                                                    <th>{Result['Results'][exam_code][subject_code]['subject_grade']}</th>
                                                    <th>{Result['Results'][exam_code][subject_code]['subject_credits']}</th>
                                                     </tr>
                                                     </>
                                            }
                                        })
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <table key="CGPA">
                        <tbody key="CGPA_tbody">
                            <tr>
                                <th style={{ width: '75%' }}>CGPA</th>
                                <th>{Result['Results'][exam_co]['CGPA']}</th>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                </div>)
            }
              <PrintButton />
      <ScrollToTop
        className='scroller'
        smooth
        viewBox="-5 0 18 18"
        svgPath="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
        style={{bottom:"30px", opacity:0.75, backgroundColor:'grey'}}
      />
        </div>)

}


export default MultiResults;
