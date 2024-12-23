import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, Plus, Stethoscope, Brain, Heart, Activity, Calendar, X } from 'lucide-react';

const medicalServices = [
  {
    id: 1,
    title: "General Check-up",
    icon: <Stethoscope className="w-6 h-6 text-gray-700 dark:text-gray-300" />,
    shortDesc: "Comprehensive health screening and preventive care",
    fullDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula erat at quam posuere, sed efficitur lorem volutpat. Curabitur tincidunt dolor ut purus hendrerit, ac aliquet ante scelerisque. Complete physical examination including vital signs, medical history review, and preventive health counseling to maintain your overall wellness.",
    duration: "456 minutes",
    price: "12"
  },
  {
    id: 2,
    title: "Cardiology",
    icon: <Heart className="w-6 h-6 text-gray-700 dark:text-gray-300" />,
    shortDesc: "Heart health assessment and monitoring",
    fullDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non dolor libero. Vestibulum vulputate nisi ut nisl tincidunt, nec feugiat felis condimentum. Advanced cardiac evaluation including ECG, stress tests, and consultation with our cardiac specialists to ensure your heart health.",
    duration: "123 minutes",
    price: "34"
  },
  {
    id: 3,
    title: "Neurology",
    icon: <Brain className="w-6 h-6 text-gray-700 dark:text-gray-300" />,
    shortDesc: "Neurological disorders diagnosis and treatment",
    fullDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt mi ut ligula tincidunt, ac cursus elit posuere. Integer malesuada, ipsum vel vestibulum vestibulum, nulla erat tempor eros, non egestas sapien neque id erat. Comprehensive neurological examination and treatment plans for various neurological conditions, including headaches, seizures, and movement disorders.",
    duration: "789 minutes",
    price: "56"
  },
  {
    id: 4,
    title: "Physical Therapy",
    icon: <Activity className="w-6 h-6 text-gray-700 dark:text-gray-300" />,
    shortDesc: "Rehabilitation and movement therapy",
    fullDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat ipsum ut eros fermentum, id varius odio tincidunt. Sed volutpat vestibulum odio, sed vulputate eros pharetra vel. Personalized physical therapy sessions focusing on rehabilitation, pain management, and improving mobility through targeted exercises and treatments.",
    duration: "987 minutes",
    price: "78"
  }
];


const ServiceModal = ({ service, onClose }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
  >
    <div className="min-h-screen px-4 text-center">
      <div className="fixed inset-0" onClick={onClose}></div>
      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="inline-block w-full max-w-lg p-6 my-8 text-left align-middle bg-white dark:bg-gray-900 rounded-2xl shadow-xl transform transition-all"
      >
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <motion.div 
              initial={{ rotate: -180, scale: 0.5 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg"
            >
              {service.icon}
            </motion.div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{service.fullDesc}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
            Duration: {service.duration}
          </span>
          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
            Fee: {service.price}
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex justify-center items-center gap-2 px-4 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100"
          >
            <Calendar className="w-4 h-4" />
            Schedule Appointment
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClose} 
            className="w-full flex justify-center items-center gap-2 px-4 py-3 border border-gray-700 dark:border-gray-300 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Close
          </motion.button>
        </div>
      </motion.div>
    </div>
  </motion.div>
);

const ServiceCard = ({ service, isExpanded, onToggle, onMobileClick, index }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [height, setHeight] = useState("auto");
  const contentRef = useRef(null);

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { delay: index * 0.1, duration: 0.3 }
      });
    }
  }, [controls, inView, index]);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.offsetHeight);
    }
  }, [isExpanded]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      layout="position"
      className={`group relative p-4 sm:p-6 lg:p-8 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-all duration-300 ease-in-out
        ${isExpanded ? 'sm:col-span-2' : 'hover:shadow-xl hover:-translate-y-1'}`}
      style={{ 
        transformOrigin: "top",
        willChange: "transform, opacity, height"
      }}
      onClick={() => window.innerWidth < 640 ? onMobileClick() : onToggle()}
    >
      <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="p-2 sm:p-3 lg:p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shrink-0 transition-shadow group-hover:shadow-lg"
        >
          {service.icon}
        </motion.div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">
            {service.title}
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300">
            {isExpanded ? service.fullDesc : service.shortDesc}
          </p>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="hidden sm:block"
        >
          <Plus className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 shrink-0 text-gray-700 dark:text-gray-300" />
        </motion.div>
      </div>
      <AnimatePresence mode="popLayout">
        {isExpanded && (
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: 1, 
              height: "auto",
              transition: { 
                height: { type: "spring", stiffness: 500, damping: 30 },
                opacity: { duration: 0.2 }
              }
            }}
            exit={{ 
              opacity: 0,
              height: 0,
              transition: {
                height: { type: "spring", stiffness: 500, damping: 30 },
                opacity: { duration: 0.2 }
              }
            }}
            className="overflow-hidden"
          >
            <div className="mt-4 sm:mt-6 space-y-4">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs sm:text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                  Duration: {service.duration}
                </span>
                <span className="px-3 py-1 text-xs sm:text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                  Fee: {service.price}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button 
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 flex justify-center items-center gap-2 px-3 py-2 sm:py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 text-xs sm:text-sm transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  Schedule Appointment
                </motion.button>
                <motion.button 
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 flex justify-center items-center gap-2 px-3 py-2 sm:py-3 border border-gray-700 dark:border-gray-300 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-xs sm:text-sm transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const MedicalServicesSection = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [modalService, setModalService] = useState(null);
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);
 
  return (
    <section id="services" className="py-8 bg-gradient-to-br from-white to-gray-50 dark:from-black dark:to-black">
            <div             className="max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 rounded-[16px] border border-gray-300 dark:border-gray-700 bg-white dark:bg-black p-6 md:p-8"
            >

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-right text-gray-800 dark:text-white mb-8"
          >
          Medical Services
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-2 sm:px-6">
        {medicalServices.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            index={index}
            isExpanded={expandedService === service.id}
            onToggle={() =>
              setExpandedService(expandedService === service.id ? null : service.id)
            }
            onMobileClick={() => setModalService(service)}
          />
        ))}
      </div>
      </div>
      {modalService && (
        <ServiceModal
          service={modalService}
          onClose={() => setModalService(null)}
        />
      )}
      /</div>
    </section>
  );
};

export default MedicalServicesSection;
