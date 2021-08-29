import React, { Component, useEffect, useState } from 'react';
import "./editResume.css";
import '../../../node_modules/bootstrap-4-react';

function EditResume() {

    const [inputListEdu, setInputListEdu] = useState([
        {
            course: '',
            institute: '',
            year: '',
            cgpa: ''
        }
    ]);

    const [inputListJob, setInputListJob] = useState([
        {
            title: '',
            company: '',
            exp: '',
            notice: ''
        }
    ]);

    const [name, setName] = useState(
        {
            name: '',
            email: '',
            address: '',
            phone: '',
        }
    );
    const [email, setEmail] = useState(
        {
            name: '',
            email: '',
            address: '',
            phone: '',
        }
    );
    const [address, setAddress] = useState(
        {
            name: '',
            email: '',
            address: '',
            phone: '',
        }
    );
    const [phone, setPhone] = useState(
        {
            name: '',
            email: '',
            address: '',
            phone: '',
        }
    );

    const submitForm = (e, index) => {
        alert('Form Submitted Successfully')

    }

    const handleChangeName = (e, index) => {
        setName({ name: e.target.value });
    }

    const handleChangeEmail = (e, index) => {
        setEmail({ email: e.target.value });
    }

    const handleChangeAddress = (e, index) => {
        setAddress({ address: e.target.value });
    }

    const handleChangePhone = (e, index) => {
        setPhone({ phone: e.target.value });
    }

    const handleChangeEdu = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputListEdu];
        list[index][name] = value;
        setInputListEdu(list);

    }

    const handleAddInputEdu = () => {
        setInputListEdu([...inputListEdu,
        { course: '', institute: '', year: '', cgpa: '' }
        ])
    }

    const handleRemoveInputEdu = (index) => {
        const listEdu = [...inputListEdu];
        listEdu.splice(index, 1)
        setInputListEdu(listEdu)
    }

    const handleChangeJob = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputListJob];
        list[index][name] = value;
        setInputListJob(list);

    }

    const handleAddInputJob = () => {
        setInputListJob([...inputListJob,
        { title: '', company: '', exp: '', notice: '' }
        ])
    }

    const handleRemoveInputJob = (index) => {
        const listJob = [...inputListJob];
        listJob.splice(index, 1)
        setInputListJob(listJob)
    }

    return (
        <div className="outer-container">
            <div className="row">
                <div className="col-md-8 offset-md-2">

                </div>
            </div>
            <form>
                <div className="form-group">
                    <div className="container">
                        <div className="row form-inputs">
                            <label className="col-2 form-label">Name:</label>

                            <input
                                id="name"
                                type="text"
                                name="name"
                                value={name.name}
                                placeholder="Enter your name"
                                onChange={e => handleChangeName(e)}
                                className="col-10 form-control"

                            />
                        </div>
                        <div className="row form-inputs">

                            <label className="col-2 form-label">Email:</label>

                            <input
                                id="email"
                                type="text"
                                name="email"
                                value={email.email}
                                placeholder="Enter your email"
                                onChange={e => handleChangeEmail(e)}
                                className="col-10 form-control"

                            />
                        </div>
                        <div className="row form-inputs">
                            <label className="col-2 form-label">Address:</label>

                            <input
                                id="address"
                                type="text"
                                name="address"
                                value={address.address}
                                placeholder="Enter your address"
                                onChange={e => handleChangeAddress(e)}
                                className="col-10 form-control"

                            />
                        </div>
                        <div className="row form-inputs">
                            <label className="col-2 form-label">Contact:</label>

                            <input
                                id="contact"
                                type="text"
                                name="contact"
                                value={phone.phone}
                                placeholder="Enter your contact number"
                                onChange={e => handleChangePhone(e)}
                                className="col-10 form-control"

                            />
                        </div>
                    </div>
                    <div className="form-header">Education Details:</div>
                    {inputListEdu.map((item, i) => {
                        return (
                            <div key={i} className="container">
                                <div className="row form-inputs">
                                    <label className="col-2 form-label">Course Title: <span>*</span></label>

                                    <input
                                        id="course"
                                        type="text"
                                        name="course"
                                        required={true}
                                        onChange={e => handleChangeEdu(e, i)}
                                        value={item.course}
                                        className="col-10 form-control"
                                        placeholder="Enter your course title"

                                    />

                                    <label className="col-2 form-label">Insitute: <span>*</span></label>

                                    <input
                                        id="institute"
                                        type="text"
                                        name="institute"
                                        required={true}
                                        onChange={e => handleChangeEdu(e, i)}
                                        value={item.institute}
                                        className="col-10 form-control"
                                        placeholder="Enter your institute name"

                                    />
                                    <label className="col-2 form-label">Completion Year: <span>*</span>                                    </label>

                                    <input
                                        id="year"
                                        type="text"
                                        name="year"
                                        required={true}
                                        onChange={e => handleChangeEdu(e, i)}
                                        value={item.year}
                                        className="col-10 form-control"
                                        placeholder="Enter your completion year"

                                    />
                                    <label className="col-2 form-label">CGPA: <span>*</span></label>

                                    <input
                                        id="cgpa"
                                        type="text"
                                        name="cgpa"
                                        required={true}
                                        onChange={e => handleChangeEdu(e, i)}
                                        value={item.cgpa}
                                        className="col-10 form-control"
                                        placeholder="Enter your cgpa"
                                    />
                                    {inputListJob.length - 1 === i &&
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-12 text-right">
                                                    <button
                                                        value="add"
                                                        onClick={handleAddInputEdu}
                                                        className="btn btn-primary add"
                                                    >Add +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    {inputListEdu.length !== 1 &&
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-12 text-right">
                                                    <button
                                                        value="remove"
                                                        onClick={() => handleRemoveInputEdu(i)}
                                                        className="btn btn-primary remove"

                                                    >Remove -
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        )
                    })}
                    <div className="form-header">Job Experience:</div>
                    {inputListJob.map((item, i) => {
                        return (
                            <div key={i} className="container">
                                <div className="row form-inputs">
                                    <label className="col-2 form-label">Job Title: <span>*</span></label>
                                    <input
                                        id="title"
                                        type="text"
                                        name="title"
                                        required={true}
                                        onChange={e => handleChangeJob(e, i)}
                                        value={item.title}
                                        className="col-10 form-control"
                                        placeholder="Enter your job title"

                                    />
                                    <label className="col-2 form-label">Company: <span>*</span></label>
                                    <input
                                        id="company"
                                        type="text"
                                        name="company"
                                        required={true}
                                        onChange={e => handleChangeJob(e, i)}
                                        value={item.company}
                                        className="col-10 form-control"
                                        placeholder="Enter your company name"

                                    />

                                    <label className="col-2 form-label">Years Of Exp: <span>*</span></label>
                                    <input
                                        id="exp"
                                        type="text"
                                        name="exp"
                                        required={true}
                                        onChange={e => handleChangeJob(e, i)}
                                        value={item.exp}
                                        className="col-10 form-control"
                                        placeholder="Enter your years of experience"

                                    />

                                    <label className="col-2 form-label">Notice Period(Days): <span>*</span></label>
                                    <input
                                        id="notice"
                                        type="text"
                                        name="notice"
                                        required={true}
                                        onChange={e => handleChangeJob(e, i)}
                                        value={item.notice}
                                        className="col-10 form-control"
                                        placeholder="Enter your notice period"

                                    />

                                    {inputListJob.length - 1 === i &&
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-12 text-right">
                                                    <button
                                                        value="add"
                                                        onClick={handleAddInputJob}
                                                        className="btn btn-primary add"

                                                    >Add +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    {inputListJob.length !== 1 &&
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-12 text-right">
                                                    <button
                                                        value="remove"
                                                        onClick={() => handleRemoveInputJob(i)}
                                                        className="btn btn-primary remove"

                                                    >Remove -
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        )
                    })}
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <button
                                    value="remove"
                                    onClick={() => {submitForm()}}
                                    className="btn btn-primary remove"

                                >Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
};
export default EditResume;