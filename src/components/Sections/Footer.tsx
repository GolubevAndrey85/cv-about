import {ChevronUpIcon} from '@heroicons/react/24/solid';
// import axios from 'axios';
import {FC, memo, useEffect, useState} from 'react';

import {SectionId} from '../../data/data';
import {GeoIPPayload} from '../../data/dataDef';
import Socials from '../Socials';

const Footer: FC = memo(() => {
  const [geoData, setIP] = useState<GeoIPPayload | null>(null);

  // const getData = async () => {
  //   const res = await axios.get("https://ipapi.co/json/");
  //   setIP(res.data);
  // };

  useEffect(() => {
    fetch('https://ipapi.co/json/')
    .then(res => res.json())
    .then(data => setIP(data))
    // console.log("====");
    //getData();
  }, []);

  return (
    <div className="relative bg-neutral-900 px-4 pb-6 pt-12 sm:px-8 sm:pb-8 sm:pt-14">
      <div className="absolute inset-x-0 -top-4 flex justify-center sm:-top-6">
        <a
          className="rounded-full bg-neutral-100 p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
          href={`/#${SectionId.Hero}`}>
          <ChevronUpIcon className="h-6 w-6 bg-transparent sm:h-8 sm:w-8" />
        </a>
      </div>
      <div className="flex flex-col items-center gap-y-6">
        <div className="flex gap-x-4 text-neutral-500">
          <Socials />
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-6 pt-5">
        <div className="flex gap-x-4 text-neutral-500">
          {geoData ? `IP: ${geoData.ip}, City: ${geoData.city}, Region: ${geoData.region}, Country: ${geoData.country_name}, UTC Offset: ${geoData.utc_offset}, Latitude: ${geoData.latitude}, Longitude: ${geoData.longitude}` : ""}
        </div>
      </div>
    </div>
  )
});

Footer.displayName = 'Footer';
export default Footer;
