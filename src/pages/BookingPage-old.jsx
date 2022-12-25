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
} from "../redux/feature/BookingSlice";

export const BookingPage = (props) => {
  const { titel, bagage, benefit, seat } = useSelector(
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
  }, [dispatch]);

  const location = useLocation();
  console.log(location);
  const tiket = location.state?.tiket;
  const hargaTiket = location.state?.total;
  const pass = location.state?.passenger;

  const numberFormat = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "IDR",
    }).format(value);

  const countPass = pass.A + pass.B + pass.D;
  console.log(countPass);

  const onFinish = (values) => {
    // dispatch(Register(values))
    console.log(values);
  };

  const [priceBaggage, setPriceBaggage] = useState(0);
  const [seatPrice, setseatPrice] = useState(0);
  const [title, setTitle] = useState("");

  const onChangeTitle = (values) => {
    console.log(values);
    setTitle(values);
  };

  const onChangeSeat = (values) => {
    console.log(values);
    seat
      ?.filter((seat) => seat.seatId === values)
      .map((e, i) => {
        setseatPrice((pre) => pre + e.price.amount);
      });
  };

  console.log(seatPrice);

  const onChangeBaggage = (values) => {
    console.log(values);
    setPriceBaggage((pre) => pre + values);
  };

  console.log(priceBaggage);

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

  const total = parseInt(hargaTiket) + priceBaggage + seatPrice;

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
                        <Form.Item style={{ width: "49%" }}>
                          <Select placeholder="Title" onChange={onChangeTitle}>
                            {titel?.map((e, i) => (
                              <Select.Option key={i} value={e?.titelName}>
                                {e?.titelName}
                              </Select.Option>
                            ))}
                          </Select>
                          <span className="text-xs text-gray-400">
                            Mr/Mrs/Ms
                          </span>
                        </Form.Item>

                        <Form.Item
                          name="FirstName"
                          rules={[{ required: true }]}
                        >
                          <Input placeholder="FirstName and MidlleName" />
                          <span className="text-xs text-gray-400">
                            Fill in according to KTP / Passport / SIM (without
                            punctuation and titles)
                          </span>
                        </Form.Item>

                        <Form.Item
                          name={["LastName"]}
                          rules={[{ required: true }]}
                        >
                          <Input name="lastName" placeholder="LastName" />
                          <span className="text-xs text-gray-400">
                            As in KTP/Passport/SIM (without punctuation and
                            title) & must be a single name.
                          </span>
                        </Form.Item>

                        <div className="flex gap-2">
                          <Form.Item
                            style={{ width: "50%" }}
                            name={["Citizenship"]}
                            rules={[
                              {
                                required: true,
                              },
                            ]}
                          >
                            <Input
                              name="citizenship"
                              placeholder="citizenship"
                            />
                            <span className="text-xs text-gray-400">
                              Citizenship
                            </span>
                          </Form.Item>

                          <Form.Item
                            style={{ width: "50%" }}
                            name={["birthdate"]}
                          >
                            <DatePicker
                              name="birthDate"
                              style={{ width: "100%" }}
                              placeholder="Birth Date"
                            />
                            <span className="text-xs text-gray-400">
                              Birth Date
                            </span>
                          </Form.Item>
                        </div>

                        <div className="flex gap-2">
                          <Form.Item
                            style={{ width: "50%" }}
                            name={["pasport_number"]}
                            rules={[
                              {
                                required: true,
                              },
                            ]}
                          >
                            <Input
                              name="pasportNumber"
                              placeholder="Passport Number"
                            />
                            <span className="text-xs text-gray-400">
                              Valid for at least 6 months from the date of
                              departure
                            </span>
                          </Form.Item>

                          <Form.Item
                            style={{ width: "50%" }}
                            name={["created_at"]}
                          >
                            <DatePicker
                              name="created_at"
                              style={{ width: "100%" }}
                              placeholder="created at"
                            />
                            <span className="text-xs text-gray-400">
                              The date the passport was issued
                            </span>
                          </Form.Item>
                        </div>

                        <div className="flex gap-2">
                          <Form.Item style={{ width: "49%" }}>
                            <Select placeholder="Seat" onChange={onChangeSeat}>
                              {seat?.map((e, i) => (
                                <Select.Option key={i} value={e?.seatId}>
                                  {e?.seatCode}
                                </Select.Option>
                              ))}
                            </Select>
                            <span className="text-xs text-gray-400">
                              Choose your seat
                            </span>
                          </Form.Item>

                          <Form.Item style={{ width: "49%" }}>
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
                            <span className="text-xs text-gray-400">
                              Choose your baggage
                            </span>
                          </Form.Item>
                        </div>
                        {/* </Form> */}
                      </>
                    );
                  })}
              </div>

              {/* <div className="bg-white shadow-lg rounded-md mt-5 py-5 px-3">
              <div className="flex items-center gap-3">
                <AiOutlineAppstoreAdd size={30} />
                <div className="text-lg">Extra Facilities</div>
              </div>
              <div className="mt-5">
                <div className="flex justify-between items-center pb-5 border-b-2">
                  <div className="flex justify-between items-center gap-4">
                    <MdEventSeat size={25} />
                    <div className="flex justify-between items-center">
                      <div>
                        <h2>Seat</h2>
                        <span className="font-light">
                          Choose a seat on the plane.
                        </span>
                      </div>
                    </div>
                  </div>
                  <h3
                    className="text-blue-600 hover:text-blue-400 cursor-pointer"
                    onClick={() => setSeatModal(true)}
                  >
                    Order
                  </h3>
                </div>
                <div className="flex gap-4 justify-between mt-5 items-center">
                  <div className="flex gap-4">
                    <GiHandBag size={25} />
                    <div>
                      <h2>Baggage</h2>
                      <span className="font-light">
                        Increase the capacity of your luggage.
                      </span>
                      <Form.Item className="mt-3">
                        <Select placeholder="Baggage">
                          {bagage?.map((e, i) => (
                            <Select.Option key={i}>
                              {e?.weight}kg - Rp {e?.price},-
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
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