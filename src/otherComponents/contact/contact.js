import axios from "axios"
import { useEffect, useState } from "react"
// import { validEmail, validPassword } from './regex.js';



const Contact = () => {
    const [data, setData] = useState({ fullName: '', email: '', phoneNumber: '' })
    const [validation, setValidation] = useState({ fullName: '', email: '', phoneNumber: '' })
    const [status, setStatus] = useState('')

    const checkValidation = () => {
        const emailCond = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;
        const condPhone = /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4|9|3]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/ig;
        let errors = {};
        let isValidate = true
        if (!data.fullName) {
            isValidate = false
            errors.fullName = 'fullName is required';
        }
        if (!data.email) {
            isValidate = false
            errors.email = 'Email is required';
        } else if (!data.email.match(emailCond)) {
            isValidate = false
            errors.email = 'Please ingress a valid email address';
        }
        if (!data.phoneNumber) {
            isValidate = false
            errors.phoneNumber = 'phoneNumber is required';
        } else if (!data.phoneNumber.match(condPhone)) {
            isValidate = false
            errors.phoneNumber = 'Please ingress a valid phoneNumber';
        }
        setValidation(errors)
        return isValidate
    }
    const submitForm = async (event) => {
        event.preventDefault()
        let isValidate = checkValidation()
        if (isValidate) await addData(data)
        else setStatus('error')
        setData({ fullName: '', email: '', phoneNumber: '' })
    }

    const addData = async (info) => {
        let res = await axios.post('http://localhost:2000/contact', JSON.parse(JSON.stringify(info)))
        console.log('res', res);
        if (res.status === 201) {
            console.log(res.status);
            setData(res.data)
            setValidation({ fullName: '', email: '', phoneNumber: '' })
            setStatus('success')
        }
        else {
            setStatus('error')
        }


    }
    useEffect(() => {
        setTimeout(() => {
            setStatus('')
        }, 3000)
    }, [status])

    return (
        <div id="contact" className=" col-12 components d-flex justify-content-center align-items-center flex-column">
           
            <div className="col-12 cotactMe">
            <h1 className="mb-5 titleContact">Contact me</h1>
                
                <p className="col-10">
                    my number phone : 09902204658
                </p>
                <p className="col-10">
                    my email : pegahjahani08@gmail.com
                </p>
                <p className="col-10">
                    my github : https://github.com/pegahjahani
                </p>
            </div>
            <form className="col-10 " id="contactForm" onSubmit={submitForm} >
                <h4 className="formTitle"> your information ...</h4>
                <div className="col-12 ">
                    <input className="col-6 d-none" placeholder="id" />
                </div>
                <div className="col-8 d-flex justify-content-start">  <label>fullName : </label> </div>
                <div className="col-12 ">
                    <input className="col-6" placeholder="fullName" value={data.fullName} onChange={(e) => setData((prevState) => ({ ...prevState, fullName: e.target.value }))} />
                    {<p className="errorContact">{validation.fullName}</p>}
                </div>
                <div className="col-8 d-flex justify-content-start"> <label>email : </label> </div>
                <div className="col-12 ">
                    <input className="col-6" placeholder="email" value={data.email} onChange={(e) => setData((prevState) => ({ ...prevState, email: e.target.value }))} />
                    {<p className="errorContact">{validation.email}</p>}
                </div>
                <div className="col-8 d-flex justify-content-start"><label>phoneNumber : </label></div>
                <div className="col-12 ">
                    <input className="col-6" placeholder="phoneNumber" value={data.phoneNumber} onChange={(e) => setData((prevState) => ({ ...prevState, phoneNumber: e.target.value }))} />
                    {<p className="errorContact">{validation.phoneNumber} </p>}
                </div>


                <div className="col-6 d-flex justify-content-start align-items-center"><button className="sendBtn">send</button></div>
            </form>
            <div className="alertBox">
                {
                    status == 'success' ?
                        <div className="successAlert">
                            <p>Data is saved sucessfully !</p>
                        </div>
                        : status == 'error' ?
                            <div className="errorAlert">
                                <p>Data is not saved  !</p>
                            </div>
                            : null
                }

            </div>
        </div>
    )
}
export default Contact