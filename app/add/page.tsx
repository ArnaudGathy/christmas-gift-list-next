"use client";

import Button from "@/components/Button";
import {
  ArrowLeftIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { routes } from "@/constants/routes";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import Input from "@/components/Input";
import { mountainsOfChristmas } from "@/constants/fonts";
import { clsx } from "clsx";

const BackButton = ({
  step,
  setStep,
  link,
}: {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  link: string;
}) => {
  const Wrapper = ({ children }: { children: ReactNode }) => {
    const classes =
      "absolute top-0 flex gap-2 items-center text-sm text-red-500 font-light";
    if (step === 1) {
      return (
        <Link href={routes.home.href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <div
        className={classes}
        onPointerDown={() =>
          setStep((previousStep) => {
            if (step === 4 && link === "") {
              return 2;
            }
            return previousStep - 1;
          })
        }
      >
        {children}
      </div>
    );
  };

  const getText = () => {
    if (step === 1) {
      return "Retour à ma liste";
    }
    return "Précédent";
  };

  return (
    <Wrapper>
      <ArrowLeftIcon className="size-5" />
      {getText()}
    </Wrapper>
  );
};

const StepForWhom = ({
  setStep,
  setTarget,
  target,
}: {
  setStep: Dispatch<SetStateAction<number>>;
  setTarget: Dispatch<SetStateAction<string>>;
  target: string;
}) => (
  <div className="flex flex-col flex-1 justify-center gap-10">
    <label
      htmlFor="target"
      className="text-white text-center text-xl font-semibold"
    >
      Ajouter pour qui ?
    </label>
    <select
      id="target"
      className={`text-center text-black h-10 rounded`}
      value={target}
      onChange={(event) => setTarget(event.target.value)}
    >
      <option value="1">Moi</option>
      <option value="2">Personne 1</option>
      <option value="3">Personne 2</option>
    </select>
    <Button className="mt-1" onClick={() => setStep(2)}>
      Suivant
    </Button>
  </div>
);

const StepHasLink = ({
  setStep,
  setLink,
}: {
  setStep: Dispatch<SetStateAction<number>>;
  setLink: Dispatch<SetStateAction<string>>;
}) => (
  <div className="flex flex-col flex-1 justify-center gap-10">
    <div className="text-white text-center text-xl font-semibold">
      As-tu un lien vers le cadeau ?
    </div>
    <Button secondary onClick={() => setStep(3)}>
      {"Oui, j'ai un lien"}
    </Button>
    <Button
      onClick={() => {
        setStep(4);
        setLink("");
      }}
    >
      {"Non, je n'ai pas de lien"}
    </Button>
  </div>
);

const StepSetLink = ({
  setStep,
  setLink,
  link,
}: {
  setStep: Dispatch<SetStateAction<number>>;
  setLink: Dispatch<SetStateAction<string>>;
  link: string;
}) => {
  const validator = (value: string) => {
    if (value === "") {
      return "Il faut donner un lien !";
    }
    if (
      // an URL matching regex
      !value.match(/(https:\/\/)(.*)/)
    ) {
      return "Le lien n'est pas valide 😢";
    }
  };

  const error = validator(link);

  return (
    <form className="flex flex-col flex-1 justify-center">
      <label
        htmlFor="target"
        className="text-white text-center text-xl font-semibold"
      >
        Lien vers le cadeau
      </label>
      <Input
        value={link}
        onChange={(event) => setLink(event.target.value)}
        type="url"
        placeholder="https://www.amazon.fr/hTdPlasOuCPt"
        error={error}
      />
      <Button className="mt-1" onClick={() => setStep(4)} disabled={!!error}>
        Suivant
      </Button>
    </form>
  );
};

const StepSetName = ({
  setStep,
  setName,
  name,
}: {
  setStep: Dispatch<SetStateAction<number>>;
  setName: Dispatch<SetStateAction<string>>;
  name: string;
}) => {
  const validator = (value: string) => {
    if (value === "") {
      return "Il faut donner un nom !";
    }
  };

  const error = validator(name);

  return (
    <form className="flex flex-col flex-1 justify-center">
      <label
        htmlFor="target"
        className="text-white text-center text-xl font-semibold"
      >
        Nom du cadeau
      </label>
      <Input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Un super gratte-dos"
        error={error}
      />
      <Button className="mt-1" onClick={() => setStep(5)} disabled={!!error}>
        Suivant
      </Button>
    </form>
  );
};

const Recap = ({
  name,
  link,
  target,
}: {
  name: string;
  link: string;
  target: string;
}) => {
  const NameElement = (
    <div className="flex gap-2 items-center text-red-500 text-lg">
      {!!link && <ArrowTopRightOnSquareIcon className="size-4" />}
      <span className={clsx("", { underline: !!link })}>{name}</span>
    </div>
  );
  return (
    <div className="flex flex-col flex-1 justify-center gap-10">
      <div className="flex flex-col gap-4 items-center p-4 rounded bg-white/75 text-black">
        <div>
          Cadeau pour
          <div
            className={`${mountainsOfChristmas.className} text-center text-2xl font-semibold text-red-500`}
          >
            {target}
          </div>
        </div>

        {!!link ? (
          <a href={link} target="_blank" rel="noreferrer" className="block">
            {NameElement}
          </a>
        ) : (
          NameElement
        )}
      </div>

      {/* TODO insert in DB + navigate home */}
      <Button className="mt-1">Ajouter</Button>
    </div>
  );
};

export default function Add() {
  const [step, setStep] = useState(1);
  const [target, setTarget] = useState("1");
  const [link, setLink] = useState("");
  const [name, setName] = useState("");

  return (
    <>
      <BackButton step={step} setStep={setStep} link={link} />
      {step === 1 && (
        <StepForWhom setStep={setStep} target={target} setTarget={setTarget} />
      )}
      {step === 2 && <StepHasLink setStep={setStep} setLink={setLink} />}
      {step === 3 && (
        <StepSetLink setStep={setStep} setLink={setLink} link={link} />
      )}
      {step === 4 && (
        <StepSetName setStep={setStep} setName={setName} name={name} />
      )}
      {step === 5 && <Recap name={name} link={link} target={target} />}
    </>
  );
}
