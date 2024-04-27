import { useEffect } from "react";
import {Button} from "../components/atoms";
import {ModalBox, Table} from "../components/molecules";
import {contactUsColumn} from "../data/tableColumn/contact-us/contactUs.column";
import PaintCreate from "../components/templates/forms/paint/create";

const ContactUs = () => {

  return (
    <>
      <div className="flex justify-end">
      </div>
      <Table
        column={contactUsColumn}
        data={[]}
        isLoading={false}
      />

    </>
  );
};
export default ContactUs;
