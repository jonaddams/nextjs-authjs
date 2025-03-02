const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="mx-auto p-4 md:flex md:items-center md:justify-between 2xl:max-w-screen-2xl">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()}{" "}
          <a href="#" className="hover:underline">
            Octan
          </a>
          . All Rights Reserved.
        </span>
        <ul className="mt-3 flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mt-0 dark:text-gray-400">
          <li>
            <a href="/about" className="me-4 hover:underline md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="/terms" className="me-4 hover:underline md:me-6">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="privacy" className="me-4 hover:underline md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
