"use client";

import { Spinner, useToast } from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import x from '/public/social/x.png'
import substack from '/public/social/substack.png'
import linkedin from '/public/social/linkedin.png'
import Image from "next/image";

const Footer = () => {
  const toast = useToast();
  const [submitting, setSubmitting] = useState(false);

  const { handleSubmit, register, reset } = useForm<FieldValues>({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setSubmitting(true);

    await axios
      .post("/api/mailing-list", data)
      .then(() => {
        toast({
          title: "Success!",
          description:
            "You have successfully joined the health{hacks} mailing list!",
          isClosable: true,
          duration: 5000,
          status: "success",
        });
        reset();
      })
      .catch((callback) => {
        toast({
          title: callback.response.data.error,
          isClosable: true,
          duration: 5000,
          status: "error",
        });
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <div id="join" className="flex flex-col items-center justify-center text-center border-t-[0.5px] border-white border-opacity-50 pt-12 bg-hh-gray">
      <div className="font-semibold text-3xl xl:text-4xl pt-2 lg:pt-8">Join us at Discipulus</div>
      <form
        onSubmit={(e) => handleSubmit(onSubmit)(e)}
        className="flex items-center pt-6 space-x-8 "
      >
        <div className="flex flex-col text-left">
          {/* <div className="flex items-center space-x-4 sm:text-sm">
            <input
              id="email"
              disabled={submitting}
              {...register("email", { required: true })}
              placeholder="Email"
              type="text"
              className={`placeholder-white bg-black px-4 py-2 rounded-full sm-[256px] md:w-[320px] xl:w-[384px]`}
            />
            <button className="hover:cursor-pointer duration-500 hover:opacity-90 flex items-center text-black bg-white px-4 py-2  rounded-[75px] font-semibold sm:text-sm">
              {submitting ? <Spinner size="xs" /> : "Subscribe"}
            </button>
          </div> */}
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSf8Oj6KjizD6018TXnw-iNKOPrXovPEBmbCkJU5TU7kdgzZ7w/viewform" className="hover:cursor-pointer duration-500 hover:opacity-90 flex items-center text-black bg-white px-4 py-2 rounded-[75px] font-semibold sm:text-sm">
            Join us
          </a>
        </div>
      </form>
      <div className="flex justify-center w-full 2xl:w-[1200px] mt-8 sm:mt-16">
        <div className="flex flex-col items-center">
          <img
            src="/Discipulus - Logo.png"
            alt="logo"
            className="w-[150px] sm:w-[150px]"
          ></img>
          <div className='flex gap-[1rem] flex-row mb-2'>
            <a className='w-[30px] cursor-pointer' href='https://x.com/discipulusvent'> <Image src={x} alt='x' /> </a>
            <a className='w-[30px] cursor-pointer' href='https://www.linkedin.com/company/discipulus-ventures'> <Image src={linkedin} alt='linkedin' /> </a>
            <a className='w-[30px] cursor-pointer' href='http://discipulusventures.substack.com/'> <Image src={substack} alt='substack' /> </a>
          </div>
          <div className="pb-12 pt-2 text-sm">
            © 2024 Discipulus Ventures <br />
            Registered 501(c)(3). <br />
            All Rights Reserved. <br />
            <div className="mt-4" />
            {/* For PRIVATE POLICY AND TERMS OF USE */}
            {/* <Link
              rel="noopener noreferrer"
              target="_blank"
              className="opacity-50 hover:cursor-pointer duration-500 hover:opacity-100 sm:text-sm"
              href="/private-policy"
            >
              Private Policy
            </Link>
            <br />
            <Link
              rel="noopener noreferrer"
              target="_blank"
              className="opacity-50 hover:cursor-pointer duration-500 hover:opacity-100 sm:text-sm"
              href="/terms-of-use"
            >
              Terms of Use
            </Link> */}
          </div>
        </div>
        {/* <div className="flex flex-wrap justify-end gap-8 mt-8 md:p-4 p-0 w-2/5">
          <div className="cursor-pointer">
              <h1></h1>
              <a href="LINK"> <p>Explore</p> </a>
              <a href="LINK"> <p>About</p> </a>
              <a href="LINK"> <p>Register</p> </a>
            </div>
          <div className="gap-y-2">
            <h4 className="font-semibold sm:text-md md:text-base">Social</h4>
            <div className="flex flex-row flex-wrap">
              {socials.map((s, i) => (
                <div key={i} className="p-1">
                  <a href={s.href} target="_blank" rel="noreferrer">
                    <img
                      src={s.src}
                      alt={s.id}
                      className="w-8 hover:cursor-pointer sm:w-6 duration-500 hover:opacity-50 "
                    />
                  </a>
                </div>
              ))}
            </div>
            <h4 className="font-semibold text-md md:text-base mt-4">
              Contact Us
            </h4>
            <a
              className="hover:cursor-pointer opacity-50 duration-500 hover:opacity-25"
              href="mailto:info@joinhealthhacks.com"
            >
              info@discipulusventures.com
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
