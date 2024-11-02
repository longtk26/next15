import Image from "next/image";
import { formTypes } from "./form.types";
import SocialLogin from "../social";

const Form = ({ type = "login" }: { type: string }) => {
  const { title, labels, forgotPass, question } = formTypes[type];

  return (
    <form className="light-border background-light800_dark200 shadow-light100_dark100 min-w-full rounded-[10px] border px-4 py-10 shadow-md sm:min-w-[520px] sm:px-8">
      <div className="flex items-center justify-between gap-2">
        <div>
          <h2 className="h2-bold text-dark100_light900">{title}</h2>
          <p className="paragraph-regular text-dark500_light400">
            to continue to DevFlow
          </p>
        </div>
        <Image
          src="images/site-logo.svg"
          alt="DevFlow Logo"
          width={50}
          height={50}
          className="object-contain"
        />
      </div>

      <section>
        {labels.map((item, index) => (
          <div key={index}>
            <label htmlFor={item.value}>{item.value}</label>
            <input type="text" id={item.value} name={item.value} />
          </div>
        ))}

        {forgotPass ? (
          <>
            <span>Forget password?</span>
          </>
        ) : (
          <></>
        )}

        <p>
          <span>{question.text}</span>
          <span>{question.action}</span>
        </p>

        <SocialLogin />
      </section>
    </form>
  );
};

export default Form;
