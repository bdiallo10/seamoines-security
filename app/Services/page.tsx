import Image from 'next/image';

export default function Services() {
  const unArmedServices = [
    {id: 1, service: "Access Control:", detail: "Monitor and manage entry points to ensure only authorized individuals gain access.",},
    {id: 1, service: "Patrolling:", detail: "Conduct routine checks to deter unauthorized activities.",},
    {id: 1, service: "Surveillance Monitoring:", detail: "Observe CCTV systems to identify and address suspicious behavior.",},
    {id: 1, service: "Event Security:", detail: "Manage crowds and maintain order at events.",},
    {id: 1, service: "Customer Service Assistance:", detail: "Assist visitors with directions and inquiries while ensuring security.",},
    {id: 1, service: "Loss Prevention:", detail: "Prevent theft and shoplifting in retail environments.",},
    {id: 1, service: "Parking Lot Security:", detail: "Ensure the safety of vehicles and visitors in parking areas.",},
    {id: 1, service: "Emergency Response Coordination:", detail: "Provide assistance during emergencies, including evacuation procedures.",},
    {id: 1, service: "Crowd Control:", detail: "Manage large groups to prevent overcrowding or disorder.",},
    {id: 1, service: "Alarm Monitoring:", detail: "Respond to alarms and notify authorities when necessary.",},
  ]
    return (
      <div className='grid grid-flow-row pl-5'>
        <div>
          <Image
            src="/IMG_7985.JPG"
            alt="Picture of the author" width={600} height={600}
            />
        </div>
        <div className='grid grid-row gap-1 pl-5'>
            <h1>OUR SERVICES</h1>
            <p>
            At Seaminess Security Solution, we are dedicated to providing unparalleled security services tailored to meet the unique needs of our clients. As a trusted partner in safeguarding people, assets, and information, we combine cutting-edge strategies with a commitment to excellence, ensuring peace of mind in every engagement.
            Whether you need unarmed guards, armed protection, or advanced security solutions, we are here to provide comprehensive, reliable, and tailored services. At Seaminess Security Solution, we don’t just provide security—we deliver trust, peace of mind, and excellence.
            </p>
            <p>Seamoines security solutions offers a comprehensive range of services designed to meet diverse security needs, ensuring safety, protection, and peace of mind. Below is an overview of our unarmed and armed security services:</p>
        </div>
        <div>
          <h1>Our Services</h1>
            <ul>
              {unArmedServices.map((services) => (
                <li key={services.id}>
                    <strong>{services.service}</strong> {services.detail}
                </li>
              ))}
            </ul>
        </div> 
      </div>
    ) 
  }