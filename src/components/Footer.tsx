import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-auto">
      <div className="mx-auto max-w-5xl px-4 sm:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-slate-600">
            © 2026 Compensation Calculator. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <a href="#" className="text-sm text-slate-600 hover:text-slate-900">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-slate-600 hover:text-slate-900">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-slate-600 hover:text-slate-900">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
