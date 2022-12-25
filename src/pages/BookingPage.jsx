import { ArrowLongRightIcon, UsersIcon } from "@heroicons/react/20/solid";
import { DatePicker, Form, Input, Select } from "antd";
import format from "date-fns/format";
import React, { useEffect, useState } from "react";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { GiHandBag } from "react-icons/gi";
import { MdEventSeat } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Logo from "../assets/Logo.png";
import ButtonPrimary from "../components/ButtonPrimary";
import { Navbar } from "../components/Navbar";
import { SeatModal } from "../components/SeatModal";
import { SecondFooter } from "../components/SecondFooter";
import {
  getBagage,
  getBenefit,
  getSeat,
  getTitel,
  Booking,
  getCountry,
} from "../redux/feature/BookingSlice";
import dayjs from "dayjs";

export const BookingPage = (props) => {
  const { titel, bagage, benefit, seat, country } = useSelector(
    (state) => state.booking
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [seatModal, setSeatModal] = useState(false);
  const handleOnClose = () => setSeatModal(false);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getTitel());
    dispatch(getBagage(id));
    dispatch(getBenefit(id));
    dispatch(getSeat(id));
    dispatch(getCountry());
  }, [dispatch]);

  console.log(country);

  const location = useLocation();
  console.log(location);
  const tiket = location.state?.tiket;
  const hargaTiket = location.state?.total;
  const pass = location.state?.passenger;
  const idSch = location.state?.tiket.id;

  const numberFormat = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "IDR",
    }).format(value);

  const countPass = pass.A + pass.B + pass.D;
  console.log(countPass);

  const onFinish = (values) => {
    dispatch(
      Booking({
        ...values,
        total: total,
        ageCategory: agectr,
        pass: pass,
        scheduleId: idSch,
        countPass: countPass,
      })
    );
    console.log({ ...values, total: total, ageCategory: agectr });
    console.log(`${format(new Date(`${values.birthdate}`), "dd MMM yyyy")}`);
  };

  const [seatPrice, setseatPrice] = useState();
  const [baggagePrice, setbaggagePrice] = useState();

  const onChangeSeat = (values) => {
    seat
      ?.filter((seat) => seat.seatId === values)
      .map((e, i) => {
        setseatPrice(e.price.amount);
      });
  };

  console.log(seatPrice);

  const onChangeBaggage = (values) => {
    setbaggagePrice(values);
  };

  console.log(baggagePrice);

  const data = [];

  for (let i = 0; i < countPass; i++) {
    data.push({ nama: "", ttl: "" });
  }

  data.push({ nama: "tes", ttl: "2022-03-08" });

  console.log(data);
  const agectr = [];

  for (let index = 0; index < pass.D; index++) {
    agectr.push("Adult");
  }

  for (let index = 0; index < pass.A; index++) {
    agectr.push("Child");
  }

  for (let index = 0; index < pass.B; index++) {
    agectr.push("Infant");
  }

  const total = parseInt(hargaTiket) + baggagePrice + seatPrice;

  return (
    // <div>
    // {(token) ?
    <div className="bg-slate-100">
      <Navbar />
      <div className="max-w-[1240px] mx-auto md:px-14 bg-slate-100 ">
        <Form
          name="wrap"
          labelCol={{ flex: "110px" }}
          labelAlign="left"
          labelWrap
          wrapperCol={{ flex: 1 }}
          colon={false}
          onFinish={onFinish}
        >
          <div className="grid md:grid-cols md:grid-cols-[60%_40%] gap-2 py-5">
            <div>
              <div className="bg-white mt-20 rounded-md shadow-md py-5 px-5">
                <div className="flex items-center gap-3">
                  <UsersIcon className="h-7 w-7" />
                  <div className="text-lg font-semibold">Passenger Details</div>
                </div>
                {Array(countPass)
                  .fill()
                  .map((i, idx) => {
                    return (
                      <>
                        <div className="bg-slate-100 rounded-md">
                          <p className=" mt-5 py-3 px-3">
                            Passenger {idx + 1} : {agectr[idx]}
                          </p>
                        </div>
                        {/* <Form
                        name="wrap"
                        labelCol={{ flex: "110px" }}
                        labelAlign="left"
                        labelWrap
                        wrapperCol={{ flex: 1 }}
                        colon={false}
                        onFinish={onFinish}
                      > */}
                        <Form.Item
                          style={{ width: "50%", marginBottom: 0 }}
                          name={`Title${idx}`}
                        >
                          <Select placeholder="Title">
                            {titel?.map((e, i) => (
                              <Select.Option key={i} value={e?.id}>
                                {e?.titelName}
                              </Select.Option>
                            ))}
                          </Select>
                        </Form.Item>
                        <p className="text-xs text-gray-400 mb-4">Mr/Mrs/Ms</p>

                        <Form.Item
                          style={{ marginBottom: 0 }}
                          name={`FirstName${idx}`}
                          rules={[
                            {
                              required: true,
                              message: "Please input your fullname!",
                              whitespace: true,
                            },
                          ]}
                        >
                          <Input placeholder="FirstName and MidlleName" />
                        </Form.Item>
                        <p className="text-xs text-gray-400">
                          Fill in according to KTP / Passport / SIM (without
                          punctuation and titles)
                        </p>

                        <Form.Item
                          name={`LastName${idx}`}
                          rules={[
                            {
                              required: true,
                              message: "Please input your lastname!",
                              whitespace: true,
                            },
                          ]}
                          style={{ marginBottom: 0 }}
                        >
                          <Input name="lastName" placeholder="LastName" />
                        </Form.Item>
                        <p className="text-xs text-gray-400 mb-4">
                          As in KTP/Passport/SIM (without punctuation and title)
                          & must be a single name.
                        </p>

                        <div className="flex gap-2">
                          <div className="w-full">
                            <Form.Item
                              style={{ marginBottom: 0 }}
                              name={`Citizenship${idx}`}
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your citizenship!",
                                  whitespace: true,
                                },
                              ]}
                            >
                              <Select placeholder="Citizenship">
                                {country?.map((e, i) => (
                                  <Select.Option
                                    key={i}
                                    value={e?.countryCodeId}
                                  >
                                    {e?.name}
                                  </Select.Option>
                                ))}
                              </Select>
                            </Form.Item>
                            <p className="text-xs text-gray-400 mb-4">
                              Citizenship
                            </p>
                          </div>

                          <div className="w-full">
                            <Form.Item
                              style={{ marginBottom: 0 }}
                              name={`birthdate${idx}`}
                              rules={[
                                {
                                  type: "object",
                                  required: true,
                                  message: "Please select your birthdate!",
                                },
                              ]}
                            >
                              <DatePicker
                                style={{ width: "100%" }}
                                placeholder="Birth Date"
                                format="YYYY-MM-DD"
                                value={format}
                              />
                            </Form.Item>
                            <p className="text-xs text-gray-400 mb-4">
                              Birth Date
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <div className="w-full">
                            <Form.Item
                              style={{ marginBottom: 0 }}
                              name={`pasport_number${idx}`}
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your pasport number!",
                                  whitespace: true,
                                },
                              ]}
                            >
                              <Input
                                name="pasportNumber"
                                placeholder="Passport Number"
                              />
                            </Form.Item>
                            <p className="text-xs text-gray-400">
                              Valid for at least 6 months from the date of
                              departure
                            </p>
                          </div>

                          <div className="w-full">
                            <Form.Item
                              style={{ marginBottom: 0 }}
                              name={`created_at${idx}`}
                              rules={[
                                {
                                  type: "object",
                                  required: true,
                                  message: "Please select your  passport date!",
                                },
                              ]}
                              format="YYYY-MM-DD"
                            >
                              <DatePicker
                                name="created_at"
                                style={{ width: "100%" }}
                                placeholder="created at"
                              />
                            </Form.Item>
                            <p className="text-xs text-gray-400 mb-4">
                              The date the passport was issued
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <div className="w-full">
                            <Form.Item
                              name={`seat${idx}`}
                              style={{ marginBottom: 0 }}
                              rules={[
                                {
                                  required: true,
                                  message: "Please choose your seat!",
                                  whitespace: true,
                                },
                              ]}
                            >
                              <Select
                                placeholder="Seat"
                                onChange={onChangeSeat}
                              >
                                {seat?.map((e, i) => (
                                  <Select.Option key={i} value={e?.seatId}>
                                    {e?.seatCode}
                                  </Select.Option>
                                ))}
                              </Select>
                            </Form.Item>
                            <p className="text-xs text-gray-400 mb-4">
                              Choose your seat
                            </p>
                          </div>

                          <div className="w-full">
                            <Form.Item
                              name={`baggage${idx}`}
                              style={{ marginBottom: 0 }}
                              rules={[
                                {
                                  type: "number",
                                  required: true,
                                  message: "Please choose your baggage!",
                                  whitespace: true,
                                },
                              ]}
                            >
                              <Select
                                placeholder="Baggage"
                                onChange={onChangeBaggage}
                              >
                                {bagage?.map((e, i) => (
                                  <Select.Option key={i} value={e?.price}>
                                    {e?.weight}kg -{" "}
                                    {numberFormat(e?.price).slice(0, -3)}
                                  </Select.Option>
                                ))}
                              </Select>
                            </Form.Item>
                            <p className="text-xs text-gray-400 mb-4">
                              Choose your baggage
                            </p>
                          </div>
                          {/* <div className="hidden"> */}
                          {/* </div> */}
                        </div>
                        {/* <ButtonPrimary type="submit" title="Booking Now" /> */}
                        {/* </Form> */}
                      </>
                    );
                  })}
              </div>
            </div>

            <div className="bg-white rounded-md shadow-md md:mt-20 px-5 py-5 md:h-fit">
              <div className="text-lg font-semibold">Flight</div>

              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center py-3">
                  <h2 className="mb-0">{tiket?.originCity}</h2>
                  <ArrowLongRightIcon className="h-4 w-4" />
                  <h2 className="mb-0">{tiket?.destinationCity}</h2>
                </div>
                {/* <div className='py-5 font-semibold text-blue-600 hover:text-blue-400'>
            <Link to='' >Details</Link>
          </div> */}
              </div>

              <div className="flex items-center justify-between text-gray-500">
                <img src={Logo} alt="" className="h-12 w-12" />
                <div className="flex mt-4">
                  <p>{tiket?.iataOriginAirport}</p>
                  <p>-</p>
                  <p>{tiket?.iataDestinationAirport}</p>
                </div>
                <div>
                  {format(new Date(`${tiket?.arrivalDate}`), "dd MMM yyyy")}
                </div>
                <div>{(tiket?.departureTime).slice(0, -3)}</div>
              </div>

              <h2 className="py-3">Ticket Policy</h2>
              {benefit?.map((e, i) => (
                <p key={i} className="text-green-600">
                  {e?.desription}
                </p>
              ))}
              {/* <p>{tiket?.benefits.desription}</p> */}
              <hr />

              <div className="flex justify-between py-4">
                <h2>Total Payment</h2>
                <h2 className="text-blue-600">
                  {numberFormat(total).slice(0, -3)}
                </h2>
              </div>
              {/* <div className='max-w-7xl' onClick={() => navigate(`/history?sort=DESC`) }> */}
              <ButtonPrimary
                type="submit"
                title="Booking Now"
                className="w-fit"
              />
              {/* </div> */}
            </div>
          </div>
        </Form>
      </div>
      <SecondFooter />
      <SeatModal open={seatModal} close={handleOnClose} />
    </div>
    // :
    // <div>
    //   Login Dulu
    // </div>
    //       }
    // </div>
  );
};
