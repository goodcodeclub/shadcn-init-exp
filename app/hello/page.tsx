"use client";

import { AccordionBasic } from "./accordion";
import { AlertDialogBasic } from "./alert";
import { CardImage } from "./card";

export default function Page() {
  return <>

    <div className="my-10 max-w-sm mx-auto flex flex-col gap-5">
      <CardImage />
      <AlertDialogBasic />
      <AccordionBasic />
    </div>
  </>
}