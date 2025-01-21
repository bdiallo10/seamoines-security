import Image from 'next/image';
import CareerForm from "../Component/CareerForm"

export default function Career() {
    return (
      <div>
        <div>
          <Image
            src="/IMG_7983.JPG"
            alt="Picture of the author" width={600} height={600}
            />
        </div>
        <div>
          <CareerForm />
        </div>
      </div>
    ) 
  }