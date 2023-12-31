import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate} from "react-router-dom"



const LogIn = ({ flag , token }) => {
    const [showForm, setShowForm] = useState(true)
    const [formData, setFormData] = useState({ firstName: '', lastName: '', phoneNumber: '', password: '' })
    const [validForm, setValidForm] = useState({ firstName: '', lastName: '', phoneNumber: '', password: '' })
    const [data, setData] = useState({ userName: '', password: '' })
    const [signData, setSignData] = useState({})
    // const history = useHistory();
    const navigate = useNavigate()

    // const [fullName , setFullName] = useState('')

    const getData = async () => {
        const res = await axios.get('http://localhost:2000/registerForm')
        setSignData(res.data)

    }
    useEffect(() => {
        getData()
    }, [])
    const checkValidation = () => {
        const condPass = /^[A-Za-z]\w{7,14}$/;
        const condPhone = /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4|9|3]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/ig;
        let errors = {};
        let isValidate = true
        if (!formData.firstName) {
            isValidate = false
            errors.firstName = 'firstName is required';
        }
        if (!formData.lastName) {
            isValidate = false
            errors.lastName = 'lastName is required';
        }
        if (!formData.phoneNumber) {
            isValidate = false
            errors.phoneNumber = 'Email is required';
        } else if (!formData.phoneNumber.match(condPhone)) {
            isValidate = false
            errors.phoneNumber = 'Please ingress a valid phoneNumber';
        }
        if (!formData.password) {
            isValidate = false
            errors.password = 'password is required';
        } else if (!formData.password.match(condPass)) {
            isValidate = false
            errors.password = 'Please ingress a valid password';
        }

        setValidForm(errors)
        return isValidate
    }

    const submitForm = async (event) => {
        event.preventDefault()
        let isValidate = checkValidation()
        if (isValidate) await registerForm(formData)
        // else setStatus('error')
        setFormData({ firstName: '', lastName: '', phoneNumber: '', password: '' })
    }

    const registerForm = async (info) => {
        let res = await axios.post('http://localhost:2000/registerForm', JSON.parse(JSON.stringify(info)))
        console.log('res', res);
        if (res.status === 201) {
            console.log(res.status);
            setFormData(res.data)
            setValidForm({ firstName: '', lastName: '', phoneNumber: '', password: '' })
            // setStatus('success')
        }
        // else {
        //     setStatus('error')
        // }
    }

    const signIn = async () => {
       
        const id_signInData_fullfilled = (data?.password.trim().length > 0 && data?.userName.trim().length > 0)  
        
        if (id_signInData_fullfilled) { 
           return signData.filter((item)=>{
                let userName = item.firstName + item.lastName
                const copmare_signin_properties = (data?.userName === userName) && (data?.password === item?.password)
                if (copmare_signin_properties) {
                    console.log('hellooo');
                    // window.location = './adminDashboard'
                    navigate('./adminDashboard')
            
                    setData({userName: '', password: ''})
                    return true
                }
            })
        } 
       
    }

    return (
        <div className="loginPage col-12">
            <section className="col-10 col-md-8 login">
                <div className="col-6 d-none d-md-flex justify-content-center text-light">
                    {
                        showForm
                            ?
                            <p>for enter first login ...</p>
                            :
                            <p>first regester ...</p>
                    }
                </div>
                <div className="col-12 col-md-6">
                    {
                        showForm
                            ?
                            <form className="loginForm col-10" onSubmit={(event) => { event.preventDefault() }}>
                                <div className="col-10">
                                    <label className="col-12 col-xl-5">enter your user : </label>
                                    <input className="col-12 col-xl-5" placeholder="userName" value={data.userName} onChange={(e) => { setData((prevState) => ({ ...prevState, userName: e.target.value })) }} />
                                </div>
                                <div className="col-10">
                                    <label className="col-12 col-xl-5">enter your password : </label>
                                    <input className="col-12 col-xl-5" placeholder="password" value={data.password} onChange={(e) => { setData((prevState) => ({ ...prevState, password: e.target.value })) }} />
                                </div>
                                <button className="signBtn col-4" onClick={signIn}>login</button>
                            </form>

                            :

                            <form className="loginForm col-10" onSubmit={submitForm}>
                                <div className="col-12 d-flex justify-content-start">
                                    <svg onClick={() => setShowForm(true)} color="white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-box-arrow-left col-1" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z" />
                                        <path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                                    </svg>
                                </div>
                                <div className="col-10">
                                    <label className="col-12 col-xl-5">enter your firstName</label>
                                    <input className="col-12 col-xl-5" placeholder="firstName" value={formData.firstName} onChange={(e) => { setFormData((prevState) => ({ ...prevState, firstName: e.target.value })) }} />
                                    {<p className="errorContact">{validForm.firstName}</p>}
                                </div>
                                <div className="col-10">
                                    <label className="col-12 col-xl-5">enter your lastName</label>
                                    <input className="col-12 col-xl-5" placeholder="lastName" value={formData.lastName} onChange={(e) => { setFormData((prevState) => ({ ...prevState, lastName: e.target.value })) }} />
                                    {<p className="errorContact">{validForm.lastName}</p>}
                                </div>
                                <div className="col-10">
                                    <label className="col-12 col-xl-5">enter your phoneNumber</label>
                                    <input className="col-12 col-xl-5" placeholder="phoneNumber" value={formData.phoneNumber} onChange={(e) => { setFormData((prevState) => ({ ...prevState, phoneNumber: e.target.value })) }} />
                                    {<p className="errorContact">{validForm.phoneNumber}</p>}
                                </div>
                                < div className="col-10">
                                    <label className="col-12 col-xl-5">enter your password</label>
                                    <input className="col-12 col-xl-5" placeholder="password" value={formData.password} onChange={(e) => { setFormData((prevState) => ({ ...prevState, password: e.target.value })) }} />
                                    {<p className="errorContact">{validForm.password}</p>}
                                </div>
                                <button className="signBtn col-4">register</button>
                            </form>
                    }

                    {
                        showForm
                            ?
                            <div className="col-10 signUpBox">
                                <button className="signUpBtn col-5" onClick={() => setShowForm(false)}>sign up</button>
                            </div>
                            :
                            null
                    }

                </div>
            </section>

        </div>
    )
}
export default LogIn