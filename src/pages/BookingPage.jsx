import {
  ArrowLongRightIcon,
  CheckCircleIcon,
  UsersIcon,
  XCircleIcon,
} from "@heroicons/react/20/solid";
import { DatePicker, Form, Input, Select, Modal } from "antd";
import React, { useEffect, useState } from "react";
import format from "date-fns/format";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Logo from "../assets/Logo.png";
import ButtonPrimary from "../components/ButtonPrimary";
import { Navbar } from "../components/Navbar";
import { SecondFooter } from "../components/SecondFooter";
import {
  getBagage,
  getBenefit,
  getSeat,
  getTitel,
  Booking,
  getCountry,
} from "../redux/feature/BookingSlice";
import { getAge } from "../redux/feature/homeSlice";
import failed from "../assets/failed.svg";
import success from "../assets/success.svg";

export const BookingPage = () => {
  const { titel, bagage, benefit, seat, country, booking } = useSelector((state) => state.booking);
  const { age } = useSelector((state) => state.homepage);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const bookingId = localStorage.getItem("bookingId");
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    window.location.reload(1);
  };

  const toHistory = () => {
    localStorage.removeItem("bookingId");
    navigate("/history");
    window.location.reload(1);
  };

  useEffect(() => {
    dispatch(getTitel());
    dispatch(getBagage(id));
    dispatch(getBenefit(id));
    dispatch(getSeat(id));
    dispatch(getCountry());
    dispatch(getAge());
  }, [dispatch, id]);

  const location = useLocation();
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
  const [total, setTotal] = useState(hargaTiket);

  const onFinish = (values) => {
    let keys = [
      "citizenshipId",
      "firstName",
      "lastName",
      "birthDate",
      "titelId",
      "baggage",
      "passportNumber",
      "seatId",
      "createdAt",
    ];
    let number = countPass;
    let arr = Array.from({ length: number }, (_, i) =>
      Object.fromEntries(keys.map((key) => [key, values[key + i]]))
    );

    const data = [];
    const seatPrice = [];
    const baggagePrice = [];
    let totalSeat = 0;
    let totalBaggage = 0;

    for (let i = 0; i < countPass; i++) {
      data.push({
        ...arr[i],
        scheduleId: idSch,
        titelId: arr[i].titelId,
        ageCategoryId: ageId[i],
        firstName: arr[i].firstName,
        lastName: arr[i].lastName,
        birthDate: arr[i].birthDate,
        passportNumber: arr[i].passportNumber,
        issuingCountryId: arr[i].citizenshipId,
        citizenshipId: arr[i].citizenshipId,
        aircraftSeat: {
          id: arr[i].seatId,
        },
        baggage: {
          total: arr[i].baggage,
        },
      });

      seat
        ?.filter((seat) => seat.seatId === arr[i].seatId)
        .map((e, i) => {
          seatPrice.push(e.price.amount);
        });

      bagage
        ?.filter((bagage) => bagage.weight === arr[i].baggage)
        .map((e, i) => {
          baggagePrice.push(e.price);
        });
    }

    for (let j = 0; j < countPass; j++) {
      totalSeat += seatPrice[j];
      totalBaggage += baggagePrice[j];
    }

    const total = parseInt(hargaTiket) + totalSeat + totalBaggage;
    setTotal(total);
    console.log(data, total);

    dispatch(Booking({ data, pass, total: total }));
  };

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

  const ageId = [];
  for (let i = 0; i < countPass; i++) {
    age
      ?.filter((age) => age.categoryName === agectr[i])
      .map((e, i) => {
        ageId.push(e.id);
      });
  }

  const responModal = (props) => {
    return (
      <Modal
        title=""
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        centered={true}
        closable={false}
      >
        <div className="flex items-center">
          {props.type === "success" ? (
            <CheckCircleIcon className="h-7 text-green-500 mr-2" />
          ) : (
            <XCircleIcon className="h-7 text-red-500 mr-2" />
          )}
          <p className="text-lg font-semibold m-0 items-center">
            {props.title}
          </p>
        </div>

        <img src={props.resImg} alt={props.type} className="h-72 mx-auto" />
        <p>{props.message}</p>
        <div className="mr-0 ml-auto">
          <ButtonPrimary title={props.resTitle} click={props.resClick} />
        </div>
      </Modal>
    );
  };

  return (
    <div className="bg-slate-100">
      <Navbar />
      <div className="max-w-[1240px] mx-auto md:px-14 bg-slate-100 min-h-screen ">
        {bookingId ? (
          responModal({
            title: "Booking Success",
            resImg: success,
            resClick: toHistory,
            type: "success",
            resTitle: "Go To History",
          })
        ) : booking[0] ? (
          responModal({
            title: "Booking Failed",
            message: booking,
            resImg: failed,
            resClick: handleCancel,
            type: "failed",
            resTitle: "OK",
          })
        ) : (
          <div className="hidden"></div>
        )}
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
              <div className="bg-white mt-14 rounded-md shadow-md py-5 px-5">
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
                        <Form.Item
                          style={{ width: "50%", marginBottom: 0 }}
                          name={`titelId${idx}`}
                          rules={[
                            {
                              required: true,
                              message: "Please input your title!",
                              whitespace: true,
                            },
                          ]}
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
                          name={`firstName${idx}`}
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
                          name={`lastName${idx}`}
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
                              name={`citizenshipId${idx}`}
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
                              name={`birthDate${idx}`}
                              rules={[
                                {
                                  required: true,
                                  message: "Please select your birthdate!",
                                },
                              ]}
                            >
                              <DatePicker
                                style={{ width: "100%" }}
                                placeholder="Birth Date"
                                format="YYYY-MM-DD"
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
                              name={`passportNumber${idx}`}
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
                              name={`createdAt${idx}`}
                              rules={[
                                {
                                  required: true,
                                  message: "Please select your  passport date!",
                                },
                              ]}
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
                              name={`seatId${idx}`}
                              style={{ marginBottom: 0 }}
                              placement={'bottomLeft'}
                              rules={[
                                {
                                  required: true,
                                  message: "Please choose your seat!",
                                  whitespace: true,
                                },
                              ]}
                            >
                              <Select placeholder="Seat">
                                {seat?.map((e, i) => (
                                  <Select.Option key={i} value={e?.seatId}>
                                    {e?.seatCode} - {numberFormat(e?.price.amount)}
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
                              <Select placeholder="Baggage">
                                {bagage?.map((e, i) => (
                                  <Select.Option key={i} value={e?.weight}>
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
                        </div>
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
              <hr />

              <div className="flex justify-between py-4">
                <h2>Total Payment</h2>
                <h2 className="text-blue-600">
                  {numberFormat(total).slice(0, -3)}
                </h2>
              </div>
              <ButtonPrimary
                type="submit"
                title="Booking Now"
                className="w-fit"
              />
            </div>
          </div>
        </Form>
      </div>
      <SecondFooter />
    </div>
  );
};
