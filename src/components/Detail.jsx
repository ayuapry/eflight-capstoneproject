import React from "react";
import ButtonPrimary from "../components/ButtonPrimary";
import { ChevronDownIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Disclosure } from "@headlessui/react";
import { useNavigate, useLocation } from "react-router-dom";
import { Tab } from "@headlessui/react";
import { useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { Card, Drawer } from "antd";
import { getTiket } from "../redux/feature/homeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import format from "date-fns/format";
import Meal from "../assets/meal.webp";
import Entertain from "../assets/entertain.webp";
import Bagage from "../assets/bagIcon.webp";
import noFlightData from "../assets/NoFlightData.svg";
import Wifi from "../assets/wifi.webp";
import Power from "../assets/power-plug.webp";
import SkeletonSearch from "./SkeletonSearch";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Detail() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { tiket, loading } = useSelector((state) => state.homepage);
  const dispatch = useDispatch();
  const location = useLocation();
  const Passenger = location.state;
  const values = location.state.values;
  const placement = "bottom";

  useEffect(() => {
    dispatch(getTiket(values));
  }, [dispatch, values]);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const numberFormat = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "IDR",
    }).format(value);

  const noData = () => {
    return (
      <div className="h-full flex justify-center items-center text-center">
        <div>
          <img src={noFlightData} className="h-96" alt="/" />
          <p className="font-semibold mb-0 text-lg">No flights available</p>
          <p className="text-gray-400 md:text-base text-sm">
            Change your search with a different date or cabin class.
          </p>
        </div>
      </div>
    );
  };

  if (loading) {
    return <SkeletonSearch length="5" />;
  }

  return (
    <div className="w-full">
      {tiket ? "" : noData()}
      {tiket &&
        tiket.map((tiket, index) => {
          return (
            <div key={tiket.id} className="max-w-7xl mx-auto">
              <div className="shadow-sm shadow-gray-400 rounded-xl lg:p-8 p-4 h-fit mb-4 bg-white lg:mx-20">
                <div className="flex justify-between mb-2">
                  <div className="flex items-center">
                    <img
                      src={tiket?.airLinesLogoURL}
                      alt="airplane-logo"
                      className="h-6 mr-2"
                    />
                    <p className="font-bold mb-0">{tiket.airlines}</p>
                  </div>
                  <ChevronDownIcon
                    onClick={showDrawer}
                    className="h-4 lg:hidden cursor-pointer"
                  />
                </div>
                <div className="flex justify-between w-full text-sm items-center lg:items-start">
                  <div>
                    <p className="mx-auto">
                      {tiket.departureTime.slice(0, -3)}
                    </p>
                    <p className="px-2 bg-slate-100 w-fit rounded-full text-sm text-gray-400">
                      {tiket.iataOriginAirport}
                    </p>
                  </div>
                  <div className="text-center text-xs items-center h-full">
                    <p>{tiket.flightDuration}</p>
                    <div className="flex items-center -mt-2">
                      <div className="p-1 border-[1.5px] border-gray-400 rounded-full"></div>
                      <div className="border-b-[1.5px] lg:w-24 w-14 border-gray-400"></div>
                      <div className="p-1 border-[1.5px] border-gray-400 bg-gray-400 rounded-full"></div>
                    </div>
                    <p>Direct</p>
                  </div>
                  <div>
                    <p>
                      {tiket.arrivalTime.slice(0, -3)}
                      <span className="lg:text-sm"></span>
                    </p>
                    <p className="px-2 bg-slate-100 w-fit rounded-full text-sm text-gray-400 mx-auto">
                      {tiket.iataDestinationAirport}
                    </p>
                  </div>
                  <div className="lg:flex hidden">
                    {tiket.facilities &&
                      tiket.facilities.map((fc, index) => {
                        return fc.name === "Meal" ? (
                          <img src={Meal} className="h-6 mr-2" alt="/" />
                        ) : fc.name === "Entertainment" ? (
                          <img src={Entertain} className="h-6 mr-2" alt="/" />
                        ) : fc.name === "Wifi" ? (
                          <img src={Wifi} className="h-6 mr-2" alt="/" />
                        ) : fc.name === "Baggage" ? (
                          <img src={Bagage} className="h-6 mr-2" alt="/" />
                        ) : (
                          <img src={Power} className="h-6 mr-2" alt="/" />
                        );
                      })}
                  </div>
                  <div className="lg:-mt-2 lg:block ml-4 lg:ml-0">
                    <h1 className="font-bold lg:text-lg text-sm">
                      {numberFormat(tiket.price.amount).slice(0, -3)} /{" "}
                      <span className="lg:text-sm text-xs font-normal pt-0">
                        pax
                      </span>
                    </h1>
                    <div className="w-32 mr-0 ml-auto">
                      <ButtonPrimary
                        title="SELECT"
                        click={() =>
                          navigate(
                            `/booking/${tiket.aircraft.id}?ap=${values.ap1}.${values.ap2}&dt=${values.dt1}.${values.dt2}&ps=${values.psD}.${values.psA}.${values.psB}&sc=${values.sc}`,
                            {
                              state: {
                                tiket: tiket,
                                passenger: Passenger,
                                total: `${
                                  tiket.price.amount * Passenger.D +
                                  tiket.price.amount * Passenger.A +
                                  tiket.price.amount * Passenger.B
                                }`,
                              },
                            }
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="flex mt-2 lg:hidden">
                  {tiket.facilities &&
                    tiket.facilities.map((fc, index) => {
                      return fc.name === "Meal" ? (
                        <img src={Meal} className="h-6 mr-2" alt="/" />
                      ) : fc.name === "Entertainment" ? (
                        <img src={Entertain} className="h-6 mr-2" alt="/" />
                      ) : (
                        <img src={Bagage} className="h-6 mr-2" alt="/" />
                      );
                    })}
                </div>
                <div className="hidden lg:block">
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full mt-4 rounded-lg justify-center text-left text-sm text-gray-400">
                          <span>View Detail</span>
                          <ChevronUpIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5 text-gray-400`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel>
                          <Tab.Group>
                            <Tab.List>
                              <Tab
                                className={({ selected }) =>
                                  classNames(
                                    "w-fit py-2.5 text-sm leading-5 text-sky-600 mr-4",
                                    " focus:outline-none focus:border-b-2 focus:border-sky-500",
                                    selected ? "font-medium" : "text-sky-500"
                                  )
                                }
                              >
                                Flight Details
                              </Tab>
                              <Tab
                                className={({ selected }) =>
                                  classNames(
                                    "w-fit py-2.5 text-sm leading-5 text-sky-600",
                                    " focus:outline-none focus:border-b-2 focus:border-sky-500",
                                    selected ? "font-medium" : "text-sky-500"
                                  )
                                }
                              >
                                Price Details
                              </Tab>
                            </Tab.List>
                            <Tab.Panels className="mt-4 max-h-72">
                              <Tab.Panel>
                                <div className="flex mx-auto w-full rounded-2xl bg-white">
                                  <div className="flex flex-col justify-between h-60 w-20 mr-10">
                                    <p className="text-sm">
                                      {tiket.departureTime.slice(0, -3)}
                                      <br />
                                      {format(
                                        new Date(`${tiket.departureDate}`),
                                        "dd MMM"
                                      )}
                                    </p>

                                    <p className="text-sm">
                                      {tiket.flightDuration}
                                    </p>

                                    <p className="text-sm mb-0">
                                      {tiket.arrivalTime.slice(0, -3)} <br />{" "}
                                      {format(
                                        new Date(`${tiket.arrivalDate}`),
                                        "dd MMM"
                                      )}
                                    </p>
                                  </div>

                                  <div className="flex flex-col justify-between items-center h-60 py-4">
                                    <div className="rounded-full p-1 border-2 border-sky-600 h-2"></div>
                                    <div className="border-l-2 border-sky-600 h-full"></div>
                                    <div className="rounded-full p-1 border-2 border-sky-600 bg-sky-600 h-2"></div>
                                  </div>

                                  <div className="flex flex-col justify-between ml-10 h-60 align-bottom w-full">
                                    <p className="mb-0">
                                      {tiket.originCity} <br />
                                      <span>{tiket.originAirport}</span>
                                    </p>
                                    <div className="p-4 w-full bg-sky-50 rounded-md pb-0">
                                      <p className="border-b-2 border-sky-200 w-full pb-4">
                                        Indonesia {tiket.airlines},{" "}
                                        {tiket.aircraft.type} |{" "}
                                        {tiket.flightClass}
                                      </p>
                                      <p className="flex">
                                        <ShoppingBagIcon className="h-5 text-sky-600 mr-2" />
                                        <span className="font-medium text-sm">
                                          Kabin :{" "}
                                          {tiket.aircraft.freeBaggageCabin} KG |
                                          Bagasi : {tiket.aircraft.freeBaggage}{" "}
                                          KG
                                        </span>
                                      </p>
                                    </div>
                                    <p className="mb-0">
                                      {tiket.destinationCity} <br />{" "}
                                      {tiket.destinationAirport}
                                    </p>
                                  </div>
                                </div>
                              </Tab.Panel>
                              <Tab.Panel>
                                <p>Far</p>
                                {Passenger.D !== 0 ? (
                                  <div className="flex justify-between">
                                    <li className="text-gray-400">
                                      Adult (x{Passenger.D})
                                    </li>
                                    <p>
                                      {numberFormat(
                                        tiket.price.amount * Passenger.D
                                      ).slice(0, -3)}
                                    </p>
                                  </div>
                                ) : (
                                  ""
                                )}
                                {Passenger.A !== 0 ? (
                                  <div className="flex justify-between">
                                    <li className="text-gray-400">
                                      Child (x{Passenger.A})
                                    </li>
                                    <p>
                                      {numberFormat(
                                        tiket.price.amount * Passenger.A
                                      ).slice(0, -3)}
                                    </p>
                                  </div>
                                ) : (
                                  ""
                                )}
                                {Passenger.B !== 0 ? (
                                  <div className="flex justify-between">
                                    <li className="text-gray-400">
                                      Infant (x{Passenger.B})
                                    </li>
                                    <p>
                                      {numberFormat(
                                        tiket.price.amount * Passenger.B
                                      ).slice(0, -3)}
                                    </p>
                                  </div>
                                ) : (
                                  ""
                                )}
                                <br />
                                <p>Tax and other fees</p>
                                <div className="flex justify-between">
                                  <li className="text-gray-400">Tax</li>
                                  <p>Included</p>
                                </div>
                                <div className="border-b-2 w-full"></div>
                                <div className="flex justify-between mt-4">
                                  <p>Total</p>
                                  <p className="text-sky-500 font-medium mb-0">
                                    {numberFormat(
                                      tiket.price.amount * Passenger.D +
                                        tiket.price.amount * Passenger.A +
                                        tiket.price.amount * Passenger.B
                                    ).slice(0, -3)}
                                  </p>
                                </div>
                              </Tab.Panel>
                            </Tab.Panels>
                          </Tab.Group>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>
              <Drawer
                title={`${tiket.originCity} - ${tiket.destinationCity}`}
                placement={placement}
                closable={true}
                onClose={onClose}
                open={open}
                key={placement}
                height="70vh"
                bodyStyle={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  paddingTop: "1rem",
                }}
              >
                <div>
                  <Tab.Group>
                    <Tab.List>
                      <Tab
                        className={({ selected }) =>
                          classNames(
                            "w-fit leading-5 text-sky-600 mr-4",
                            " focus:outline-none focus:border-b-2 focus:border-sky-500",
                            selected ? "font-medium" : "text-sky-500"
                          )
                        }
                      >
                        Flight Details
                      </Tab>
                      <Tab
                        className={({ selected }) =>
                          classNames(
                            "w-fit leading-5 text-sky-600",
                            " focus:outline-none focus:border-b-2 focus:border-sky-500",
                            selected ? "font-medium" : "text-sky-500"
                          )
                        }
                      >
                        Price Detail
                      </Tab>
                    </Tab.List>
                    <Tab.Panels className="mt-8 max-h-64">
                      <Tab.Panel>
                        <div className="flex mx-auto w-full rounded-2xl bg-white">
                          <div className="flex flex-col justify-between items-center h-60 py-4">
                            <div className="rounded-full p-1 border-2 border-sky-600 h-2"></div>
                            <div className="border-l-2 border-sky-600 h-full"></div>
                            <div className="rounded-full p-1 border-2 border-sky-600 bg-sky-600 h-2"></div>
                          </div>

                          <div className="flex flex-col justify-between ml-10 h-60 align-bottom w-full">
                            <p className="mb-0">
                              <b>
                                {format(
                                  new Date(`${tiket.departureDate}`),
                                  "dd MMM"
                                )}{" "}
                                - {tiket.departureTime.slice(0, -3)}
                              </b>{" "}
                              <br /> <span>{tiket.originAirport}</span>
                            </p>
                            <div className="p-4 w-full bg-sky-50 rounded-md pb-0">
                              <p className="border-b-2 border-sky-200 w-full pb-4">
                                Indonesia {tiket.airlines},{" "}
                                {tiket.aircraft.type} | {tiket.flightClass}
                              </p>
                              <p className="flex">
                                <ShoppingBagIcon className="h-5 text-sky-600 mr-2" />
                                <span className="font-medium text-sm">
                                  Kabin : {tiket.aircraft.freeBaggageCabin} KG |
                                  Bagasi : {tiket.aircraft.freeBaggage} KG
                                </span>
                              </p>
                            </div>
                            <p className="mb-0">
                              {" "}
                              <b>
                                {format(
                                  new Date(`${tiket.arrivalDate}`),
                                  "dd MMM"
                                )}{" "}
                                - {tiket.arrivalTime.slice(0, -3)}
                              </b>{" "}
                              <br />
                              <span>{tiket.destinationAirport}</span>
                            </p>
                          </div>
                        </div>
                      </Tab.Panel>
                      <Tab.Panel>
                        <p>Far</p>
                        {Passenger.D !== 0 ? (
                          <div className="flex justify-between">
                            <li className="text-gray-400">
                              Adult (x{Passenger.D})
                            </li>
                            <p>
                              {numberFormat(
                                tiket.price.amount * Passenger.D
                              ).slice(0, -3)}
                            </p>
                          </div>
                        ) : (
                          ""
                        )}
                        {Passenger.A !== 0 ? (
                          <div className="flex justify-between">
                            <li className="text-gray-400">
                              Child (x{Passenger.A})
                            </li>
                            <p>
                              {numberFormat(
                                tiket.price.amount * Passenger.A
                              ).slice(0, -3)}
                            </p>
                          </div>
                        ) : (
                          ""
                        )}
                        {Passenger.B !== 0 ? (
                          <div className="flex justify-between">
                            <li className="text-gray-400">
                              Infant (x{Passenger.B})
                            </li>
                            <p>
                              {numberFormat(
                                tiket.price.amount * Passenger.B
                              ).slice(0, -3)}
                            </p>
                          </div>
                        ) : (
                          ""
                        )}
                        <br />
                        <br />
                        <p>Tax and other fees</p>
                        <div className="flex justify-between">
                          <li className="text-gray-400">Tax</li>
                          <p>Included</p>
                        </div>
                        <div className="border-b-2 w-full"></div>
                        <div className="flex justify-between mt-4">
                          <p>Total</p>
                          <p className="text-sky-500 font-medium mb-0">
                            {numberFormat(
                              tiket.price.amount * Passenger.D +
                                tiket.price.amount * Passenger.A +
                                tiket.price.amount * Passenger.B
                            ).slice(0, -3)}
                          </p>
                        </div>
                      </Tab.Panel>
                    </Tab.Panels>
                  </Tab.Group>
                </div>
                <div className="flex justify-between items-center lg:hidden">
                  <p className="font-medium mb-0">
                    Total <br />{" "}
                    <span className="text-base font-medium">
                      {numberFormat(
                        tiket.price.amount * Passenger.D +
                          tiket.price.amount * Passenger.A +
                          tiket.price.amount * Passenger.B
                      ).slice(0, -3)}
                    </span>
                  </p>
                  <div className="w-fit">
                    <ButtonPrimary
                      title="SELECT"
                      click={() =>
                        navigate(
                          `/booking/${tiket.aircraft.id}ap=${values.ap1}.${values.ap2}&dt=${values.dt1}.${values.dt2}&ps=${values.psD}.${values.psA}.${values.psB}&sc=${values.sc}`,
                          {
                            state: {
                              tiket: tiket,
                              passenger: Passenger,
                              total: `${
                                tiket.price.amount * Passenger.D +
                                tiket.price.amount * Passenger.A +
                                tiket.price.amount * Passenger.B
                              }`,
                            },
                          }
                        )
                      }
                      className="text-sm lg:text-base"
                    />
                  </div>
                </div>
              </Drawer>
            </div>
          );
        })}
    </div>
  );
}
