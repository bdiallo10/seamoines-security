import Image from 'next/image';
import ContactForm from '../Component/ContactForm'

export default function Contact() {
    return (
      <div>
        <div>
          <Image
            src="/IMG_7989.JPG"
            alt="Picture of the author" width={600} height={600}
            />
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    ) 
  }