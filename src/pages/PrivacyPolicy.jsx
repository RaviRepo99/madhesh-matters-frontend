import React from 'react'
import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  return (
    <>
      <div className="bg-red-600 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="text-red-100 mt-2">Last updated: March 10, 2026</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto rounded-lg shadow-lg p-8 md:p-12">
          {/* Important Notice */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8 rounded">
            <h2 className="text-xl font-bold text-blue-800 mb-2">Project Notice</h2>
            <p className="text-blue-700 leading-relaxed">
              <strong>This website is a demonstration news platform created as a personal portfolio project.</strong> Madhesh Matters has been developed to showcase technical skills in modern web development. This is not a real news service and does not collect, store, or process real user data for commercial purposes.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Welcome to Madhesh Matters. This Privacy Policy explains how information is handled in this demonstration project. As this platform is created only for educational and portfolio purposes, no personal data is actively collected or used beyond technical demonstration.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">2. Information We Collect</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Since this is a demonstration project:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
              <li>No personal information is collected from visitors</li>
              <li>No cookies are used for tracking purposes</li>
              <li>No analytics or monitoring tools are implemented</li>
              <li>Admin authentication exists only to demonstrate CMS functionality</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">3. How We Use Information</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Any data present within this application is for demonstration purposes only. The admin features are designed to showcase content management capabilities and are not intended for real user data processing.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">4. Data Security</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Although this is a demonstration project, basic security best practices have been implemented, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
              <li>Secure authentication mechanisms</li>
              <li>Input validation</li>
              <li>Controlled access to administrative features</li>
            </ul>
            <p className="text-gray-700 mb-6 leading-relaxed">
              However, as this is not a production service, users should not enter or store any sensitive or personal information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">5. Third-Party Services</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              This demonstration project does not integrate with third-party services for data collection, analytics, 
              or advertising purposes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">6. Your Rights</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Since no personal data is collected, there is no user data to access, modify, or delete. This platform exists purely as a technical showcase within the developer’s portfolio.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">7. Changes to This Policy</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              This Privacy Policy may be updated as the project evolves. Any updates will be reflected on this page along with a revised date.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">8. Contact Information</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              For questions about this project or its technical implementation, please contact:
            </p>
            <ul className="list-none text-gray-700 mb-6 space-y-2">
              <li>
                <strong>Developer:</strong> Mitesh Mandal
              </li>
              <li><strong>Email:</strong> contactme@miteshmandal.com</li>
              <li><strong>Location:</strong> Kathmandu, Nepal</li>
            </ul>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link 
                to="/" 
                className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
