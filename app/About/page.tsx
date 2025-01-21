import Image from 'next/image';

// import landingPagePic from "../public/IMG_7986.JPG";

export default function Page() {
  const coreValues = [
    { id: 1, value:"Integrity:", description: "We operate with honesty and transparency, building trust with clients, employees, and partners." },
    {id: 2, value: "Accountability", description: "We take full responsibility for our actions, decisions, and outcomes, ensuring reliability and credibility."},
    {id: 2, value: "Discipline", description: "Focused and self-controlled, we adhere to protocols even in challenging situations."},
    {id: 2, value: "Respect", description: "We treat clients, colleagues, and communities with dignity and fairness, fostering trust and collaboration."},
    {id: 2, value: "Excellence", description: "We aim for superior results, exceeding expectations in every task and mission."},
    {id: 2, value: "Adaptability", description: "Flexibility and resourcefulness enable us to respond effectively to ever-changing circumstances."},
    {id: 2, value: "Teamwork", description: "Collaboration and mutual support drive our collective success."},
    {id: 2, value: "Courage", description: "We act decisively and bravely to protect lives and property, even in high-pressure situations."},
    {id: 2, value: "Confidentiality", description: "Sensitive information is handled with the utmost care, ensuring privacy and security."},
    {id: 2, value: "Service", description: "Our commitment to clients and communities is unwavering, prioritizing their safety and security."}
  ];

  return (
    
    <div className='grid grid-row-3 gap-10 pl-5'>
      <div>
        <Image
        src="/IMG_7986.JPG"
        alt="Picture of the author" width={600} height={600}
        />
      </div>
      <div>
        <h1>Our Mission</h1>
        <p>
        To deliver top-tier security solutions through innovation, professionalism, and unwavering dedication to our core values.
        </p>
        <p>
        At Seaminess Security Solution, we are dedicated to providing unparalleled security services tailored to meet the unique needs of our clients. As a trusted partner in safeguarding people, assets, and information, we combine cutting-edge strategies with a commitment to excellence, ensuring peace of mind in every engagement.
        </p>
      </div>
      <div>
        <h2>Our Core Values</h2>
        <ul>
          {coreValues.map((coreValue) => (
            <li key={coreValue.id}>
                <strong>{coreValue.value}</strong> {coreValue.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) 
}