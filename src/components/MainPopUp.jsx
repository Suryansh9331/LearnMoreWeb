// // // // import React, { useState } from 'react';
// // // // import {
// // // //   X,
// // // //   Headphones,
// // // //   CheckCircle,
// // // //   Clock,
// // // //   Phone as PhoneIcon,
// // // // } from 'lucide-react';

// // // // export default function MainPopUp() {
// // // //   const [showPopup, setShowPopup] = useState(true);

// // // //   // Close when clicking outside the inner box
// // // //   const handlePopupClick = (e) => {
// // // //     if (e.target === e.currentTarget) {
// // // //       setShowPopup(false);
// // // //     }
// // // //   };

// // // //   const closePopup = () => {
// // // //     setShowPopup(false);
// // // //   };

// // // //   const handleCallNow = () => {
// // // //     window.open('tel:+18282421244', '_self');
// // // //   };

// // // //   if (!showPopup) return null;

// // // //   return (
// // // //     <div
// // // //       className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4 md:p-6"
// // // //       onClick={handlePopupClick}
// // // //     >
// // // //       <div className="bg-white rounded-xl sm:rounded-2xl max-w-sm sm:max-w-md lg:max-w-lg w-full mx-2 sm:mx-4 relative animate-popup-slide-up shadow-2xl max-h-[90vh] overflow-y-auto">
// // // //         {/* Close button - larger touch target for mobile */}
// // // //         <button

// // // //           className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200 z-10 p-1 rounded-full hover:bg-gray-100"
// // // //           aria-label="Close popup"
// // // //         >
// // // //           <X size={20} className="sm:w-6 sm:h-6" />
// // // //         </button>

// // // //         {/* Header */}
// // // //         <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4 sm:p-6 rounded-t-xl sm:rounded-t-2xl">
// // // //           <div className="flex items-center space-x-3">
// // // //             <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
// // // //               <Headphones size={20} className="sm:w-6 sm:h-6" />
// // // //             </div>
// // // //             <div className="min-w-0 flex-1">
// // // //               <h2 className="text-lg sm:text-xl font-bold leading-tight">24/7 Support Available</h2>
// // // //               <p className="text-purple-100 text-xs sm:text-sm mt-1">
// // // //                 We're here to help you get started
// // // //               </p>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Content */}
// // // //         <div className="p-4 sm:p-6">
// // // //           <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-6">
// // // //             {/* Instant Setup */}
// // // //             <div className="flex items-start space-x-3">
// // // //               <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
// // // //                 <CheckCircle size={14} className="sm:w-4 sm:h-4 text-green-600" />
// // // //               </div>
// // // //               <div className="min-w-0 flex-1">
// // // //                 <h3 className="font-semibold text-gray-800 text-sm sm:text-base">What to Do if You Receive an Alert</h3>
// // // //                 <p className="text-gray-600 text-xs sm:text-sm mt-1 leading-relaxed">
// // // //                   1. Change Your password
// // // //                     create a new password that is strong and unique to Facebook.
// // // //                 </p>
// // // //                 <p className="text-gray-600 text-xs sm:text-sm mt-1 leading-relaxed">
// // // //                   2. Enable Two-Factor Authentication (2FA)
// // // //                     Add an extra step to your login process to enhance security.
// // // //                 </p>
// // // //                 <p className="text-gray-600 text-xs sm:text-sm mt-1 leading-relaxed">
// // // //                   3. Logout of all devices
// // // //                   <br/>
// // // //                   <br/>
// // // //                     <span className='font-bold'>Note : </span>
// // // //                     Sharing your account with others may trigger these alerts. For more details, see our <span className='underline'>Account Sharing Policy.</span>
// // // //                 </p>
// // // //               </div>
// // // //             </div>

// // // //             {/* Quick Response */}
// // // //             <div className="flex items-start space-x-3">
// // // //               <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
// // // //                 <Clock size={14} className="sm:w-4 sm:h-4 text-blue-600" />
// // // //               </div>
// // // //               <div className="min-w-0 flex-1">
// // // //                 <h3 className="font-semibold text-gray-800 text-sm sm:text-base">Why You're Seeing These Alerts</h3>
// // // //                 <p className="text-gray-600 text-xs sm:text-sm mt-1 leading-relaxed">
// // // //                   1. <span className='font-bold'>Unusual Sign-In Behavior :</span> Logins from unexpected locations or devices.
// // // //                 </p>
// // // //                   <p className="text-gray-600 text-xs sm:text-sm mt-1 leading-relaxed">
// // // //                     2. <span className='font-bold'>Inconsistent Usage Patterns :</span> Sudden spikes in activity or setting changes.
// // // //                 </p>
// // // //                   <p className="text-gray-600 text-xs sm:text-sm mt-1 leading-relaxed">
// // // //                      3. <span className='font-bold'>Multiple Concurrent Sessions :</span> More simultaneous logins than usual.
// // // //                 </p>

// // // //               </div>
// // // //             </div>

// // // //             {/* Personal Assistance */}
// // // //             <div className="flex items-start space-x-3">
// // // //               <div className="w-7 h-7 sm:w-8 sm:h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
// // // //                 <PhoneIcon size={14} className="sm:w-4 sm:h-4 text-purple-600" />
// // // //               </div>
// // // //               <div className="min-w-0 flex-1">
// // // //                 <h3 className="font-semibold text-gray-800 text-sm sm:text-base">Personal Assistance</h3>
// // // //                 <p className="text-gray-600 text-xs sm:text-sm mt-1 leading-relaxed">
// // // //                   These alerts are often cautionary and do not necessarily indicate wrongdoing. They are designed to help protect your account.
// // // //                 </p>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //           {/* Call to action section */}
// // // //           <div className="bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
// // // //             <p className="text-xs sm:text-sm text-gray-700 text-center leading-relaxed">
// // // //               <span className="font-semibold">Need Help?</span>
// // // //             </p>
// // // //             <h1 className="font-bold text-center text-sm sm:text-base mt-2 text-gray-800">
// // // //              If you have any questions or concerns, our support team is here to assist. Visit our Help Center to learn more.
// // // //             </h1>
// // // //           </div>
// // // //           {/* Call Now Button */}
// // // //           <button
// // // //             onClick={handleCallNow}
// // // //             className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 active:from-purple-800 active:to-purple-900 text-white py-3 sm:py-4 px-3 sm:px-6 rounded-lg sm:rounded-xl flex items-center justify-center space-x-2 sm:space-x-3 transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg font-semibold text-sm sm:text-base touch-manipulation"
// // // //           >
// // // //             <PhoneIcon size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />
// // // //             <span className="truncate">Call Now - 1 (844) 403-0233</span>
// // // //           </button>
// // // //           <p className="text-xs text-gray-500 text-center mt-3 leading-relaxed px-2">
// // // //             Available 24/7 • Free consultation • No commitment required
// // // //           </p>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // import React, { useState } from 'react';
// // // import {
// // //   X,
// // //   Shield,
// // //   CheckCircle,
// // //   AlertTriangle,
// // //   Phone,
// // //   HelpCircle,
// // //   PhoneIcon,
// // // } from 'lucide-react';

// // // export default function MainPopUp() {
// // //   const [showPopup, setShowPopup] = useState(true);

// // //   // Close when clicking outside the inner box
// // //   const handlePopupClick = (e) => {
// // //     if (e.target === e.currentTarget) {
// // //       setShowPopup(false);
// // //     }
// // //   };

// // //   const closePopup = () => {
// // //     setShowPopup(false);
// // //   };

// // //   const handleCallNow = () => {
// // //     window.open('tel:+18282421244', '_self');
// // //   };

// // //   if (!showPopup) return null;

// // //   return (
// // //     <div
// // //       className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4 md:p-6"
// // //       onClick={handlePopupClick}
// // //     >
// // //       <div className="bg-white rounded-xl sm:rounded-2xl max-w-sm sm:max-w-md lg:max-w-lg w-full mx-2 sm:mx-4 relative animate-popup-slide-up shadow-2xl max-h-[90vh] overflow-y-auto">
// // //         {/* Close button */}
// // //         <button
// // //           onClick={closePopup}
// // //           className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200 z-10 p-1 rounded-full hover:bg-gray-100"
// // //           aria-label="Close popup"
// // //         >
// // //           <X size={20} className="sm:w-6 sm:h-6" />
// // //         </button>

// // //         {/* Header */}
// // //         <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 sm:p-6 rounded-t-xl sm:rounded-t-2xl">
// // //           <div className="flex items-center space-x-3">
// // //             <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
// // //               <Shield size={20} className="sm:w-6 sm:h-6" />
// // //             </div>
// // //             <div className="min-w-0 flex-1">
// // //               <h2 className="text-lg sm:text-xl font-bold leading-tight">Facebook Security Alert</h2>
// // //               <p className="text-blue-100 text-xs sm:text-sm mt-1">
// // //                 Protect your account with these steps
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Content */}
// // //         <div className="p-4 sm:p-6">

// // //           {/* Why you're seeing alerts */}
// // //           <div className="mb-6">
// // //             <div className="flex items-center space-x-2 mb-3">
// // //               <AlertTriangle size={18} className="text-orange-500" />
// // //               <h3 className="font-bold text-gray-800 text-sm sm:text-base">Why You're Seeing These Alerts</h3>
// // //             </div>
// // //             <div className="bg-orange-50 rounded-lg p-3 space-y-2">
// // //               <div className="flex items-start space-x-2">
// // //                 <span className="text-orange-600 font-semibold text-xs">1.</span>
// // //                 <p className="text-gray-700 text-xs sm:text-sm">
// // //                   <span className="font-semibold">Unusual Sign-In Behavior:</span> Logins from unexpected locations or devices
// // //                 </p>
// // //               </div>
// // //               <div className="flex items-start space-x-2">
// // //                 <span className="text-orange-600 font-semibold text-xs">2.</span>
// // //                 <p className="text-gray-700 text-xs sm:text-sm">
// // //                   <span className="font-semibold">Inconsistent Usage Patterns:</span> Sudden spikes in activity or setting changes
// // //                 </p>
// // //               </div>
// // //               <div className="flex items-start space-x-2">
// // //                 <span className="text-orange-600 font-semibold text-xs">3.</span>
// // //                 <p className="text-gray-700 text-xs sm:text-sm">
// // //                   <span className="font-semibold">Multiple Concurrent Sessions:</span> More simultaneous logins than usual
// // //                 </p>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* What to do */}
// // //           <div className="mb-6">
// // //             <div className="flex items-center space-x-2 mb-3">
// // //               <CheckCircle size={18} className="text-green-500" />
// // //               <h3 className="font-bold text-gray-800 text-sm sm:text-base">What You Should Do Now</h3>
// // //             </div>
// // //             <div className="bg-green-50 rounded-lg p-3 space-y-3">
// // //               <div className="flex items-start space-x-3">
// // //                 <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
// // //                   <span className="text-green-600 font-bold text-xs">1</span>
// // //                 </div>
// // //                 <div>
// // //                   <h4 className="font-semibold text-gray-800 text-xs sm:text-sm">Change Your Password</h4>
// // //                   <p className="text-gray-600 text-xs mt-1">Create a new password that is strong and unique to Facebook</p>
// // //                 </div>
// // //               </div>

// // //               <div className="flex items-start space-x-3">
// // //                 <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
// // //                   <span className="text-green-600 font-bold text-xs">2</span>
// // //                 </div>
// // //                 <div>
// // //                   <h4 className="font-semibold text-gray-800 text-xs sm:text-sm">Enable Two-Factor Authentication (2FA)</h4>
// // //                   <p className="text-gray-600 text-xs mt-1">Add an extra security step to your login process</p>
// // //                 </div>
// // //               </div>

// // //               <div className="flex items-start space-x-3">
// // //                 <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
// // //                   <span className="text-green-600 font-bold text-xs">3</span>
// // //                 </div>
// // //                 <div>
// // //                   <h4 className="font-semibold text-gray-800 text-xs sm:text-sm">Logout of All Devices</h4>
// // //                   <p className="text-gray-600 text-xs mt-1">End all active sessions on other devices for security</p>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Important note */}
// // //           <div className="mb-6">
// // //             <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-r-lg">
// // //               <div className="flex items-start space-x-2">
// // //                 <HelpCircle size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
// // //                 <div>
// // //                   <p className="text-blue-800 text-xs sm:text-sm">
// // //                     <span className="font-semibold">Important:</span> These alerts are often cautionary and don't necessarily indicate wrongdoing. They're designed to help protect your account.
// // //                   </p>
// // //                   <p className="text-blue-700 text-xs mt-2">
// // //                     Sharing your account with others may trigger these alerts. See our <span className="underline cursor-pointer">Account Sharing Policy</span> for details.
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Call to action section */}
// // //           <div className="bg-gray-50 rounded-lg sm:rounded-xl p-4 mb-4">
// // //             <div className="text-center">
// // //               <h4 className="font-bold text-gray-800 text-sm sm:text-base mb-2">Need Help?</h4>
// // //               <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
// // //                 If you have questions or concerns, our support team is available 24/7 to assist you. Visit our Help Center to learn more.
// // //               </p>
// // //             </div>
// // //           </div>

// // //           {/* Call Now Button */}
// // //           <button
// // //             onClick={handleCallNow}
// // //             className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 active:from-blue-800 active:to-blue-900 text-white py-3 sm:py-4 px-3 sm:px-6 rounded-lg sm:rounded-xl flex items-center justify-center space-x-2 sm:space-x-3 transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg font-semibold text-sm sm:text-base touch-manipulation"
// // //           >
// // //             <PhoneIcon size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />
// // //             <span className="truncate">Call Support: 1 (844) 403-0233</span>
// // //           </button>
// // //           <p className="text-xs text-gray-500 text-center mt-3 leading-relaxed px-2">
// // //             Available 24/7 • Free consultation • Immediate assistance
// // //           </p>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // import React, { useState } from 'react';
// // import {
// //   X,
// //   Shield,
// //   CheckCircle,
// //   AlertTriangle,
// //   Phone,
// //   HelpCircle,
// // } from 'lucide-react';
// // import { Link } from 'react-router-dom';

// // export default function MainPopUp() {
// //   const [showPopup, setShowPopup] = useState(true);

// //   // Close when clicking outside the inner box
// //   const handlePopupClick = (e) => {
// //     if (e.target === e.currentTarget) {
// //       setShowPopup(false);
// //     }
// //   };

// //   const closePopup = () => {
// //     setShowPopup(false);
// //   };

// //   const handleCallNow = () => {
// //     window.open('tel:+18282421244', '_self');
// //   };

// //   if (!showPopup) return null;

// //   return (
// //     <div
// //       className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4 md:p-6"
// //       onClick={handlePopupClick}
// //     >
// //       <div className="bg-white rounded-xl sm:rounded-2xl max-w-sm sm:max-w-md lg:max-w-lg w-full mx-2 sm:mx-4 relative animate-popup-slide-up shadow-2xl">
// //         {/* Close button */}
// //         <button
// //           className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200 z-10 p-1 rounded-full hover:bg-gray-100"
// //           aria-label="Close popup"
// //         >
// //           <X size={20} className="sm:w-6 sm:h-6" />
// //         </button>
// //         {/* Header */}
// //         <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 sm:p-4 rounded-t-xl sm:rounded-t-2xl">
// //           <div className="flex items-center space-x-2">
// //             <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
// //               <Shield size={16} className="sm:w-5 sm:h-5" />
// //             </div>
// //             <div className="min-w-0 flex-1">
// //               <h2 className="text-base sm:text-lg font-bold leading-tight">Facebook Security Alert</h2>
// //               <p className="text-blue-100 text-xs mt-0.5">
// //                 Protect your account with these steps
// //               </p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Content */}
// //         <div className="p-3 sm:p-4">

// //           {/* Why you're seeing alerts */}
// //           <div className="mb-4">
// //             <div className="flex items-center space-x-2 mb-2">
// //               <AlertTriangle size={16} className="text-orange-500" />
// //               <h3 className="font-bold text-gray-800 text-sm">Why You're Seeing These Alerts</h3>
// //             </div>
// //             <div className="bg-orange-50 rounded-lg p-2 space-y-1">
// //               <p className="text-gray-700 text-xs">
// //                 <span className="font-semibold">1. Unusual Sign-In:</span> Logins from unexpected locations
// //               </p>
// //               <p className="text-gray-700 text-xs">
// //                 <span className="font-semibold">2. Usage Patterns:</span> Sudden activity spikes or changes
// //               </p>
// //               <p className="text-gray-700 text-xs">
// //                 <span className="font-semibold">3. Multiple Sessions:</span> More simultaneous logins than usual
// //               </p>
// //             </div>
// //           </div>

// //           {/* What to do */}
// //           <div className="mb-4">
// //             <div className="flex items-center space-x-2 mb-2">
// //               <CheckCircle size={16} className="text-green-500" />
// //               <h3 className="font-bold text-gray-800 text-sm">What You Should Do Now</h3>
// //             </div>
// //             <div className="bg-green-50 rounded-lg p-2 space-y-2">
// //               <div className="flex items-start space-x-2">
// //                 <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
// //                   <span className="text-green-600 font-bold text-xs">1</span>
// //                 </div>
// //                 <div>
// //                   <h4 className="font-semibold text-gray-800 text-xs">Change Your Password</h4>
// //                   <p className="text-gray-600 text-xs">Create a strong, unique password</p>
// //                 </div>
// //               </div>

// //               <div className="flex items-start space-x-2">
// //                 <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
// //                   <span className="text-green-600 font-bold text-xs">2</span>
// //                 </div>
// //                 <div>
// //                   <h4 className="font-semibold text-gray-800 text-xs">Enable 2FA</h4>
// //                   <p className="text-gray-600 text-xs">Add extra security to login</p>
// //                 </div>
// //               </div>

// //               <div className="flex items-start space-x-2">
// //                 <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
// //                   <span className="text-green-600 font-bold text-xs">3</span>
// //                 </div>
// //                 <div>
// //                   <h4 className="font-semibold text-gray-800 text-xs">Logout All Devices</h4>
// //                   <p className="text-gray-600 text-xs">End all active sessions</p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Important note */}
// //           <div className="mb-4">
// //             <div className="bg-blue-50 border-l-4 border-blue-400 p-2 rounded-r-lg">
// //               <div className="flex items-start space-x-2">
// //                 <HelpCircle size={14} className="text-blue-500 flex-shrink-0 mt-0.5" />
// //                 <div>
// //                   <p className="text-blue-800 text-xs">
// //                     <span className="font-semibold">Important:</span> These alerts are cautionary and help protect your account.
// //                   </p>
// //                   <p className="text-blue-700 text-xs mt-1">
// //                     Account sharing may trigger alerts. See our <span className="underline cursor-pointer">Account Sharing Policy</span>.
// //                   </p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Call to action section */}
// //           <div className="bg-gray-50 rounded-lg p-3 mb-3">
// //             <div className="text-center">
// //               <h4 className="font-bold text-gray-800 text-sm mb-1">Need Help?</h4>
// //               <p className="text-gray-600 text-xs leading-relaxed">
// //                 Our support team is available 24/7 to assist you.
// //               </p>
// //             </div>
// //           </div>

// //           {/* Call Now Button */}
// //           <button
// //             onClick={handleCallNow}
// //             className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 active:from-blue-800 active:to-blue-900 text-white py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg font-semibold text-sm touch-manipulation"
// //           >
// //             <Phone size={16} className="flex-shrink-0" />
// //             <span className="truncate">Call Support: 1 (844) 403-0233</span>
// //           </button>
// //           <p className="text-xs text-gray-500 text-center mt-2 leading-relaxed">
// //             Available 24/7 • Free consultation • Immediate assistance
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useState } from 'react';
// import {
//   X,
//   Shield,
//   CheckCircle,
//   AlertTriangle,
//   Phone,
//   HelpCircle,
// } from 'lucide-react';

// export default function MainPopUp() {
//   const [showPopup, setShowPopup] = useState(true);

//   // Close when clicking outside the inner box
//   const handlePopupClick = (e) => {
//     if (e.target === e.currentTarget) {
//       setShowPopup(false);
//     }
//   };

//   const closePopup = () => {
//     setShowPopup(false);
//   };

//   const handleCallNow = () => {
//     window.open('tel:+18282421244', '_self');
//   };

//   if (!showPopup) return null;

//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4 md:p-6"
//       onClick={handlePopupClick}
//     >
//       <div className="bg-white rounded-xl sm:rounded-2xl max-w-sm sm:max-w-md lg:max-w-lg w-full mx-2 sm:mx-4 relative animate-popup-slide-up shadow-2xl">
//         {/* Close button */}
//         <button
//           onClick={closePopup}
//           className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200 z-10 p-1 rounded-full hover:bg-gray-100"
//           aria-label="Close popup"
//         >
//           <X size={20} className="sm:w-6 sm:h-6" />
//         </button>

//         {/* Header */}
//         <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 sm:p-4 rounded-t-xl sm:rounded-t-2xl">
//           <div className="flex items-center space-x-2">
//             <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
//               <Shield size={16} className="sm:w-5 sm:h-5" />
//             </div>
//             <div className="min-w-0 flex-1">
//               <h2 className="text-lg sm:text-xl font-bold leading-tight">Facebook Security Alert</h2>
//               <p className="text-blue-100 text-sm mt-0.5">
//                 Protect your account with these steps
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="p-3 sm:p-4">

//           {/* Why you're seeing alerts */}
//           <div className="mb-4">
//             <div className="flex items-center space-x-2 mb-2">
//               <AlertTriangle size={18} className="text-orange-500" />
//               <h3 className="font-bold text-gray-800 text-sm sm:text-base">Why You're Seeing These Alerts</h3>
//             </div>
//             <div className="bg-orange-50 rounded-lg p-2 space-y-1">
//               <p className="text-gray-700 text-sm sm:text-base">
//                 <span className="font-semibold">1. Unusual Sign-In:</span> Logins from unexpected locations
//               </p>
//               <p className="text-gray-700 text-sm sm:text-base">
//                 <span className="font-semibold">2. Usage Patterns:</span> Sudden activity spikes or changes
//               </p>
//               <p className="text-gray-700 text-sm sm:text-base">
//                 <span className="font-semibold">3. Multiple Sessions:</span> More simultaneous logins than usual
//               </p>
//             </div>
//           </div>

//           {/* What to do */}
//           <div className="mb-4">
//             <div className="flex items-center space-x-2 mb-2">
//               <CheckCircle size={18} className="text-green-500" />
//               <h3 className="font-bold text-gray-800 text-sm sm:text-base">What You Should Do Now</h3>
//             </div>
//             <div className="bg-green-50 rounded-lg p-2 space-y-2">
//               <div className="flex items-start space-x-2">
//                 <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
//                   <span className="text-green-600 font-bold text-sm">1</span>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Change Your Password</h4>
//                   <p className="text-gray-600 text-sm">Create a strong, unique password</p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-2">
//                 <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
//                   <span className="text-green-600 font-bold text-sm">2</span>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Enable 2FA</h4>
//                   <p className="text-gray-600 text-sm">Add extra security to login</p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-2">
//                 <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
//                   <span className="text-green-600 font-bold text-sm">3</span>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Logout All Devices</h4>
//                   <p className="text-gray-600 text-sm">End all active sessions</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Important note */}
//           <div className="mb-4">
//             <div className="bg-blue-50 border-l-4 border-blue-400 p-2 rounded-r-lg">
//               <div className="flex items-start space-x-2">
//                 <HelpCircle size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
//                 <div>
//                   <p className="text-blue-800 text-sm">
//                     <span className="font-semibold">Important:</span> These alerts are cautionary and help protect your account.
//                   </p>
//                   <p className="text-blue-700 text-sm mt-1">
//                     Account sharing may trigger alerts. See our <span className="underline cursor-pointer">Account Sharing Policy</span>.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Call to action section */}
//           <div className="bg-gray-50 rounded-lg p-3 mb-3">
//             <div className="text-center">
//               <h4 className="font-bold text-gray-800 text-base mb-1">Need Help?</h4>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 Our support team is available 24/7 to assist you.
//               </p>
//             </div>
//           </div>

//           {/* Call Now Button */}
//           <button
//             onClick={handleCallNow}
//             className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 active:from-blue-800 active:to-blue-900 text-white py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg font-semibold text-base touch-manipulation"
//           >
//             <Phone size={18} className="flex-shrink-0" />
//             <span className="truncate">Call Support: 1 (844) 403-0233</span>
//           </button>
//           <p className="text-sm text-gray-500 text-center mt-2 leading-relaxed">
//             Available 24/7 • Free consultation • Immediate assistance
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }





// // present Code

// "use client"

// import { useState } from "react"
// import { X, Shield, CheckCircle, AlertTriangle, Phone, HelpCircle } from "lucide-react"

// export default function MainPopUp() {
//   const [showPopup, setShowPopup] = useState(true)

//   // Close when clicking outside the inner box
//   const handlePopupClick = (e) => {
//     if (e.target === e.currentTarget) {
//       setShowPopup(false)
//     }
//   }

//   const closePopup = () => {
//     setShowPopup(false)
//   }

//   const handleCallNow = () => {
//     window.open("tel:+18282421244", "_self")
//   }

//   if (!showPopup) return null

//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4 md:p-6"
//       onClick={handlePopupClick}
//     >
//       <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-2 sm:mx-4 relative animate-popup-slide-up shadow-2xl max-h-[95vh] sm:max-h-[90vh] flex flex-col">
//         {/* Close button */}
//         <button
//           onClick={closePopup}
//           className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200 z-10 p-1.5 sm:p-2 rounded-full hover:bg-gray-100 touch-manipulation"
//           aria-label="Close popup"
//         >
//           <X size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
//         </button>

//         {/* Header */}
//         <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 sm:p-4 md:p-5 rounded-t-lg sm:rounded-t-xl md:rounded-t-2xl flex-shrink-0">
//           <div className="flex items-center space-x-2 sm:space-x-3">
//             <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
//               <Shield size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
//             </div>
//             <div className="min-w-0 flex-1">
//               <h2 className="text-base sm:text-lg md:text-xl font-bold leading-tight">Facebook Security Alert</h2>
//               <p className="text-blue-100 text-xs sm:text-sm mt-0.5">Protect your account with these steps</p>
//             </div>
//           </div>
//         </div>

//         {/* Content - Scrollable */}
//         <div className="p-3 sm:p-4 md:p-5 overflow-y-auto flex-1">
//           {/* Why you're seeing alerts */}
//           <div className="mb-3 sm:mb-4">
//             <div className="flex items-center space-x-2 mb-2">
//               <AlertTriangle size={16} className="sm:w-5 sm:h-5 text-orange-500 flex-shrink-0" />
//               <h3 className="font-bold text-gray-800 text-sm sm:text-base md:text-lg">
//                 Why You're Seeing These Alerts
//               </h3>
//             </div>
//             <div className="bg-orange-50 rounded-lg p-2 sm:p-3 space-y-1.5 sm:space-y-2">
//               <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
//                 <span className="font-semibold">1. Unusual Sign-In:</span> Logins from unexpected locations
//               </p>
//               <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
//                 <span className="font-semibold">2. Usage Patterns:</span> Sudden activity spikes or changes
//               </p>
//               <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
//                 <span className="font-semibold">3. Multiple Sessions:</span> More simultaneous logins than usual
//               </p>
//             </div>
//           </div>

//           {/* What to do */}
//           <div className="mb-3 sm:mb-4">
//             <div className="flex items-center space-x-2 mb-2">
//               <CheckCircle size={16} className="sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
//               <h3 className="font-bold text-gray-800 text-sm sm:text-base md:text-lg">What You Should Do Now</h3>
//             </div>
//             <div className="bg-green-50 rounded-lg p-2 sm:p-3 space-y-2 sm:space-y-3">
//               <div className="flex items-start space-x-2 sm:space-x-3">
//                 <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
//                   <span className="text-green-600 font-bold text-xs sm:text-sm">1</span>
//                 </div>
//                 <div className="min-w-0 flex-1">
//                   <h4 className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base">Change Your Password</h4>
//                   <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Create a strong, unique password</p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-2 sm:space-x-3">
//                 <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
//                   <span className="text-green-600 font-bold text-xs sm:text-sm">2</span>
//                 </div>
//                 <div className="min-w-0 flex-1">
//                   <h4 className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base">Enable 2FA</h4>
//                   <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Add extra security to login</p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-2 sm:space-x-3">
//                 <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
//                   <span className="text-green-600 font-bold text-xs sm:text-sm">3</span>
//                 </div>
//                 <div className="min-w-0 flex-1">
//                   <h4 className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base">Logout All Devices</h4>
//                   <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">End all active sessions</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Important note */}
//           <div className="mb-3 sm:mb-4">
//             <div className="bg-blue-50 border-l-4 border-blue-400 p-2 sm:p-3 rounded-r-lg">
//               <div className="flex items-start space-x-2">
//                 <HelpCircle size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5 text-blue-500 flex-shrink-0 mt-0.5" />
//                 <div className="min-w-0 flex-1">
//                   <p className="text-blue-800 text-xs sm:text-sm leading-relaxed">
//                     <span className="font-semibold">Important:</span> These alerts are cautionary and help protect your
//                     account.
//                   </p>
//                   <p className="text-blue-700 text-xs sm:text-sm mt-1 leading-relaxed">
//                     Account sharing may trigger alerts. See our{" "}
//                     <span className="underline cursor-pointer">Account Sharing Policy</span>.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Call to action section */}
//           {/* <div className="bg-gray-50 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4">
//             <div className="text-center">
//               <h4 className="font-bold text-gray-800 text-sm sm:text-base md:text-lg mb-1">Need Help?</h4>
//               <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
//                 Our support team is available 24/7 to assist you.
//               </p>
//             </div>
//           </div> */}
//         </div>

//         {/* Call Now Button - Fixed at bottom */}
//         <div className="p-3 sm:p-4 md:p-5 pt-0 flex-shrink-0">
//           <button
//             onClick={handleCallNow}
//             className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 active:from-blue-800 active:to-blue-900 text-white py-3 sm:py-3.5 md:py-4 px-4 rounded-lg flex items-center justify-center space-x-2 transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg font-semibold text-sm sm:text-base touch-manipulation min-h-[44px] sm:min-h-[48px]"
//           >
//             <Phone size={16} className="sm:w-5 sm:h-5 flex-shrink-0" />
//             <span className="truncate">Call Support: 1 (844) 403-0233</span>
//           </button>
//           <p className="text-xs sm:text-sm text-gray-500 text-center mt-2 leading-relaxed">
//             Available 24/7 • Free consultation • Immediate assistance
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }


















"use client";

import { useState } from "react";
import {
  X,
  Shield,
  CheckCircle,
  AlertTriangle,
  Phone,
  HelpCircle,
} from "lucide-react";

export default function MainPopUp() {
  const [showPopup, setShowPopup] = useState(true);

  // Close when clicking outside the inner box
  const handlePopupClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowPopup(false);
    }
  };

  // const closePopup = () => {
  //   setShowPopup(false)
  // }

  const handleCallNow = () => {
    window.open("tel:+1 180 657 72186", "_self");
  };

  if (!showPopup) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4 md:p-6"
      onClick={handlePopupClick}
    >
      <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-2 sm:mx-4 relative animate-popup-slide-up shadow-2xl max-h-[95vh] sm:max-h-[90vh] flex flex-col min-w-0">
        {/* Close button */}
        <button
          className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200 z-10 p-1.5 sm:p-2 rounded-full hover:bg-gray-100 touch-manipulation"
          aria-label="Close popup"
        >
          <X size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 sm:p-4 md:p-5 rounded-t-lg sm:rounded-t-xl md:rounded-t-2xl flex-shrink-0">
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
              <Shield size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </div> */}
            <div className="min-w-0 flex-1">
              <h2 className="text-base sm:text-lg md:text-xl font-bold leading-tight">
                Facebook Security Alert
              </h2>
              <p className="text-blue-100 text-xs sm:text-sm mt-0.5">
                Protect your account with these steps
              </p>
            </div>
          </div>
        </div>

        {/* Content - Scrollable */}
        <div className="p-3 sm:p-4 md:p-5 overflow-y-auto flex-1">
          {/* Why you're seeing alerts */}
          <div className="mb-3 sm:mb-4">
            <div className="flex items-center space-x-2 mb-2">
              <AlertTriangle
                size={16}
                className="sm:w-5 sm:h-5 text-orange-500 flex-shrink-0"
              />
              <h3 className="font-bold text-gray-800 text-sm sm:text-base md:text-lg">
                Why You're Seeing These Alerts
              </h3>
            </div>
            <div className="bg-orange-50 rounded-lg p-2 sm:p-3 space-y-1.5 sm:space-y-2">
              <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                <span className="font-semibold">1. Unusual Sign-In:</span>{" "}
                Logins from unexpected locations
              </p>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                <span className="font-semibold">2. Usage Patterns:</span> Sudden
                activity spikes or changes
              </p>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                <span className="font-semibold">3. Multiple Sessions:</span>{" "}
                More simultaneous logins than usual
              </p>
            </div>
          </div>

          {/* What to do */}
          <div className="mb-3 sm:mb-4">
            <div className="flex items-center space-x-2 mb-2">
              <CheckCircle
                size={16}
                className="sm:w-5 sm:h-5 text-green-500 flex-shrink-0"
              />
              <h3 className="font-bold text-gray-800 text-sm sm:text-base md:text-lg">
                What You Should Do Now
              </h3>
            </div>
            <div className="bg-green-50 rounded-lg p-2 sm:p-3 space-y-2 sm:space-y-3">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-600 font-bold text-xs sm:text-sm">
                    1
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base">
                    Change Your Password
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Create a strong, unique password
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-2 sm:space-x-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-600 font-bold text-xs sm:text-sm">
                    2
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base">
                    Enable 2FA
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Add extra security to login
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-2 sm:space-x-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-600 font-bold text-xs sm:text-sm">
                    3
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base">
                    Logout All Devices
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    End all active sessions
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Important note */}
          <div className="mb-3 sm:mb-4">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-2 sm:p-3 rounded-r-lg">
              <div className="flex items-start space-x-2">
                <HelpCircle
                  size={14}
                  className="sm:w-4 sm:h-4 md:w-5 md:h-5 text-blue-500 flex-shrink-0 mt-0.5"
                />
                <div className="min-w-0 flex-1">
                  <p className="text-blue-800 text-xs sm:text-sm leading-relaxed">
                    <span className="font-semibold">Important:</span> These
                    alerts are cautionary and help protect your account.
                  </p>
                  <p className="text-blue-700 text-xs sm:text-sm mt-1 leading-relaxed">
                    Account sharing may trigger alerts. See our{" "}
                    <span  onClick={handleCallNow} className="underline cursor-pointer">
                      Account Sharing Policy
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to action section - Commented out as in original */}
          {/* <div className="bg-gray-50 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4">
            <div className="text-center">
              <h4 className="font-bold text-gray-800 text-sm sm:text-base md:text-lg mb-1">Need Help?</h4>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Our support team is available 24/7 to assist you.
              </p>
            </div>
          </div> */}
        </div>

        {/* Call Now Button - Fixed at bottom */}
        <div className="p-3 sm:p-4 md:p-5 pt-0 flex-shrink-0">
          <button
            onClick={handleCallNow}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 active:from-blue-800 active:to-blue-900 text-white py-3 sm:py-3.5 md:py-4 px-4 rounded-lg flex items-center justify-center space-x-2 transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg font-semibold text-sm sm:text-base touch-manipulation min-h-[44px] sm:min-h-[48px]"
          >
            <Phone size={16} className="sm:w-5 sm:h-5 flex-shrink-0" />
            <span className="truncate">Call Support:  </span>
          </button>
          <p className="text-xs sm:text-sm text-gray-500 text-center mt-2 leading-relaxed">
            Available 24/7 • Free consultation • Immediate assistance
          </p>
        </div>
      </div>

      {/* Additional CSS for enhanced mobile responsiveness */}
      <style jsx>{`
        /* Handle very small screens better */
        @media (max-width: 374px) {
          .max-w-xs {
            max-width: calc(100vw - 16px);
          }
        }

        /* Improve touch targets on mobile */
        @media (max-width: 640px) {
          button {
            min-height: 44px;
          }
        }

        /* Handle landscape mobile orientation */
        @media (max-height: 500px) and (orientation: landscape) {
          .max-h-[95vh] {
            max-height: 90vh;
          }
        }

        /* Better scrolling on iOS */
        .overflow-y-auto {
          -webkit-overflow-scrolling: touch;
        }

        /* Prevent zoom on double tap */
        * {
          touch-action: manipulation;
        }

        /* Better text readability on small screens */
        @media (max-width: 320px) {
          .text-xs {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </div>
  );
}
