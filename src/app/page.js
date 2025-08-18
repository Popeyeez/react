const Home = () => {
  return (
    <div className="flex">
      <div className="pt-10">
        <div class="w-120 h-125 rounded-md border-black">
          <p class="text-indigo-700 pt-10 pl-10 text-xl ">Hobby</p>
          <div className="flex gap-[15px] pl-10 pt-3">
            <div className="flex gap-3">
              <p className="text-5xl text-black font-bold"> 29$ </p>
              <p className="text-black pt-5"> /month</p>
            </div>
          </div>
          <div className="pl-10 pt-5">
            <p className="text-black">
              The perfect plan if you're just getting started with our product.
            </p>
          </div>
          <div className="text-black pt-12 pl-10 flex-col flex gap-4">
            <p>25 products</p>
            <p>Up to 10,000 subscribers</p>
            <p>Advanced analytics</p>
            <p>24-hour support response time</p>
          </div>
          <div className="flex justify-center align-center pt-13 content-center">
            <div className="w-100 bg-white-400 h-10 flex justify-center rounded-xl align-center text-indigo-400 items-center ">
              Get started today
            </div>
          </div>
        </div>
      </div>
      <div class="w-120 h-145 bg-gray-900 rounded-2xl">
        <p class="text-indigo-400 pt-10 pl-10 text-xl">Enterprise</p>
        <div className="flex gap-[15px] pl-10 pt-3">
          <div className="flex gap-3">
            <p className="text-5xl text-white font-bold"> 99$ </p>
            <p className="text-white pt-5"> /month</p>
          </div>
        </div>
        <div className="pl-10 pt-5">
          <p className="text-white">
            Dedicated support and infrastructure for your company.
          </p>
        </div>
        <div className="text-white pt-12 pl-10 flex-col flex gap-4">
          <p>Unlimited products</p>
          <p>Unlimited subscribers</p>
          <p>Advanced analytics</p>
          <p>Dedicated support representative</p>
          <p>Marketing automations</p>
          <p>Custom integrations</p>
        </div>
        <div className="flex justify-center align-center pt-13 content-center">
          <div className="w-100 bg-indigo-400 h-10 flex justify-center rounded-xl align-center text-white items-center">
            Get started today
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
