import { MapPin } from 'lucide-react';

const MapSection = () => {
  return (
    <div className="mt-16">
      <div className="container mx-auto px-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
          <div className="relative h-80 rounded-lg overflow-hidden">
            {/* Replace the placeholder image with a Google Maps iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.6961899316613!2d3.4232623!3d6.4455841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4c4a8b3e3f1%3A0xe6c0204c7c63dcd6!2sIkoyi%20Club%201938!5e0!3m2!1sen!2sng!4v1712822387319!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="BioInnovate Labs Location Map"
            />

            <div className="absolute top-4 left-4 bg-blue-900/90 text-white px-4 py-2 rounded-lg shadow-lg">
              <h4 className="font-semibold">BioInnovate Labs HQ</h4>
              <p className="text-sm text-blue-200">Ikoyi Lagos</p>
            </div>
            <div className="absolute bottom-4 right-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg flex items-center">
                <MapPin size={16} className="mr-2" />
                View Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;