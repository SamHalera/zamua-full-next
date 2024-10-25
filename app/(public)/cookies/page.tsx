import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Zamua soul and folk song-writer";
  const description =
    "Zamua is an italian and burundian song-writer, singer and guitarist based in Paris. His music is a fusion between pop-folk and soul-jazz.";

  const metadata: Metadata = {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${process.env.NEXTAUTH_URL}/cookies`,
      images: [
        {
          url: `${process.env.NEXTAUTH_URL}/images/bg-home.jpg`,
          width: 800,
          height: 600,
        },
      ],
    },
  };

  return metadata;
}
const Cookiespage = () => {
  return (
    <div className="p-40 flex flex-col gap-8">
      <div className="mb-4 flex flex-col gap-6">
        <h1 className="font-bold text-5xl mb-10">COOKIES AND PRIVACY POLICY</h1>

        <div className=" flex flex-col gap-4">
          <div className=" flex flex-col gap-4">
            <h2 className="font-bold text-4xl text-primary">Cookies</h2>
            <p>
              Our website uses <strong>cookies</strong>: some small text files
              that are sent to your terminal during your visit.
            </p>
            <p>
              These text files are used to make your browsing experience on the
              site more efficient.
            </p>
            <p>
              The cookies used are "technical cookies", i.e. they are strictly
              necessary for the operation of this site. Users' prior consent is
              not required for the installation and use of technical cookies, as
              the data managed by the session or navigation cookies are used for
              the sole purpose of checking and guaranteeing the correct
              functioning of the service offered or to obtain anonymous
              statistical information on the use of the website.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-3xl">Deactivate cookies</h2>
            <p>
              The User can control his or her choices regarding the use of
              cookies generally through the settings on his or her browser,
              through which he or she can decide to make the installation of any
              type of cookie subject to his or her prior consent or to prevent
              its installation completely. You are invited to visit the section
              on cookie settings provided by your browser (Google Chrome,
              Safari, Mozilla Firefox, Internet Explorer).
            </p>
          </div>
        </div>
      </div>
      <div className=" mb-3 flex flex-col gap-4">
        <h2 className="font-bold text-4xl text-primary">Privacy POLICY</h2>

        <div className="section-content flex flex-col gap-6">
          <div className="sub-section flex flex-col gap-4">
            <h2 className="font-bold text-3xl">Introduction</h2>

            <p>
              We consider the protection and respect of your privacy to be of
              paramount importance. We are therefore committed to respecting the
              confidentiality of your personal data and to ensuring that they
              are processed ethically and in full compliance with the
              regulations in force.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-3xl">Personal data</h2>
            <p>
              We are committed to collecting only the data that are necessary in
              relation to the purpose for which they are collected (see next
              part):
            </p>
            <ul className="font-size-l mt-1 mb-2">
              <li>Firstname</li>
              <li>Lastname</li>
              <li>E-mail address</li>
              <li>Messagge sent by Contact form</li>
            </ul>

            <p>
              The data the are collected will not be subject to any
              communication to third party services.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-3xl">
              The purpose of data collection
            </h2>
            <p>
              The only purpose of the collection and use of data is the
              Communication with users via the{" "}
              <a className="font-weight-bold" href="{{path('app_contact')}}">
                {" "}
                Contact form
              </a>
            </p>
          </div>

          <div className="sflex flex-col gap-4">
            <h2 className="font-bold text-3xl">User's rights </h2>
            According to current legislation, each user has the right to access,
            update, rectify, delete and limit the use of their personal data.
            The user can exercise this right by contacting our service:
            <Link
              className="font-semibold text-primary hover:text-primary/80 duration-500"
              href="mailto:personal.data@zamuamusic.com"
            >
              {" "}
              personal.data@zamuamusic.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cookiespage;
