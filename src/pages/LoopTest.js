import TextArea from "antd/es/input/TextArea";
import React from "react";

// export default function LoopTest() {
//   const [formData, setFormData] = React.useState([
//     { id: "username", value: "" },
//     { id: "password", value: "" },
//   ]);
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     formData.forEach((element) => console.log(`I found this ${element.value}`));
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       {formData.map((element, index) => {
//         return (
//           <React.Fragment>
//             <TextArea
//               id={element.id}
//               value={element.value}
//               onChange={(e) => {
//                 setFormData([
//                   ...formData.slice(0, index),
//                   { ...formData[index], value: e.target.value },
//                   ...formData.slice(index + 1),
//                 ]);
//               }}
//             />
//             <br />
//           </React.Fragment>
//         );
//       })}
//       <button type="submit">submit</button>
//       {console.log(formData)}
//     </form>
//   );
// }

export default function LoopTest() {
  const people = [
    { name: "name 1" },
    { name: "name 2" },
    { name: "name 3" },
    { name: "name 4" },
    { name: "name 5" },
    { name: "name 6" },
    { name: "name 7" },
    { name: "name 8" },
  ];

  const person = {
    name: "freelancing",
    twitter: "freelancingcult",
    bio: "Programming",
  };

  let details = [];
  for (const property in person) {
    details.push(
      <p>
        {property}: {person[property]}
      </p>
    );
  }

  return (
    <div className="App">
      <h2>Json Array Object </h2>
      {people.map((data, idx) => (
        <p key={idx}>{data.name}</p>
      ))}

      <h2>Json Object </h2>
      {Object.keys(person).map((key, idx) => (
        <p key={idx}>{person[key]}</p>
      ))}

      <h2>Json Object using forloop</h2>
      {details}
    </div>
  );
}
