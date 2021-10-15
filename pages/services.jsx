import Head from "next/head";
import { useState } from "react";

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <Head>
        <title>Dev's PC Repairs</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <section className="max-w-7xl mx-auto text-3xl">
        <div className="h-screen flex flex-col justify-center mx-2 ">
          <div className="flex justify-between text-center" id="tab-header">
            {["PC", "Apple", "Laptop", "Android", "Apple Phone"].map(
              (item, index) => {
                let isActive = activeTab === index;
                return (
                  <span
                    className={`cursor-pointer w-1/5 `}
                    onClick={() => setActiveTab(index)}
                  >
                    {item}
                    {isActive ? (
                      <hr className="transition duration-1000 ease-in-out h-1 w-full bg-primary" />
                    ) : (
                      <hr className="border-white" />
                    )}
                  </span>
                );
              }
            )}
          </div>
          <div id="tab-content">
            {activeTab === 0 ? <div id="content"> Content 1</div> : null}
            {activeTab === 1 ? <div id="content"> Content 2</div> : null}
            {activeTab === 2 ? <div id="content"> Content 3</div> : null}
            {activeTab === 3 ? <div id="content"> Content 4</div> : null}
            {activeTab === 4 ? <div id="content"> Content 5</div> : null}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
