export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white px-4 py-6 sm:px-8 sm:py-8 lg:px-16 lg:py-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* <p className="mb-4">Follow us on:</p> */}
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <span className="sr-only">Facebook</span>
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <span className="sr-only">Twitter</span>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <span className="sr-only">Instagram</span>
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <p className="mt-6 text-sm">
          &copy; {new Date().getFullYear()} Seamoines Security. All rights reserved.
        </p>
      </div>
    </footer>
  );
}


// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-gray-800 text-white py-4">
//       <div className="container mx-auto text-center">
//         <p>
//           &copy; {currentYear} Seamoines Security. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// }