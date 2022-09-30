import React from "react";
import Nav from "../Navbar/Nav";

function Aboutus() {
  return (
    <div>
      <Nav />
      <div className="flex justify-center px-4 pt-4">
        <div className=" text-gray-200 text-2xl w-7/12 flex-col justify-center bg-gray-800 text-center mt-10 rounded-md shadow-xl">
          <div className="w-full flex mb-4 p-5">
            <h1 className="text-[#00df9a] font-bold font-3xl float-left">
              How does BlockChain support Crowdfunding ?
            </h1>
          </div>
          <div className="p-5">
            The Crowdfunding platform in block-chain makes different
            possibilities for the startups by raising the funds to create their
            own digital currency and it is peer-to-peer fund raising model some
            of the famous crowdfunding cryptocurrencies are coinspace, swarm,
            judobaby etc. Crowdfunding has offers for creators and other
            consumers. Anyone can participate in this crowdfunding if they have
            invented any new cryptocurrency (e.g., Ethereum) and also can
            contribute as much as they want.
          </div>
          <div className="mt-6">
            How does BlockChain support Crowdfunding ? There are several areas
            where block-chain supports and improves crowdfunding, crowdfunding
            platforms powered by blockchain technology removes the need for
            intermediate third party.
            <ul>
              <li>
                <span className="font-bold text-[#00df9a]">
                  Decentralization
                </span>
                : Since block-chain is decentralized it doesn’t rely on any
                other platforms to create funds. for starters, no longer to be
                obliged to any rules and any project can get visibility and
                funded if the investors think to invest, eliminates fees which
                makes crowdfunding less expensive for the creators.
              </li>
              <li>
                <span className="font-bold mt-3 text-[#00df9a]">
                  Access Equity
                </span>
                : To provide investors equity or ownership block-chain relies on
                asset tokenization. For example, a person who plans to create
                multiple new products with the incoming funds and grant small
                ownerships stake in the company.This could potentially open
                whole new world of opportunity.
              </li>
              <li>
                <span className="font-bold text-[#00df9a]">
                  Universal Opportunity
                </span>
                : Any project using a block-chain-based crowdfunding model can
                get funded. Any person with an internet connection can
                contribute projects.
              </li>
              <li>
                <span className="font-bold text-[#00df9a]">
                  Flexible Options
                </span>
                : Using block-chain as asset tokenization grants creators and
                enterpreneurs more liberties.usually asset tokens have their own
                currency to enable organizations to hire professionals and
                advertisers.
              </li>
            </ul>
          </div>
          {/* <div className="flex"></div> */}
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
