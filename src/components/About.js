import React from 'react'

export default function About(props) {

    // const [myStyle,setmyStyle]=useState({

    //     color:'black',
    //     backgroundColor:'white'
    // });

    // const [btnText,setbtnText]=useState("Enable Dark Mode");

    // let toggleStyle=()=>{

    //     if(myStyle.color === 'white')
    //     {
    //         setmyStyle({
    //             color:'black',
    //             backgroundColor:'white',
    //             border: '1px solid white'   
    //         })
    //         setbtnText("Enable Dark Mode");
            
    //     }
    //     else
    //     {
    //         setmyStyle(
    //             {
    //                 color:'white',
    //                 backgroundColor:'black'
    //             }
    //         )
    //         setbtnText("Enable Light Mode");

    //     }
    // }

    let myStyle={
        color: props.mode==='dark'?'white':'black',
        backgroundColor: props.mode==='dark'?'#1c1f24':'white',
        // border: '2px solid',
        // borderColor: props.mode==='dark'?'white':'black'
        }

    return (


        <div className='container' style={myStyle}>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>    
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js" integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js" integrity="sha384-ODmDIVzN+pFdexxHEHFBQH3/9/vQ9uori45z4JjnFsRydbmQbmL5t1tQ0culUzyK" crossorigin="anonymous"></script>
            <h2 className='my-3' >About us</h2>
            <div className="accordion" id="accordionExample">   
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingOne" >
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                           <strong> Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <p> This Utility helps you to analyze and manipulate your text efficiently using different functionalities.It provides instant word and character count so that you can monitor your text limitations and work accordingly</p>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                            <strong>Free to Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            It is a free to use word counter and manipulator software which you can use anytime for your work.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}> 
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            It is compatible with every web browser like Chrome, FireFox, Safari, Brave, Edge, Bing etc. So you don't need to install any specific pre-requisites to use it.
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="container my-3">
                <button onClick={toggleStyle} className="btn btn-primary">{btnText}</button>
            </div> */}
        </div>
    )
}
