import { Button, Form, Input, Select } from 'antd';
import { useState } from "react";
import image1 from './image.jpg';
import './form.css'

const { Option } = Select;

const Forms = () => {

    const drives = {'Nexon Prime EV': 30.4, 'Nexon Max EV': 40.5}
    const [vehicle, setVehicle] = useState(0);
    const [houseconsume, setHouseConsume] = useState(0);
    const [solar, setSolar] = useState(0);
    const [submit, setSubmit] = useState(false);

    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log(values);
        console.log(vehicle);
    };
    const HandleClick = () => {
        if (houseconsume !== null && solar !== null && vehicle !== 0) {
            setSubmit(true)
        }
    }

    return (
        <div className='main-app'>
            <div className='head'>Solar PV Estimation</div>
            <div className='extra'>
                <div className='text'>
                        The use of solar photovoltaic (PV) systems in homes is on the rise. In the United States, the number of homes
                        with solar PV systems has increased by more than 50% in the past five years. There are a number of
                        reasons for this trend, including falling prices for solar panels, government incentives, and concerns about
                        climate change.
                </div>
                <img src={image1} alt='solar pic' className='solar-pic'/>
            </div>
            <div className={'form-main'}>
                <div className='sub-head'> Let's Talk Solar</div>
                <div className='card'>
                    <Form className={"form"}
                    form={form}
                    name="control-hooks"
                    onFinish={onFinish}
                 >
                            
                        <Form.Item
                        name="Household consumption in units"
                        label={<label className={"element"}>Household consumption in units</label>}
                        initialValue={houseconsume}
                        rules={[
                            {
                            required: true,
                            },
                        ]}
                        >
                        <Input type={'text'}
                            className={"input-value"}
                            placeholder="Household Consumption"
                            onChange={(event) => {
                            setHouseConsume(event.target.value)
                            }} />
                        </Form.Item>

                        <Form.Item
                        name="Solar PV value"
                        label={<label className={"element"}>Solar PV to be installed in KW</label>}
                        initialValue={solar}
                        rules={[
                            {
                            required: true,
                            },
                        ]}
                        >
                        <Input type={'text'}
                            className={"input-value"}
                            placeholder="Solar PV to be installed"
                            onChange={(event) => {
                            setSolar(event.target.value)
                            }} />
                        </Form.Item>

                        <Form.Item
                        name="vehicle"
                        label={<label className={"element"}>Select the EV to use </label>}
                        initialValue={""}
                        rules={[
                            {
                            required: true,
                            },
                        ]}
                        >
                        <Select
                            className={"select-element"}
                            dropdownStyle={{ backgroundColor: '#FFFFFF', color: '#eeeeee' }}
                            placeholder="Select an option"
                            allowClear
                            onChange={(event) => {
                            setVehicle(drives[event])
                            }}
                        >
                            <Option value="Nexon Max EV">Nexon Max EV</Option>
                            <Option value="Nexon Prime EV">Nexon Prime EV</Option>
                        </Select>
                        </Form.Item>



                        <Form.Item>
                        <Button type="primary" htmlType="submit" onClick={HandleClick}>
                            Submit
                        </Button>
                        </Form.Item>
                    </Form>
                </div>
                <div className={submit ? "div-visible" : "not-visible"}>
                    <div className='text-area'>
                        <p className='specs'> Given are our speculations:
                            <br />
                            1.Household consumption is {houseconsume*30} units per month.
                            <br />
                            2.Solar Production is {solar * 4 * 30} units per month.
                            <br />
                            3.EV usage is {vehicle * 30} units per month.
                            <br />
                            Total will be {houseconsume*30 + solar*120 + vehicle*30} units in a month.
                        </p>
                    </div>
                    </div>
            </div>
    </div>
  );
}

export default Forms