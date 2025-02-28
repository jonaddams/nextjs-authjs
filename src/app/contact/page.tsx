const Page: React.FC = async () => {
  return (
    <div className="container mx-auto flex min-h-screen justify-center px-4 sm:px-6 lg:px-8 2xl:max-w-screen-2xl">
      <section className="w-full">
        <h2 className="mb-4 text-xl">Contact Us</h2>
        <p className="">
          If you have any questions or concerns, please contact us at{" "}
          <a className="text-blue-600" href="mailto:lordbusiness@octan.com">
            lord.business@octan.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default Page;
