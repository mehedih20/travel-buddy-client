import React from "react";

const termsAndConditions = [
  {
    id: 1,
    title: "Travel Documentation",
    description:
      "All travelers must have valid travel documentation, including passports, visas, and any other required identification or permits. It is the traveler’s responsibility to ensure all documents are up-to-date and meet the requirements of the destination country.",
  },
  {
    id: 2,
    title: "Payment and Deposits",
    description:
      "A non-refundable deposit is required at the time of booking to secure your travel arrangements. Full payment must be made by the specified due date. Failure to pay on time may result in cancellation of your booking.",
  },
  {
    id: 3,
    title: "Cancellation Policy",
    description:
      "Cancellations made by the traveler will incur charges based on the time of cancellation. Cancellations made within [X] days of departure may result in loss of the entire booking amount. Specific cancellation terms will be provided at the time of booking.",
  },
  {
    id: 4,
    title: "Changes and Amendments",
    description:
      "Any changes to the travel itinerary requested by the traveler after confirmation may incur additional charges. Changes are subject to availability and the terms and conditions of the travel service providers.",
  },
  {
    id: 5,
    title: "Travel Insurance",
    description:
      "It is strongly recommended that travelers purchase comprehensive travel insurance that covers trip cancellations, medical expenses, lost baggage, and other potential losses. The traveler is responsible for ensuring their insurance coverage is adequate.",
  },
  {
    id: 6,
    title: "Health and Safety",
    description:
      "Travelers must adhere to all health and safety regulations of the destination, including vaccinations and health checks. It is the traveler’s responsibility to be aware of and comply with any travel advisories or restrictions.",
  },
  {
    id: 7,
    title: "Liability",
    description:
      "The travel agency acts as an intermediary between the traveler and service providers such as airlines, hotels, and tour operators. The agency is not liable for any injury, loss, or damage incurred during travel. Any claims must be directed to the respective service providers.",
  },
  {
    id: 8,
    title: "Force Majeure",
    description:
      "The travel agency is not responsible for any delays, cancellations, or changes in travel plans due to unforeseen circumstances such as natural disasters, political unrest, or other force majeure events. In such cases, refunds or rescheduling options will be considered on a case-by-case basis.",
  },
  {
    id: 9,
    title: "Behavior and Conduct",
    description:
      "Travelers are expected to behave in a manner that is respectful and considerate of others. Any behavior that is deemed inappropriate or disruptive may result in the termination of travel arrangements without refund.",
  },
  {
    id: 10,
    title: "Accuracy of Information",
    description:
      "The travel agency strives to provide accurate and up-to-date information but cannot guarantee the completeness or accuracy of all information provided. Travelers should verify critical details independently.",
  },
  {
    id: 11,
    title: "Special Requests",
    description:
      "Any special requests (e.g., dietary requirements, room preferences) should be communicated at the time of booking. The travel agency will endeavor to meet these requests but cannot guarantee they will be fulfilled.",
  },
  {
    id: 12,
    title: "Acceptance of Terms",
    description:
      "By making a travel request, the traveler acknowledges and agrees to these terms and conditions. The travel agency reserves the right to update or modify these terms at any time without prior notice.",
  },
];

const TermsAndConditions = () => {
  return (
    <>
      {termsAndConditions.map((term) => (
        <div key={term.id}>
          <h3 className=" font-bold">{term.title}</h3>
          <p>{term.description}</p>
        </div>
      ))}
    </>
  );
};

export default TermsAndConditions;
