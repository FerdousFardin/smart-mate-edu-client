import React from "react";
import arrow from "../../images/icon-arrow-down.svg";
// Display answer

// Main body

export const FAQ = () => {
  const displayAnswer1 = () => {
    const arrow1 = document.getElementById("arrNo1");
    const question1 = document.getElementById("qNo1");
    const answer1 = document.getElementById("aNo1");
    arrow1.classList.toggle("rotate-180");
    question1.classList.toggle("font-[700]");
    answer1.classList.toggle("hidden");
  };

  const displayAnswer3 = () => {
    const arrow3 = document.getElementById("arrNo3");
    const question3 = document.getElementById("qNo3");
    const answer3 = document.getElementById("aNo3");
    arrow3.classList.toggle("rotate-180");
    question3.classList.toggle("font-[700]");
    answer3.classList.toggle("hidden");
  };

  const displayAnswer4 = () => {
    const arrow4 = document.getElementById("arrNo4");
    const question4 = document.getElementById("qNo4");
    const answer4 = document.getElementById("aNo4");
    arrow4.classList.toggle("rotate-180");
    question4.classList.toggle("font-[700]");
    answer4.classList.toggle("hidden");
  };

  const displayAnswer5 = () => {
    const arrow5 = document.getElementById("arrNo5");
    const question5 = document.getElementById("qNo5");
    const answer5 = document.getElementById("aNo5");
    arrow5.classList.toggle("rotate-180");
    question5.classList.toggle("font-[700]");
    answer5.classList.toggle("hidden");
  };
  const QA = (props) => {
    return (
      <div className="QA">
        <h2
          id={props.qNo}
          className="pb-2 pr-2 duration-200 text-lg lg:text-xl 
            hover:text-softRed"
        >
          {props.question}
          <img
            className="float-right cursor-pointer w-5 h-5 duration-150"
            src={arrow}
            onClick={props.rotator}
            id={props.arrNo}
            alt="arrow pointing down"
          ></img>
        </h2>
        <p
          id={props.aNo}
          className="text-darkGrayishBlue duration-200 hidden text-[1rem]"
        >
          {props.answer}
        </p>
        <div className="divider"></div>
      </div>
    );
  };
  return (
    <div className="main-container p-5 lg:p-10">
      {/* <HeroImageViewer /> */}
      <div className="questions&answers duration-200">
        <h1 className="p-6 text-3xl font-bold text-center 1440:text-left">
          FAQ
        </h1>

        <QA
          question="How many team members can I invite?"
          answer="You can invite up to 2 additional users on the Free plan.
          There is no limit on team members for the Premium plan."
          qNo="qNo1"
          arrNo="arrNo1"
          aNo="aNo1"
          rotator={displayAnswer1}
        />
        <QA
          question="How do I reset my password?"
          answer="Click “Forgot password” from the login page or 
        “Change password” from your profile page. 
        A reset link will be emailed to you."
          qNo="qNo3"
          arrNo="arrNo3"
          aNo="aNo3"
          rotator={displayAnswer3}
        />
        <QA
          question="Can I cancel my subscription?"
          answer="Yes! Send us a message and we’ll process your 
        request no questions asked."
          qNo="qNo4"
          arrNo="arrNo4"
          aNo="aNo4"
          rotator={displayAnswer4}
        />
        <QA
          question="Do you provide additional support?"
          answer="Chat and email support is available 24/7. 
        Phone lines are open during normal business hours."
          qNo="qNo5"
          arrNo="arrNo5"
          aNo="aNo5"
          rotator={displayAnswer5}
        />
      </div>
    </div>
  );
};
