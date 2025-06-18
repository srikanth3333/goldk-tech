
interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

interface Service {
  name: string;
}

interface CompanyFooterProps {
  contactInfo?: ContactInfo;
  services?: Service[];
  aboutText?: string;
}


export const CompanyFooter: React.FC<CompanyFooterProps> = ({
  contactInfo = {
    address: "6 Belle Vue place Belle Vue Road Sudbury Suffolk CO10 2PQ",
    phone: "+44 7586653668",
    email: "GOLDK-TECH@gmail.com"
  },
  services = [
    { name: "Remote Management Services" },
    { name: "Network Security" },
    { name: "Cloud IT Solutions" },
    { name: "DevOps Services" },
    { name: "IT Security & Compliance" },
    { name: "IT Consulting" }
  ],
  aboutText = "GOLDK-TECH is a fast growing, technology driven company providing various services in the field of Information Technology......"
}) => {
  return (
    <footer className="bg-white py-22 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Us Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Contact Us</h3>
            
            {/* Logo */}
            <div className="mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-teal-500 rounded flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                    <div className="w-3 h-3 bg-teal-500 rounded-xs"></div>
                  </div>
                </div>
                <span className="text-xl font-bold text-gray-800">GOLDK-TECH.</span>
              </div>
            </div>

            <div className="space-y-3 text-sm text-gray-600">
              <p>{contactInfo.address}</p>
              <p>{contactInfo.phone}</p>
              <p className="text-blue-600 hover:text-blue-800 transition-colors">
                <a href={`mailto:${contactInfo.email}`}>
                  {contactInfo.email}
                </a>
              </p>
            </div>
          </div>

          {/* Services Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-600 mb-6">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-sm text-gray-600 hover:text-gray-800 transition-colors cursor-pointer">
                  {service.name}
                </li>
              ))}
            </ul>
          </div>

          {/* About Us Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-600 mb-6">About us</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {aboutText}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};